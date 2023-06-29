const video = document.getElementById('video')

Promise.all([
    faceapi.nets.tnyFaceDetector.loadFromUri('')
])

function startVideo() {
    navigator.getUserMedia(
        // constraints
        {video: {} },
        stream => video.srcObject = stream,
        err => console.error(err)
    )
}

startVideo()