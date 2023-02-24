const hourCalculator = (hourLimit) => {
    const currentHour = new Date().getHours()
    const result = Math.round((currentHour * 100) / hourLimit)

    console.log(`Current: ${currentHour}`, `Result: ${result}%`)
    return result
}

const getSeconds = (second) => second * 1000

const getHours = () => new Date().getHours()

export { hourCalculator, getSeconds, getHours }