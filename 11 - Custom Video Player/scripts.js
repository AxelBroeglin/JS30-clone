/* Get our elements*/

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');

const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

/* Build our functions */

//Play-pause function
function handlePlayButton(){video.paused ? video.play() : video.pause()}

//Fuction to change play pause icon
function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
  }
  
//Function that fires when user is finished moving/skipping to a new position in the video, gives new position, will be used to indicate where yellow bar is.
// onseeked - alerts when finished moving
// currentTime - give currentTime of video

//Function for video speed
//playbackRate 0.5, 1, 1.5

//Function that allows skipping -10 or +25 sec in video
//currentTime -= 10seconds
//currentTime += 25seconds
function currentTime(){
    video.currentTime += parseFloat(this.dataset.skip);
}

//Function for the volume
//volume = position of the bar



/* Hook up the event listeners */

//Clicks on play button and video
toggle.addEventListener("click", handlePlayButton, false);
video.addEventListener("click", handlePlayButton, false);

//Playing or pausing video changes button
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

//Position change of the play bar

//Position change on speed bar

//Click on -10secs or +25secs
skipButtons.forEach(skipButton => {skipButton.addEventListener("click", currentTime, false);
})

//Position change for volume bar