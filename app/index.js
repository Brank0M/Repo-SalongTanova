import each from 'lodash/each';
import Navigation from 'components/Navigation';
import Preloader from 'components/Preloader';
import Footer from 'components/Footer';

import Home from 'pages/Home';
import About from 'pages/About';
import Contact from 'pages/Contact';
import Prices from 'pages/Prices';

class App {
  constructor() {
    this.createPreloader();
    this.createContent();
    this.createPages();
    this.createNavigation();
    // this.createFooter();

    this.addLinkListeners();
    this.addEventListeners();

    this.update();
  }

  createNavigation() {
    this.navigation = new Navigation({
      element: document.querySelector('.navigation'),
      elements: {
        navLinks: document.querySelectorAll('.nav-links li'),
        burgerMenu: document.querySelector('#burger'),
      },
    });
  }

  // createFooter() {
  //   this.footer = new Footer({
  //     element: document.querySelector('.footer'),
  //   });
  // }

  createPreloader() {
    this.preloader = new Preloader();
    this.preloader.once('completed', this.onPreloaded.bind(this));
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
  }

  onPreloaded() {
    // console.log('Preloaded'); // delete this line

    this.preloader.destroy();

    this.onResize();

    this.page.show();
  }

  async onChange(url) {
    await this.page.hide();

    const request = await window.fetch(url);

    if (request.status === 200) {
      const html = await request.text();
      const div = document.createElement('div');

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

  update() {
    if (this.page && this.page.update) {
      this.page.update();
    }
    this.frame = window.requestAnimationFrame(this.update.bind(this));
  }

  addEventListeners() {
    window.addEventListener('resize', this.onResize.bind(this));
  }

  addLinkListeners() {
    const links = document.querySelectorAll('a');

    each(links, (link) => {
      link.onClick = (event) => {
        event.preventDefault();
        const { href } = link;

        this.onChange(href);

        // console.log(event);
      };
    });
  }
}

new App();

// addEventListeners() {
//   window.addEventListener('popstate', this.onPopState.bind(this));
// }

// onPopState() {
//   this.onChange({ url: window.location.pathname });
// }

// onChange({ url, push = false }) {
//   const request = new XMLHttpRequest();

//   request.open('GET', url, true);
//   request.onload = () => {
//     this.onContent({ push, request });
//   };
//   request.send();
// }

// onContent({ push, request }) {
//   const parser = new DOMParser();
//   const htmlDocument = parser.parseFromString(request.response, 'text/html');
//   const content = htmlDocument.querySelector('.content');

//   this.content.replaceWith(content);

//   this.content = content;
//   this.template = this.content.getAttribute('data-template');

//   if (push) {
//     window.history.pushState({}, '', url);
//   }

//   this.createPages();
// }
