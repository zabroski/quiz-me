const start = document.querySelector(".start")
const quiz = document.querySelector(".quiz");
const question = document.querySelector(".question");
const allAnswerChoices = document.querySelectorAll (".choice");
const answerChoiceA = document.querySelector("#A");
const answerChoiceB = document.querySelector("#B");
const answerChoiceC = document.querySelector("#C");
const answerChoiceD = document.querySelector("#D");
const counter = document.querySelector(".counter");
const timeGauge = document.querySelector(".time-gauge");
const progressContainer = document.querySelector(".progress-container");
const ScoreContainer = document.getSelection(".score-container");


//Question
let questions = [
    {
        question: "how many different sounds can a cat make??",
        questionImg:"img/1.jpeg",
        choiceA: '100',
        choiceB: '150',
        choiceC: "10",
        choiceD: "persian",
        correctAnswer: "100"
    } ,
 
    {
        question: "What breed of cat has a reputation for being cross-eyed?",
        questionImg :"img/2.jpg",
        choiceA: 'Egyptian',
        choiceB: 'Bobo',
        choiceC: "Siamess",
        choiceD: "persian",
        correctAnswer: "Egyptian"

    },
     
    {
        question: "What is the most command taught to dogs?",
        questionImg :"img/3.jpg",
        choiceA: 'Siamese',
        choiceB: '150',
        choiceC: "10",
        choiceD: "persian",
        correctAnswer: "Siamese"
    },


    {
        question: "Where was did picture taken??",
        questionImg:"img/2.JPG",
        choiceA: 'Harlem',
        choiceB: 'Ouagadougou',
        choiceC: "may, 6 2014",
        choiceD: "New York",
        correctAnswer: "Harlem"
    } ,


    
    {
        question: "What is your last name",
        questionImg:"img/4.JPG",
        choiceA: 'zobre',
        choiceB: 'Zabro',
        choiceC: "Ouedrago",
        choiceD: "Sheridan",
        correctAnswer: "Zabre"
    },

    {
        question: "Where is dad from",
        questionImg:"img/5.JPG",
        choiceA: 'Burkina Faso',
        choiceB: 'Ouagadougou',
        choiceC: "New York",
        choiceD: "Unite state of America",
        correctAnswer: "Burkina Faso"
    },

    {
        question: "When was Raye born?",
        questionImg:"img/6.JPG",
        choiceA: 'Burkina Faso',
        choiceB: 'Harlem',
        choiceC: "New York",
        choiceD: "Bronx",
        correctAnswer: "New York"
    },


    {
        question: "Who is the worst President of United State",
        questionImg:"img/7.jpeg",
        choiceA: 'Donal Trump',
        choiceB: 'Summer Sheridan Zabre',
        choiceC: "Grady",
        choiceD: "Raye",
        correctAnswer: "Donal Trump"
    },

    {
        question: "Where were born Grady.z",
        questionImg:"img/8.JPG",
        choiceA: 'Burkina Faso',
        choiceB: 'Harlem',
        choiceC: "New York",
        choiceD: "Bronx",
        correctAnswer: "New York"
    },


    {
        question: "when did photo was taken and whhere",
        questionImg :"img/.9.JPG",
        choiceA: 'EST',
        choiceB: 'Mali',
        choiceC: "Summer, Harlem ",
        choiceD: "Ouest Africa",
        correctAnswer: "Summer, Harlem"
    },

    {
        question: "what is he name?",
        questionImg :"img/10.jpeg",
        choiceA: 'Syracuse',
        choiceB: 'Baby Yoda',
        choiceC: "Galaxy",
        choiceD: "Grady",
        correctAnswer: "Baby Yoda"

    },
];

// Neccessary Variable 
const lastQuestion = questions.length - 1; 
let activeQuestion = 0;
let count = 0
const questionTime = 10; // 10 seconds
const gaugeWidth = 800; // 800px
const gaugeUnit = gaugeWidth / questionTime; //80px
let TIMER;
let score = 0;

//start button event listener
start.addEventListener('click', startQuiz)


//answer choices Event Listeners
allAnswerChoices.forEach(function (clickAnswer) {
    console.log(clickAnswer)
    clickAnswer.addEventListener('click', function(e) {
        console.log(e.target.innerText)
        let userAnswer = e.target.innerText;
        checkAnswer(userAnswer)
       
    });
  });


//renderQuestion function 
function renderQuestion() {
    let q = questions[activeQuestion]
    // console.log(q.question)
    question.innerHTML = "<p>" + q.question + "</p>";
    answerChoiceA.innerHTML = q.choiceA;
    answerChoiceB.innerHTML = q.choiceB;
    answerChoiceC.innerHTML = q.choiceC;
    answerChoiceD.innerHTML = q.choiceD;
    
    let bodyImg = `url('${q.questionImg}')`;
    document.body.style.backgroundImage = bodyImg;
}


// startQuiz()

function startQuiz() {
    start.style.display = "none"
    quiz.style.visibility ="visible";
    TIMER = setInterval(renderCounter, 1000);
    renderProgress();
    renderCounter();
    renderQuestion();

}

//render progress function
function renderProgress() {
    for(let questionIndex = 0; questionIndex <= lastQuestion; questionIndex++) {
        progressContainer.innerHTML += 
        "<div class='progress-box' id=" + questionIndex + "></div>";
    }
}


// renderCounter function
function renderCounter() {
if(count <= questionTime) {
    counter.innerHTML = count;
    timeGauge.style.width = count * gaugeUnit + "px";
    count++;
    } else {
        count = 0;
        answerIsIncorect()
        nextQuestion()
    }
}

//checkAnswer Function
function checkAnswer(answer) {
    if(answer === questions[activeQuestion].correctAnswer) {
        score++;
        answerIsCorrect();  
    } else {
        answerIsIncorect();
    }
    nextQuestion()

}

// answerIsCorrect Function
function answerIsCorrect () {
    document.getElementById(activeQuestion).style.backgroundColor = 'green'
}

// answerIsIncorrect Function
function answerIsIncorect () {
    document.getElementById(activeQuestion).style.backgroundColor = 'red'
}

//nextQuestion Function
function nextQuestion() {
    // counter = 0;
    if(activeQuestion < lastQuestion) {
        activeQuestion++;
        renderQuestion()
    } else {
        clearInterval(TIMER);
        renderScore()
    }
}
console.log(nextQuestion)

// renderScore Function
function renderScore() {
    ScoreContainer.style.visibility = "visible";

    let scorePercentage = Math.round((100 * score) / questions.length);
    scorePercentage.innerHTML = `<h2>Percentage of Correct Answer Question: ${scorePercentage}</h2>`
    scorePercentage.innerHTML += `<h2>Percentage of Correct Answer Question: ${score}</h2>`
    console.log(score)
}


