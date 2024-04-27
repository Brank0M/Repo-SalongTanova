import Component from 'classes/Component.js';

export default class Animation extends Component {
  constructor({ element, elements }) {
    super({
      element,
      elements,
    });

    if (!this.element) {
      console.error('Element is not provided or is invalid:', this.element);
      return;
    }

    this.createObserver();
    this.animateOut();
  }

  createObserver() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.animateIn();
        } else {
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
