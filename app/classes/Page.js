import each from 'lodash/each';
import map from 'lodash/map';
import { gsap } from 'gsap';
import Prefix from 'prefix';
import NormalizeWheel from 'normalize-wheel';

import Title from '../animations/Title';
import Images from '../animations/Images';
import Paragraph from '../animations/Paragraph';
import AsyncLoad from './AsyncLoad';

import { ColorsManager } from './Colors';

export default class Page {
  constructor({ element, elements, id }) {
    this.selector = element;
    this.selectorChildren = {
      ...elements,

      animationTitles: '[data-animation="title"]',
      animationParagraphs: '[data-animation="paragraph"]',
      animationImages: '[data-animation="image"]',

      preloaders: '[data-src]',
    };
    this.id = id;
    this.transformPrefix = Prefix('transform');

    this.startY = 0;
    this.isTouching = false;
    this.onMouseWheelEvent = this.onMouseWheel.bind(this);
    this.onTouchStartEvent = this.onTouchStart.bind(this);
    this.onTouchMoveEvent = this.onTouchMove.bind(this);
    this.onTouchEndEvent = this.onTouchEnd.bind(this);
  }

  create() {
    this.element = document.querySelector(this.selector);
    console.log(this.element);
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
    this.createPreloader();
  }

  createPreloader() {
    this.preloaders = map(this.elements.preloaders, (element) => {
      return new AsyncLoad({
        element,
      });
    });
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

    //Images animation
    this.animationImages = map(this.elements.animationImages, (element) => {
      return new Images({
        element,
        elements: {
          title: this.elements.title,
        },
      });
    });

    this.animations.push(...this.animationParagraphs);
  }

  show() {
    return new Promise((resolve) => {
      ColorsManager.change({
        backgroundColor: this.element.getAttribute('data-background'),
        color: this.element.getAttribute('data-color'),
      });
      this.animationIn = gsap.timeline();

      this.animationIn.from(
        this.element,
        {
          // you can change this to/from gsap.to to see the animation
          autoAlpha: 0,
          // delay: 1, //test
          // stagger: 0.5, // test
          // scaleY: 0, //test
          // transformOrigin: '100% 100%', //test
        },
        // '-=1.5'
        {
          autoAlpha: 1,
        }
        // '-=1.5'
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

  onTouchStart(event) {
    this.isTouching = true;
    this.startY = event.touches ? event.touches[0].clientY : event.clientY;
  }

  onTouchMove(event) {
    if (this.isTouching) {
      const currentY = event.touches ? event.touches[0].clientY : event.clientY;
      this.scroll.target += this.startY - currentY;
      this.startY = currentY;
    }
  }

  onTouchEnd(event) {
    this.isTouching = false;
  }

  onResize() {
    if (this.elements.wrapper) {
      this.scroll.limit =
        this.elements.wrapper.clientHeight - window.innerHeight;
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
    window.addEventListener('mousedown', this.onTouchStartEvent);
    window.addEventListener('mouseup', this.onTouchEndEvent);
    window.addEventListener('touchstart', this.onTouchStartEvent);
    window.addEventListener('touchmove', this.onTouchMoveEvent);
    window.addEventListener('touchend', this.onTouchEndEvent);
  }

  removeEventlistener() {
    window.removeEventListener('mousewheel', this.onMouseWheelEvent);
    window.removeEventListener('mousedown', this.onTouchStartEvent);
    window.removeEventListener('mouseup', this.onTouchEndEvent);
    window.removeEventListener('touchstart', this.onTouchStartEvent);
    window.removeEventListener('touchmove', this.onTouchMoveEvent);
    window.removeEventListener('touchend', this.onTouchEndEvent);
  }

  destroy() {
    this.removeEventlistener();
  }
}
