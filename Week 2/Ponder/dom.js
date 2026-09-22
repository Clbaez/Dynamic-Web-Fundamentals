// how to manipulate the DOM in javascript
// DOM stands for Document Object Model

// grab h1 from the page
let heading = document.querySelector("h1");

// grab all of an element type
// let heading = document.querySelectorAll("h1");

console.log(heading);

// change the text of an element
heading.textContent = "Changed the heading to something else!";

// change the text color
heading.style.color = "#AA2121"

// pick a style and change it
heading.style.border = "1px solid black"

// retrieve an id element
document.getElementById("topics").style.color = "maroon";
// can also be done like
// document.querySelector("#topics").style.color = "maroon";

// select the img tag
let image = document.querySelector("img");

console.log(image.getAttribute("src"));

image.setAttribute("src", "https://bogleech.com/vgmonsters/scrib.png")


let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
})
                