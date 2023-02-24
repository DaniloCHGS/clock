const counterClock = document.querySelector('.counter-clock')

let setTime = 100
setInterval(() => {
    if (setTime > 0) {
        setTime -= 1
        counterClock.style.height = `${setTime}%`
    }
    return
}, 1000)