// new CountdownTimer({
//     selector: '#timer-1',
//     targetDate: new Date('Jul 17, 2019'),
//   });

//   /*
//  * Дні, що залишилися: ділимо значення UTC на 1000 * 60 * 60 * 24, кількість
//  * мілісекунд в один день (мілісекунди * секунди * хвилини * години)
//  */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));
// ​
// /*
//  * Решта годин: отримуємо залишок від попереднього розрахунку за допомогою оператора
//  * залишку% і ділимо його на кількість мілісекунд в одній годині
//  * (1000 * 60 * 60 = мілісекунди * хвилини * секунди)
//  */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// ​
// /*
//  * Решта хвилин: отримуємо хвилини, що залишилися і ділимо їх на кількість
//  * мілісекунд в одній хвилині (1000 * 60 = мілісекунди * секунди)
//  */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
// ​
// /*
//  * Решта секунд: отримуємо секунди, які залишилися і ділимо їх на кількість
//  * миллисекунд в одной секунде (1000)
//  */
// const secs = Math.floor((time % (1000 * 60)) / 1000);


class CountdownTimer {
    constructor({ selector, targetDate }) {
      this.selector = selector;
      this.targetDate = targetDate;
      this.timerFields = document.querySelector(this.selector);
      this.start();
    }
  
    start() {
      this.updateTimer();
      this.intervalId = setInterval(() => this.updateTimer(), 1000);
    }
  
    updateTimer() {
      const now = new Date();
      const time = this.targetDate - now;
  
      if (time <= 0) {
        clearInterval(this.intervalId);
        this.displayTime({ days: 0, hours: 0, mins: 0, secs: 0 });
        return;
      }
  
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((time % (1000 * 60)) / 1000);
  
      this.displayTime({ days, hours, mins, secs });
    }
  
    displayTime({ days, hours, mins, secs }) {
      this.timerFields.querySelector('[data-value="days"]').textContent = days;
      this.timerFields.querySelector('[data-value="hours"]').textContent = hours;
      this.timerFields.querySelector('[data-value="mins"]').textContent = mins;
      this.timerFields.querySelector('[data-value="secs"]').textContent = secs;
    }
  }
  
  // Dynamically calculate the next Christmas
  const today = new Date();
  const year = today.getMonth() === 11 && today.getDate() > 25 ? today.getFullYear() + 1 : today.getFullYear();
  const nextChristmas = new Date(`Dec 25, ${year}`);
  
  
  new CountdownTimer({
    selector: '#timer-1',
    targetDate: nextChristmas,
  });