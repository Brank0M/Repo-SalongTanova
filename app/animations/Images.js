import GSAP from 'gsap';
import Animation from 'classes/Animation.js';
import each from 'lodash/each';
// import { calculate, split } from 'utils/text.js';

export default class Images extends Animation {
  constructor({ element, elements }) {
    super({
      element,
      elements,
    });

    this.elementImages = this.element.querySelectorAll(
      '[data-animation="image"]'
    );
  }

  animateIn() {
    this.timeLineIn = GSAP.timeline({
      delay: 0.5,
      duration: 0.5,
      ease: 'expo.out',
      y: 50,
    });

    this.timeLineIn.to(this.element, {
      autoAlpha: 1,
    });
  }

  animateOut() {
    GSAP.set(this.element, {
      autoAlpha: 0,
    });
  }

  onResize() {
    this.elementImages = this.element.querySelectorAll(
      '[data-animation="image"]'
    );
  }
}
