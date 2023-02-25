import { getPercentage, getSeconds } from "./lib/clock.js";

const counterClock = document.querySelector(".counter-clock");

// const hourLimit = "14:36:00";

var percentage = getPercentage(new Date().toLocaleTimeString());

counterClock.style.height = percentage;

setInterval(() => {
  percentage = getPercentage(new Date().toLocaleTimeString());
  counterClock.style.height = percentage;

  if (percentage === "100%") {
    counterClock.classList.add("done");
    return;
  }
}, getSeconds(1));

const hourElement = document.querySelector(".display h1");
hourElement.textContent = new Date().toLocaleTimeString();

const dateElement = document.querySelector(".display h2");
dateElement.textContent = new Date().toLocaleDateString();

setInterval(() => {
  hourElement.textContent = new Date().toLocaleTimeString();
}, getSeconds(1));
