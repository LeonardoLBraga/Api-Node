const restify = require('restify');
const errs = require('restify-errors');

const server = restify.createServer({
  name: 'myapp',
  version: '1.0.0'
});

var knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : '',
      database : 'apiveiculo'
    }
  });

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});

// Rotas
// GET Retorna todos os veículos
server.get('/veiculos', (req, res, next) => {
    
    knex('veiculo').then((dados) => {
        res.send(dados);
    }, next)
    
});
// POST /veiculos Adiciona um novo veículo
server.post('/veiculos', (req, res, next) => {
    
    knex('veiculo')
        .insert(req.body)
        .then((dados) => {
            res.send(dados);
        }, next)
    
});
// GET /veiculos/{id} Retorna os detalhes do veículo
server.get('/veiculos/:id', (req, res, next) => {
    
    const { id } = req.params;

    knex('veiculo')
        .where('id', id)
        .first()
        .then((dados) => {
            if(!dados) return res.send(new errs.BadRequestError('nada foi encontrado'))
            res.send(dados);
        }, next)
        
});
// PUT /veiculos/{id} Atualiza os dados de um veículo
server.put('/veiculos/:id', (req, res, next) => {
    
    const { id } = req.params;

    knex('veiculo')
        .where('id', id)
        .update(req.body)
        .then((dados) => {
            if(!dados) return res.send(new errs.BadRequestError('nada foi encontrado'))
            res.send('dados atualizados');
        }, next)
        
});
// DELETE /veiculos/{id} Apaga o veículo
server.del('/veiculos/:id', (req, res, next) => {
    
    const { id } = req.params;

    knex('veiculo')
        .where('id', id)
        .delete()
        .then((dados) => {
            if(!dados) return res.send(new errs.BadRequestError('nada foi encontrado'))
            res.send('dados excluidos');
        }, next)
        
});
// PATCH /veiculos/{id} Atualiza apenas alguns dados do veículo
server.patch('/veiculos/:id', (req, res, next) => {
    
    const { id } = req.params;

    knex('veiculo')
        .where('id', id)
        .update(req.body)
        .then((dados) => {
            if(!dados) return res.send(new errs.BadRequestError('nada foi encontrado'))
            res.send('dados atualizados com patch');
        }, next)
        
});