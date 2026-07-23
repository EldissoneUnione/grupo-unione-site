
const prisma = require('../config/prisma');

const highlightController = {
  async getAll(req, res) {
    try {
      const highlights = await prisma.highlight.findMany({ orderBy: { ordem: 'asc' } });
      res.json(highlights);
    } catch (error) {
      res.status(500).json({ message: 'Erro interno do servidor', error: error.message });
    }
  },
  async getById(req, res) {
    try {
      const { id } = req.params;
      const highlight = await prisma.highlight.findUnique({ where: { id: parseInt(id) } });
      if (!highlight) return res.status(404).json({ message: 'Destaque não encontrado' });
      res.json(highlight);
    } catch (error) {
      res.status(500).json({ message: 'Erro interno do servidor', error: error.message });
    }
  },
  async create(req, res) {
    try {
      const highlight = await prisma.highlight.create({ data: req.body });
      res.status(201).json(highlight);
    } catch (error) {
      res.status(500).json({ message: 'Erro interno do servidor', error: error.message });
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params;
      const highlight = await prisma.highlight.update({
        where: { id: parseInt(id) },
        data: req.body,
      });
      res.json(highlight);
    } catch (error) {
      res.status(500).json({ message: 'Erro interno do servidor', error: error.message });
    }
  },
  async delete(req, res) {
    try {
      const { id } = req.params;
      await prisma.highlight.delete({ where: { id: parseInt(id) } });
      res.json({ message: 'Destaque deletado com sucesso' });
    } catch (error) {
      res.status(500).json({ message: 'Erro interno do servidor', error: error.message });
    }
  }
};

module.exports = highlightController;
