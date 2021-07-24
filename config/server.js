/*
* criar objetos básicos
*/
const express = require('express');
const consign = require('consign');
const path = require('path');

const ejs = require('ejs');
const body = require('body-parser');

app = express();

// configurando recursos para tratamento json
app.use(body.urlencoded({extended:true}));
app.use(body.json());
  
// configurando diretorio das views
app.set('views', path.join(__dirname, '../api/views'));
app.set('view engine', 'ejs');

app.use('/static', express.static(__dirname + '/public'));
app.use(express.static('public'));
app.use(express.static('estilos'));
app.use(express.static('imagens'));
app.use(express.static('js'));
 
// configurando a porta HTTP
app.set('port', 3000);

consign({ cwd:  'api' })
  .include('models')
  .then('controllers')
  .then('routes')
  .into(app)
;

module.exports = app;
  