

// Code will build the welcome message this section will build the variables

//Intro Elements
var body = document.body
var header = document.querySelector("header")
var viewHighScoreButton = document.createElement("button")
var h1El = document.createElement("h1");
var filler1 = document.createElement("div")
var mainEl = document.createElement("main");
var filler2 = document.createElement("div")
var rulesEl = document.createElement("ol")
var rule1 = document.createElement("li")
var rule2 = document.createElement("li")
var rule3 = document.createElement("li")
var rule4 = document.createElement("li")
var pEl = document.createElement("p");
var startQuiz = document.createElement("button");
var timerEl = document.querySelector(".timer");

//Question Elements
var questionEl = document.createElement("h2");
var answerEl = document.createElement("div");
var breakEl1 = document.createElement("br");
var breakEl2 = document.createElement("br");
var breakEl3 = document.createElement("br");

var butOne = document.createElement("button");
var butTwo = document.createElement("button");
var butThree = document.createElement("button");
var butFour = document.createElement("button");
var answerResult = document.createElement("h2")
var answers = document.querySelector(".answers");

//Score Elements
var quizButton = document.querySelectorAll(".buttonChoice");
var highScoreForm = document.createElement("form");
var submitHighScore = document.createElement("button");
var nameInput = document.createElement("input");
submitHighScore.textContent = "Submit your Name!"
var highScoreList = document.createElement("ol");


var score = 0

var timerInterval;
var quizEnd = false

// Append the intro text to the page


h1El.textContent = "The Code Quiz Y'all"
pEl.textContent = "Hey y'all welcome to my code quiz for Homework 4."
rule1.textContent = "You will have 60 seconds to complete the quiz."
rule2.textContent = "Every wrong answer will remove 10 seconds from the clock."
rule3.textContent = "Every right answer will add 10 points to your score."
rule4.textContent = "All remaining time will convert to points and added to your score at the end."
startQuiz.textContent = "Start the ordeal"
viewHighScoreButton.textContent = "View High Scores"

header.appendChild(viewHighScoreButton)
body.appendChild(filler1)
body.appendChild(mainEl)
body.appendChild(filler2)
mainEl.appendChild(h1El)
mainEl.appendChild(pEl)
mainEl.appendChild(rulesEl)
rulesEl.appendChild(rule1)
rulesEl.appendChild(rule2)
rulesEl.appendChild(rule3)
rulesEl.appendChild(rule4)
mainEl.appendChild(startQuiz)

viewHighScoreButton.setAttribute("id", "highscore-page")
viewHighScoreButton.setAttribute("class", "btn btn-primary btn-sm")
var hsPage = document.querySelector("#highscore-page")
h1El.setAttribute("style", "text-align:center")
filler1.setAttribute("class", "col-md-4")
mainEl.setAttribute("class", "col-md-4")
filler2.setAttribute("class", "col-md-4")
mainEl.setAttribute("style", "margin:auto; text-align:center; font-size: 18px; font-family: Roboto")
rulesEl.setAttribute("style", "margin:auto; text-align:left; font-size: 18px; font-family: Roboto")
timerEl.setAttribute("style", "margin:auto; float:right; font-size: 24px; font-family: Audiowide")
startQuiz.setAttribute("class", "btn btn-danger btn-lg")
// Create a function that starts the quiz

startQuiz.addEventListener("click", function () {
  setTime()
  setQuestions(0)
  answerChoice(0)
});
// Create a function that runs the timer
var timer = 60

function setTime() {
  // Sets interval in variable
  timerInterval = setInterval(function () {
    if (timer === 0) {
      // Stops execution of action at set interval
      highScorePage()
      clearInterval(timerInterval);
     
    }
    if (timer > 0) {
      timer--;
      timerEl.innerText = "Time left: " + timer;
    }
  }, 1000);
}
startQuiz.addEventListener("click", function () {
  setTime()
});

// Create the question bank

var questionOne = [
  { q1: "What JavaScript Function allows you to add a pre-determined element to a page?" },
  { a: "addElement", v: false },
  { a: "setElement", v: false },
  { a: "createChild", v: false },
  { a: "appendChild", v: true }
]
var questionTwo = [
  { q1: "What does the term DOM mean in the context of JavaScript?" },
  { a: "Do-Over Metrics", v: false },
  { a: "Dominic Toretto", v: false },
  { a: "Document Object Model", v: true },
  { a: "Domino's Original Marinara", v: false }
]

var questionThree = [
  { q1: "What does API stand for?" },
  { a: "Apple Pie Incorperated", v: false },
  { a: "Application Programming Interface", v: true },
  { a: "Alpine Pool Insurance", v: false },
  { a: "Are Pigs Intelligent?", v: false }
]
var questionFour = [
  { q1: "How much wood would a Wood-Chuck chuck if a Wood-Chuck could chuck wood?" },
  { a: "Many of the Woods", v: false },
  { a: "Little of the Woods", v: false },
  { a: "No Woods", v: false },
  { a: "All the Woods", v: "end" }
]

