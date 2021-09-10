const video = document.querySelector('#video');
const playPause = document.querySelector('#playpause');
const stop = document.querySelector('#stop');
const timeBar = document.querySelector('#timebar')
const timestamp = document.querySelector('#timestamp');

//toggle play pause video
function togglePlay(){
  if(video.paused){
    video.play();
  }
  else{video.pause();}
}

//stop video
function stopPlay(){
  video.load();
}

//change play - pause icon
function iconChange(){
  if(video.paused){
    playPause.innerHTML = '<i class="fas fa-play fa-2x">';
  }
  else{playPause.innerHTML = '<i class="fas fa-pause fa-2x">';}
}

//set video timer
function barTimerProgress(){
  //time bar progress
  timeBar.value = (video.currentTime /video.duration) * 100;

  //Get minutes
  let min = Math.floor(video.currentTime / 60);
  if(min < 10){
    min = '0' + String(min);
  }
  //Get seconds
  let sec = Math.floor(video.currentTime % 60);
  if(sec < 10){
    sec = '0' + String(sec);
  }

  timestamp.innerText =`${min}:${sec}`;
}

//set timebar progress
function timeBarChange(){
   video.currentTime = (+timeBar.value * video.duration) /100;
}

//event listeners
video.addEventListener('click', ()=>{togglePlay();iconChange();});
video.addEventListener('timeupdate',barTimerProgress);

playPause.addEventListener('click', ()=>{togglePlay();iconChange();});
stop.addEventListener('click', stopPlay);

document.addEventListener('keydown', (e)=>{if(e.keyCode === 32){togglePlay();iconChange();}});

timeBar.addEventListener('change', timeBarChange);
