const playBtn = document.querySelectorAll("[playbtn]").item(0)
const video = document.getElementsByTagName("video").item(0)
const progressBar = document.getElementsByClassName("progresso").item(0).firstElementChild

// Listener: video playing
const atualizarProgressBar = () => {
    const videoProgress = (video.currentTime * 100) / video.duration
    progressBar.style.width = `${videoProgress}%`
}
video.addEventListener("timeupdate", atualizarProgressBar)

// Click play button
const toggleVideo = () => {
    if (video.paused) {
        video.play()
        playBtn.textContent = "Pause"
    } else {
        video.pause()
        playBtn.textContent = "Play"
    }
}
playBtn.addEventListener("click", toggleVideo)