const readlineSync = require("readline-sync");

let score = 0;

const highscores = [
  {
    name: "Shantanu",
    score: 8
  }
]

//array of objects
const questionBank = [
  {
    question: "What's my pet name ?",
    options: ["Santo", "Sanu", "Vijay", "Shanu"],
    answer: 2
  },
  {
    question: "Who is my favorite cricketer ?",
    options: ["Virat Kohli", "MS Dhoni", "Rohit Sharma", "Jasprit Bumrah"],
    answer: 1
  },
  {
    question: "Which soft drink do I enjoy the most ?",
    options: ["Sprite", "Fanta", "Coca-Cola", "Thums Up"],
    answer: 3
  },
  {
    question: "Where do I work ?",
    options: ["Cognizant","LTIMindtree", "Accenture","TCS"],
    answer: 2
  },
  {
    question: "What is my favourite hobby ?",
    options: ["Music", "Dancing", "Cycling", "Drawing"],
    answer: 3
  },
  {
    question: "My dream company to work with ?",
    options: ["Intel", "Google" ,"Microsoft","Apple"],
    answer: 4
  },
  {
    question: "I'd be more happy if you bring this instead of cake on my birthday ?",
    options: ["Gift", "Chocolate", "Rasgulla", "Kaju Katri"],
    answer: 3
  },
  {
    question: "One dish that I can have every day ?",
    options: ["Daal Khichdi", "Daal Chaval", "Roti Bhaji", "Raajma Chaval"],
    answer: 1
  },
];


function quiz(currentQuestion,questionNumber){
  console.log("Q."+questionNumber+" "+currentQuestion.question);
  const userAnswer = readlineSync.keyInSelect(currentQuestion.options, "Answer: ")+1
  if(userAnswer === currentQuestion.answer){
    score = score+1;
    console.log("Correct Answer");
  }
  else{
    console.log("Wrong Answer");
  }
}
//Welcome user
const userName = readlineSync.question("What's your name ? ");
console.log("\nWelcome "+userName+" to... DO YOU KNOW SHANTANU\nTotal number of Questions = 8\n");

//call quiz function for every queston in array
for(let i=0; i<questionBank.length; i++){
  quiz(questionBank[i],i+1);
  console.log("-------------------------------------------\n")
}

//print final score
console.log("Your Final Score : "+score+" \n");
console.log("Current High scores : ");
for(let i=0; i<highscores.length; i++){
  console.log(highscores[i].name+" "+highscores[i].score);
}
console.log("\nSend me a screenshot if you have beaten the high score. I will update it");