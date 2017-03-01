// NEED A VARIABLE FOR COMPANY NAME

let company = 'the company'

module.exports = app => {
  var QUESTIONS = [
    "If " + company + " had a potluck tomorrow what would you bring?",
    "Where have you travelled?",
    "Do you have any cats? Follow up: if yes, can we see pictures?",
    "What do you love about your hometown?",
    "Post a pic of you when you were happiest!",
    "What’s the best movie you’ve seen in the past year?",
    "What’s your strategy for survival in the first 24 hours of a post apocalyptic world?",
    "What do you like best about " + company + "?",
    "If you could have any super power, what would it be?",
    "Who is a personal hero and why?",
    "If you were an MMA fighter what would your walking in song be?",
    "If you had unlimited resources, how would you live your life?",
    "What’s a movie you've watched, that you never tire of?",
    "What's the most random job you've had?",
    "What's your favourite joke?",
    "How far back can you trace your lineage?",
    "Do you like dogs?",
    "What is something you do that makes you think you are weird?",
    "What's next on your travel list?",
    "Best live show you've seen?",
    "What’s your favourite condiment?",
    "What is something you could ramble on about for hours?",
    "What is your favourite beverage of all time?",
    "What’s your favourite restaurant and dish?",
    "What is your favourite gif/image?",
    "If you could go back in time four years in hindsight and tell your parents anything. What would it be?",
    "If you lived to 150, would you rather have a sharp mind or perfect health?",
    "Best piece of advice you’ve received?",
    "When you were little, what did you want to be when you grew up?",
    "Do you ever rehearse a phone conversation before you dial? And if so, in what cases?",
    "If you could only listen to albums that were released from a single year for the rest of your life, which year would you chose and why?",
    "What are you most eager to learn?",
    "What is something you’ve encountered that you thought you would hate but ended up loving?",
    "Who's the best 90s R&B group? Boyz II Men or New Edition?",
    "Not sure if this has been asked but what has been the most memorable moment ever for you (good or bad)?",
    "What one item would you grab if your house were on fire?",
    "What song did you last sing to yourself?",
    "If you were raised by wild animals, what species would it have been?",
    "What would the 10 year old version of you, think of the current you?",
    "What is your favorite app?"
  ]


  // response to the user typing "ama"
  app.slapp.message('ama', ['mention', 'direct_mention', 'direct_message'], (msg) => {
    msg.say(QUESTIONS)
  })
}
