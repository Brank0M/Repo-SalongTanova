import Home from './Home';
import About from './About';
import Contact from './Contact';
import Prices from './Prices';

export default class Media {
  constructor({ template }) {
    this.template = template;

    // this.createRenderer();
    this.onResize();
  }

  createHome() {
    this.home = new Home();
    this.home.create();
  }

  destroyHome() {
    if (this.home) {
      this.home.destroy();
    }
  }

  createAbout() {
    this.about = new About();
    this.about.create();
  }

  destroyAbout() {
    if (this.about) {
      this.about.destroy();
    }
  }

  createContact() {
    this.contact = new Contact();
    this.contact.create();
  }

  destroyContact() {
    if (this.contact) {
      this.contact.destroy();
    }
  }

  createPrices() {
    this.prices = new Prices();
    this.prices.create();
  }

  destroyPrices() {
    if (this.prices) {
      this.prices.destroy();
    }
  }

  onPreloaded() {
    this.onChangeEnd(this.template);
  }

  onChangeStart(template, url) {
    if (this.home) {
      this.home.hide();
    }

    if (this.about) {
      this.about.hide();
    }

    if (this.contact) {
      this.contact.hide();
    }

    if (this.prices) {
      this.prices.hide();
    }

    // this.isFromCollectionsToDetail =
    //   this.template === 'collections' && url.indexOf('detail') > -1;
    // this.isFromDetailToCollections =
    //   this.template === 'detail' && url.indexOf('collections') > -1;

    // if (this.isFromCollectionsToDetail || this.isFromDetailToCollections) {
    //   this.transition = new Transition({
    //     // collections: this.collections,
    //     gl: this.gl,
    //     scene: this.scene,
    //     sizes: this.sizes,
    //     url,
    //   });
    //   this.transition.setElement(this.collections || this.detail);
    // }
  }

  onChangeEnd(template) {
    if (template === 'home') {
      this.createHome();
    } else {
      this.destroyHome();
    }

    if (template === 'about') {
      this.createAbout();
    } else if (this.about) {
      this.destroyAbout();
    }

    if (template === 'contact') {
      this.createContact();
    } else if (this.contact) {
      this.destroyContact();
    }

    if (template === 'prices') {
      this.createPrices();
    } else if (this.prices) {
      this.destroyPrices();
    }

    this.template = template;
  }

  onResize() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    // this.camera.perspective({
    //   aspect: window.innerWidth / window.innerHeight,
    // });

    // const fov = this.camera.fov * (Math.PI / 180);
    // const height = 2 * Math.tan(fov / 2) * this.camera.position.z;
    // const width = height * this.camera.aspect;

    // this.sizes = {
    //   height,
    //   width,
    // };

    const values = {
      sizes: this.sizes,
    };

    if (this.home) {
      this.home.onResize(values);
    }

    if (this.about) {
      this.about.onResize(values);
    }

    if (this.contact) {
      this.contact.onResize(values);
    }

    if (this.prices) {
      this.prices.onResize(values);
    }
  }

  onTouchDown(event) {
    this.isDown = true;

    this.x.start = event.touches ? event.touches[0].clientX : event.clientX;
    this.y.start = event.touches ? event.touches[0].clientY : event.clientY;

    const values = {
      x: this.x,
      y: this.y,
    };

    if (this.home) {
      this.home.onTouchDown(values);
    }

    if (this.about) {
      this.about.onTouchDown(values);
    }

    if (this.contact) {
      this.contact.onTouchDown(values);
    }

    if (this.prices) {
      this.prices.onTouchDown(values);
    }
  }

  onTouchMove(event) {
    if (!this.isDown) return;

    const x = event.touches ? event.touches[0].clientX : event.clientX;
    const y = event.touches ? event.touches[0].clientY : event.clientY;

    this.x.end = x;
    this.y.end = y;

    const values = {
      x: this.x,
      y: this.y,
    };

    if (this.home) {
      this.home.onTouchMove(values);
    }

    if (this.about) {
      this.about.onTouchMove(values);
    }

    if (this.contact) {
      this.contact.onTouchMove(values);
    }

    if (this.prices) {
      this.prices.onTouchMove(values);
    }
  }

  onTouchUp(event) {
    this.isDown = false;

    const x = event.changedTouches
      ? event.changedTouches[0].clientX
      : event.clientX;
    const y = event.changedTouches
      ? event.changedTouches[0].clientY
      : event.clientY;

    this.x.end = x;
    this.y.end = y;

    const values = {
      x: this.x,
      y: this.y,
    };

    if (this.home) {
      this.home.onTouchUp(values);
    }

    if (this.about) {
      this.about.onTouchUp(values);
    }

    if (this.contact) {
      this.contact.onTouchUp(values);
    }

    if (this.prices) {
      this.prices.onTouchUp(values);
    }
  }

  onWheel(event) {
    if (this.home) {
      this.home.onWheel(event);
    }

    if (this.about) {
      this.about.onWheel(event);
    }

    if (this.contact) {
      this.contact.onWheel(event);
    }

    if (this.prices) {
      this.prices.onWheel(event);
    }
  }

  /**
   * Loop.
   */

  update(scroll) {
    if (this.home) {
      this.home.update();
    }

    if (this.about) {
      this.about.update(scroll);
    }

    if (this.collections) {
      this.collections.update();
    }

    if (this.detail) {
      this.detail.update();
    }
  }
}
