module.exports = app => {
  var HELP_TEXT = `
  I will respond to the following messages:
  \`help\` - to see this message.
  \`ama\` - I will ask a popular AMA question.
  `

  // response to the user typing "help"
  app.slapp.message('help', ['mention', 'direct_mention', 'direct_message'], (msg) => {
    msg.say(HELP_TEXT)
  })
}
