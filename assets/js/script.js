const question = document.querySelector('#question'); 
const choices = Array.from(document.querySelectorAll('#.choice-text')); 
const progressText = document.querySelector('#progressText'); 
const scoreText= document.querySelector('#score'); 
const progressBarFull = document.querySelector('#progressBarFull'); 

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        questions: 'What are variables used for in JavaScript Programs?', 
        choice1: 'Storing numbers, dates, or other values',
        choice2: 'Varying randomly',
        choice3: 'Causing high-school algebra flashbacks',
        choice4: 'None of the above',
        answer: 1, 
    },
    {
        questions: 'What are variables used for in JavaScript Programs?', 
        choice1: 'Storing numbers, dates, or other values',
        choice2: 'Varying randomly',
        choice3: 'Causing high-school algebra flashbacks',
        choice4: 'None of the above',
        answer: 1, 
    },
    {
        questions: 'What are variables used for in JavaScript Programs?', 
        choice1: 'Storing numbers, dates, or other values',
        choice2: 'Varying randomly',
        choice3: 'Causing high-school algebra flashbacks',
        choice4: 'None of the above',
        answer: 1, 
    },
    {
        questions: 'What are variables used for in JavaScript Programs?', 
        choice1: 'Storing numbers, dates, or other values',
        choice2: 'Varying randomly',
        choice3: 'Causing high-school algebra flashbacks',
        choice4: 'None of the above',
        answer: 1, 
    },

]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

startGame = () => {
    questionCounter = 0 
    score = 0
    availableQuestions = [...questions ]
    getNewQuestions()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionsCounter > MAX_QUESTIONS) {
        localStorage.setITem('mostRecentScore',score)

        return window.location.assign('/end.html')
    }
    
    questionCounter++
    progressText.innertext = 'Question $ '
}







































/* var questions = [
    {
        prompt: 
        answer: 

    }, 
    {
        prompt: 
        answer: 


    }




]
*/ 


/*
for(var i=0; i <questions.lenth; i++){
    var response = window.prompt(questions[i].prompt); 
    if(response == questions[i].answsers){
        score++; 
        alert("Correct!"); 
    } else { 
        alert("Wrong!"); 
    }
}

alert("you got" + score + "/" + questions.length); 

*/ 