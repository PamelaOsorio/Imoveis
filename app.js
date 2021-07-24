const http = require('http');
const server = require('./config/server.js');

http.createServer(server).listen(server.get('port'), function() {
    console.log('Aplicação rodando na porta ' + app.get('port'))
});
