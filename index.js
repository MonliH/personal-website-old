"use strict";

$(function() {
    // Init Controller
    let controller = new ScrollMagic.Controller();

    let height = $(window).height()/2+1;

    let parallaxImageSim = TweenMax.to("#front_image", 1, {
        
    });

    new ScrollMagic.Scene({
        triggerElement: "#subheading_name",
        offset: 0,
        duration: 300
    })
    .setTween(parallaxImageSim)
    .addIndicators()
    .addTo(controller);
});
