const express = require('express')

const app = express()

app.use(express.json())

app.use(express.static(`${__dirname}/public`))

app.listen(5150, () => console.log('app is up on 5150'))