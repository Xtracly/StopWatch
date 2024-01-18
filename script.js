const minutesBlock = document.querySelector('.js-minutes'),
    secondBlock = document.querySelector('.js-second'),
    hundredBlock = document.querySelector('.js-hundred'),
    btnStart = document.querySelector('.js-btn-start'),
    btnStop = document.querySelector('.js-btn-stop'),
    btnReset = document.querySelector('.js-btn-reset')

let interval
let minutes = 0
let seconds = 0
let milliseconds = 0

function startTimer () {
    milliseconds++
    hundredBlock.innerHTML = milliseconds

    if (milliseconds <= 99) {
        hundredBlock.innerHTML = milliseconds
    }

    if (milliseconds == 100) {
        hundredBlock.innerHTML = '00'
    }

    if (milliseconds > 99) {
        seconds++
        secondBlock.innerHTML = '0' + seconds

        milliseconds = 0
    }

    if (seconds > 9) {
        secondBlock.innerHTML = seconds
    }

    if (seconds > 59) {
        minutes++
        minutesBlock.innerHTML = '0' + minutes

        seconds = 0
        secondBlock.innerHTML = '0' + seconds
    }

    if (minutes > 9) {
        minutesBlock.innerHTML = minutes
    }
}

btnStart.addEventListener('click', function() {
    clearInterval(interval)
    interval = setInterval(startTimer, 10)
})
btnStop.addEventListener('click', function() {
    clearInterval(interval)
})
btnReset.addEventListener('click', function() {
    clearInterval(interval)
    minutes = 0
    seconds = 0
    milliseconds = 0

    minutesBlock.innerHTML = '0' + minutes
    secondBlock.innerHTML = '0' + seconds
    hundredBlock.innerHTML = '0' + milliseconds
})