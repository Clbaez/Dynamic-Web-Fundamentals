// Declare a variable
let age = 25;

// Prints to the console
console.log(age);

age = 26;

console.log(age)

// A constant variable
const name = "Caleb Bassett";

// Scope is where you can reference a variable

if(age == 22) {
    // This block is in it's own scope
    // Code in a block can reference variables outside
    // Outside variables cannot reference variables inside a different block
    // Inner scope can reference outer but outer cannot reference inner
    console.log(username);
    const favoriteColor = "blue";
}

const favoriteColor = "blue";
console.log(favoriteColor);

document.querySelector("h1").style.color = favoriteColor