'use strict';

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

function countdown() {
  const christmas = new Date('2023 12 25');
  const today = new Date();
  const diff = (christmas - today) / 1000;

  const days = Math.floor(diff / 3600 / 24);
  const hours = Math.floor(diff / 3600) % 24;
  const minutes = Math.floor(diff / 60) % 60;
  const seconds = Math.floor(diff) % 60;

  daysEl.innerHTML = formatTime(days);
  hoursEl.innerHTML = formatTime(hours);
  minutesEl.innerHTML = formatTime(minutes);
  secondsEl.innerHTML = formatTime(seconds);
}

const formatTime = function (time) {
  return time < 10 ? `0${time}` : time;
};

countdown();

setInterval(countdown, 1000);
