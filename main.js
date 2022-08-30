
const express = require('express')

const app = express();

const bodyParser = require('body-parser');

port = 3001

const routes = require('./routes/index');

app.set('view engine', 'pug')

// parse application/json
app.use(bodyParser.json())

app.use(routes);



app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})
