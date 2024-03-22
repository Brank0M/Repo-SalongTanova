import Page from 'classes/Page';

export default class Home extends Page {
  constructor() {
    super({ id: 'home' });
    this.init();
  }

  init() {
    document.addEventListener('DOMContentLoaded', () => {
      this.adjustVideoSize();
      this.initTextAnimation('.text1');
      this.initTextAnimation('.text');
      this.initSlider(
        '.home_slider_box',
        '.home_slide_btn a.button img.btn_arrow'
      );
      this.initKeuneSlider(
        '.home_keune_slider_box',
        '.home_keune_slider_box img.slide'
      );
      this.initImageSwitch(
        '.home_switch_btn',
        ".home_switch_img_box img[src='../images/img2.jpg']",
        ".home_switch_img_box img[src='../images/img4.jpg']"
      );
    });

    window.addEventListener('resize', this.adjustVideoSize);
  }

  adjustVideoSize = () => {
    const videoContainer = document.querySelector('.home_video');
    const video = videoContainer.querySelector('video');
    const { innerWidth: viewportWidth, innerHeight: viewportHeight } = window;

    videoContainer.style.height = `${viewportHeight}px`;
    videoContainer.style.width = `${viewportWidth}px`;

    const videoAspectRatio = video.videoWidth / video.videoHeight;
    const viewportAspectRatio = viewportWidth / viewportHeight;

    if (videoAspectRatio > viewportAspectRatio) {
      video.style.width = 'auto';
      video.style.height = '100%';
    } else {
      video.style.width = '100%';
      video.style.height = 'auto';
    }
  };

  initTextAnimation = (selector) => {
    const textElement = document.querySelector(selector);
    const animatedText = textElement.innerText
      .split('')
      .map(
        (letter, i) =>
          `<span style="transition-delay:${i * 40}ms;">${letter}</span>`
      )
      .join('');

    textElement.innerHTML = animatedText;
  };

  initSlider = (sliderSelector, buttonSelector) => {
    const sliderBoxes = document.querySelectorAll(sliderSelector);
    const btnArrow = document.querySelector(buttonSelector);
    let currentIndex = 0;

    const showSlide = (index) => {
      sliderBoxes.forEach((box, i) => {
        box.classList.toggle('active', i === index);
      });
    };

    const goToNextSlide = () => {
      currentIndex = (currentIndex + 1) % sliderBoxes.length;
      showSlide(currentIndex);
    };

    btnArrow.addEventListener('click', goToNextSlide);
    setInterval(goToNextSlide, 10000);
  };

  initKeuneSlider = (sliderSelector, slideSelector) => {
    const slides = document.querySelectorAll(slideSelector);
    let currentIndex = 0;

    const showSlide = (index) => {
      slides.forEach((slide, i) => {
        slide.style.zIndex = i === index ? '1' : '0';
        slide.style.transform =
          i === index ? 'translateX(0)' : 'translateX(100%)';
      });
    };

    const nextSlide = () => {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    };

    setInterval(nextSlide, 5000);
  };

  initImageSwitch = (switchSelector, imgWomanSelector, imgManSelector) => {
    const buttonSwitch = document.querySelector(switchSelector);
    const imgWoman = document.querySelector(imgWomanSelector);
    const imgMan = document.querySelector(imgManSelector);

    buttonSwitch.addEventListener('mouseover', (event) => {
      const button = event.target.closest('a.button');

      if (button) {
        const isWoman = button.textContent === 'Woman';
        button.textContent = isWoman ? 'Man' : 'Woman';
        imgWoman.classList.toggle('active', !isWoman);
        imgMan.classList.toggle('active', isWoman);
      }
    });
  };
}

// import Page from 'classes/Page';

// export default class Home extends Page {
//   constructor() {
//     super({
//       id: 'home',
//     });
//   }
// }

// // const THREE = require('three');

// // Get the video element and its container from the DOM
// // script.
// //Function to adjust video dimensions based on viewport size
// function adjustVideoSize() {
//   const videoContainer = document.querySelector('.home_video');
//   const video = videoContainer.querySelector('video');
//   // Get viewport dimensions
//   const viewportHeight = window.innerHeight;
//   const viewportWidth = window.innerWidth;
//   // Set video dimensions to match viewport
//   videoContainer.style.height = `${viewportHeight}px`;
//   videoContainer.style.width = `${viewportWidth}px`;
//   // Ensure the video maintains aspect ratio
//   const videoAspectRatio = video.videoWidth / video.videoHeight;
//   const viewportAspectRatio = viewportWidth / viewportHeight;
//   if (videoAspectRatio > viewportAspectRatio) {
//     // Video is wider than viewport, adjust height
//     video.style.width = 'auto';
//     video.style.height = '100%';
//   } else {
//     // Video is taller than viewport, adjust width
//     video.style.width = '100%';
//     video.style.height = 'auto';
//   }
// }
// // Adjust video size initially and on window resize
// window.addEventListener('DOMContentLoaded', adjustVideoSize);
// window.addEventListener('resize', adjustVideoSize);

// // Text animation Instagram
// document.addEventListener('DOMContentLoaded', function () {
//   let text1 = document.querySelector('.text1');
//   let spans1 = text1.innerText
//     .split('')
//     .map((letter, i) => {
//       return `<span style="transition-delay:${i * 40}ms;">${letter}</span>`;
//     })
//     .join('');

