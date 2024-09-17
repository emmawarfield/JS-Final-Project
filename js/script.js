const imageIndex = document.querySelectorAll('img');
    imageIndex.forEach((img, index) => {
        img.setAttribute('tabindex', index = 0);
    });

document.addEventListener('DOMContentLoaded', (event) => {
    const imageFB = document.querySelectorAll('img.preview');
    
        imageFB.forEach(img => {
            img.addEventListener('focus', () => {
                img.classList.add('focused');
                });
    
            img.addEventListener('blur', () => {
                img.classList.remove('focused'); // Remove class for blur effect
                img.classList.add('blurred'); // Optionally add a blurred effect class
                });
        });
    });

function upDate(previewPic) {
    document.getElementById('image').innerHTML = previewPic.alt;
    document.getElementById('image').style.backgroundImage = 'url(' + previewPic.src + ')';
}

function unDo() {
    document.getElementById('image').innerHTML = 'Hover over an image below to display here';
    document.getElementById('image').style.backgroundImage = "url('')";
}
