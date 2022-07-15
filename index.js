const express = require('express')
const app = express()
var cors = require('cors')
var path = require('path');
app.options('*', cors())

app.get('/', (req, res) => {
    let options = {
        root: path.join(__dirname)
    };
    res.contentType('text/xml');
    res.status(200);
    res.sendFile("result.xml", options)
})

const port = 80
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})