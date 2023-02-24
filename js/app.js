import { hourCalculator, getSeconds, getHours } from "./lib/hourCalculator.js"

const clock = document.querySelector('.clock')
const counterClock = document.querySelector('.counter-clock')

const currentHour = getHours()
const hourLimit = 18

counterClock.style.height = `${hourCalculator(hourLimit)}%`
clock.setAttribute('data-hour', currentHour)

setInterval(() => {
    if (currentHour <= hourLimit) {
        counterClock.style.height = `${hourCalculator(hourLimit)}%`
    }
    return
}, getSeconds(60 * 10)) //60s = 1m * 10 = 10 minutos