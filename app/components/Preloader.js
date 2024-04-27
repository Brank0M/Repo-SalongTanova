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

    this.createLoader();
  }

  createLoader() {
    each(this.elements.images, (element) => {
      element.onload = () => {
        this.onAssetLoaded(element);
      };
      element.src = element.getAttribute('data-src');
    });
  }

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
}
