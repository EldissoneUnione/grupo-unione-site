
const prisma = require('../config/prisma');

const projectController = {
  async getAll(req, res) {
    try {
      const projects = await prisma.project.findMany({ include: { company: true } });
      res.json(projects);
    } catch (error) {
      res.status(500).json({ message: 'Erro interno do servidor', error: error.message });
    }
  },
  async getById(req, res) {
    try {
      const { id } = req.params;
      const project = await prisma.project.findUnique({
        where: { id: parseInt(id) },
        include: { company: true }
      });
      if (!project) return res.status(404).json({ message: 'Projeto não encontrado' });
      res.json(project);
    } catch (error) {
      res.status(500).json({ message: 'Erro interno do servidor', error: error.message });
    }
  },
  async create(req, res) {
    try {
      const project = await prisma.project.create({
        data: req.body,
        include: { company: true }
      });
      res.status(201).json(project);
    } catch (error) {
      res.status(500).json({ message: 'Erro interno do servidor', error: error.message });
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params;
      const project = await prisma.project.update({
        where: { id: parseInt(id) },
        data: req.body,
        include: { company: true }
      });
      res.json(project);
    } catch (error) {
      res.status(500).json({ message: 'Erro interno do servidor', error: error.message });
    }
  },
  async delete(req, res) {
    try {
      const { id } = req.params;
      await prisma.project.delete({ where: { id: parseInt(id) } });
      res.json({ message: 'Projeto deletado com sucesso' });
    } catch (error) {
      res.status(500).json({ message: 'Erro interno do servidor', error: error.message });
    }
  }
};

module.exports = projectController;
