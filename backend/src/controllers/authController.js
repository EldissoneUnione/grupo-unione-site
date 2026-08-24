
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const prisma = require('../config/prisma');
const { JWT_SECRET, JWT_EXPIRES_IN } = require('../config/env');

const SALT_ROUNDS = 10;
const MIN_PASSWORD_LENGTH = 8;

const authController = {
  async login(req, res) {
    try {
      const { username, password } = req.body;
      const user = await prisma.user.findUnique({ where: { username } });

      if (!user) {
        return res.status(401).json({ message: 'Credenciais inválidas' });
      }

      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ message: 'Credenciais inválidas' });
      }

      const token = jwt.sign(
        { id: user.id, username: user.username, role: user.role },
        JWT_SECRET,
        { expiresIn: JWT_EXPIRES_IN }
      );

      res.json({
        token,
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          role: user.role,
        },
      });
    } catch (error) {
      res.status(500).json({ message: 'Erro interno do servidor', error: error.message });
    }
  },

  async getProfile(req, res) {
    try {
      const user = await prisma.user.findUnique({
        where: { id: req.user.id },
        select: { id: true, username: true, email: true, role: true, createdAt: true },
      });
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: 'Erro interno do servidor', error: error.message });
    }
  },

  async changePassword(req, res) {
    try {
      const { currentPassword, newPassword } = req.body;

      if (!currentPassword || !newPassword) {
        return res
          .status(400)
          .json({ message: 'A palavra-passe atual e a nova palavra-passe são obrigatórias' });
      }

      if (newPassword.length < MIN_PASSWORD_LENGTH) {
        return res.status(400).json({
          message: `A nova palavra-passe deve ter no mínimo ${MIN_PASSWORD_LENGTH} caracteres`,
        });
      }

      if (currentPassword === newPassword) {
        return res
          .status(400)
          .json({ message: 'A nova palavra-passe deve ser diferente da atual' });
      }

      const user = await prisma.user.findUnique({ where: { id: req.user.id } });
      if (!user) {
        return res.status(404).json({ message: 'Utilizador não encontrado' });
      }

      const passwordMatch = await bcrypt.compare(currentPassword, user.password);
      if (!passwordMatch) {
        // Estado 400 em vez de 401: o cliente admin termina a sessão em qualquer 401.
        return res.status(400).json({ message: 'A palavra-passe atual está incorreta' });
      }

      const hashedPassword = await bcrypt.hash(newPassword, SALT_ROUNDS);
      await prisma.user.update({
        where: { id: user.id },
        data: { password: hashedPassword },
      });

      res.json({ message: 'Palavra-passe alterada com sucesso' });
    } catch (error) {
      res.status(500).json({ message: 'Erro interno do servidor', error: error.message });
    }
  },
};

module.exports = authController;
