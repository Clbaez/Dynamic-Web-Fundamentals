// 1. Retrieve elements from the DOM
let dialog = document.querySelector('dialog');
let gallery = document.querySelector('.gallery');
let dialogImage = dialog.querySelector('img');
let closeButton = dialog.querySelector('.close-viewer');

// 2. Add event listeners
gallery.addEventListener('click', function(event) {
    console.log(event.target.src);
    // swap out src of dialog img
    if(event.target.src !== undefined) {
        dialogImage.src = event.target.src.replace("-sm", "-full");
        // show dialog box
        dialog.showModal();
    }
});

// Close modal on button click
closeButton.addEventListener('click', () => {
    dialog.close();
});

// Close modal if clicking outside the image
dialog.addEventListener('click', (event) => {
    if (event.target === dialog) {
        dialog.close();
    }
});