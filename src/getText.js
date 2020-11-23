
const getText = (difficulty) => {

  const easyTexts = "the of and a to in is you that it he was for on are as with his they I at be this have from or one had by word but not what all were we when your can said there use an each which she how their will up other about out many then them these so some her would make like him into time has look two more write go see number no way could people my than".split(" ")

  const mediumTexts = [
    "medium",

    "mediumer",
    "mediumest"
  ]

  const hardTexts = [
    "hard",

    "harder",
    "hardest"
  ]

  // for (i = texts.length -1; i > 0; i--) {
  //   j = Math.floor(Math.random() * i)
  //   k = texts[i]
  //   texts[i] = texts[j]
  //   texts[j] = k
  // }
  if (difficulty === "easy") {
    var result = []
    for (let i = 0; i < 50; i++) 
    { result.push(easyTexts[Math.floor(Math.random() * easyTexts.length)]) }
    return result.join(" ");
  }

  if (difficulty === "medium") {
    var result = []
    for (let i = 0; i < 50; i++) 
    { result.push(mediumTexts[Math.floor(Math.random() * mediumTexts.length)]) }
    return result.join(" ");
  }

  if (difficulty === "hard") {
    var result = []
    for (let i = 0; i < 50; i++) 
    { result.push(hardTexts[Math.floor(Math.random() * hardTexts.length)]) }
    return result.join(" ");
  }








  // texts.sort(function(a, b){return 0.5 - Math.random()})


}








export default getText















// "the of and a to in is you that it he was for on are as with his they I at be this have from or one had by word but not what all were we when your can said there use an each which she how their will up other about out many then them these so some her would make like him into time has look two more write go see number no way could people my than",





    // "Here's to the crazy ones. The misfits. The rebels. The troublemakers."
    // + " The round pegs in the square holes. The ones who see things differently."
    // + " They're not fond of rules. And they have no respect for the status quo."
    // + " You can quote them, disagree with them, glorify or vilify them. About the only thing"
    // + " you can't do is ignore them. Because they change things. They push the human race forward. And"
    // + " while some may see them as the crazy ones, we see genius. Because the people who are crazy"
    // + " enough to think they can change the world, are the ones who do.",

    // "I believe that everything happens for a reason. People change so that you can learn to let go,"
    // + " things go wrong so that you appreciate them when they're right, you believe lies so you eventually"
    // + " learn to trust no one but yourself, and sometimes"
    // + " good things fall apart so better things can fall together.",

    // "To love at all is to be vulnerable. Love anything and your heart will be wrung and possibly broken. If"
    // + " you want to make sure of keeping it intact you must give it to no one, not even an animal."
    // + " Wrap it carefully round with hobbies and little luxuries; avoid all entanglements. Lock it up safe"
    // + " in the casket or coffin of your selfishness. But in that casket, safe, dark, motionless, airless"
    // + " will change. It will not be broken; it will become unbreakable, impenetrable, irredeemable."
    // + " To love is to be vulnerable"