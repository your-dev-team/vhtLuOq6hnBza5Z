document.getElementById('timer-form').addEventListener('submit', setTimer);
document.getElementById('start-button').addEventListener('click', startTimer);
document.getElementById('reset-button').addEventListener('click', resetTimer); // Added event listener for reset button

let countDown;
let timerId; // Defined timerId globally to access it in resetTimer function

function setTimer(event) {
  event.preventDefault();
  
  const timerInput = document.getElementById('timer-input');
  countDown = timerInput.value * 60; 
  
  document.getElementById('start-button').style.display = 'block';
}

function startTimer() {
  const countDownDisplay = document.getElementById('countdown-display');
  
  timerId = setInterval(() => {
    countDown--;
    
    const minutes = Math.floor(countDown / 60);
    const seconds = countDown % 60;
    countDownDisplay.textContent = `${minutes}分${seconds}秒`;
    
    if (countDown <= 0) {
      alert('Time is up!');
      clearInterval(timerId);
    }
  }, 1000);
}

function resetTimer() { // Added resetTimer function
  clearInterval(timerId); // Clear the interval
  countDown = 0; // Reset the countdown
  document.getElementById('countdown-display').textContent = ''; // Clear the countdown display
}
