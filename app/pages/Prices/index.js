import Page from 'classes/Page';

export default class Prices extends Page {
  constructor() {
    super({
      id: 'prices',
      element: '.container',

      elements: {
        pricesTitle: '.prices_title',
        pricesBox: '.prices_box',
        wrapper: '.container',
      },
    });

    // this.prices();
  }
}
