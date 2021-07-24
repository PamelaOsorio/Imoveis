const controllerApartamentos = require('../controllers/apartamentosControllers.js');

app.get('/apartamentos/listar', controllerApartamentos.apartamentosGetAll);

app.get('/apartamentos/editar/:codigo', controllerApartamentos.apartamentosGetById);

app.post('/apartamentos/gravar', controllerApartamentos.apartamentosGravar);

app.get('/apartamentos/novo', controllerApartamentos.apartamentosNew);

app.get('/apartamentos/ativoInativo/:codigo', controllerApartamentos.apartamentosActiveAi);

app.post('/apartamentos/filtrar', controllerApartamentos.apartamentosFiltrar);
                        