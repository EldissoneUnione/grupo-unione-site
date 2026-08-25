const prisma = require('../config/prisma');

const NEWS_LIST_SELECT = {
  id: true,
  titulo: true,
  slug: true,
  resumo: true,
  imagem: true,
  status: true,
  agendadoPara: true,
  dataPublicacao: true,
  createdAt: true,
  updatedAt: true,
};

const newsController = {
  async getAll(req, res) {
    try {
      const isAdmin = req.headers['x-admin-request'] === 'true' || req.query.admin === 'true';

      const whereClause = isAdmin ? {} : {
        OR: [
          { status: 'publicada' },
          {
            status: 'agendada',
            agendadoPara: { lte: new Date() }
          }
        ]
      };

      // A listagem não envia blocos/conteúdo: as imagens em base64
      // nessa coluna tornam o JSON enorme e o painel demora minutos.
      const news = await prisma.news.findMany({
        where: whereClause,
        select: NEWS_LIST_SELECT,
        orderBy: { dataPublicacao: 'desc' }
      });
      res.json(news);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro interno do servidor', error: error.message });
    }
  },
  async getById(req, res) {
    try {
      const { id } = req.params;
      const newsItem = await prisma.news.findUnique({
        where: { id: parseInt(id) },
      });
      if (!newsItem) return res.status(404).json({ message: 'Notícia não encontrada' });
      res.json(newsItem);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro interno do servidor', error: error.message });
    }
  },
  async create(req, res) {
    try {
      const { categories, tags, agendadoPara, ...data } = req.body;
      
      // Handle scheduling date
      const createData = { ...data };
      if (agendadoPara) createData.agendadoPara = new Date(agendadoPara);
      if (data.status === 'agendada' && agendadoPara) {
        createData.dataPublicacao = new Date(agendadoPara);
      }

      const newsItem = await prisma.news.create({ data: createData });
      res.status(201).json(newsItem);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro interno do servidor', error: error.message });
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params;
      const { categories, tags, agendadoPara, ...data } = req.body;
      
      const updateData = { ...data };
      if (agendadoPara) updateData.agendadoPara = new Date(agendadoPara);
      if (data.status === 'agendada' && agendadoPara) {
        updateData.dataPublicacao = new Date(agendadoPara);
      }

      const newsItem = await prisma.news.update({
        where: { id: parseInt(id) },
        data: updateData
      });
      res.json(newsItem);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro interno do servidor', error: error.message });
    }
  },
  async delete(req, res) {
    try {
      const { id } = req.params;
      await prisma.news.delete({ where: { id: parseInt(id) } });
      res.json({ message: 'Notícia deletada com sucesso' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro interno do servidor', error: error.message });
    }
  }
};

module.exports = newsController;
