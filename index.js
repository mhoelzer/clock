const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");

const numerals = document.querySelector(".numerals")
// start with second since changes the most often
function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = (seconds / 60) * 360 + 90; // gives percentage then 360 for full
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`; // this is offset with the 90 degress offset in css

    const mins = now.getMinutes();
    const minsDegrees = (mins / 60) * 360 + 90;
    minHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hours = now.getMinutes();
    const hoursDegrees = (hours / 12) * 360 + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
	// console.log(seconds)
	
	numerals.innerHTML = `${hours}:${mins}:${seconds < 10 ? "0" + seconds : seconds}`
}
setInterval(setDate, 1000); // runs every second
