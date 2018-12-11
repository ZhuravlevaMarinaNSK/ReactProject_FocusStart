const http = require('http');
const app = require('./src/server/core/core');

app.set('port', process.env.PORT || '3000');
const server = http.createServer(app);
server.listen(app.get('port'));

server.on('error', (error) => {
  if (error.syscall !== 'listen') {
    throw error;
  }

  switch (error.code) {
    case 'EACCES':
      console.error(`Port ${app.get('port')} requires elevated privileges`);
      process.exit(1);
      break;

    case 'EADDRINUSE':
      console.error(`Port ${app.get('port')} is already in use`);
      process.exit(1);
      break;

    default:
      throw error;
  }
});

server.on('listening', () => {
  const addr = server.address();
  console.log(`Listening on port ${addr.port || addr}`);
});