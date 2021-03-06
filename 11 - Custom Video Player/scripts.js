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
  
//Function for video progress
function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}
  function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}
  

//Function for video speed
function handleRangeUpdate() {
    video[this.name] = this.value;
}

//Function that allows skipping -10 or +25 sec in video
function currentTime(){
    video.currentTime += parseFloat(this.dataset.skip);
}



/* Hook up the event listeners */

//Clicks on play button and video
toggle.addEventListener("click", handlePlayButton, false);
video.addEventListener("click", handlePlayButton, false);

//Playing or pausing video changes button
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

//Position change of the play bar
let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

//Position change on speed bar
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

//Click on -10secs or +25secs
skipButtons.forEach(skipButton => {skipButton.addEventListener("click", currentTime, false);
})