//need to catch hands
const hands = document.querySelectorAll('.hand');

//Catch each hand
const hourHand = document.querySelector('.hour-hand');
const minsHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');


//need to apply rotation from center


let today= new Date();
 
function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondDegrees = ((seconds/60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90; //Deg + sec degree
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90; //Deg + minutes degree
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

}


setInterval(setDate, 1000);
setDate();