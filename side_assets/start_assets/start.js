var video = document.getElementById("video")
var betekintes = document.getElementById("betekintes")
var kitekintes = document.getElementById("kitekintes")
var kitekintes2 = document.getElementById("kitekintes2")

function showVideo() {
    video.style.display = "flex"
    betekintes.style.display = "none"
    kitekintes.style.display = "block"
    kitekintes2.style.display = "block"
}

function unshowVideo() {
    video.style.display = "none"
    betekintes.style.display = "block"
    kitekintes.style.display = "none"
    kitekintes2.style.display = "none"
}