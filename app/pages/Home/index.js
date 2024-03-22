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
      // this.initReloader();
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

    showSlide(currentIndex);

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

  // initReloader = () => {
  //   const reloader = document.querySelector('.home_reloader');
  //   const reloaderButton = reloader.querySelector('a.button');

  //   reloaderButton.addEventListener('click', () => {
  //     location.reload();
  //   });
  // };
}
