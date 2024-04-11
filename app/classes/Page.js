import each from 'lodash/each';
import map from 'lodash/map';
import { gsap } from 'gsap';
import Prefix from 'prefix';
import NormalizeWheel from 'normalize-wheel';

import Title from '../animations/Title';
import Paragraph from '../animations/Paragraph';

export default class Page {
  constructor({ element, elements, id }) {
    this.selector = element;
    this.selectorChildren = {
      ...elements,

      animationTitles: '[data-animation="title"]',
      animationParagraphs: '[data-animation="paragraph"]',
    };
    this.id = id;
    this.transformPrefix = Prefix('transform');

    // console.log(this.transformPrefix);

    this.onMouseWheelEvent = this.onMouseWheel.bind(this);
  }

  create() {
    this.element = document.querySelector(this.selector);
    this.elements = {};

    this.scroll = {
      current: 0,
      target: 0,
      last: 0,
      limit: 0,
    };

    each(this.selectorChildren, (entry, key) => {
      if (
        entry instanceof window.HTMLElement ||
        entry instanceof window.NodeList ||
        Array.isArray(entry)
      ) {
        this.elements[key] = entry;
      } else {
        this.elements[key] = document.querySelectorAll(entry);

        if (this.elements[key].length === 0) {
          this.elements[key] = null;
        } else if (this.elements[key].length === 1) {
          this.elements[key] = document.querySelector(entry);
        }
      }
    });

    this.createAnimations();
  }

  createAnimations() {
    this.animations = [];

    //Titles animation
    this.animationTitles = map(this.elements.animationTitles, (element) => {
      return new Title({
        element,
      });
    });

    this.animations.push(...this.animationTitles);

    //Paragraphs animation
    this.animationParagraphs = map(
      this.elements.animationParagraphs,
      (element) => {
        return new Paragraph({
          element,
        });
      }
    );

    this.animations.push(...this.animationParagraphs);
  }

  show() {
    return new Promise((resolve) => {
      this.animationIn = gsap.timeline();

      this.animationIn.from(
        this.element,
        {
          // you can change this to/from gsap.to to see the animation
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
        }
      ); // you can change this to 1 to see the animation
      this.animationIn.call(() => {
        this.addEventlistener();
        resolve();
      });
    });
  }

  hide() {
    return new Promise((resolve) => {
      this.removeEventlistener();

      this.animationOut = gsap.timeline();

      this.animationOut.to(this.element, {
        autoAlpha: 0,
        onComplete: resolve,
      });
    });
  }

  onMouseWheel(event) {
    const { pixelY } = NormalizeWheel(event);
    this.scroll.target += pixelY;
  }

  onResize() {
    if (this.elements.wrapper) {
      this.scroll.limit =
        this.elements.wrapper.clientHeight - window.innerHeight + 277;
    }

    each(this.animations, (animation) => animation.onResize());
  }

  update() {
    this.scroll.target = gsap.utils.clamp(
      0,
      this.scroll.limit,
      this.scroll.target
    );

    this.scroll.current = gsap.utils.interpolate(
      this.scroll.current,
      this.scroll.target,
      0.1
    );

    if (this.scroll.current < 0.01) {
      this.scroll.current = 0;
    }

    if (this.elements.wrapper) {
      this.elements.wrapper.style[
        this.transformPrefix
      ] = `translateY(-${this.scroll.current}px)`;
    }
  }

  addEventlistener() {
    window.addEventListener('mousewheel', this.onMouseWheelEvent);
  }

  removeEventlistener() {
    window.removeEventListener('mousewheel', this.onMouseWheelEvent);
  }
}
