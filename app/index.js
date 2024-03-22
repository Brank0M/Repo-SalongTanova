import Home from 'pages/Home';
import About from 'pages/About';
import Contact from 'pages/Contact';
import Prices from 'pages/Prices';

class App {
  constructor() {
    this.createContent();
    this.createPages();
    // this.addEventListeners();
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

  //   addEventListeners() {
  //     window.addEventListener('popstate', this.onPopState.bind(this));
  //   }

  //   onPopState() {
  //     this.onChange({ url: window.location.pathname });
  //   }

  //   onChange({ url, push = false }) {
  //     const request = new XMLHttpRequest();

  //     request.open('GET', url, true);
  //     request.onload = () => {
  //       this.onContent({ push, request });
  //     };
  //     request.send();
  //   }

  //   onContent({ push, request }) {
  //     const parser = new DOMParser();
  //     const htmlDocument = parser.parseFromString(request.response, 'text/html');
  //     const content = htmlDocument.querySelector('.content');

  //     this.content.replaceWith(content);

  //     this.content = content;
  //     this.template = this.content.getAttribute('data-template');

  //     if (push) {
  //       window.history.pushState({}, '', url);
  //     }

  //     this.createPages();
  //   }
}

new App();
