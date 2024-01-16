document.getElementById('timer-form').addEventListener('submit', startTimer);
document.getElementById('reset-button').addEventListener('click', resetTimer);

let countDown;
let timerId;

function startTimer(event) {
  event.preventDefault();
  
  const timerInput = document.getElementById('timer-input');
  countDown = timerInput.value * 60; // 入力は分単位とします。
  
  const countDownDisplay = document.getElementById('countdown-display');
  
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

function resetTimer() {
  clearInterval(timerId);

  document.getElementById('timer-input').value = '';
  document.getElementById('countdown-display').textContent = '';
}
