//need to catch hands
const hands = document.querySelectorAll('.hand');

//Catch each hand
const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');


//need to apply rotation from center


let today= new Date();
 
console.log(today.getHours()); //Ouput: "12"
console.log(today.getMinutes()); //Ouput: "28"
console.log(today.getSeconds()); //Ouput: "57"



hourHand.setAttribute('style', 'transform: rotate('today.getHours()'deg);');


//we have sec min and hours. Need to find formula to rotate hands.