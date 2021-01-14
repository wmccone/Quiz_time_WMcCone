

// Code will build the welcome message this section will build the variables

var body = document.body
var h1El = document.createElement("h1")
var mainEl = document.createElement("main")
var pEl = document.createElement("p")
var startQuiz = document.createElement("button")
var questionEl = document.createElement("h2")
var answerEl = document.createElement("ul")
var breakEl = document.createElement("br")
var butOne = document.createElement("button")
var butTwo = document.createElement("button")
var butThree = document.createElement("button")
var butFour = document.createElement("button")
var timerEl = document.querySelector(".timer")


// Append the intro text to the page

h1El.textContent = "The Code Quiz Y'all"
pEl.textContent = "Hey y'all welcome to my code quiz for Homework 4, you will have 120 seconds to complete the quiz. Every wrong answer will remove 10 seconds from the clock. Every right answer will add 10 points to your score. All remaining time will convert to points and added to your score at the end. You may click the start button to begin"
startQuiz.textContent = "Start the ordeal"

body.appendChild(h1El)
body.appendChild(mainEl)
mainEl.appendChild(pEl)
mainEl.appendChild(startQuiz)

h1El.setAttribute("style", "margin:auto; text-align:center;")
mainEl.setAttribute("style", "margin:auto; text-align:center;")
timerEl.setAttribute("style", "margin:auto; float:right;")

// Create a function that starts the quiz
startQuiz.addEventListener("click", function(){
    setTime()
    question(0)
    });
// Create a function that runs the timer
var timer = 120

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      timer--;
    
      if(timer === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
      timerEl.innerText = "Times Up!"
      }
      else {
        timerEl.innerText = "Time left: " + timer; 
      }
    }, 1000);
  }
startQuiz.addEventListener("click", function(){
setTime()
});

// Create the question bank

var questionOne = [
    {q1: "How much wood could a wood chuck chuck?"},
    {a: "Many", v: false},
    {a: "little", v: false},
    {a: "none", v: false},
    {a: "all", v: true}
]
var questionTwo = [
  {q1: "How much wood could a wood chuck chuck?"},
  {a: "Many", v: false},
  {a: "little", v: false},
  {a: "none", v: false},
  {a: "all", v: true}
]

var questionThree = [
  {q1: "How much wood could a wood chuck chuck?"},
  {a: "Many", v: false},
  {a: "little", v: false},
  {a: "none", v: false},
  {a: "all", v: true}
]
var questionFour = [
  {q1: "How much wood could a wood chuck chuck?"},
  {a: "Many", v: false},
  {a: "little", v: false},
  {a: "none", v: false},
  {a: "all", v: true}
]

var questionBank = [questionOne, questionTwo, questionThree, questionFour]

// Create function that appends text to the page
function question(num){
  
    h1El.innerText = ""
    pEl.innerText = questionBank[num][0].q1
    mainEl.removeChild(startQuiz)
    mainEl.appendChild(answerEl)
    butOne.textContent = questionBank[num][1].a
    butTwo.textContent = questionBank[num][2].a
    butThree.textContent = questionBank[num][3].a
    butFour.textContent = questionBank[num][4].a
    answerEl.appendChild(butOne)
    answerEl.appendChild(breakEl)
    answerEl.appendChild(butTwo)
    answerEl.appendChild(breakEl)
    answerEl.appendChild(butThree)
    answerEl.appendChild(breakEl)
    answerEl.appendChild(butFour)
}


// Create a function that records the score

// Create a function that ends the game and directs a user to the High Score page

// Create a function that allows the User to save their name and highscore locally