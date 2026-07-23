
const prisma = require('../config/prisma');

const investorController = {
  async getAll(req, res) {
    try {
      const investors = await prisma.investor.findMany({ orderBy: { createdAt: 'desc' } });
      res.json(investors);
    } catch (error) {
      res.status(500).json({ message: 'Erro interno do servidor', error: error.message });
    }
  },
  async getById(req, res) {
    try {
      const { id } = req.params;
      const investor = await prisma.investor.findUnique({ where: { id: parseInt(id) } });
      if (!investor) return res.status(404).json({ message: 'Investidor não encontrado' });
      res.json(investor);
    } catch (error) {
      res.status(500).json({ message: 'Erro interno do servidor', error: error.message });
    }
  },
  async create(req, res) {
    try {
      const investor = await prisma.investor.create({ data: req.body });
      res.status(201).json(investor);
    } catch (error) {
      res.status(500).json({ message: 'Erro interno do servidor', error: error.message });
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params;
      const investor = await prisma.investor.update({
        where: { id: parseInt(id) },
        data: req.body,
      });
      res.json(investor);
    } catch (error) {
      res.status(500).json({ message: 'Erro interno do servidor', error: error.message });
    }
  },
  async delete(req, res) {
    try {
      const { id } = req.params;
      await prisma.investor.delete({ where: { id: parseInt(id) } });
      res.json({ message: 'Investidor deletado com sucesso' });
    } catch (error) {
      res.status(500).json({ message: 'Erro interno do servidor', error: error.message });
    }
  }
};

module.exports = investorController;
