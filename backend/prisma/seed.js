
const { PrismaClient } = require('../src/generated/prisma-client');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  // Clear existing data
  await prisma.banner.deleteMany({});
  await prisma.company.deleteMany({});
  await prisma.user.deleteMany({});

  const hashedPassword = await bcrypt.hash('GPUnione2020', 10);

  await prisma.user.create({
    data: {
      username: 'admin',
      email: 'admin@grupounione.com',
      password: hashedPassword,
      role: 'ADMIN',
    },
  });

  await prisma.company.createMany({
    data: [
      {
        nome: 'Unione Construções',
        descricao: 'Empresa especializada em engenharia civil',
        status: true
      },
      {
        nome: 'Unione Agro',
        descricao: 'Focada em agronegócio sustentável',
        status: true
      },
      {
        nome: 'Unione Tech',
        descricao: 'Desenvolvimento de soluções tecnológicas',
        status: true
      }
    ]
  });

  await prisma.banner.createMany({
    data: [
      { titulo: 'Banner Principal', imagem: '/uploads/banner1.jpg', ativo: true, ordem: 1 },
      { titulo: 'Banner Secundário', imagem: '/uploads/banner2.jpg', ativo: true, ordem: 2 }
    ]
  });

  console.log('Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error('Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

