import {Module} from '../core/module'

export class TimerModule extends Module {
    constructor(type, text) {
        super(type, text)
    }

    trigger() {
        document.querySelector(`[data-type=${this.type}]`).addEventListener('click', () => {
            const userInput = prompt('Введите время в секундах:');
            const timeInSeconds = parseInt(userInput, 10);

            if (!isNaN(timeInSeconds) && timeInSeconds > 0) {
                this.createTimer(timeInSeconds)
              } else {
                alert('Пожалуйста, введите корректное число секунд.');
              }
        })
    }

    createTimer(seconds) {
        const timerContainer = document.createElement('div')
        timerContainer.classList.add('timer-container')
        document.body.appendChild(timerContainer)

        const clockElement = document.createElement('div');
        clockElement.classList.add('clock')
        clockElement.id = 'clock'
        timerContainer.appendChild(clockElement)
  
        let timeLeft = seconds;
        
        const timerInterval = setInterval(() => {
          const hours = Math.floor(timeLeft / 3600);
          const minutes = Math.floor((timeLeft % 3600) / 60);
          const seconds = Math.floor(timeLeft % 60);
          
          const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
          
          clockElement.textContent = formattedTime;
          
          timeLeft--;
          
          if (timeLeft < 0) {
            clearInterval(timerInterval);
            clockElement.textContent = '00:00:00';
            setTimeout(() => {
                // clockElement.style.display = 'none';
                timerContainer.remove()
            }, 500);
          }
        }, 1000);
      }
}