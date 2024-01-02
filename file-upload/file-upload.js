const fileUploadBtn = document.querySelector('#fileInput')
fileUploadBtn.addEventListener('change', (e)=>{
    const files = fileUploadBtn.files;
    createPlaylist(files);
})