const express = require("express");
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())

const category = require('./data/categories.json')

app.get('/', (req, res) => {
    res.send('News api running ')
})

app.get('/news-category', (req, res) => {
    res.send(category)
})

app.listen(port, () => {
    console.log('Dragon news server running on port', port)
})