const redis = require('redis')
const cliente = redis.createClient()

cliente.on('connect', function () {
    console.log('conectado')
})

cliente.set('total', '1800')

cliente.get('total', (err, total) => {
    if (err) throw new error('Erro ao consultar o total')
    console.log(total)
})

cliente.hmset('dados', 'nome', 'Leandro', 'idade', 35, 'sexo', 'masculino')

cliente.hgetall('dados', (err, valores) => {
    if (err) throw new error('Erro ao consultar os valores')
    console.log(valores)
})

cliente.rpush(['frameworks', 'angular', 'react', 'vue'], (err, lista) => {
    if (err) throw new error('Erro ao inserir os dados na lista')
    console.log(lista)
})

cliente.lrange('frameworks', 0, -1, (err, lista) => {
    if (err) throw new error('Erro ao consultar a lista')
    console.log(lista)
})

cliente.sadd(['tags', 'angularjs', 'angularjs', 'backbonejs', 'emberjs'], (err, lista) => {
    if (err) throw new error('Erro ao inserir os dados na lista')
    console.log(lista)
})

cliente.smembers('tags', (err, lista) => {
    if (err) throw new error('Erro ao consultar a lista')
    console.log(lista)
})

// Expire
cliente.set('total', '1800')
cliente.expire('total', 10)

// Del
cliente.rpush(['frameworks', 'angular', 'react', 'vue'], (err, lista) => {
    if (err) throw new error('Erro ao inserir os dados na lista')
    console.log(lista)
})
cliente.del('frameworks', (err, lista) => {
    if (err) throw new error('Erro ao deletar os dados na lista')
    console.log(lista)
})
cliente.smembers('tags', (err, lista) => {
    if (err) throw new error('Erro ao consultar os dados na lista')
    console.log(lista)
})