'use strict';

window.addEventListener('load', chartData);
window.addEventListener('resize', chartData);

function chartData(e) {
  let chartWrapper = document.querySelector('.chart-wrapper');
  let days = document.querySelectorAll('.chart-values li');
  let bars = document.querySelectorAll('.chart-bars li');
  let daysArray = [...days];

  bars.forEach((el) => {
    const duration = el.dataset.duration.split('-');
    const startDay = duration[0];
    const endDay = duration[1];

    let left = 0;
    let width = 0;

    if (startDay.endsWith('½')) {
      const filteredArray = daysArray.filter((day) => day.textContent === startDay.slice(0, -1));
      left = filteredArray[0].offsetLeft + filteredArray[0].offsetWidth / 2;
    } else {
      const filteredArray = daysArray.filter((day) => day.textContent === startDay);
      left = filteredArray[0].offsetLeft;
    }
    if (endDay.endsWith('½')) {
      const filteredArray = daysArray.filter((day) => day.textContent === endDay.slice(0, -1));
      width = filteredArray[0].offsetLeft + filteredArray[0].offsetWidth / 2 - left;
    } else {
      const filteredArray = daysArray.filter((day) => day.textContent === endDay);
      width = filteredArray[0].offsetLeft + filteredArray[0].offsetWidth - left;
    }

    el.style.left = `${left}px`;
    el.style.width = `${width}px`;

    if (e.type == 'load') {
      el.style.backgroundColor = el.dataset.color;
      el.style.opacity = 1;
    }
  });
}
