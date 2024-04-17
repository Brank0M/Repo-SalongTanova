import each from 'lodash/each';
import Component from 'classes/Component';
import { gsap } from 'gsap';
import { split } from 'utils/text';

export default class Preloader extends Component {
  constructor() {
    super({
      element: '.preloader',
      elements: {
        title: '.preloader_title',
        number: '.preloader_number',
        numberText: '.preloader_number_text',
        images: document.querySelectorAll('img'),
      },
    });

    split({
      element: this.elements.title,
      expression: '<br>',
    });

    split({
      element: this.elements.title,
      expression: '<br>',
    });

    this.elements.titleSpans =
      this.elements.title.querySelectorAll('span span');

    this.length = 0;

    // // console.log(this.element, this.elements);

    this.createLoader();
    // setTimeout(() => {
    //   this.emit('completed');
    // }, 5000);
  }

  createLoader() {
    each(this.elements.images, (element) => {
      element.onload = () => {
        this.onAssetLoaded(element);
      };
      element.src = element.getAttribute('data-src');
    });
  }

  // onAssetLoaded(image) {
  //   this.loadedImages++;
  //   const percent = Math.round(
  //     (this.loadedImages / this.elements.images.length) * 100
  //   );
  //   this.elements.number.textContent = `${percent}%`;

  //   if (this.loadedImages === this.elements.images.length) {
  //     this.onLoaded();
  //   }
  // }

  onAssetLoaded(image) {
    this.length += 1;

    const percent = this.length / this.elements.images.length;

    this.elements.numberText.innerHTML = `${Math.round(percent * 100)}%`;
    console.log(percent);

    if (percent === 1) {
      this.onLoaded();
    }
  }

  onLoaded() {
    return new Promise((resolve) => {
      this.animateOut = gsap.timeline({
        delay: 2,
      });

      this.animateOut.to(this.elements.titleSpans, {
        autoAlpha: 0,
        duration: 2,
        ease: 'expo.out',
        stagger: 0.1,
        y: '100',
      });

      this.animateOut.to(this.elements.numberText, {
        autoAlpha: 0,
        duration: 2,
        ease: 'expo.out',
        stagger: 0.1,
        y: '100',
      });

      this.animateOut.to(
        this.element,
        {
          autoAlpha: 1,
          duration: 1,
          ease: 'expo.out',
          scaleY: 0,
          transformOrigin: '100% 100%',
        },
        '-=1.2'
      );

      this.animateOut.call(() => {
        this.emit('completed');
      });
    });
  }

  destroy() {
    this.element.parentNode.removeChild(this.element);
  }

  //   onLoaded() {
  //     return new Promise((resolve) => {
  //       this.emit('completed');

  //       this.animateOut = gsap.timeline({
  //         delay: 2,
  //       });

  //       this.animateOut.to(this.elements.titleSpans, {
  //         autoAlpha: 0,
  //         duration: 2,
  //         ease: 'expo.out',
  //         stagger: 0.1,
  //         y: '100%',
  //       });

  //       this.animateOut.to(
  //         this.elements.numberText,
  //         {
  //           autoAlpha: 0,
  //           duration: 2,
  //           ease: 'expo.out',
  //           stagger: 0.1,
  //           y: '100%',
  //         },
  //         '-=1.5'
  //       );

  //       this.animateOut.to(
  //         this.element,
  //         {
  //           // autoAlpha: 0,
  //           duration: 2,
  //           ease: 'expo.out',
  //           scaleY: 0,
  //           transformOrigin: '100% 100%',
  //         },
  //         '-=1.5'
  //       );

  //       this.animateOut.call(() => {
  //         this.destroy();
  //         resolve();
  //       });
  //     });
  //   }

  //   destroy() {
  //     if (this.element && this.element.parentNode) {
  //       this.element.parentNode.removeChild(this.element);
  //     }
  //   }
}

//   createLoader() {
//     this.loadedImages = 0; // Initialize the counter

//     each(this.elements.images, (element) => {
//       const image = new Image();
//       image.onload = () => {
//         this.onAssetLoaded(image);
//       };
//       image.src = element.src; // Make sure to set the correct source
//     });
// }

//   onAssetLoaded(image) {
//     this.loadedImages++;
//     const percent = Math.round(
//       (this.loadedImages / this.elements.images.length) * 100
//     );
//     this.elements.number.textContent = `${percent}%`;

//     if (this.loadedImages === this.elements.images.length) {
//       this.onLoaded();
//     }
//   }

//   onLoaded() {
//     const timeline = gsap.timeline();
//     timeline.to(this.element, {
//       autoAlpha: 0,
//       onComplete: () => {
//         this.emit('completed');
//         // Optional: Clean up if needed
//         this.destroy();
//       },
//     });

//   destroy() {
//     if (this.element && this.element.parentNode) {
//       this.element.parentNode.removeChild(this.element);
//     }
//   }
