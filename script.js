const quizData = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks Text Mark Language"],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "Which language is used for styling web pages?",
        options: ["HTML", "CSS", "JavaScript"],
        answer: "CSS"
    },
    {
        question: "Which language runs in the browser?",
        options: ["JavaScript", "Python", "C++"],
        answer: "JavaScript"
    }
];

const quiz = document.getElementById("quiz");
const submit = document.getElementById("submit");
const result = document.getElementById("result");

function loadQuiz() {
    quiz.innerHTML = "";
    quizData.forEach((q, i) => {
        const div = document.createElement("div");
        div.classList.add("question");
        div.innerHTML = `<p>${q.question}</p>` +
            q.options.map(opt => `<label><input type="radio" name="q${i}" value="${opt}"> ${opt}</label>`).join("<br>");
        quiz.appendChild(div);
    });
}

submit.addEventListener("click", () => {
    let score = 0;
    quizData.forEach((q, i) => {
        const answer = document.querySelector(`input[name="q${i}"]:checked`);
        if(answer && answer.value === q.answer) score++;
    });
    result.textContent = `You scored ${score} / ${quizData.length}`;
});

loadQuiz();