var questionBank = [questionOne, questionTwo, questionThree, questionFour]

// Create function that writes the question to the page

function setQuestions() {

  h1El.innerText = ""
  header.removeChild(viewHighScoreButton)
  mainEl.removeChild(startQuiz)
  mainEl.removeChild(rulesEl)
  mainEl.appendChild(answerEl)
  pEl.innerText = questionBank[0][0].q1
  butOne.textContent = questionBank[0][1].a
  butTwo.textContent = questionBank[0][2].a
  butThree.textContent = questionBank[0][3].a
  butFour.textContent = questionBank[0][4].a
  answerResult.textContent = ""
  butOne.value = 1
  butTwo.value = 2
  butThree.value = 3
  butFour.value = 4
  answerEl.appendChild(butOne)
  answerEl.appendChild(breakEl1)
  answerEl.appendChild(butTwo)
  answerEl.appendChild(breakEl2)
  answerEl.appendChild(butThree)
  answerEl.appendChild(breakEl3)
  answerEl.appendChild(butFour)
  answerEl.appendChild(answerResult)
  answerEl.setAttribute("class", "answers d-grid gap-2")
  butOne.setAttribute("class", "buttonChoice")
  butTwo.setAttribute("class", "buttonChoice")
  butThree.setAttribute("class", "buttonChoice")
  butFour.setAttribute("class", "buttonChoice")
  answerResult.setAttribute("style", "text-align:center; font-family:Audiowide")
};
// Create a function that pushes a new question
function nextQuestion(num) {
  pEl.innerText = questionBank[num][0].q1
  butOne.textContent = questionBank[num][1].a
  butTwo.textContent = questionBank[num][2].a
  butThree.textContent = questionBank[num][3].a
  butFour.textContent = questionBank[num][4].a
  answerResult.textContent = "Right!"
};



//Create a function that looks for choices
function answerChoice(num) {
  answerEl.addEventListener("click", function (event) {

    var element = event.target;

    if (questionBank[num][element.value].v === true) {
      console.log("right answer");
      num++;
      score += 25;
      nextQuestion(num);
    }
    else if (questionBank[num][element.value].v === false) {
      console.log("wrong answer");
      answerResult.textContent = "WRONG!"
      timer -= 10;
    }

    else {
      score += 25;
      score += timer;
      timer = 1
    };
  });
  return num
}
var scoreList = JSON.parse(localStorage.getItem("scoreList")) || []

// Create a function that ends the game and directs a user to the High Score page
function highScorePage() {
  // quizEnd = true
  timer = null
  pEl.textContent = ""
  timerEl.innerText = "Game Over!"
  answerEl.removeChild(butOne)
  answerEl.removeChild(butTwo)
  answerEl.removeChild(butThree)
  answerEl.removeChild(butFour)
  mainEl.removeChild(answerEl)
  pEl.textContent = "You made it to the end of the quiz you scored: " + score
  highScoreForm.setAttribute("method","post")
  highScoreForm.setAttribute("action","submit.php")
  nameInput.setAttribute("type", "text")
  nameInput.setAttribute("name", "name")
  nameInput.setAttribute("placeholder", "Who are you?")
  nameInput.setAttribute("id", "name-input")
  highScoreForm.setAttribute("type","submit")
  highScoreForm.setAttribute("value","submit")
  mainEl.appendChild(highScoreForm)
  mainEl.appendChild(nameInput)
  mainEl.appendChild(submitHighScore)
  mainEl.appendChild(highScoreList)
  var nameListener = document.querySelector("#name-input");
  renderHighScores()
  submitHighScore.addEventListener("click", function(event){
    event.preventDefault();
    console.log("Hello")
    var nameText = nameListener.value.trim();

    if (nameText === ""){
      return;
    }
    console.log(nameText)
    var scoreRecord = {
      
      name: nameText,
      score: score
    
    }
    scoreList.push(scoreRecord);
    nameListener.value = ""

    storeHighScore()
    renderHighScores()

  });

}

// Create a function that records the score in local storage
// Create a function that allows the User to save their name and highscore

function renderHighScores() {
highScoreList.innerHTML = ""
scoreList.sort(function(a,b){
  return b.score - a.score
})
  for (var i = 0; i < scoreList.length; i++) {
    var scores = scoreList[i];

    var li = document.createElement("li");
    li.textContent = scores.name + ": " + scores.score

    highScoreList.appendChild(li)
  };
}


function storeHighScore() {
  localStorage.setItem("scoreList", JSON.stringify(scoreList));
}



hsPage.addEventListener("click", function(){
  setQuestions()
  highScorePage()
  pEl.textContent = "High Scores"
  mainEl.removeChild(highScoreForm)
  mainEl.removeChild(nameInput)
  mainEl.removeChild(submitHighScore)
});

