var wasVideoPaued = false;

function moveVideoFrame(video, factor) {
  wasVideoPaued = video.paused;
      video.pause();
      video.currentTime += factor;
      if(!wasVideoPaued)
      video.play();
}

document.addEventListener('keydown', function(event) {
  const video = document.querySelector("#main-player")
  const factor = 10;
  switch(event.code) {

    case 'ArrowRight':
      moveVideoFrame(video, factor);
      break;
    case 'ArrowLeft':
      moveVideoFrame(video, -1*factor);
      break;
    case "KeyN": 
      playNext(currPlayingVideo);
      break;
    case "KeyP":
      playPrevious(currPlayingVideo);
      break;
    case "KeyF":
      speedchange(0.5);
      break;
    case "KeyS":
      speedchange(-0.5);
      break;
      
  }
});

const video = document.querySelector("#main-player")

video.addEventListener("loadedmetadata", ()=> {
  const defaultSpeed = localStorage.getItem("local-player-speed") || 1;
  video.playbackRate = defaultSpeed;

})

video.addEventListener('ended', ()=>{
  markCompletedVideo(currPlayingVideo);
  if(currPlayingVideo)
  playNext(currPlayingVideo);
})

function markCompletedVideo(currVideo) {
  const videoArray = document.querySelector(".playlist").childNodes;
  for(let i=1;i<videoArray.length;i++) {
    if(currVideo === videoArray[i]) {
      currVideo.classList += " completed-video";
      break;
    }
  }
}

function speedchange(speed) {
  const video = document.querySelector('#main-player')
  video.playbackRate += speed;
  localStorage.setItem("local-player-speed", video.playbackRate);
}

function playPrevious(currVideoContainer) {
  const videoArray = document.querySelector('.playlist').childNodes;
  for(let i=1;i<videoArray.length;i++) {
      if(videoArray[i]===currVideoContainer) {
          let nextVideoContainerIndex = i-1;
          if(nextVideoContainerIndex===0) {
            nextVideoContainerIndex=videoArray.length;
          }
          videoArray[nextVideoContainerIndex].click();
          break;
      }
  }
}

function playNext (currVideoContainer) {
  const videoArray = document.querySelector('.playlist').childNodes;
  for(let i=1;i<videoArray.length;i++) {
      if(videoArray[i]===currVideoContainer) {
          let nextVideoContainerIndex = i+1;
          if(nextVideoContainerIndex===videoArray.length) {
            nextVideoContainerIndex=1;
          }
          videoArray[nextVideoContainerIndex].click();
          break;
      }
  }
}

