var readlineSync = require("readline-sync");

var name = readlineSync.question("Your Name ");

console.log("Welcome ", name);
var choice = readlineSync.question("Do you know Damodhar!! \nType 'Yes'/'No' - ");

console.log("------------------------------------------")


var score = 0;

if(choice == "yes")
{
  function hav_fun(question,answer)
  {
    var userAnswer = readlineSync.question(question);

    if(userAnswer.toUpperCase() == answer.toUpperCase())
    {
      console.log("You are Right");
      score = (score + 2);
      console.log("Current Score: ", score);
      console.log("------------------------------------------")
    }
    else
    {
      console.log("You are Wrong");
      score--;
      console.log("Current Score: ", score);
      console.log("------------------------------------------")
    }
    
  }
  var questList = [
                   question1 = {question : "His Nick Name! ",
                                answer : "Pintu"},
                    question2 = {question: "His Lucky Number! ",
                                answer : "5"},
                    question3 = {question: "His Favorite Movie! ",
                                answer : "3idiots"},
                    question4 = {question: "His Favorite Sport! ",
                                answer : "Cricket"},
                    question5 = {question: "What he believes in the most! ",answer : "Friendship"}          
  ]

  for (i = 0;i < questList.length;i++)
  {
    hav_fun(questList[i].question,questList[i].answer); 
  }

  console.log("Congrats!! you scored: ", score);
  console.log("------------------------------------------")
  var highScores=[
                  {name:"Dam",score: 10},
                  {name:name,score: score}
                ]

  console.log("Check out Highest Scores : ")
  for(i=0;i<highScores.length;i++)
  {
    console.log((i+1)+" Name : "+highScores[i].name + ", Score : "+highScores[i].score)
  }
}


