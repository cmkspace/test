document.addEventListener('DOMContentLoaded', () => {
  const generateBtn = document.getElementById('generate-btn');
  const ballsContainer = document.getElementById('balls-container');

  function getBallColorClass(num) {
    if (num <= 10) return 'ball-yellow';
    if (num <= 20) return 'ball-blue';
    if (num <= 30) return 'ball-red';
    if (num <= 40) return 'ball-gray';
    return 'ball-green';
  }

  function generateLottoNumbers() {
    const numbers = [];
    while (numbers.length < 6) {
      const r = Math.floor(Math.random() * 45) + 1;
      if (numbers.indexOf(r) === -1) numbers.push(r);
    }
    return numbers.sort((a, b) => a - b);
  }

  function renderBalls() {
    // Clear previous balls
    ballsContainer.innerHTML = '';
    
    const luckyNumbers = generateLottoNumbers();
    
    luckyNumbers.forEach((num, index) => {
      const ball = document.createElement('div');
      ball.className = `lotto-ball ${getBallColorClass(num)}`;
      ball.textContent = num;
      // Staggered animation
      ball.style.animationDelay = `${index * 0.1}s`;
      ballsContainer.appendChild(ball);
    });
  }

  generateBtn.addEventListener('click', () => {
    // Add a quick feedback effect
    generateBtn.disabled = true;
    renderBalls();
    
    // Re-enable after animation finishes (approx 1s)
    setTimeout(() => {
      generateBtn.disabled = false;
    }, 1000);
  });
});
