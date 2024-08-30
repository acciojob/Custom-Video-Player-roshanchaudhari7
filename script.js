/* Edit this file */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

video.addEventListener('timeupdate', updateProgress);
function updateProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

toggle.addEventListener('click', togglePlay);
function togglePlay() {
  if (video.paused) {
    video.play();
    toggle.textContent = '❚ ❚';
  } else {
    video.pause();
    toggle.textContent = '►';
  }
}

skipButtons.forEach(button => button.addEventListener('click', skip));
function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

ranges.forEach(range => range.addEventListener('input', handleRangeUpdate));
function handleRangeUpdate() {
  video[this.name] = this.value;
}

progress.addEventListener('click', scrub);
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

progress.addEventListener('mousedown', e => e.preventDefault());











