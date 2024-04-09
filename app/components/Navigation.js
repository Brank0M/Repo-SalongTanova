import Component from '../classes/Component';

export default class Navigation extends Component {
  constructor() {
    super({
      element: '.navigation', // Ensure this targets your main navigation container
      elements: {
        items: document.querySelectorAll('.nav-links li'),
        links: document.querySelector('.nav-links'),
      },
    });

    this.navMenu();
  }

  navMenu() {
    const burgerMenu = document.querySelector('.burger-menu');

    burgerMenu.addEventListener('click', () => {
      // Toggle navigation links visibility
      this.elements.links.classList.toggle('nav-active');

      // Toggle burger menu animation
      burgerMenu.classList.toggle('cross');

      // Animation for each nav item
      this.elements.items.forEach((item, index) => {
        item.style.animation = item.style.animation
          ? ''
          : `navItemFade 0.5s ease forwards ${index / 5 + 0.2}s`;
      });
      // Close navigation if link is not clicked in 2 seconds after opening
      setTimeout(() => {
        this.elements.links.classList.remove('nav-active');
        burgerMenu.classList.remove('cross');
        this.elements.items.forEach((item) => {
          item.style.animation = '';
        });
      }, 5000);
    });
  }
}
