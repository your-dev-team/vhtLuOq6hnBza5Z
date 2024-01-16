document.getElementById('timer-form').addEventListener('submit', setTimer);
document.getElementById('start-button').addEventListener('click', startTimer);
document.getElementById('stop-button').addEventListener('click', stopTimer);

let countDown;
let timerId;

function setTimer(event) {
  event.preventDefault();
  
  const timerInput = document.getElementById('timer-input');
  countDown = timerInput.value * 60;
  
  document.getElementById('start-button').style.display = 'block';
}

function startTimer() {
  const countDownDisplay = document.createElement('div');
  document.body.appendChild(countDownDisplay);
  
  timerId = setInterval(() => {
    countDown--;
    
    const minutes = Math.floor(countDown / 60);
    const seconds = countDown % 60;
    countDownDisplay.textContent = `${minutes}分${seconds}秒`;
    
    if (countDown <= 0) {
      alert('タイマー終了！');
      clearInterval(timerId);
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timerId);
}

