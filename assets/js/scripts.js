function lightbox() {
  let lightbox = document.querySelector('.lightbox'),
    lightboxWrapper = lightbox.querySelector('.lightbox__image-wrapper'),
    lightboxImage = lightboxWrapper.querySelector('.lightbox__image'),
    overlay = document.querySelector('.lightbox__overlay'),
    allImages = document.querySelectorAll('.triggerLightbox');

  for (let i = 0; i < allImages.length; i++) {
    allImages[i].onclick = function () {
      lightboxImage.src = this.querySelector('img').src;
      lightbox.classList.add('visible');
    }
  };

  overlay.onclick = () => {
    lightbox.classList.remove('visible');
  };

  document.onkeydown = evt => {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
      lightbox.classList.remove('visible');
    }
  };
}

lightbox();

// class Lightbox {
//   constructor(image) { // konstruktor
//     this.image = image;
//     this.image.onclick = function () {
//       lightboxImage.src = this.querySelector('img').src;
//       lightbox.classList.add('visible');
//     }
//   }
// }

// let lightboxes = new Lightbox(this);