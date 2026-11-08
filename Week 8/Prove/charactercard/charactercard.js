const charactercards = [
    {
        name: "Tarrasque",
        class: "Gargantuan Monstrosity",
        level: 30,
        health: 676,
        image: "images/tarrasque-dnd-5e.png",
        attacked: function() {
            this.health = this.health - 20
            return this.health
        },
        levelUp: function() {
            this.level = this.level + 1
            return this.level
        }
    }
];

charactercards.forEach(character => {
    let card = `
    <div class="card">
        <img class="image" src="${character.image}" alt="">
        <h1 class="name">${character.name}</h1>
        <div class="stats">
            <p id="class">Class: ${character.class}</p>
            <p id="level">Level: ${character.level}</p>
            <p id="health">Health: ${character.health}</p>
        </div>
        <div class="buttons">
            <button id="attacked">Attacked</button>
            <button id="levelUp">Level up</button>
        </div>
    </div>
    `;
    document.getElementById("main").innerHTML += card;
});

document.querySelector("#attacked").addEventListener("click", (e) => {
    console.log("Attacked!");
    charactercards[0].health = charactercards[0].attacked();
    if (charactercards[0].health <= 0) {
        charactercards[0].health = 0;
        document.querySelector("#health").textContent = `Health: ${charactercards[0].health}`;
        setTimeout(() => {
            alert("Character Dead");
        }, 0)
    };
    document.querySelector("#health").textContent = `Health: ${charactercards[0].health}`;
});

document.querySelector("#levelUp").addEventListener("click", (e) => {
    console.log("Level Up!")
    document.querySelector("#level").textContent = `Level: ${charactercards[0].levelUp()}`;
});