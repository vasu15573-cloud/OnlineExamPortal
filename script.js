function submitExam() {
    const selectedAnswer = document.querySelector(
        'input[name="question1"]:checked'
    );

    const result = document.getElementById("result");

    if (!selectedAnswer) {
        result.textContent = "Please select an answer.";
        return;
    }

    if (selectedAnswer.parentElement.textContent.trim() === "New Delhi") {
        result.textContent = "Correct answer!";
    } else {
        result.textContent = "Wrong answer!";
    }
}