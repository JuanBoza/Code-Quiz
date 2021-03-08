
var currentQuestion = {}
var acceptingAnswers = true
var score = 0
var questionIndex = 0;
var availableQuestions = []
var penalty = 10; 
var time = document.querySelector("#time");
var ulCreate = document.createElement("ul");




var time = document.querySelector("#start")
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


function render(questionIndex) {
    questionsDiv.innerHTML = "";
    ulCreate.innerHTML = "";
    for (var i = 0; i < quiz.length; i++) {
        var userQuestion = quiz[uestionIndex].question;
        var userchoices = quiz[questionIndex].choices;
        questionsDiv.textContent = userQuestion;
        }

    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li"); 
        listItem.textContent = newItem;
        questionsDiv.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (check));
    })
    
function check(event) {
    var element= event.target; 

    if (element.matches("li")) {
        score++; 
        createDiv.textContent = "Corrrect"; 
    
    } else { 
        timeLeft =timeleft - penalty; 
        createDiv.textContent = "Incorrect! The correct answer is: " + quiz[questionIndex].answer;
        }

    }
    }

    questionIndex++;

    if (questionIndex >= quiz.length) {
        createDiv.textContent = "End of quiz!";
        

    } else {
        render(questionIndex);
    }
    
    questionsDiv.appendChild(createDiv);


