document.addEventListener("DOMContentLoaded", function(event) { 
    let video = document.getElementById("about-vid");
    video.addEventListener("mouseenter", async function() {
        video.play();
    });
      
    video.addEventListener("mouseleave", async function() {
        video.pause();
    });
});
