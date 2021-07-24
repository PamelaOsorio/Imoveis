
const conexao = require("../../config/conexao.js");

module.exports = {
    getAllMoradoresProprietarios,
    getByIdMoradoresProprietarios,
    gravarMoradoresProprietarios,
    alterarMoradoresProprietarios,
    filtrarMoradoresProprietarios
  
           
}


function getAllMoradoresProprietarios(callback) {
    conexao.query('select A.* from moradorproprietario A', callback);
}


function getByIdMoradoresProprietarios(id, callback){

    conexao.query('select * FROM moradorproprietario WHERE mor_codigo = ' + id, callback);

}


function gravarMoradoresProprietarios(dados, callback) {
    var msql = "insert into moradorproprietario set ? ";
    conexao.query(msql, dados, callback);

}

function alterarMoradoresProprietarios(dados, callback) {
    console.log("Executando SQL de Moradores proprietarios...");
    console.log(dados);

    var msql = "update moradorproprietario set mor_nome = '" + dados.mor_nome +

        "' , mor_apelido = '" + dados.mor_apelido +
        "' , mor_celular = '" + dados.mor_celular +
        "' , mor_cpf ='" + dados.mor_cpf + 

        "' where mor_codigo = '" + dados.mor_codigo + "'";

        conexao.query(msql, callback);
}



function filtrarMoradoresProprietarios
(
    pcod_i, pcod_f, callback)
     {

        const m_sql = 'select * from moradorproprietario where ' + 
            'mor_codigo >= ' + pcod_i + ' && ' + 'mor_codigo <= ' + pcod_f + ' ' ;
           
        console.log(m_sql + "\n");

        conexao.query(m_sql, callback);

}
 




 


