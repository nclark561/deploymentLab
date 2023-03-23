const express = require('express')
const Rollbar = require('rollbar')
const rollbar = new Rollbar({
  accessToken: '05a66301f72840c8a0613560f80f7357',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

rollbar.log('Rollbar running.')

const app = express()

app.use(express.json())

app.use(express.static(`${__dirname}/public`))

app.listen(5150, () => console.log('app is up on 5150'))