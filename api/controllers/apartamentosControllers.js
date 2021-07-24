const apartamentosController = require("../models/apartamentosModels.js");
const moradoresproprietariosController = require("../models/moradoresproprietariosModels.js");



module.exports = {
    apartamentosGetAll,
    apartamentosGetById,
    apartamentosGravar,
    apartamentosNew,
    apartamentosActiveAi,
    apartamentosFiltrar

}

function apartamentosGetAll(req, res) {

    console.log("Listar apartamentos {M O D E L}");
    apartamentosController.getAllApartamentos(function (err, resultado) {
        console.log("apartamentos {M O D E L}", resultado);
        if (err) {
            throw err;
        } else {
            res.render('apartamentos/apartamentos_corpo.ejs', {
                title: 'NodeJs-Imoveis',
                obj_apartamentos: resultado
            });
        }

    })

    //    res.send("Rota livros encontrada");

}



function apartamentosGetById(req, res) {
    var id = req.params.codigo;
    console.log("Parametro esperado: " + id);

    apartamentosController.getByIdApartamentos(id, function (err, resultado) {
        console.log("Retorno Apartamentos { MODEL }\n", resultado);
        if (err) {
            throw err;
        } else {
            moradoresproprietariosController.getAllMoradoresProprietarios(function (err, result_moradorproprietario) {
                console.log("Retorno  Moradores proprietarios em Apartamentos { MODEL }\n", result_moradorproprietario);
                if (err) {
                    throw err;
                } else {
                    
                            res.render('apartamentos/apartamentos_edit.ejs',
                                {
                                    title: 'NodeJs-Imoveis',
                                    obj_apartamentos: resultado,
                                    obj_moradorproprietario: result_moradorproprietario,
                                    caminho: req.originalUrl

                                });
                        }
                    });
                }
            });
        }
    

function apartamentosGravar(req, res) {
    const dados = req.body;
    console.log("Gravando apartamentos");
    console.log(req.body);
    if (dados.apt_codigo == "") {
        console.log("Inserindo Novo Registro de apartamentos!");
        dados.apt_codigo = null;
        apartamentosController.gravarApartamentos(dados, function (err, resultado) {
            if (err) {
                throw err
            } else {
                res.redirect("/apartamentos/listar");
            }
        })
    } else {
        console.log("Alterando apartamentos! ", dados.apt_codigo);
        apartamentosController.alterarApartamentos(dados, function (err, resultado) {
            if (err) {
                throw err
            } else {
                res.redirect("/apartamentos/listar");
            }
        })
    }
}

 

function apartamentosNew(req, res) {
    var dados = [
        {

        }
    ];

    moradoresproprietariosController.getAllMoradoresProprietarios(function (err, result_moradorproprietario) {
        console.log("Retorno moradores proprietarios em Apartamentos { MODEL }\n", result_moradorproprietario);
        if (err) {
            throw err;
        } else {
            
                    res.render('apartamentos/apartamentos_edit.ejs',
                        {
                            title: 'NodeJs-Imoveis',
                            obj_apartamentos: dados,
                            obj_moradorproprietario: result_moradorproprietario,
                            caminho: req.originalUrl

                        });
                }
            });
        }


        function apartamentosActiveAi(req, res){
            var id = req.params.codigo;
            var p_ativar = "";
            console.log("Código Apartamento a Ativa/Inativar: ", id);
            apartamentosController.getByIdApartamentos(id, function(err, result){
                console.log("A/I: ", result[0].apt_inativarativar);
                p_ativar = result[0].apt_inativarativar;
                
                if (err) {
                    throw err;
                } else{
                    if(p_ativar == "A"){
                        p_ativar = "I"
                    }else{
                        p_ativar = "A";
                    }
                }
                console.log("I/A: ", p_ativar);
        
                apartamentosController.inativarApartamentos(id, p_ativar, function(err, result){
                    if (err){
                        console.log("Erro Verifique!!!");
                        throw err;                        
                    }
                        console.log("Passou!");
            
                   res.redirect('/apartamentos/listar');
            
                });
            })
        
        }
        
        
function apartamentosFiltrar(req, res) {

    console.log("Entranto na função para filtrar registros de Apartamentos {C O N T R O L L E R S}\n");

   
    atv_i = req.body.atv_ini;
    atv_f = req.body.atv_fim;

  


    apartamentosController.filtrarApartamentos(
      
        atv_i, atv_f,
      
        function(err, resultado) {
            console.log("Retorno da Consulta:\n "+resultado);
            if(err){
                throw err
            } else {
                res.render('apartamentos/apartamentos_corpo.ejs', {
                    title: 'NodeJs-Livros',
                    obj_apartamentos: resultado,
                    caminho: req.originalUrl
                });
            }
        }
    ) 
}


