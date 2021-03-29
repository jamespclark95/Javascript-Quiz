
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
let questions = [
    {
        question: 'What does NaN stand for?',
        option1: 'Never Ask Names',
        option2: 'Nod at Nanna',
        option3: 'New and Neat',
        option4: 'Not a Number',
        answer: 4
    },
    {
        question: 'What was JavaScript originally named?',
        option1: 'CoffeeScript',
        option2: 'CaramelScript',
        option3: 'Java',
        option4: 'Mocha',
        answer: 4
    },
    {
        question: 'How many items can an array hold?',
        option1: 'One',
        option2: 'Infinite',
        option3: 'Thirty',
        option4: '4.29 Billion',
        answer: 4
    },
    {
        question: 'Can you style a webpage with Javascript?',
        option1: 'Nope',
        option2: 'Only with CSS',
        option3: 'Maybe',
        option4: 'Of Course!',
        answer: 4
    }
]

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
    questionDisplay.textContent = (questions[0].question)
    answerOne.textContent = (questions[0].option1)
    answerTwo.textContent = (questions[0].option2)
    answerThree.textContent = (questions[0].option3)
    answerFour.textContent = (questions[0].option4)
  })

  // add 25 points if user chooses correct answer
  answerFour.addEventListener('click', function addPoints(){
      points = points + 25
      console.log(points)
  })

  document.querySelectorAll('.answer-output').forEach(item => {
    item.addEventListener('click', event => {
        questionDisplay.textContent = (questions[1].question)
        answerOne.textContent = (questions[1].option1)
        answerTwo.textContent = (questions[1].option2)
        answerThree.textContent = (questions[1].option3)
        answerFour.textContent = (questions[1].option4)
    })
  })


}



startQuiz();