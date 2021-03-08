
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
var name = document.querySelector("#name");
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