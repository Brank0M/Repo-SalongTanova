import { gsap } from 'gsap';
import Animation from 'classes/Animation.js';
import { calculate, split } from 'utils/text.js';
import each from 'lodash/each';

export default class Title extends Animation {
  constructor({ element, elements }) {
    super({
      element,
      elements,
    });

    split({ element: this.element, append: true });
    split({ element: this.element, append: true });

    this.elementLinesSpans = this.element.querySelectorAll('span span');

    // split({ element: this.element, append: true });
    // split({ element: this.element, append: true });

    // let line = this.element.querySelectorAll('span span'); // Creating an array of spans
    // this.elementsLines = calculate(line); // Calculating the position of each span
    // console.log(this.elementsLines);

    // this.elementLinesSpans = this.element.querySelectorAll('span span'); //
    // console.log(this.elementLinesSpans);
  }

  animateIn() {
    this.timeLineIn = gsap.timeline({
      delay: 0.5,
    });

    this.timeLineIn.set(this.element, {
      autoAlpha: 1,
    });

    each(this.elementLines, (line, index) => {
      this.timeLineIn.fromTo(
        line,
        {
          y: 100,
        },
        {
          // autoAlpha: 1,
          delay: index * 0.2,
          duration: 1.5,
          ease: 'expo.out',
          y: 0,
        },
        0
      );
    });
  }

  animateOut() {
    gsap.set(this.element, {
      autoAlpha: 0,
    });
  }

  onResize() {
    this.elementLines = calculate(this.elementLinesSpans);

    // console.log(this.elementLines);
  }
}
