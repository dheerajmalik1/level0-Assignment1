var readlineSync = require('readline-sync');
var score = 0;

console.log('Hi, welcome to the game, Whats your name? \n');
var name = readlineSync.question();
console.log(`\nHi ${name}, welcome to the game, lets start the quiz \n`);



function play(question,answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toLowerCase() === answer){
    console.log("RIGHT!");
    score = score + 1;
  }else {
    console.log("WRONG!")
  }
  console.log("Your current score is: ",score);
  }


var questions=[{
  question:`Which of the following characters has high school nickname bigfatgoalie? [answer in a or b] \n
a)Monica \t b)Rachael\n
`,
  answer:"a",
},{
  question:`Which of the following characters was part of 'I hate Rachel Green Club"? [answer in a or b] \n
a)Chandler \t b)Ross
`,
  answer:"b",
},{
  question:`Which of the following characters had a "thing" for divorce? [answer in a or b] \n
a)Chandler \t b)Ross
`,
  answer:"b",
}]

for (var i =0;i<questions.length;i++){
  var currentQuestion=questions[i];
  play(currentQuestion.question,currentQuestion.answer);
}

console.log("YAY! Your final score is: ",score,"/ 3")
