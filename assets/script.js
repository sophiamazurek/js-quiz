// Refrence for the questions (taken from quizlet) https://quizlet.com/117039332/javascript-quiz-flash-cards/ and https://quizlet.com/393399799/javascript-exam-i-flash-cards/
var questions = [
    { q:'An external JaveScript must contain the <script> tag?', a:'f'},
    { q:'A variable name can begin wiht a number?', a:'f'},
    { q:'If you have more than one variable of the same type, you can declare all of them in a single statement.', a:'t'},
    { q:'JavaScript allows the use of either double or single quotes to enclose the value of the text in a string variable.', a:'t'},
    { q:'While mathematical operations must be done following the rules of the hierarchy of operations, logical operators have no such rules.', a:'f'},
    { q:'Rational operators can be used to help put names in alphabetical order.', a:'t'}
];

//question.length-1

var timerEL = document.getElementById('countdown');
var timer; 
var time = 60;
var userInput = "";
var index=0;



//loop for questions

//1. play the game
//2. add the timer
//3. add local storage (stores users time and name)


// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score

//start game:
    //click startbtn and state the game
//1. onclick fx to start the game

//2. display card fx
function displayCard(){
    
    
    // (LATER) check if we are at the end of the game.. if so .. go to gameover fx
    //Hide start btn (later)
    //hide save score (later)
//displays q
console.log(questions[index].q)
//#questionArea
document.querySelector("#questionArea").textContent = questions[index].q;
console.log(questions[index].a)
//<button id="f" class="userBtn" >FALSE</button>
var btn= document.createElement("button"); //<button></button>
btn.setAttribute("class","userBtn"); //<button class="userBtn"></button>
btn.setAttribute("id","f test"); //<button class="userBtn" id="f"></button>
btn.setAttribute("onclick", "checkAns()")
btn.textContent="false";
var btn2= document.createElement("button"); //<button></button>
btn2.setAttribute("class","userBtn"); //<button class="userBtn"></button>
btn2.setAttribute("id","t test"); //<button class="userBtn" id="f"></button>
btn2.setAttribute("onclick", "checkAns()")
btn2.textContent="true";

document.querySelector("#btnArea").appendChild(btn);
document.querySelector("#btnArea").appendChild(btn2);
//document.querySelector(".userBtn").onclick = function(){alert("works")};

// displays choices
//timers starts
//user picks choices, 

//Questions loop for the game
for (var i = 0; i < questions.lenght-1; i++) {
    var answer = confirm(questions[i].q);
    if(
        (answer === true && questions[i].a === 't') ||
        (answer === false && questions[i].a === 'f')
    ){
        score++;
        alert('Correct!');
    } else{
        alert('Wrong!');
    }
}

}

function checkAns(){
    //onclick trigger
    //get user input (NEED TO DO)
    //compare against questions[index].a
    //alert(this.getAttribute("id"));
    console.log(this)
        //gets evaluated to right or wrong
    //displays right or wrong
//moves the the next card until you run out
    //index++;
    //displayCard();
}




//3. game over fx
//when the game is over
    //game is over, 
    //displays score
    //submit name (store to local storage)

    displayCard();