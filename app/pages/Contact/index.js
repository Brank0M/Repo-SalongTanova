import Page from 'classes/Page';

export default class Contact extends Page {
  constructor() {
    super({
      id: 'contact',
      element: '.contact',
    });
    this.elements = {
      video: document.querySelector('.contact video'),
    };
  }

  initVideo() {
    const video = this.elements.video;
    if (!video) {
      console.error('No video element found.');
      return;
    }

    video.addEventListener('mouseover', () => {
      video.play().catch((error) => {
        console.error('Error trying to play the video:', error);
      });
    });

    video.addEventListener('click', () => {
      if (!video.paused) {
        video.pause();
      } else {
        video.play().catch((error) => {
          console.error('Error trying to play the video:', error);
        });
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const contactPageElement = document.querySelector('.contact');
  if (contactPageElement) {
    const contactPage = new Contact();
    contactPage.initVideo();
  }
});
