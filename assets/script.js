var startbtn = document.getElementById("startbtn");
var quesitonareaDiv = document.getElementById("questionarea");
var currentQuestionIndex = 0;
var truebtn = document.querySelector("#truebtn");

var startQuiz = function () {
    var question =document.getElementById("questionArea");
    question.innerHTML = questions[currentQuestionIndex].q;
    timer = setInterval(clock, 6000)
}


// Refrence for the questions (taken from quizlet) https://quizlet.com/117039332/javascript-quiz-flash-cards/ and https://quizlet.com/393399799/javascript-exam-i-flash-cards/
var questions = [
    { q:'An external JaveScript must contain the <script> tag?', a:'f'},
    { q:'A variable name can begin wiht a number?', a:'f'},
    { q:'If you have more than one variable of the same type, you can declare all of them in a single statement.', a:'t'},
    { q:'JavaScript allows the use of either double or single quotes to enclose the value of the text in a string variable.', a:'t'},
    { q:'While mathematical operations must be done following the rules of the hierarchy of operations, logical operators have no such rules.', a:'f'},
    { q:'Rational operators can be used to help put names in alphabetical order.', a:'t'}
];

//timer for quiz below 
//refrence for timming https://www.w3schools.com/js/js_timing.asp
var timerEL = document.getElementById('countdown');
var timer; 
var time = 60;
var userInput = "";
var index=0;    

function clock() {
    time--;
    timerEL.textContent = time;

    if (time <= 0) {
        clearInterval(timer);
        console.log(time);
    }
}
   
//user picks choices, 
//Display the start of the game with a score of zero
var score = 0;

let buttonsArray = document.querySelector("#truebtn");
trueBtn.addEventListener("click", function(){ console.log("you clicked true") } )
    var question = document.getElementById("questionArea");
    var answer = elm.id;
    console.log(answer);
    console.log(questions[currentQuestionIndex]);

    if (
        (answer === "true" && questions[currentQuestionIndex].a === 't') ||
        (answer === "false" && questions[currentQuestionIndex].a === 'f')
    ) {

        document.getElementById("answercorrect").innerHTML = "Correct!";
        currentQuestionIndex++;
    } else {
        time -= 15;

        document.getElementById("answercorrect").innerHTML = "Wrong!";
        currentQuestionIndex++;
    };
    console.log("question: ", currentQuestionIndex)

    if (currentQuestionIndex < questions.length) {

        question.innerHTML = questions[currentQuestionIndex].q;
    } else {
        quizEnd()
    }
    
;

function quizEnd() {
    console.log("quizend:", time)
    quesitonareaDiv.innerHTML = ""
    clearInterval(timer);
    timerEL.textContent = time;
    document.getElementById('quizscore').innerHTML = 'Score' + time;
};

function getHighScore() {
    console.log ("All the scores: ", localStorage)
}

function getScore(forwho) {
    return localStorage.getItem(forwho)
}

//Refrence: alis github add in 
document.getElementById('highscoreInput').innerHTML = ` 
    Enter your name:
    <input type="text" id="initialInput"></input>
    <button id="saveScore" class="saveButton">Save Score</button>
    `
var initialInputEl = document.getElementById("initialInput");

startbtn.onclick = startQuiz;
getScore();