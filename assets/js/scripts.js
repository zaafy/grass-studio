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

// always keep the year fresh...
class Dater {
  constructor() {
    this.currentDate = new Date();
    this.currentYear = this.currentDate.getFullYear();
  }

  get year() {
    return this.currentYear;
  }

  updateYear(year) {
    document.querySelector('[data-js="footer-date"]').innerHTML = year;
  }
}

let date = new Dater();
date.updateYear(date.year);


// Navigation
class Navigation {
  constructor() {
    this.navLinks = document.querySelectorAll('.navigation__menu-item');
  }

  addListenerToMenu() {
    document.addEventListener('click', evt => this.hideSubmenu(evt) );
    for (let i = 0; i < this.navLinks.length; i++) {
      this.navLinks[i].addEventListener('click', evt => this.manipulateDropdown(evt));
    }
  }

  manipulateDropdown(evt) {
    evt.preventDefault();
    let targetParent = evt.target.parentElement;
    this.removeActiveFromCurrent(targetParent);

    evt.target.parentElement.classList.toggle('active');
  }

  hideSubmenu(evt) {
    for (let i = 0; i < this.navLinks.length; i++) {
      if (this.navLinks[i] === evt.target.parentElement) {
        return true;
      }
    }

    this.removeActiveFromCurrent();
  }

  removeActiveFromCurrent(targetParent = false) {
    let currentActive = document.querySelector('.active');

    if (targetParent) {
      if ( currentActive && targetParent !== currentActive ) {
        currentActive.classList.remove('active');
        return;
      }
    }

    if (currentActive) {
      currentActive.classList.remove('active');
    }
  }
}

let navigation = new Navigation();
navigation.addListenerToMenu();