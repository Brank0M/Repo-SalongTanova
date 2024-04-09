import Page from 'classes/Page';
import { wrap } from 'lodash';
import Title from '../../animations/Title';

export default class About extends Page {
  constructor() {
    super({
      id: 'about',
      element: '.about',
      elements: {
        wrapper: '.container',
        title: '[data-animation="title"]',
      },
    });
  }
}
