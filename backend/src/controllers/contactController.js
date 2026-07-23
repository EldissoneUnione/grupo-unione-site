
const prisma = require('../config/prisma');

const contactController = {
  async getAll(req, res) {
    try {
      const contacts = await prisma.contact.findMany({ orderBy: { createdAt: 'desc' } });
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ message: 'Erro interno do servidor', error: error.message });
    }
  },
  async getById(req, res) {
    try {
      const { id } = req.params;
      const contact = await prisma.contact.findUnique({ where: { id: parseInt(id) } });
      if (!contact) return res.status(404).json({ message: 'Contato não encontrado' });
      res.json(contact);
    } catch (error) {
      res.status(500).json({ message: 'Erro interno do servidor', error: error.message });
    }
  },
  async create(req, res) {
    try {
      const contact = await prisma.contact.create({ data: req.body });
      res.status(201).json(contact);
    } catch (error) {
      res.status(500).json({ message: 'Erro interno do servidor', error: error.message });
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params;
      const contact = await prisma.contact.update({
        where: { id: parseInt(id) },
        data: { lido: req.body.lido },
      });
      res.json(contact);
    } catch (error) {
      res.status(500).json({ message: 'Erro interno do servidor', error: error.message });
    }
  },
  async delete(req, res) {
    try {
      const { id } = req.params;
      await prisma.contact.delete({ where: { id: parseInt(id) } });
      res.json({ message: 'Contato deletado com sucesso' });
    } catch (error) {
      res.status(500).json({ message: 'Erro interno do servidor', error: error.message });
    }
  }
};

module.exports = contactController;
