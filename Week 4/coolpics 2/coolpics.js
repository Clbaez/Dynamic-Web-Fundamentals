let dialog = document.querySelector('dialog');
let gallery = document.querySelector('.images');
let dialogImage = dialog.querySelector('img');
let closeButton = dialog.querySelector('.close-viewer')

gallery.addEventListener('click', function(event) {
    console.log(event.target.src);

    if(event.target.src !== undefined) {
        dialogImage.src = event.target.src.replace("-small", "-large");
        dialog.showModal();
    }
});

closeButton.addEventListener('click', () => {
    dialog.close();
});

dialog.addEventListener('click', (event) => {
    if (event.target === dialog) {
        dialog.close();
    }
});