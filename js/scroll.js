let liButtons = document.querySelectorAll(".nav-link");
let about = liButtons[0];
let projects = liButtons[1];
let contact = liButtons[2];

function hazScroll(number, speed = 1) {
    setTimeout(function () {
        if (window.scrollY > number) {
            scrollBy(0,-10)
        }
        if (window.scrollY < number) {
            scrollBy(0,10)
        }
        if (window.scrollY == number || window.scrollY == number -1 || window.scrollY == number -2 || window.scrollY == number -3 || window.scrollY == number -4 || window.scrollY == number -5 || window.scrollY == number -6 || window.scrollY == number -7 || window.scrollY == number -8 || window.scrollY == number -9) {
            return true;
        }
        hazScroll(number);
    }, speed);
}

function ocultaNavLinks(visibility = "hidden") {
    liButtons.forEach(li => {
        li.style.visibility = visibility;
    });
}

about.addEventListener("click", () => {
    hazScroll(0);
});
projects.addEventListener("click", () => {
    hazScroll(664)
});
contact.addEventListener("click", () => {
    hazScroll(1448)
})
    