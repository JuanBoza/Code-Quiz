
var count = 150; 
var index = 0; 
var timeID; 

var startBtn = document.querySelector("#startBtn");
var cancelBtn = document.querySelector("#cancelBtn");
var timer = document.querySelector("#tmer");
var questionsElement = document.querySelector("#question");
var questionsTitle = document.querySelector("#questionTitle");
var choicesElement = document.querySelector("#choices");
var feedbackElement = document.querySelector("#feedback");
var nameL = document.querySelector("#name");
var submitBtn = document.querySelector("#submit");


function setTimer() {
    var interval = setInterval(function() {
        timer.innerHTML = count;
        count--;
        if (count === 0 ) {
            clearInterval(interval);
            document.getElementById("timer").innerHTML = 'done';
        }
    }, 1000);
}


function stopTimer() {
    if (count <= 0) {
        clearInterval(count);
    }
}

function cancel() {
    cancelBtn.addEventListener("click,", function() {
        $startScreenElement = $("#start-screen");
        $startScreenEl.attr("class", "hide");
    });
}

function startQuiz() {
    questionsElement.addEventListener("click", function() {
        var $startScreenElement = $("#start-screen");
        $startScreenElement.attr("class", "hide");
        questionsElement.removeAttribute("class");
        setTimer();
    });
    getQuestions();
}

function getQuestions() {
    var currentQuestion = questions[index];
    questionsTitle.textContent = currentQuestion.question;
    choicesElement.innerHTML = "";

    currentQuestion.choices.forEach(function( choice, i ){
        var choiceNew = document.getElement("button");
        choiceNew.setAttribute("class", "choice");
        choiceNew.setAttribute("value", choice);
        choiceNew.textContent = i + 1 + "." + choice;
        choiceNew.onclick = clickQuestion;
        choicesElement.appendChild(choiceNew);
    });
}

function clickQuestion() {
    if (this.value !==questions[index].answer) {
        count -=15;
        if (count < 0) {
            count = 0;
        }
        timer.textContent = count;
        feedbackElement.textContent = "wrong";

    } else if (this.value ===questions[index].answer) {
        feedbackElement.textContent = "correct";
    }

    feedbackElement.setAttribute("class", "feedback");
    setTimeout(function () {
        feedbackEl.setAttribute("class", "feedback hide");
    }, 1000);
    index++;

    if (indexQ === questions.length) {
        endQuiz();
    } else {
        getQuestion();
    }
}


function endQuiz() {
    stopTimer();

    var endScreenElement = document.getElementById("end-screen");
    endScreenElement.removeAttribute("class");

    var finalScoreElement = document.getElementById("fina;-score");
    finalScoreElement.textContent = count;

    questionsElement.setAttribute("class", "hide");


}

function highScore() {
    var init = nameL.value.trim();

    if (init !=="") {
        var scores = JSON.parse(window.localStorage.getItem("scores")) || [];
    }

    var newS = {
        score: count,
        init: init
    };
    scores.push(newS);
    window.localStorage.setItem("scores",JSON.stringify(scores)) || [];
    window.location.href = "highscores.html";
}

startQuiz();
cancelBtn.onclick = cancel();
submitBtn.onclick = highScore;