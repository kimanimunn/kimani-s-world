
// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

// Define a function that changes the color of the page
function changeColor(color) {
    document.body.style.backgroundColor = color;
  }

  // Call the function to change the color to blue
  changeColor('lightgreen');
