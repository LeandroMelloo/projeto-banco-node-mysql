const mysql = require('mysql2/promise')
const bluebird = require('bluebird')

const consultaConexao = async (host, database, password, user) => {
    host = '127.0.0.1'
    database = 'projeto_banco'
    password = 'admin'
    user = 'root'

    if (!host || !database) throw new error('Host ou Database não informado!')

    const configuracaoConexao = {
        host,
        user,
        password,
        database,
        Promise: bluebird
    }

    if (configuracaoConexao) {
        console.log('Conexao efetuada com sucesso!')
        const conexao = await mysql.createConnection(configuracaoConexao)
        return conexao
    } else {
        console.error('Ocorreu um erro na conexão!')
    }
}

module.exports = { consultaConexao }