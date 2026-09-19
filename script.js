/* ================= SELECT ELEMENTS ================= */

const slides = document.querySelectorAll(".video-slide");
const dots = document.querySelectorAll(".dot");

let currentVideo = 0;


/* ================= SHOW VIDEO ================= */

function showVideo(index) {

    /* Previous/next limits */

    if (index < 0) {
        index = slides.length - 1;
    }

    if (index >= slides.length) {
        index = 0;
    }


    currentVideo = index;


    /* Remove active from all slides */

    slides.forEach(function (slide) {

        slide.classList.remove("active");

    });


    /* Add active to selected slide */

    slides[currentVideo].classList.add("active");


    /* Update dots */

    dots.forEach(function (dot) {

        dot.classList.remove("active");

    });


    dots[currentVideo].classList.add("active");

}


/* ================= NEXT VIDEO ================= */

function nextVideo() {

    showVideo(currentVideo + 1);

}


/* ================= PREVIOUS VIDEO ================= */

function previousVideo() {

    showVideo(currentVideo - 1);

}


/* ================= WATCH NOW ================= */

function watchVideo(index) {

    showVideo(index);


    /*
        YouTube iframe ko JavaScript se directly
        play nahi kar sakte without YouTube API.

        Isliye Watch Now button selected trailer
        ko active karta hai.
    */

    const iframe = slides[index].querySelector("iframe");

    if (iframe) {

        iframe.focus();

    }

}


/* ================= AUTO CAROUSEL ================= */

setInterval(function () {

    nextVideo();

}, 10000);


/* ================= INITIAL SLIDE ================= */

showVideo(0);