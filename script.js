const quizQuestions = [
    { question: "You walk into a mysterious library. What do you do?", dimension: "I" },
    { question: "At a gathering, are you the life of the party?", dimension: "E" },
    { question: "Do you make decisions more with logic or feeling?", dimension: "T" },
    { question: "Is your room typically organized or chaotic?", dimension: "J" },
    // More questions here
];

function submitQuiz() {
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = "Your realm is: Sorin!"; // Placeholder result
    resultDiv.classList.remove("hidden");
}
