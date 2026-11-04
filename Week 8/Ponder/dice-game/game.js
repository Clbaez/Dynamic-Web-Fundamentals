// add event listener to the button
document.querySelector('#rollButton').addEventListener('click', event => {
    // animate the dice

    const images = document.querySelectorAll('#gameboard img');
    images.forEach(image => {
        // change the source to the die rolling gif animation
        if(isDieUnlocked(image)) {
            image.src = "assets/die_rolling.gif";
        }
    });

    // change the value each die lands on randomly
        // change the source image

    setTimeout(() => {
        // run this code in x milliseconds
        images.forEach(image => {
            if(isDieUnlocked(image)) {
                const randomNumber = Math.floor(Math.random() * 6) + 1;
                const randomColorNum = Math.floor(Math.random() * 12) + 1;
                console.log(randomColorNum);
                if(randomColorNum == 1) {
                    image.src = `assets/blue_dice_${randomNumber}.gif`;
                }
                else if(randomColorNum == 2) {
                    image.src = `assets/cyan_dice_${randomNumber}.gif`;
                }
                else if(randomColorNum == 3) {
                    image.src = `assets/gray_dice_${randomNumber}.gif`;
                }
                else if(randomColorNum == 4) {
                    image.src = `assets/green_dice_${randomNumber}.gif`;
                }
                else if(randomColorNum == 5) {
                    image.src = `assets/lime_dice_${randomNumber}.gif`;
                }
                else if(randomColorNum == 6) {
                    image.src = `assets/hot_pink_dice_${randomNumber}.gif`;
                }
                else if(randomColorNum == 7) {
                    image.src = `assets/pink_dice_${randomNumber}.gif`;
                }
                else if(randomColorNum == 8) {
                    image.src = `assets/purple_dice_${randomNumber}.gif`;
                }
                else if(randomColorNum == 9) {
                    image.src = `assets/orange_dice_${randomNumber}.gif`;
                }
                else if(randomColorNum == 10) {
                    image.src = `assets/yellow_dice_${randomNumber}.gif`;
                }
                else if(randomColorNum == 11) {
                    image.src = `assets/red_dice_${randomNumber}.gif`;
                }
                else if(randomColorNum == 12) {
                    image.src = `assets/white_dice_${randomNumber}.gif`;
                }
            }
        });
    }, 1000);
});

function isDieUnlocked(dieImage) {
    // check if the corresponding checkbox checked
    const checkBoxes = document.querySelectorAll('#gameboard input');

    // return a new array of just the checked ones
    const unchecked = Array.from(checkBoxes).filter(checkBox => !checkBox.checked);
    return unchecked.find(unchecked => unchecked.className === dieImage.className);
}