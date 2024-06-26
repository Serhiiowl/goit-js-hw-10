// Підключення бібліотеки flatpickr
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
// Підключення бібліотеки iziToast
import iziToast from 'izitoast';
import "izitoast/dist/css/iziToast.min.css";


let userSelectedDate;
const startButton = document.querySelector('[data-start]');
const datePickerInput = document.querySelector('#datetime-picker');

startButton.disabled = true;


function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

// Функція для конвертації мілісекунд у дні, години, хвилини, секунди
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// Налаштування flatpickr
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
   onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    if (selectedDate <= new Date()) {
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
      });
      startButton.disabled = true;
    } else {
      userSelectedDate = selectedDate;
      startButton.disabled = false;
    }
  },
};

// Ініціалізація flatpickr
flatpickr('#datetime-picker', options);

// Функція для оновлення таймера
function updateTimer() {
  const currentTime = new Date();
  const timeDifference = userSelectedDate - currentTime;
  const timeComponents = convertMs(timeDifference);

  if (timeDifference > 0) {
    document.querySelector('[data-days]').textContent = addLeadingZero(timeComponents.days);
    document.querySelector('[data-hours]').textContent = addLeadingZero(timeComponents.hours);
    document.querySelector('[data-minutes]').textContent = addLeadingZero(timeComponents.minutes);
    document.querySelector('[data-seconds]').textContent = addLeadingZero(timeComponents.seconds);
  } else {
    clearInterval(timerInterval);
    iziToast.success({
      title: 'Completed',
      message: 'The countdown has finished!',
    });
  }
}

// Запуск таймера
let timerInterval;
startButton.addEventListener('click', () => {
  if (userSelectedDate > new Date()) {
    datePickerInput.disabled = true; // Деактивація інпута
    startButton.disabled = true; // Деактивація кнопки "Start"
    timerInterval = setInterval(updateTimer, 1000);
  }
});