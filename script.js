
const finger = document.getElementById("finger");

function mouseOver() {
    finger.classList.remove("fingerSlideOut");
    finger.classList.add("fingerSlideIn");

}

function mouseOut() {
    finger.classList.remove("fingerSlideIn");
    finger.classList.add("fingerSlideOut");

}
