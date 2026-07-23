
const prisma = require('../config/prisma');

const teamMemberController = {
  async getAll(req, res) {
    try {
      const teamMembers = await prisma.teamMember.findMany({ include: { company: true } });
      res.json(teamMembers);
    } catch (error) {
      res.status(500).json({ message: 'Erro interno do servidor', error: error.message });
    }
  },
  async getById(req, res) {
    try {
      const { id } = req.params;
      const teamMember = await prisma.teamMember.findUnique({
        where: { id: parseInt(id) },
        include: { company: true }
      });
      if (!teamMember) return res.status(404).json({ message: 'Membro da equipe não encontrado' });
      res.json(teamMember);
    } catch (error) {
      res.status(500).json({ message: 'Erro interno do servidor', error: error.message });
    }
  },
  async create(req, res) {
    try {
      const teamMember = await prisma.teamMember.create({
        data: req.body,
        include: { company: true }
      });
      res.status(201).json(teamMember);
    } catch (error) {
      res.status(500).json({ message: 'Erro interno do servidor', error: error.message });
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params;
      const teamMember = await prisma.teamMember.update({
        where: { id: parseInt(id) },
        data: req.body,
        include: { company: true }
      });
      res.json(teamMember);
    } catch (error) {
      res.status(500).json({ message: 'Erro interno do servidor', error: error.message });
    }
  },
  async delete(req, res) {
    try {
      const { id } = req.params;
      await prisma.teamMember.delete({ where: { id: parseInt(id) } });
      res.json({ message: 'Membro da equipe deletado com sucesso' });
    } catch (error) {
      res.status(500).json({ message: 'Erro interno do servidor', error: error.message });
    }
  }
};

module.exports = teamMemberController;
