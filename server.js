const express = require('express')
const Rollbar = require('rollbar')
const rollbar = new Rollbar({
  accessToken: '05a66301f72840c8a0613560f80f7357',
  captureUncaught: true,
  captureUnhandledRejections: true,
})
const cors = require('cors')

rollbar.log('Rollbar running.')

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => res.sendFile(`${__dirname}/controller.js`))

const { getNewPage } = require('./controller.js')

app.use(express.static(`${__dirname}/public`))

app.get('/char/:name', getNewPage)

app.listen(5150, () => console.log('app is up on 5150'))