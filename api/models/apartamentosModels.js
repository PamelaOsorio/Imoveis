const conexao = require("../../config/conexao.js");

module.exports = {
    getAllApartamentos,
    getByIdApartamentos,
    gravarApartamentos,
    alterarApartamentos,
    filtrarApartamentos,
    inativarApartamentos
    
   
           
}


function getAllApartamentos(callback) {
    conexao.query('select A.*, B.mor_nome from apartamento A left join moradorproprietario B on A.mor_codigo = B.mor_codigo ', callback);    

}


function getByIdApartamentos(id, callback){

    conexao.query('select A.*, B.mor_nome from apartamento A left join moradorproprietario B on A.mor_codigo = B.mor_codigo WHERE apt_codigo = ' + id, callback);    

}


function gravarApartamentos(dados, callback) {
    var msql = "insert into apartamento set ? ";
    conexao.query(msql, dados, callback);

}

function alterarApartamentos(dados, callback) {
    console.log("Executando SQL de Apartamento...");
    console.log(dados);

    var msql = "update apartamento set apt_inativarativar = '" + dados.apt_inativarativar +

        "' ,apt_edificio = '" + dados.apt_edificio +

        "' , apt_numero = '" + dados.apt_numero +
        "' , apt_andar = '" + dados.apt_andar +
        "' , apt_quartos ='" + dados.apt_quartos + 
        "' , mor_codigo = '" + dados.mor_codigo +

        "' where apt_codigo = '" + dados.apt_codigo + "'";

        conexao.query(msql, callback);
}

function filtrarApartamentos
(
    
    patv_i, patv_f, callback) {

        const m_sql = 'select * from apartamento where ' + 
            'apt_inativarativar >= \'' + patv_i + '\'' + ' && ' + 'apt_inativarativar <= \'' + patv_f + '\'' 

        console.log(m_sql + "\n");

        conexao.query(m_sql, callback);

}

function inativarApartamentos(id, ativo, callback){
    console.log("Apartamento Ativando/Inativando ", id + " - " + ativo);
    const msql = "UPDATE apartamento SET apt_inativarativar = '" + ativo + "' WHERE apt_codigo = '" + id + "'";

    conexao.query(msql, function(err, result){

        conexao.query(msql, callback);
    });
    
    console.log("Estou Ativando/Desativanto Apartamento { M O D E L }");

}