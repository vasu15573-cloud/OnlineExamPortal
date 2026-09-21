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

function login() {
    const username = document.getElementById("username").value;
    const loginMessage = document.getElementById("loginMessage");

    if (username === "") {
        loginMessage.textContent = "Please enter your username.";
    } else {
        loginMessage.textContent = "Login successful!";
    }
}