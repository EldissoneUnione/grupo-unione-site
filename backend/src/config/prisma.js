
const { PrismaClient } = require('../generated/prisma-client');
require('dotenv').config();

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
});

module.exports = prisma;
