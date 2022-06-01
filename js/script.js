let navbar = document.querySelector('.header__nav');
let menuBtn = document.querySelector('#menu-btn');

menuBtn.onclick = () => {
   menuBtn.classList.toggle('fa-times');
   navbar.classList.toggle('active');
};





window.onscroll = () => {
   menuBtn.classList.remove('fa-times');
   navbar.classList.remove('active');
};

var swiper = new Swiper(".home-slider", {
   grabCursor: true,
   loop: true,
   centeredSlides: true,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
});

var swiper = new Swiper(".food__slider", {
   grabCursor: true,
   loop: true,
   centeredSlides: true,
   spaceBetween: 20,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   breakpoints: {
      0: {
         slidesPerView: 1,
      },
      700: {
         slidesPerView: 2,
      },
      1000: {
         slidesPerView: 3,
      },
   },
});

let previewContainer = document.querySelector('.food__preview');
let previewBox = previewContainer.querySelectorAll('.food__preview-item');

document.querySelectorAll('.food__slider-slide').forEach(food => {
   food.onclick = () => {
      previewContainer.style.display = 'flex';
      let name = food.getAttribute('data-name');
      previewBox.forEach(preveiw => {
         let target = preveiw.getAttribute('data-target');
         if (name == target) {
            preveiw.classList.add('active');
         }
      });
   };
});

previewContainer.querySelector('#close-preview').onclick = () => {
   previewContainer.style.display = 'none';
   previewBox.forEach(close => {
      close.classList.remove('active');
   });
};


lightGallery(document.querySelector('.gallery__content'));



var swiper = new Swiper(".menu__slider", {
   grabCursor: true,
   loop: true,
   autoHeight: true,
   centeredSlides: true,
   spaceBetween: 20,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
});

var swiper = new Swiper(".blog__slider", {
   grabCursor: true,
   loop: true,
   centeredSlides: true,
   autoHeight: true,
   spaceBetween: 20,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   breakpoints: {
      0: {
         slidesPerView: 1,
      },
      700: {
         slidesPerView: 2,
      },
      1000: {
         slidesPerView: 3,
      },
   },
});

