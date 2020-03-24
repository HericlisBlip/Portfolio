const express = require('express');

const app = express();


/*
Rotas e Recursos 


Metodos HTTP:

GET: Busca informação no backend

POST: Criar uma informação no backand

PUT: Alterando informação no backend

DELETE: Deletando informação no backend


*/
app.get('/', (request, response) => {
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Hericlis Ventura'
    
    });
});

app.listen(3333);