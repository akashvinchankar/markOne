var readLineSync = require('readline-sync');

var score = 0;

var userName = readLineSync.question("What is your name?");


// Method for checking correct answers
function quizPlay(que, ans){
  var userAns = readLineSync.question(que);

  if(userAns.toUpperCase() === ans.toUpperCase()){
    console.log("Right!");
    score++;
  }else{
    console.log("Wrong!")
  }
  // console.log(score);

  console.log("--------------------------------------------");
}


// Questions Asked
var questions = [{
  que: "Where do Akash Vinchankar live?", ans: "Akola"
  }, 
{
  que: "Which is the favourite car of Akash?", ans: "Ferrari"
  }, 
{
  que:"How many years did Akash took to complete Engineering?", ans:"4"
  },  
{
  que: "What do Akash loves to do?", ans: "RideBike"
  }, 
{
  que: "Which IPL team Akash supports?", ans: "Mumbai Indians"
}];

for(var i=0; i<questions.length; i++){
  quizPlay(questions[i].que, questions[i].ans);
}

// Final Score
console.log("You scored "+score+" correct answers out of " + questions.length);