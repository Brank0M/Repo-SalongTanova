import Component from '../classes/Component';
import { gsap } from 'gsap';

export default class Navigation extends Component {
  constructor() {
    super({
      element: '.navigation',
      elements: {
        items: document.querySelectorAll('.nav-links li'),
        links: document.querySelectorAll('.menu-link'),
        burger: document.querySelector('#burger'),
      },
    });

    this.tl = gsap.timeline({ reversed: false });
    this.initializeTimeline();
    this.elements.burger.addEventListener('click', this.toggleMenu.bind(this));
  }

  initializeTimeline() {
    this.tl
      .to('.menu-link', {
        yPercent: 100,
        duration: 0.5,
      })
      .to('.navigation', {
        width: 0,
        immediateRender: false,
      })
      .progress(1);

    gsap.set('.navigation', { opacity: 1 });
  }

  toggleMenu() {
    this.elements.burger.classList.toggle('cross');
    this.tl.reversed(!this.tl.reversed());
  }
}
