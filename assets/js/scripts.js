class Lightbox {
  constructor() {
    this.lightbox = document.querySelector('.lightbox'),
    this.lightboxImage = document.querySelector('.lightbox__image'),
    this.overlay = document.querySelector('.lightbox__overlay'),
    this.closeButton = document.querySelector('.lightbox__close'),
    this.allImages = document.querySelectorAll('.triggerLightbox');

    this.overlay.addEventListener('click', () => this.hideLightbox());
    this.closeButton.addEventListener('click', () => this.hideLightbox());
  }

  addListenerToImages() {
    for (let i = 0; i < this.allImages.length; i++) {
      this.allImages[i].addEventListener('click', () => this.changeLightboxImgSrc(this.allImages[i]));
    }
  }

  changeLightboxImgSrc(imageHolder) {
    this.lightboxImage.src = imageHolder.dataset.src;
    this.showLightbox();
  }

  showLightbox() {
    this.lightbox.classList.add('visible');
  }

  hideLightbox() {
    this.lightbox.classList.remove('visible');
  }

  addEscKeyListener() {
    document.addEventListener('keydown', evt => {
      if (evt.keyCode === 27) {
        this.hideLightbox();
      }
    });
  }
}

let lightbox = new Lightbox();

lightbox.addListenerToImages();
lightbox.addEscKeyListener();