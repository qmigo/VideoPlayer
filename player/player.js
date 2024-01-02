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
  }
});