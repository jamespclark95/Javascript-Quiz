
// Get Elements by ID
let questionDisplay = document.getElementById("question")
let answerOne = document.getElementById("answer1")
let answerTwo = document.getElementById("answer2")
let answerThree = document.getElementById("answer3") 
let answerFour = document.getElementById("answer4")
let button = document.getElementById("button")
let instructions = document.getElementById("instructions")
let secondsLeft = document.getElementById("secondsLeft")

// Array of questions and answer sets
let questions = ['What does NaN stand for?', 'What was JavaScript originally named?', 'How many items can an array hold?', 'Can you style a webpage with Javascript?' ]
let answerSetOne = ['Never Ask Names', 'Nod at Nanna', 'New and Neat', 'Not a Number']
let answerSetTwo = ['CoffeeScript', 'CaramelScript', 'Java', 'Mocha']
let answerSetThree = ['One', 'Infinite', 'Thirty', '4.29 billion']
let answerSetFour = ['Nope', 'Only with CSS', 'Maybe', 'Of Course!']

qLength = questions.length


// Declare Points & Number of question sets

let points = 0;
const questionCount = 4;




// Start The quiz

function startQuiz () {

// Quiz starts by clicking the button

    button.addEventListener('click', function enterQuiz (){
    
    // Toggle display when user clicks 'Start Button'
    document.getElementById('answer1').setAttribute('style', 'display: block;')
    document.getElementById('answer2').setAttribute('style', 'display: block;')
    document.getElementById('answer3').setAttribute('style', 'display: block;')
    document.getElementById('answer4').setAttribute('style', 'display: block;')
    button.setAttribute('style', 'display: none;')
    instructions.setAttribute('style', 'display: none;')

    // Change text content for the questions and answers
    questionDisplay.textContent = (questions[0])
    answerOne.textContent = (answerSetOne[0])
    answerTwo.textContent = (answerSetOne[1])
    answerThree.textContent = (answerSetOne[2])
    answerFour.textContent = (answerSetOne[3])
  })

  // add 25 points if user chooses correct answer
  answerFour.addEventListener('click', function addPoints(){
      points = points + 25
      console.log(points)
  })

  document.querySelectorAll('.answer-output').forEach(item => {
    item.addEventListener('click', event => {
    questionDisplay.textContent = (questions[1])
    answerOne.textContent = (answerSetTwo[0])
    answerTwo.textContent = (answerSetTwo[1])
    answerThree.textContent = (answerSetTwo[2])
    answerFour.textContent = (answerSetTwo[3])
    })
  })



}



startQuiz();