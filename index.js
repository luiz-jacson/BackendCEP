const PORT = 3001;
const { response } = require('express');
const cors = require('cors')
const express = require('express');
const app = express();

app.use(cors());
app.listen(PORT, () => console.log('listening'));

app.get('/', (req, res) => {
    const {valor} = req.query;
    console.log(valor);
    fetch(`https://viacep.com.br/ws/${valor}/json/`)
    .then(response =>response.json())
    .then(json => {
        console.log(json);
        res.send(json);
    })
    .catch(erro => res.json('erro'))
})