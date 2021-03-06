'use strict'

const express = require('express')
const Slapp = require('slapp')
const ConvoStore = require('slapp-convo-beepboop')
const Context = require('slapp-context-beepboop')

var config = {
  port: process.env.PORT || 5000,
}

var slapp = Slapp({
  convo_store: ConvoStore(),
  context: Context()
})

var app = {
  config,
  slapp,
}

require('./src/help')(app)
require('./src/questions')(app)

// attach Slapp to express server
var server = slapp.attachToExpress(express())

// start http server
server.listen(config.port, (err) => {
  if (err) {
    return console.error(err)
  }

  console.log(`Listening on port ${config.port}`)
})
