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

var timer = document.querySelector("#start")
var timeLeft = 90

timer.addEventListener("click", function() {

    var timeInterval = setInterval(function() {
        currentTime.textContent = "Remaining Time: " + timeLeft; 
        timeLeft--; 
        if (timeLeft === 0) { 
            currentTime.textContent = "No more Time"; 

            clearInterval(timeInterval); 
        }
        }, 1000);
        render(questionIndex);
        
    
})
