
const app = require('./src/app');
const { PORT } = require('./src/config/env');
const prisma = require('./src/config/prisma');

async function startServer() {
  try {
    await prisma.$connect();
    console.log('Connected to database');

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

startServer();
