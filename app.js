const questions = [
    {
        question: "What is the capital of Pakistan?",
        answers: [
            { text: "Lahore", correct: false },
            { text: "Karachi", correct: false },
            { text: "Islamabad", correct: true },
            { text: "Pishawar", correct: false }
        ]
    },
    {
        question: "Who is president of Pakistan?",
        answers: [
            { text: "Quaid.e.Azam", correct: true },
            { text: "Allama Iqbal", correct: false },
            { text: "Liaquat Ali Khan", correct: false },
            { text: "Sir Syed Ahmed Khan", correct: false }
        ]
    },
    {
        question: " When did Pakistan came into being?",
        answers: [
            { text: "1948", correct: false },
            { text: "1947", correct: true },
            { text: "1949", correct: false },
            { text: "1950", correct: false }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');
const scoreContainer = document.getElementById('score-container');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart-button');

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

restartButton.addEventListener('click', () => {
    currentQuestionIndex = 0;
    score = 0;
    scoreContainer.style.display = 'none';
    document.getElementById('question-container').style.display = 'block';
    setNextQuestion();
});

function setNextQuestion() {
    resetState();
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = 'none';
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(answer) {
    if (answer.correct) {
        score++;
    }
    if (currentQuestionIndex < questions.length - 1) {
        nextButton.style.display = 'block';
    } else {
        showScore();
    }
}

function showScore() {
    document.getElementById('question-container').style.display = 'none';
    scoreContainer.style.display = 'block';
    scoreElement.innerText = score;
}

setNextQuestion();
