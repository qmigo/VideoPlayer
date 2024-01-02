document.addEventListener('keydown', function(event) {
  switch(event.code) {
    case 'ArrowRight':
      if (!video.seeking) {
        video.currentTime += 10;
      }
      break;
    case 'ArrowLeft':
      if (!video.seeking) {
        video.currentTime -= 10;
      }
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
  console.log(defaultSpeed)
  video.playbackRate = defaultSpeed;

})

video.addEventListener('ended', ()=>{
  console.log("Video ended");
  markCompletedVideo(currPlayingVideo);
  if(currPlayingVideo)
  playNext(currPlayingVideo);
})

function markCompletedVideo(currVideo) {
  const videoArray = document.querySelector(".playlist").childNodes;
  for(let i=1;i<videoArray.length;i++) {
    if(currVideo === videoArray[i]) {
      console.log(currVideo);
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

