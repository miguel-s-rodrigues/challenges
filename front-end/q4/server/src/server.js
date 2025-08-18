import Hapi from '@hapi/hapi';
import Inert from '@hapi/inert';
import routes from './routes/index.js';

const server = Hapi.server({
  host: '127.0.0.1',
  port: 3000,
  routes: { 
    cors: {
      origin: ['*']
    }
  }
});

const startServer = async () => {
  await server.register(Inert);

  routes.forEach((route) => {
    server.route(route);
  });

  try {
    await server.start();
    console.log(`Server started at ${server.info.uri}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

process.on('unhandledRejection', (err) => {
  console.error(err);
  process.exit(1);
});

startServer();
