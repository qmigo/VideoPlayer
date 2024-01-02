var currPlayingVideo;

function readableDuration (durationInSeconds) {
    const hours = Math.floor(durationInSeconds / 3600);
    const minutes = Math.floor((durationInSeconds % 3600) / 60);
    const seconds = Math.floor(durationInSeconds % 60);

    const formattedHours = hours > 0 ? (hours < 10 ? '0' : '') + hours + ':' : '';
    const formattedMinutes = (minutes < 10 ? '0' : '') + minutes + ':';
    const formattedSeconds = (seconds < 10 ? '0' : '') + seconds;

    return formattedHours + formattedMinutes + formattedSeconds;
}
function createPlaylist(files) {
    const playlist = document.querySelector('.playlist');
    for(const file of files) {

        const playlistVideoContainer = document.createElement('div');
        const videoURL = URL.createObjectURL(file);
        const videoDetails = document.createElement('div');
        const videoDuration = document.createElement('div');
        videoDuration.classList = "video-duration";
        const video = document.createElement('video');
        
        videoDetails.textContent = file.name; 
        videoDetails.classList = "video-details";
        video.classList="playlist-video";
        video.src = videoURL;
        
        video.addEventListener("loadedmetadata", function() {
           
            const durationInSeconds = video.duration;

            console.log(durationInSeconds)
            videoDuration.textContent = readableDuration(durationInSeconds);
            videoDetails.append(videoDuration);
            
        });

        playlistVideoContainer.append(video);
        playlistVideoContainer.append(videoDetails);
        playlistVideoContainer.classList="playlist-video-container";
        playlistVideoContainer.addEventListener('click', ()=>{
            const mainVideoPlayer = document.querySelector('#main-player');
            mainVideoPlayer.src = videoURL;
            currPlayingVideo = playlistVideoContainer;
        })

        playlistVideoContainer.addEventListener('contextmenu', ()=>{
            playlistVideoContainer.remove();
        })
        playlist.append(playlistVideoContainer);
    }
}

