const secondHand = document.querySelector("#secondHand");
const minuteHand = document.querySelector("#minuteHand");
const hourHand = document.querySelector("#hourHand");
const numerals = document.querySelector("#numerals");

let secondsCounter = 0;
let minutesCounter = 0;
let hoursCounter = 0;

// start with second since changes the most often
function whatIsTheTime() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds + secondsCounter) / 60) * 360 + 90; // gives percentage then 360 for full
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`; // this is offset with the 90 degress offset in css
    if (seconds == 59) {
        secondsCounter += 60;
    }

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes + minutesCounter) / 60) * 360 + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    if (minutes == 59 && seconds == 59) {
        minutesCounter += 60;
    }

    const hours = now.getHours();
    const hoursDegrees = ((hours + hoursCounter) / 12) * 360 + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    // console.log(seconds)
    if (hours == 11 && minutes == 59 && seconds == 59) {
        hoursCounter += 12;
    }

    let secondsDigits = `<span id="secondsDigit">${seconds < 10 ? "0" + seconds : seconds}</span>`
    let minutesDigits = `<span id="minutesDigit">${minutes < 10 ? "0" + minutes : minutes}</span>`
    let hoursDigits = `<span id="hoursDigit">${hours < 10 ? "0" + hours : hours}</span>`
    numerals.innerHTML = `${hoursDigits}:${minutesDigits}:${secondsDigits}`
}

setInterval(whatIsTheTime, 1000); // runs every second
