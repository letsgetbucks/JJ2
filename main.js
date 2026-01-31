
const generateBtn = document.getElementById('generate-btn');
const ballContainer = document.querySelector('.ball-container');
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Theme switcher logic
themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    themeToggleBtn.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});

// Load theme from local storage
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggleBtn.textContent = 'Light Mode';
    } else {
        themeToggleBtn.textContent = 'Dark Mode';
    }
});


generateBtn.addEventListener('click', () => {
    generateLottoNumbers();
});

function generateLottoNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);
    displayNumbers(sortedNumbers);
}

function displayNumbers(numbers) {
    ballContainer.innerHTML = ''; // Clear previous numbers
    numbers.forEach((number, index) => {
        const ball = document.createElement('div');
        ball.classList.add('ball', `color-${(index % 6) + 1}`);
        ball.textContent = number;
        ballContainer.appendChild(ball);
    });
}

// Initial generation
generateLottoNumbers();
