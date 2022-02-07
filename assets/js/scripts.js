var buttonEl = document.querySelector(".start-btn")
var timerEl = document.querySelector(".timer")
var questionsEl = document.querySelector(".questions");
var answersEl = document.querySelector(".answers")
var titleEl = document.querySelector(".start-title")

var questionArr = ["Commonly used data types DO Not Include: ",
    "The condition in an if / else statment is enclosed with ______ .",
    "Arrays in JavaScript can be use to store _____. ",
    "Strings values must be enclosed within _____ when being assigned to variables.",
    "A very useful tool used durning devlopment and debugging for printing content to the debugger is: "
];

var answersArr = [["Strings","Booleans","Alerts","Numbers"], 
    ["Quotes","Curly Brackets","Parenthesis","Square Brackets"],
    ["Numbers and Strings","Other Arrays","Booleans","All of The Above"],
    ["Commas", "Curly Brackets","Quotes","Parenthesis"],
    ["JavaScript","Terminal/Bash","For Loops","Console.log"]
];

var countDown = function () {
    var timeLeft = 75

    var timer = setInterval(function () {
        if (timeLeft > 0) {
            timerEl.textContent = timeLeft;
            timeLeft--
        }
    }, 1000)
    questions()
};

var questions = function () {
    buttonEl.remove()
    titleEl.remove()
    for (var i=0;i<questionArr.length;i++) {
        questionsEl.textContent = questionArr[0]
        for (var i=0;i<answersArr[0].length;i++){    
            var answerCon = document.createElement("div")
            answerCon.classList.add("answer-div");
            answersEl.appendChild(answerCon);

            var answerBlock = document.createElement("span")
            answerBlock.textContent = answersArr[i][i];
            answerCon.appendChild(answerBlock);
        }
        
    }

}


























buttonEl.addEventListener("click", countDown);