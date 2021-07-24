const moradoresproprietariosController = require("../models/moradoresproprietariosModels.js");

module.exports = {

    moradoresproprietariosGetAll,
    moradoresproprietariosGetById,
    moradoresproprietariosGravar,
    moradoresproprietariosNew,
    moradoresproprietariosFiltrar,
      
             
}
    
function moradoresproprietariosGetAll(req, res) {
    console.log("Listar moradores proprietarios {M O D E L}");
    moradoresproprietariosController.getAllMoradoresProprietarios(function (err, resultado){
        console.log("Moradores proprietarios {M O D E L}", resultado);
        if(err) {
            throw err;
        } else {
            res.render('moradoresproprietarios/moradoresproprietarios_corpo.ejs', {
                title: 'NodeJs-Imoveis',
                obj_moradorproprietario: resultado
            });
        }

    })
//    res.send("Rota autores encontrada");
}


function moradoresproprietariosGetById(req, res) {
    var id = req.params.codigo;
    console.log("Parametro esperado: "+id);
    moradoresproprietariosController.getByIdMoradoresProprietarios(id, function(err, resultado){
        console.log("Retorno Autores { MODEL }\n", resultado);
        if(err) {
            throw err;
        } else {
            res.render('moradoresproprietarios/moradoresproprietarios_edit.ejs', {
                title: 'NodeJs-Imoveis',
                obj_moradorproprietario: resultado,
                caminho: req.originalUrl
            });
//            res.send("Rota autores encontrada");
        
}
});
}

function moradoresproprietariosGravar(req, res) {
    const dados = req.body;
    console.log("Gravando Moradores proprietarios");
    console.log(req.body);
    if(dados.mor_codigo == "") {
        console.log("Inserindo Novo Registro de Moradores proprietarios!");
        dados.mor_codigo = null;
        moradoresproprietariosController.gravarMoradoresProprietarios(dados, function(err, resultado){
            if(err){
                throw err
            } else {
                res.redirect("/moradoresproprietarios/listar");
            }
        })
    } else {
        console.log("Alterando moradores proprietarios! ",dados.mor_codigo);
        moradoresproprietariosController.alterarMoradoresProprietarios(dados, function (err, resultado){
            if(err){
                throw err
            } else {
                res.redirect("/moradoresproprietarios/listar");
            }
        })
    }
}


function moradoresproprietariosNew(req, res){
    var dados = [
        {

        }
    ];
    res.render('moradoresproprietarios/moradoresproprietarios_edit.ejs', {
        title: 'NodeJs-Imoveis',
        obj_moradorproprietario: dados,
        caminho: req.originalUrl
    });


}



function moradoresproprietariosFiltrar(req, res) {

    console.log("Entranto na função para filtrar registros de moradores {C O N T R O L L E R S}\n");

    cod_i = req.body.cod_ini;
    cod_f = req.body.cod_fim;

    console.log("Dados: \n" + cod_i + " - " + cod_f);

    moradoresproprietariosController.filtrarMoradoresProprietarios(
        cod_i, cod_f,
        function(err, resultado) {
            console.log("Retorno da Consulta:\n "+resultado);
            if(err){
                throw err
            } else {
                res.render('moradoresproprietarios/moradoresproprietarios_corpo.ejs', {
                    title: 'NodeJs-Imoveis',
                    obj_moradorproprietario: resultado,
                    caminho: req.originalUrl
                });
            }
        }
    ) 
}
