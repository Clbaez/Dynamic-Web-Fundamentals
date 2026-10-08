let menuButton = document.querySelector(".menu-btn");

menuButton.addEventListener("click", toggleMenu);

function toggleMenu() {
    let nav = document.querySelector("nav");

    nav.style.display = nav.style.display === "" ? "flex" : "";

    menuButton.classList.toggle("change");
}