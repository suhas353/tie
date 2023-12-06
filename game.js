document.getElementById('Your answer').addEventListener('click', checkAnswer);

function checkAnswer() {
   
    const resultElement = document.getElementById('result');
    const userAnswer = prompt('Enter your answer:'); 

    if (userAnswer === 'William Shakespeare') {
        resultElement.textContent = 'Congratulations! You have escaped!';
    } else {
        resultElement.textContent = 'Sorry, that\'s not correct. Try again.';
    }
}
