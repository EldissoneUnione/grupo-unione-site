
const prisma = require('../config/prisma');

const partnerController = {
  async getAll(req, res) {
    try {
      const partners = await prisma.partner.findMany({ orderBy: { createdAt: 'desc' } });
      res.json(partners);
    } catch (error) {
      res.status(500).json({ message: 'Erro interno do servidor', error: error.message });
    }
  },
  async getById(req, res) {
    try {
      const { id } = req.params;
      const partner = await prisma.partner.findUnique({ where: { id: parseInt(id) } });
      if (!partner) return res.status(404).json({ message: 'Parceiro não encontrado' });
      res.json(partner);
    } catch (error) {
      res.status(500).json({ message: 'Erro interno do servidor', error: error.message });
    }
  },
  async create(req, res) {
    try {
      const partner = await prisma.partner.create({ data: req.body });
      res.status(201).json(partner);
    } catch (error) {
      res.status(500).json({ message: 'Erro interno do servidor', error: error.message });
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params;
      const partner = await prisma.partner.update({
        where: { id: parseInt(id) },
        data: req.body,
      });
      res.json(partner);
    } catch (error) {
      res.status(500).json({ message: 'Erro interno do servidor', error: error.message });
    }
  },
  async delete(req, res) {
    try {
      const { id } = req.params;
      await prisma.partner.delete({ where: { id: parseInt(id) } });
      res.json({ message: 'Parceiro deletado com sucesso' });
    } catch (error) {
      res.status(500).json({ message: 'Erro interno do servidor', error: error.message });
    }
  }
};

module.exports = partnerController;
