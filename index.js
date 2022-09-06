const PORT = 3001;
const { response } = require('express');
const cors = require('cors')
const express = require('express');
const app = express();
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

app.use(cors());
app.listen(PORT, () => console.log('listening'));

app.get('/', (req, res) => {
    const {valor} = req.query;
    console.log(valor);
    fetch(`https://viacep.com.br/ws/${valor}/json/`)
    .then(response =>response.json())
    .then(json => {
        res.json({"status" : 200,
        "mensagem": "Ok",
        "cep" : json.cep,
        "logradouro" : json.logradouro,
        "complemento" : json.complemento,
        "bairro" : json.bairro,
        "localidade" : json.localidade,
        "uf" : json.uf,
        "ibge" : json.ibge,
        "gia" : json.gia,
        "ddd" : json.ddd,
        "siafi" : json.siafi
        })
    })
    .catch(erro => res.json({"status" : 404,
    "mensagem": "CEP não encontrado"}))
})