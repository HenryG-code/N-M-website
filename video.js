const mainVideo = document.getElementById("main-video");
// Store the original volume of the video
let originalVolume = 1.0;

// Set the volume to a softer level when hovering over the video
mainVideo.addEventListener("mouseenter", () => {
  originalVolume = mainVideo.volume;
  mainVideo.volume = 0.6; // You can adjust this value (0.5 means 50% volume)
});

// Restore the original volume when the mouse leaves the video
mainVideo.addEventListener("mouseleave", () => {
  mainVideo.volume = originalVolume;
});

// Auto-play the video when hovering over it
mainVideo.addEventListener("mouseenter", () => {
  mainVideo.play();
});

// Pause the video when the mouse leaves the video area
mainVideo.addEventListener("mouseleave", () => {
  mainVideo.pause();
});

