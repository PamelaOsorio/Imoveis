const mysql = require("mysql");
var database = 'dados211d';

// instanciar objeto de acesso ao banco de dados 'dados211d'
var conexao = mysql.createConnection({
    user:"root",
    password: "",
    host: "localhost",
    port: 3306
});

conexao.connect((err) => {
    if(err) {
        console.log("Erro ao conectar ao Banco de Dados!", err);
        return
    }
    console.log("\nConexão estabelecida com sucesso!!!\n");
})
 
conexao.query('USE ' + database);

console.log('\nBanco de dados '+  database.toUpperCase())

module.exports = conexao;


