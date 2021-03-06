//var startbtn = document.getElementById("startbtn");
var quesitonareaDiv = document.getElementById("questionarea");
var index = 0;
var truebtn = document.querySelector("#truebtn");

document.querySelector(".questionarea").style.display = "none";
document.querySelector("#highscoreInput").style.display = "none";
document.querySelector("#savescore").style.display = "none";
//  Variable that will hold our setInterval that runs the stopwatch
var intervalId;

//prevents the clock from being sped up unnecessarily
var clockRunning = false;

// Our stopwatch object
var stopwatch = 
{

  time: 60,


  reset: function() 
  {

    stopwatch.time = 60;
    stopwatch.lap = 1;

    // DONE: Change the "display" div to "00:00."
    document.querySelector("#display").textContent ="01:00";


  },

  start: function() 
  {

    // DONE: Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
        intervalId = setInterval(stopwatch.count, 1000);
        clockRunning = true;
    }
  },
  stop: function() 
  {

    // DONE: Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(intervalId);
    clockRunning = false;
  },
  
  count: function() 
  {
     

    //if time is negative
        //stop time -> go to game over fx 
    //else do whatever below

    if ( stopwatch.time <=0){
        gameOver();
        stopwatch.stop()

    }
    else {


        // DONE: increment time by 1, remember we cant use "this" here.
        stopwatch.time--;
        //we dont want to have neg value
        //console.log("time: "+stopwatch.time)

        // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
        //       and save the result in a variable.
        var converted = stopwatch.timeConverter(stopwatch.time);
        //console.log(converted);

        // DONE: Use the variable we just created to show the converted time in the "display" div.
        document.querySelector("#display").textContent=converted;
    }
  },
  
  losetime: function() 
  {
    stopwatch.time-=10;
      if (stopwatch.time <=0){
          gameOver();
          stopwatch.stop();
      }
      else{
       
        //console.log("time: "+stopwatch.time)

        // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
        //       and save the result in a variable.
        var converted = stopwatch.timeConverter(stopwatch.time);
        //console.log(converted);

        // DONE: Use the variable we just created to show the converted time in the "display" div.
        document.querySelector("#display").textContent=converted;
      }
      

  },
  timeConverter: function(t) 
  {
    //t=1
    //min0
    //min=00
    //sec1
    //sec=01
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  }
};



function startQuiz() {
   
stopwatch.start();    
displayCard();

  

}

function displayCard(){
    document.querySelector(".questionarea").style.display = "block";
    //when the game ends wrt the array
    //questions.length-1
    //index
    //when to go to the next card
    console.log("index "+ index);
    if(index< questions.length){

  
    //empty out the btns
    document.querySelector("#choices").textContent="";
    var question =document.getElementById("questionArea");
    question.innerHTML = questions[index].q;
      // <button id="choicebtn" class="buttons choicebtn" value="false">FALSE</button>
      var btn = document.createElement("button");
      //<button></button>
      btn.setAttribute("id","choicebtn");
        //<button id="choicebtn"></button>
      btn.setAttribute("class","choicebtn buttons");
      btn.setAttribute("value", "f");
         //<button id="choicebtn" value="false"></button>
      btn.textContent="FALSE";
      //<button id="choicebtn" value="false">FALSE</button>
      btn.onclick = checkAns;
      //stick to the page ( #choices)
      document.querySelector("#choices").appendChild(btn)
  
      var btn2 = document.createElement("button");
      //<button></button>
      btn2.setAttribute("id","choicebtn");
        //<button id="choicebtn"></button>
      btn2.setAttribute("class","choicebtn buttons");
      btn2.setAttribute("value", "t");
         //<button id="choicebtn" value="true"></button>
      btn2.textContent="TRUE";
      //<button id="choicebtn" value="false">TRUE</button>
      btn2.onclick = checkAns;
      //stick to the page ( #choices)
      document.querySelector("#choices").appendChild(btn2)
    }
    //when you finish the game
 
    if(index >questions.length-1){
        gameOver();
    }
    //run out of time (do later if cond)

}

function checkAns(){
    //get user data
    console.log(this.value)

    //get actual ans
    console.log(questions[index].a)
    //compare
    //cases:
    //right
        //userinput == actual ans
            //what do we do? display "correct" ("#answercorrect")
            if(this.value == questions[index].a){
                document.querySelector("#answercorrect").textContent = "Correct";
            }
    //wrong
        //userinput != act ans
            //display "wrong" ("#answercorrect")
            //subtract time (do later)
            if(this.value != questions[index].a){
                document.querySelector("#answercorrect").textContent = "Wrong";
                stopwatch.losetime();
            }
    
    //update index
    index++;

    displayCard();


}

function gameOver(){
    stopwatch.stop();
  
    document.querySelector(".questionarea").style.display = "none";
    document.querySelector("#highscoreInput").style.display = "block";
    document.querySelector("#savescore").style.display = "block";
    document.querySelector(".startbtn").style.display = "none";
    //display enter your name area
    //get userinput and their score (time) and store to local storage
    //trick is to store in an array of object (when you store into local storage it needs to be a string (stringify()))
}

document.querySelector(".startbtn").onclick = startQuiz;


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

// function clock() {
//     time--;
//     timerEL.textContent = time;

//     if (time <= 0) {
//         clearInterval(timer);
//         console.log(time);
//     }
// }
   
//user picks choices, 
//Display the start of the game with a score of zero
var score = 0;

//let buttonsArray = document.querySelector("#truebtn");
// document.querySelector(".choicebtn").addEventListener("click", function(){ 
//     console.log(this.value)
//     // var question = document.getElementById("questionArea")
//     // var answer = elem.id;
//     // console.log(answer);
//     // console.log(questions[currentQuestionIndex]);

//     // if (
//     //     (answer === "true" && questions[currentQuestionIndex].a === 't') ||
//     //     (answer === "false" && questions[currentQuestionIndex].a === 'f')
//     // ) {

//     //     document.getElementById("answercorrect").innerHTML = "Correct!";
//     //     currentQuestionIndex++;
//     // } else {
//     //     time -= 15;

//     //     document.getElementById("answercorrect").innerHTML = "Wrong!";
//     //     currentQuestionIndex++;
//     // };
//     // console.log("question: ", currentQuestionIndex)

//     // if (currentQuestionIndex < questions.length) {

//     //     question.innerHTML = questions[currentQuestionIndex].q;
//     // } else {
//     //     quizEnd()
//     // }
    
// });
// function quizEnd() {
//     console.log("quizend:", time)
//     quesitonareaDiv.innerHTML = ""
//     clearInterval(timer);
//     timerEL.textContent = time;
//     document.getElementById('quizscore').innerHTML = 'Score' + time;
// };

document.querySelector("#savescore").onclick = function(){
    
    //grab users name
    console.log(document.querySelector("#initialInput").value)
    //get user's score
    console.log(stopwatch.time)
    // var score={
    //     name: text
    //     score: stopwatch.time
    // }
    //set to local storage
    localStorage.setItem("name", "score");
}
function getHighScore() {
    console.log ("All the scores: ", localStorage)
}

function getScore(forwho) {
    return localStorage.getItem(forwho)
}


document.getElementById('highscoreInput').innerHTML = ` 
    Enter your name:
    <input type="text" id="initialInput"></input>
    `
var initialInputEl = document.getElementById("initialInput");


getScore();










