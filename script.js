var welcome = document.querySelector('.screen1');
var quiz = document.querySelector('.screen2');
var end = document.querySelector('.screen3');
var start = document.querySelector('.startbtn');
var btn1 = document.querySelector('.btnone');
var btn2 = document.querySelector('.btntwo');
var btn3 = document.querySelector('.btnthree');
var btn4 = document.querySelector('.btnfour');
var qhead = document.querySelector('.qhead');
var counter = document.querySelector('.counter');
var timeEl = document.querySelector('.time');

var secondsleft = 20;



var score = 0;
var num = 0;
// questions
var questions = [" What programming language has <p>?",
"What does Css stand for?","What type of document is script.js?",
 "which of these are a coding event?",
 "How many columns go in a row in html?",
 "How do you reference an Id in css",
 "What number does an array index start at?",
"what was javascript originally called?",
"where does a link to css go in an html doc?",
"how does a computer read a document?",
"how do you reference a class in css?",
"what does html stand for?",
"What is JSON?",
"What does JSON Stringify do?",
"What does JSON Parse do?",
"What do arrays enclose their values in? ",
"When was Javascript made?",
"which one of these is not a type loop?",
"what does DRY stand for",
""
];
//

//button 1
var option1 = ["html",
"Cool students sing",
 "Java",
 "click",
 "one",
 "#",
 "You define it",
"java text",
"<body>",
"top to bottom",
"#",
"hire this muscled lad,",
"Jason Misspelled",
"Turn an object into a string",
"Turn an object into a string",
"[]",
"1995",
"for",
"dont repeat yourself ",
""
];
//

//button 2
var option2 = ["Javascript",
"Can't stop skipping",
 "Javascript",
 "submit",
 "six",
 ".",
 "1",
"coffee script",
"<head>",
"bottom to top",
".",
"hyper text markup language,",
"Javascript Object Notation",
"Turn a string into an object",
"Turn a string into an object",
"()",
"1985",
"while",
"dont raise yaks",
""
];
//
//button 3
var option3 = ["bootstrap",
"Clean style sheet",
 "Coffeescript",
 "keydown",
 "twelve",
 "&",
 "0",
"live script",
"<div>",
"you specify",
"&",
"heat that mocha lots",
"Javascript old notation",
"Turn a string into an array",
"Turn an integer into a string ",
"{}",
"1990",
"circle",
"doughnuts rubarb yarn",
""
];
//
//button 4
var option4 = ["css","Cascading style sheets",
 "A boring one",
 "all of the above",
 "as many as you want",
 "|",
 "12",
"code stuff",
"<footer>",
"none of the above",
"|",
"hold the most llamas",
"a child element",
"Turn a string into an integer",
" deactivate a function",
"none of the above",
"2010",
"all of the above",
"dude runs yonder",
""

];
//

//answers
var answer = ["html",
"Cascading style sheets",
 "Javascript",
  "all of the above",
  "twelve",
  "#",
  "0",
"live script",
"<head>",
"top to bottom",
".",
"hyper text markup language",
"Javascript Object Notation",
"Turn an object into a string",
"Turn a string into an object",
"[]",
"1995",
"circle",
"dont repeat yourself",
""
];
//




//starting view

start.textContent = "Start Quiz";
quiz.style.display = 'none';
end.style.display = 'none';



//changing view
start.addEventListener("click", function(event){

welcome.style.display = 'none';
quiz.style.display ='';
timer();

    
})







//button sequence
qhead.textContent = questions[0];
btn1.textContent = option1[0];
btn2.textContent = option2[0];
btn3.textContent = option3[0];
btn4.textContent = option4[0];



function buttonclick(){


    if(event.target.textContent == answer[num]){
        score++
        console.log(score)
    } else{
        secondsleft = secondsleft- 5;
    }

    if (num >= qhead.length){
      num = 0
    }
    console.log(event.target.textContent)
    console.log(answer[num])
    
    num++
    
    qhead.textContent = questions[num];
    btn1.textContent = option1[num];
    btn2.textContent = option2[num];
    btn3.textContent = option3[num];
    btn4.textContent = option4[num];
    console.log(event.target.textContent)
    console.log(answer[num]) 


}

btn1.addEventListener("click", function(event){

buttonclick();
keepScore();

})
btn2.addEventListener("click", function(event){

buttonclick();
keepScore();

})
btn3.addEventListener("click", function(event){

buttonclick();
keepScore();

})
btn4.addEventListener("click", function(event){

buttonclick();
keepScore();

})


//score and highscore


function keepScore(){
    counter.textContent ="score:"+ score;
}


//timer
function timer(){


    var timerInterval = setInterval(function(){
        secondsleft--;
        timeEl.textContent = secondsleft + " sec remaining"
        if(secondsleft <= 0){
            clearInterval(timerInterval);
           endview();
        }
    
    }, 1000);
    
    
    }

    function endview(){
        quiz.style.display = 'none';
        timeEl.style.display='none';
        end.style.display= '';
        







    }

    // highscore list







    var scoreInput = document.querySelector("#score-text");
    var scoreForm = document.querySelector("#score-form");
    var scoreList = document.querySelector("#score-list");
    var scoreCountSpan = document.querySelector("#scores-count");
    
   
    var initials = []
    
    
    init();
    
    function renderScore() {
      
      scoreList.innerHTML = "";
      scoreCountSpan.textContent = initials.length;
    
      for (var i = 0; i < initials.length; i++) {
        var initial = initials[i];
       
    
        var li = document.createElement("li");
        li.textContent = initial ;
        li.setAttribute("data-index", i);
    
        var button = document.createElement("button");
        button.textContent = "Clear";
        button.setAttribute("class", "clearbtn")
    
        li.appendChild(button);
        scoreList.appendChild(li);

      }
    }
    
    function init() {

      var stored = JSON.parse(localStorage.getItem("scores"));
      
    
    
      if (stored !== null) {
        initials = stored;
      
      }
    
    
      renderScore();
    }
    
    function storeScores() {

      localStorage.setItem("scores", JSON.stringify(initials));
    
    }
    
    
    
    
    scoreForm.addEventListener("submit", function(event) {
      event.preventDefault();
    
      var scoreText = scoreInput.value.trim();
    
      
      if (scoreText === "") {
        return;
      }
    
      var finaltext = scoreText+" score: "+ score +"   ";
      console.log(finaltext)
      initials.push(finaltext);

      
      scoreInput.value = "";
    
      storeScores();
      renderScore();
      done();
      scoreForm.style.display = 'none';
    });
    
    
    
    scoreList.addEventListener("click", function(event) {
      var element = event.target;
    
    
      if (element.matches("button") === true) {
       
        var index = element.parentElement.getAttribute("data-index");
        initials.splice(index, 1);
        
    
        
        storeScores();
        renderScore();
        
        
      }
    });










// Beginning and end screen toggles

var doneclick = document.querySelector("#done");
var home = document.querySelector("#home")

doneclick.addEventListener("click", function(){


done();


})

home.addEventListener("click",function(){



  start.textContent = "Start Quiz";
  welcome.style.display = '';
  quiz.style.display = 'none';
  end.style.display = 'none';
  secondsleft = 20;
  score=0



})






function done(){


  welcome.style.display = 'none';
  quiz.style.display = 'none';
  end.style.display = '';

  


}


    