'use strict';

window.addEventListener('load', createChart);
window.addEventListener('resize', createChart);

function createChart(e) {
  const tasks = document.querySelectorAll('.chart-bars li');
  const days = document.querySelectorAll('.chart-values li');
  const daysArray = [...days];
  // Array.from(days);
  tasks.forEach((el) => {
    //변수지정
    const duration = el.dataset.duration.split('-');
    const startDay = duration[0];
    const endDay = duration[1];
    let left = 0,
      width = 0;

    //시작일의 left 확인하기
    if (startDay.endsWith('½')) {
      const filteredArray = daysArray.filter((day) => day.textContent == startDay.slice(0, -1));
      left = filteredArray[0].offsetLeft + filteredArray[0].offsetWidth / 2;
    } else {
      const filteredArray = daysArray.filter((day) => day.textContent == startDay);
      left = filteredArray[0].offsetLeft;
    }
    //종료일을 이용하여 바의 width를 확인하기
    if (endDay.endsWith('½')) {
      const filteredArray = daysArray.filter((day) => day.textContent == endDay.slice(0, -1));
      width = filteredArray[0].offsetLeft + filteredArray[0].offsetWidth / 2 - left;
    } else {
      const filteredArray = daysArray.filter((day) => day.textContent == endDay);
      width = filteredArray[0].offsetLeft + filteredArray[0].offsetWidth - left;
    }
    //left,width를 tasks li css 지정.
    el.style.left = `${left}px`;
    el.style.width = `${width}px`;
    if (e.type === 'load') {
      el.style.backgroundColor = el.dataset.color;
      el.style.opacity = 1;
    }
  }); // forEach
} //createChart
