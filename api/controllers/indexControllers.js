const indexController = require('../models/indexModels.js');

module.exports = {
    indexControllers,
      
}


function indexControllers(req, res) {
    res.render('inicio/index_corpo.ejs',
        {
            title: 'NodeJs-Imoveis',
            titulo: 'Imóveis',
            subtitulo: 'Projeto CRUD - Nodejs - Express - Mysql - Javascript',
            moradorproprietario: 'moradorproprietario',
            apartamentos: 'apartamentos'
           

        });
}


  