import each from 'lodash/each';
import Navigation from 'components/Navigation';
import Preloader from 'components/Preloader';
import Images from 'animations/Images';

import Home from 'pages/Home';
import About from 'pages/About';
import Contact from 'pages/Contact';
import Prices from 'pages/Prices';

class App {
  constructor() {
    this.createContent();
    this.createPreloader();

    this.createNavigation();
    this.createImages();
    this.createPages();

    this.addEventListeners();
    this.addLinkListeners();

    this.onResize();
    this.update();

    this.touchStartY = 0;
    this.touchCurrentY = 0;
  }

  // createNavigation() {
  //   this.navigation = new Navigation({
  //     element: document.querySelector('.navigation'),
  //     elements: {
  //       navLinks: document.querySelectorAll('.nav-links li'),
  //       burgerMenu: document.querySelector('#burger'),
  //     },
  //   });
  // }
  createNavigation() {
    this.navigation = new Navigation({
      template: this.template,
    });
  }

  createPreloader() {
    this.preloader = new Preloader();
    this.preloader.once('completed', this.onPreloaded.bind(this));
  }

  createImages() {
    const imageElements = document.querySelectorAll('img[data-src]');

    if (imageElements.length === 0) {
      console.error('Failed to find any img elements with data-src attribute');
      return;
    }

    this.images = new Images({
      element: document.body,
      elements: {
        images: imageElements,
      },
    });
  }

  createContent() {
    this.content = document.querySelector('.content');
    this.template = this.content.getAttribute('data-template');
  }

  createPages() {
    this.pages = {
      home: new Home(),
      about: new About(),
      contact: new Contact(),
      prices: new Prices(),
    };

    this.page = this.pages[this.template];
    this.page.create();

    // this.preloader.destroy(); // delete the preloader CHeck here
  }

  onPreloaded() {
    this.onResize();

    this.page.show();
    this.preloader.destroy();
  }

  onPopState() {
    this.onChange({
      url: window.location.pathname,
      push: false,
    });
  }

  async onChange({ url, push = true }) {
    await this.page.hide();

    const request = await window.fetch(url);
    console.log('request', request);

    if (request.status === 200) {
      const html = await request.text();
      const div = document.createElement('div');

      if (push) {
        window.history.pushState({}, '', url); // Change the url in the browser without reloading the page
      }

      div.innerHTML = html;

      const divContent = div.querySelector('.content');

      this.template = divContent.getAttribute('data-template');

      this.content.setAttribute('data-template', this.template);
      this.content.innerHTML = divContent.innerHTML;

      this.page = this.pages[this.template];
      this.page.create();

      this.onResize();

      this.page.show();

      this.addLinkListeners();
    } else {
      console.error('Error trying to fetch the page.');
    }
  }

  onResize() {
    if (this.page && this.page.onResize) {
      this.page.onResize();
    }
  }

  onTouchDown(event) {
    if (this.page && this.page.onTouchDown) {
      this.page.onTouchDown(event);
    }
  }

  onTouchMove(event) {
    if (this.page && this.page.onTouchMove) {
      this.page.onTouchMove(event);
    }
  }

  onTouchUp(event) {
    if (this.page && this.page.onTouchUp) {
      this.page.onTouchUp(event);
    }
  }

  update() {
    if (this.page && this.page.update) {
      this.page.update();
    }
    this.frame = window.requestAnimationFrame(this.update.bind(this));
  }

  addEventListeners() {
    // window.addEventListener('popstate', this.onPopState.bind(this));

    window.addEventListener('resize', this.onResize.bind(this));
  }

  addLinkListeners() {
    const links = document.querySelectorAll('a');

    each(links, (link) => {
      link.onClick = (event) => {
        event.preventDefault();
        const { href } = link;
        console.log('Event', event);

        // this.onChange(href);
        this.onChange({ url: href });
        // this.preloader.onChange.destroy();
      };
    });
  }
}

new App();
