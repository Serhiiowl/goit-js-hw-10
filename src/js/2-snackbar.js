
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');

  form.addEventListener('submit', event => {
    event.preventDefault();

    const input = form.delay; // Отримуємо доступ до інпута
    const delay = Number(input.value);
    const state = form.state.value;

    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (state === 'fulfilled') {
          resolve(delay);
        } else {
          reject(delay);
        }
      }, delay);
    });

    promise
      .then(delay => {
        console.log(`✅ Fulfilled promise in ${delay}ms`);
        iziToast.success({
          title: 'Success',
          message: `Fulfilled promise in ${delay}ms`,
          position: 'topRight'
        });
        input.value = '';
      })
      .catch(delay => {
        console.log(`❌ Rejected promise in ${delay}ms`);
        iziToast.error({
          title: 'Error',
          message: `Rejected promise in ${delay}ms`,
          position: 'topRight'
        });
        input.value = ''; 
      });
  });
});
