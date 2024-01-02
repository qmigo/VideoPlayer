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

function speedchange(speed) {
  const video = document.querySelector('#main-player')
  video.playbackRate += speed;
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

document.querySelector('#main-player').addEventListener('ended', ()=>{
  console.log("Video ended");
  if(currPlayingVideo)
  playNext(currPlayingVideo);
})