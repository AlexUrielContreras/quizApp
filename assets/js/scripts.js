var buttonEl = document.querySelector(".start-btn");
var timerEl = document.querySelector(".timer");
var questionsEl = document.querySelector(".questions");
var answersEl = document.querySelector(".answers");
var titleEl = document.querySelector(".start-title");
var highScoreEl = document.querySelector(".highscore");


var questionArr = ["Commonly used data types DO Not Include: ",
    "The condition in an if / else statment is enclosed with ______ .",
    "Arrays in JavaScript can be use to store _____. ",
    "Strings values must be enclosed within _____ when being assigned to variables.",
    "A very useful tool used durning devlopment and debugging for printing content to the debugger is: "
];
var answersArr = [["Strings", "Booleans", "Alerts", "Numbers"],
["Quotes", "Curly Brackets", "Parenthesis", "Square Brackets"],
["Numbers and Strings", "Other Arrays", "Booleans", "All of The Above"],
["Commas", "Curly Brackets", "Quotes", "Parenthesis"],
["JavaScript", "Terminal/Bash", "For Loops", "Console.log"]
];
var solutionArr = ["Alerts", "Curly Brackets", "All of The Above", "Quotes", "Console.log"]

var index = 0
var timerId;
var timeLeft = 75

var countDown = function () {

    timerId = setInterval(function () {
        if (timeLeft >= 0) {
            timerEl.textContent = timeLeft;
            timeLeft--
            questions()
        }
        else {
            clearInterval(timerId)
            endGame();
        }
    }, 1000);
};
var questions = function () {
    buttonEl.remove()
    titleEl.remove()
    if (index < questionArr.length) {
        questionsEl.textContent = questionArr[index];
        var li = "";
        answersEl.innerHTML = "";
        for (var i = 0; i < answersArr[index].length; i++) {
            li = li + `
            <li><button>${answersArr[index][i]}</button></li>

        `
        };
        answersEl.innerHTML = `<ol>${li}</ol> 
    <h3 class="message"></h3>`
        var button = document.querySelectorAll("button");
        var message = document.querySelector(".message")
        for (var i = 0; i < button.length; i++) {
            button[i].addEventListener("click", function () {
                index++;
                if (this.textContent === solutionArr[index - 1]) {
                    message.innerHTML = "Correct!"
                } else {
                    message.innerHTML = "Wrong!"
                    timeLeft -= 10
                }
                setTimeout(questions, 1000)
            })
        }
    }
    else {
        clearInterval(timerId)
        endGame()
        return;

    }
};
let saveName = function(data) {
    localStorage.setItem("score2", JSON.stringify(data))
}
var endGame = function () {
    let newTime = timeLeft + 1;
    questionsEl.textContent = "All Done"
    answersEl.textContent = `Your Final Score is ${newTime}`;

    var labelEl = document.createElement("label")
    labelEl.textContent = "Enter Your initals: "
    answersEl.appendChild(labelEl)

    var inputEl = document.createElement("input")
    inputEl.setAttribute("class", "initials")
    answersEl.appendChild(inputEl)

    var submitEl = document.createElement("button")
    submitEl.setAttribute("class", "sub-btn")
    submitEl.setAttribute("type", "button")
    submitEl.textContent = "Submit"
    answersEl.appendChild(submitEl)
        
    submitEl.addEventListener("click", function(){
        let initialInput = document.querySelector(".initials").value;
        saveName(initialInput)
        savedIt = localStorage.getItem("score2");

        questionsEl.textContent = "Highscore";
        answersEl.textContent = "";
        
        for (var i=0;i<localStorage.length;i++){
        
        let displayHighScore = document.createElement('h3')
        displayHighScore.setAttribute("class", "highscore-sec")  
        
        let score = JSON.parse(savedIt) ;
        
        displayHighScore.textContent = score + " " + newTime;
        answersEl.appendChild(displayHighScore);
        

        let buttonDiv = document.createElement("div")
        let clearEl = document.createElement("button");
        let goBack = document.createElement("button");

        clearEl.textContent = "Clear";
        goBack.textContent = "Go Back";
        
        buttonDiv.appendChild(clearEl);
        buttonDiv.appendChild(goBack);
        answersEl.appendChild(buttonDiv);
        
        clearEl.addEventListener("click", function(){
            displayHighScore.textContent = " ";
        })
    }
    });

    
};





















buttonEl.addEventListener("click", countDown);
