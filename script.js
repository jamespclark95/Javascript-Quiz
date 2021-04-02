// questions & answers array
let questions = [
    {
      question: 'What does NaN stand for?', 
      choices:['Not a Number', 'Nod at Nanna', 'New and Neat', 'Never Ask Names'],
      answer: 'Not a Number'
    },
    {
      question: 'What was JavaScript originally named?', 
      choices:['CoffeeScript', 'CaramelScript', 'Mocha', 'Java'],
      answer: 'Mocha'
    },
    {
      question: 'How many items can an array hold before it starts slowing down?', 
      choices:['One', '4.29 billion', 'Thirty', 'Infinite'],
      answer: '4.29 billion'
    },
    {
      question: 'Can you style a webpage with Javascript?', 
      choices:['Nope', 'Only with CSS', 'Maybe', 'Of Course!'],
      answer: 'Of Course!'
    }
  ];

  // created variables for necessary classes, elements & array index
let button = document.getElementById("button")
let startBox = document.querySelector('.startbox')
let quizWrapper = document.querySelector(".quiz-wrapper")
let qIndex = 0
let questionDisplay = document.getElementById("question")
let timerEl = document.getElementById('secondsLeft')
let secondsLeft = 60
let answerList = document.getElementById('answerList')
let points = 0
  
function startTimer () {
  let countDown = setInterval(() => {
    secondsLeft--;
    timerEl.textContent = secondsLeft
    if (secondsLeft === 0) {
      alert('Your time has run out. Refresh and try again!')
      clearInterval(countDown)
    }
  }, 1000);
}



// calls the buildQuestion function on each click
button.addEventListener('click', function (){
buildQuestionCard();
startTimer();

startBox.setAttribute('style', "display: none;")

quizWrapper.removeAttribute('style')
})

let buildQuestionCard = ()=> {
    
// display new questions & answers based on the question index
questionDisplay.innerHTML = ''
answerList.innerHTML = ''
questionDisplay.textContent = questions[qIndex].question

  questions[qIndex].choices.forEach(function(choice){
  let answerButton = document.createElement('button');
  answerButton.textContent = choice;
  answerButton.setAttribute('value', choice);
  answerButton.onclick = evaluateAnswer;
  answerList.appendChild(answerButton)
  })
}

function evaluateAnswer() {
    if (this.value !== questions[qIndex].answer){
        secondsLeft = secondsLeft - 10
    }
    else {points = points + 25}
    qIndex++;
    if (qIndex === questions.length) {
      gameOver()
    }
    else {buildQuestionCard()}
}


function gameOver() {
  quizWrapper.setAttribute('style', "display: none;")
  let div = document.createElement('div');
  div.textContent = 'You finished the quiz. Your score is ' + points + '/100'
  div.classList.add('gameover-message')
  document.body.appendChild(div)
}


