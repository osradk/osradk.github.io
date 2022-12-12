const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

console.log(dots);

const prev = document.querySelector("#back").addEventListener("click", skiftslide);
const next = document.querySelector("#next").addEventListener("click", skiftslide);

let current = 0;

function skiftslide() {
    slides[current].classList.remove("slide--active");
    dots[current].classList.remove("fas");
    dots[current].classList.add("far");

    if (this.getAttribute("id") === "next") {
        current++;
        if (current > slides.length - 1) {
            current = 0;
        }
        dots[current].classList.add("fas");
        dots[current].classList.add("fa-circle");
    }
    else {
        current--;
        if (current < 0) {
            current = slides.length - 1;
        }
        dots[current].classList.add("fas");
        dots[current].classList.add("fa-circle");
    }
    slides[current].classList.add("slide--active");
  
}