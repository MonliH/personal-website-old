document.addEventListener("DOMContentLoaded", function(event) { 
    let video = document.getElementById("about-vid");
    video.addEventListener("mouseenter", function() {
        video.play();
    });

    video.addEventListener("mouseleave", function() {
        video.pause();
    });
});
