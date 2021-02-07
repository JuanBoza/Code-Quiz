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