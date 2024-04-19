import Component from 'classes/Component.js';

export default class Animation extends Component {
  constructor({ element, elements }) {
    super({
      element,
      elements,
    });

    if (!this.element) {
      console.error('Element is not provided or is invalid:', this.element);
      return; // Early exit if no valid element is provided
    }

    this.createObserver();
    this.animateOut();
  }

  createObserver() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          //   console.log('animateIn');
          this.animateIn();
        } else {
          //   console.log('animateOut');
          this.animateOut();
        }
      });
    });

    if (this.element) {
      this.observer.observe(this.element);
    } else {
      console.error('Element is not provided or is invalid:', this.element);
    }
  }

  animateIn() {}

  animateOut() {}
}
