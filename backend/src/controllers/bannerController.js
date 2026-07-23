
const prisma = require('../config/prisma');

const bannerController = {
  async getAll(req, res) {
    try {
      const banners = await prisma.banner.findMany({ orderBy: { ordem: 'asc' } });
      res.json(banners);
    } catch (error) {
      res.status(500).json({ message: 'Erro interno do servidor', error: error.message });
    }
  },
  async getById(req, res) {
    try {
      const { id } = req.params;
      const banner = await prisma.banner.findUnique({ where: { id: parseInt(id) } });
      if (!banner) return res.status(404).json({ message: 'Banner não encontrado' });
      res.json(banner);
    } catch (error) {
      res.status(500).json({ message: 'Erro interno do servidor', error: error.message });
    }
  },
  async create(req, res) {
    try {
      const banner = await prisma.banner.create({ data: req.body });
      res.status(201).json(banner);
    } catch (error) {
      res.status(500).json({ message: 'Erro interno do servidor', error: error.message });
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params;
      const banner = await prisma.banner.update({
        where: { id: parseInt(id) },
        data: req.body,
      });
      res.json(banner);
    } catch (error) {
      res.status(500).json({ message: 'Erro interno do servidor', error: error.message });
    }
  },
  async delete(req, res) {
    try {
      const { id } = req.params;
      await prisma.banner.delete({ where: { id: parseInt(id) } });
      res.json({ message: 'Banner deletado com sucesso' });
    } catch (error) {
      res.status(500).json({ message: 'Erro interno do servidor', error: error.message });
    }
  }
};

module.exports = bannerController;
