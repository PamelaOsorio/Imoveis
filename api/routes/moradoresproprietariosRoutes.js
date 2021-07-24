const controllerMoradoresProprietarios = require('../controllers/moradoresproprietariosControllers.js');

app.get('/moradoresproprietarios/listar', controllerMoradoresProprietarios.moradoresproprietariosGetAll);

app.get('/moradoresproprietarios/editar/:codigo', controllerMoradoresProprietarios.moradoresproprietariosGetById);

app.post('/moradoresproprietarios/gravar', controllerMoradoresProprietarios.moradoresproprietariosGravar);

app.get('/moradoresproprietarios/novo', controllerMoradoresProprietarios.moradoresproprietariosNew);

app.post('/moradoresproprietarios/filtrar', controllerMoradoresProprietarios.moradoresproprietariosFiltrar);
