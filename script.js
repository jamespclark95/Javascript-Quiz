let questions = [
    {
      question: 'What does NaN stand for?', 
      choices:['Never Ask Names', 'Nod at Nanna', 'New and Neat', 'Not a Number'],
      answer: 'Not a Number'
    },
    {
      question: 'What was JavaScript originally named?', 
      choices:['CoffeeScript', 'CaramelScript', 'Java', 'Mocha'],
      answer: 'Mocha'
    },
    {
      question: 'How many items can an array hold?', 
      choices:['One', 'Infinite', 'Thirty', '4.29 billion'],
      answer: '4.29 billion'
    },
    {
      question: 'Can you style a webpage with Javascript?', 
      choices:['Nope', 'Only with CSS', 'Maybe', 'Of Course!'],
      answer: 'Of Course!'
    }
  ];


  let button = document.getElementById("button")
  let startBox = document.querySelector('.startbox')
  let quizWrapper = document.querySelector(".quiz-wrapper")
  let qIndex = 0
  let questionDisplay = document.getElementById("question")
  let answerList = document.getElementById('answerList')


    button.addEventListener('click', function (){
    buildQuestionCard();

    startBox.setAttribute('style', "display: none;")

    quizWrapper.removeAttribute('style')
    })

    let buildQuestionCard = ()=> {
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
        console.log('wrong')
    }
    else {console.log('correct')}
    qIndex++;
    if (qIndex === questions.length) {
        console.log('game over')
    }
    else {buildQuestionCard()}
}



