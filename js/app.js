import { getPercentage, getSeconds } from "./lib/clock.js";

const counterClock = document.querySelector(".counter-clock");

const hourLimit = "17:00:00";

var percentage = getPercentage(new Date().toLocaleTimeString(), hourLimit);

counterClock.style.height = percentage;

setInterval(() => {
  percentage = getPercentage(new Date().toLocaleTimeString(), hourLimit);
  counterClock.style.height = percentage;
}, getSeconds(1));