//   text1.innerHTML = spans1;
//   console.log(spans1);
// });
// // let text1 = document.querySelector('.text1');
// // let spans1 = text1.innerText
// //   .split('')
// //   .map((letter, i) => {
// //     return `<span style="transition-delay:${i * 40}ms;">${letter}</span>`;
// //   })
// //   .join('');

// // text1.innerHTML = spans1;
// // console.log(spans1);

// // Text animation About us
// document.addEventListener('DOMContentLoaded', function () {
//   let text = document.querySelector('.text');
//   let spans = text.innerText
//     .split('')
//     .map((letter, i) => {
//       return `<span style="transition-delay:${i * 40}ms;">${letter}</span>`;
//     })
//     .join('');

//   text.innerHTML = spans;
//   console.log(spans);
// });

// // let text = document.querySelector('.text');
// // let spans = text.innerText
// //   .split('')
// //   .map((letter, i) => {
// //     return `<span style="transition-delay:${i * 40}ms;">${letter}</span>`;
// //   })
// //   .join('');

// // text.innerHTML = spans;
// // console.log(spans);

// // Slider script
// document.addEventListener('DOMContentLoaded', function () {
//   const sliderBoxes = document.querySelectorAll('.home_slider_box');
//   const btnArrow = document.querySelector(
//     '.home_slide_btn a.button img.btn_arrow'
//   );
//   let currentIndex = 0;

//   function showSlide(index) {
//     sliderBoxes.forEach((box, i) => {
//       if (i === index) {
//         box.classList.add('active');
//       } else {
//         box.classList.remove('active');
//       }
//     });
//   }

//   function goToNextSlide() {
//     if (currentIndex === sliderBoxes.length - 1) {
//       currentIndex = 0;
//     } else {
//       currentIndex++;
//     }
//     showSlide(currentIndex);
//   }

//   btnArrow.addEventListener('click', function () {
//     if (currentIndex === 0) {
//       // Transition from right to left
//       sliderBoxes[currentIndex].classList.remove('active');
//       sliderBoxes[currentIndex].style.transform = 'translateX(-100%)';
//       setTimeout(function () {
//         sliderBoxes[currentIndex].style.transform = '';
//         goToNextSlide();
//       }, 500); // Adjust timing to match CSS transition
//     } else if (currentIndex === 1) {
//       // Transition from bottom to top
//       sliderBoxes[currentIndex].classList.remove('active');
//       sliderBoxes[currentIndex].style.transform = 'translateY(-100%)';
//       setTimeout(function () {
//         sliderBoxes[currentIndex].style.transform = '';
//         goToNextSlide();
//       }, 500); // Adjust timing to match CSS transition
//     } else if (currentIndex === 2) {
//       // Transition from left to right
//       sliderBoxes[currentIndex].classList.remove('active');
//       sliderBoxes[currentIndex].style.transform = 'translateX(100%)';
//       setTimeout(function () {
//         sliderBoxes[currentIndex].style.transform = '';
//         goToNextSlide();
//       }, 500); // Adjust timing to match CSS transition
//     }
//   });

//   // Show the initial slide
//   showSlide(currentIndex);
//   // Automatically transition to the next slide every few seconds
//   setInterval(goToNextSlide, 10000); // Adjust the time as needed
// });

// /// KEUNE SLIDER
// document.addEventListener('DOMContentLoaded', function () {
//   const slider = document.querySelector('.home_keune_slider_box');
//   const slides = document.querySelectorAll('.home_keune_slider_box img.slide');

//   let currentIndex = 0;
//   const slideCount = slides.length;

//   function showSlide(index) {
//     slides.forEach((slide, i) => {
//       if (i === index) {
//         slide.style.zIndex = '1'; // Bring the current slide to the top
//         slide.style.transform = 'translateX(0)'; // Show the current slide
//       } else {
//         slide.style.zIndex = '0'; // Send other slides to the bottom
//         slide.style.transform = 'translateX(100%)'; // Move the slide out of view
//       }
//     });
//   }

//   function nextSlide() {
//     currentIndex = (currentIndex + 1) % slideCount;
//     showSlide(currentIndex);
//   }

//   // Initially show the first slide
//   showSlide(currentIndex);

//   setInterval(nextSlide, 5000); // Change slide every 3 seconds
// });

// document.addEventListener('DOMContentLoaded', function () {
//   const buttonSwitch = document.querySelector('.home_switch_btn');

//   // Event listener for the entire switch area
//   buttonSwitch.addEventListener('mouseover', function (event) {
//     const button = event.target.closest('a.button');

//     if (button) {
//       const imgWoman = document.querySelector(
//         ".home_switch_img_box img[src='../images/img2.jpg']"
//       );
//       const imgMan = document.querySelector(
//         ".home_switch_img_box img[src='../images/img4.jpg']"
//       );

//       // Check the current text content of the button
//       if (button.textContent === 'Woman') {
//         button.textContent = 'Man';
//         imgWoman.classList.remove('active');
//         imgMan.classList.add('active');
//       } else if (button.textContent === 'Man') {
//         button.textContent = 'Woman';
//         imgWoman.classList.add('active');
//         imgMan.classList.remove('active');
//       }
//     }
//   });
// });
