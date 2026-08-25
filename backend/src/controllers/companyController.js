
const prisma = require('../config/prisma');

const companyController = {
  async getAll(req, res) {
    try {
      const companies = await prisma.company.findMany({
        orderBy: { nome: 'asc' },
      });
      res.json(companies);
    } catch (error) {
      res.status(500).json({ message: 'Erro interno do servidor', error: error.message });
    }
  },

  async getById(req, res) {
    try {
      const { id } = req.params;
      const company = await prisma.company.findUnique({
        where: { id: parseInt(id) },
        include: { projects: true, teamMembers: true },
      });
      if (!company) {
        return res.status(404).json({ message: 'Empresa não encontrada' });
      }
      res.json(company);
    } catch (error) {
      res.status(500).json({ message: 'Erro interno do servidor', error: error.message });
    }
  },

  async create(req, res) {
    try {
      const company = await prisma.company.create({ data: req.body });
      res.status(201).json(company);
    } catch (error) {
      res.status(500).json({ message: 'Erro interno do servidor', error: error.message });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const company = await prisma.company.update({
        where: { id: parseInt(id) },
        data: req.body,
      });
      res.json(company);
    } catch (error) {
      res.status(500).json({ message: 'Erro interno do servidor', error: error.message });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      await prisma.company.delete({ where: { id: parseInt(id) } });
      res.json({ message: 'Empresa deletada com sucesso' });
    } catch (error) {
      res.status(500).json({ message: 'Erro interno do servidor', error: error.message });
    }
  },
};

module.exports = companyController;
