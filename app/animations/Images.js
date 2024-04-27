import { gsap } from 'gsap';
import Animation from 'classes/Animation.js';

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
    this.timeLineIn = gsap.timeline({
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
    this.timeLineOut = gsap.timeline();

    this.timeLineOut.to(this.element, {
      autoAlpha: 0,
    });
  }

  onResize() {
    this.elementImages = this.element.querySelectorAll(
      '[data-animation="image"]'
    );
  }
}
