
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current === 'dark') {
        // code for changes to colors and logo
        document.body.style.backgroundColor = "#333333";
        document.body.style.color = "#FFFFFF";
        document.querySelector("img").src = "Images/byui-logo-white.png"
        document.querySelector("h5").style.color = "#7BCAFF"
    }
    else {
        // code for changes to colors and logo
        document.body.style.backgroundColor = "#FFFFFF";
        document.body.style.color = "#000000";
        document.querySelector("img").src = "Images/byui-logo-blue.webp"
        document.querySelector("h5").style.color = "#006EB6"
    }
}