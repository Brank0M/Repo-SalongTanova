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

  // prices() {
  //   document.addEventListener('DOMContentLoaded', () => {
  //     const container = document.getElementById('prices-container');

  //     const services = [
  //       {
  //         title: 'Klippning',
  //         items: [
  //           {
  //             description: 'Dam: klippning (utan tvätt)',
  //             time: '45 - 60 min',
  //             price: '350-490 kr',
  //           },
  //           {
  //             description: 'Dam: tvätt, klipp & styling',
  //             time: '60 - 90 min',
  //             price: '395-595 kr',
  //           },
  //           {
  //             description: 'Barn klippning 0-14 år',
  //             time: '30 - 45 min',
  //             price: '290-350 kr',
  //           },
  //           {
  //             description: 'Herr: klippning',
  //             time: '30 minuter',
  //             price: '470 kr',
  //           },
  //           {
  //             description: 'Herr: klippning m. delvis maskin',
  //             time: '30 minuter',
  //             price: '420 kr',
  //           },
  //           {
  //             description: 'Snagging & maskinklipp',
  //             time: '15 - 30 min',
  //             price: '150-220 kr',
  //           },
  //           { description: 'Lugg', time: '15 - 30 min', price: '90-120 kr' },
  //         ],
  //       },
  //       {
  //         title: 'Hårfärgning',
  //         items: [
  //           {
  //             description: 'Färg: utväxt/botten & klipp',
  //             time: '120 - 170 min',
  //             price: 'Från 895 kr',
  //           },
  //           {
  //             description: 'Färg: utväxt/ botten färg',
  //             time: '90 - 150 min',
  //             price: 'Från 695 kr',
  //           },
  //           {
  //             description: 'Färg: kort',
  //             time: '90 - 150 min',
  //             price: 'Från 795 kr',
  //           },
  //           {
  //             description: 'Färg: kort & klipp',
  //             time: '120 - 180 min',
  //             price: 'Från 1 095 kr',
  //           },
  //           {
  //             description: 'Färg: mellanlångt',
  //             time: '105 - 165 min',
  //             price: 'Från 995 kr',
  //           },
  //           {
  //             description: 'Färg: mellanlångt & klipp',
  //             time: '120 - 180 min',
  //             price: 'Från 1 195 kr',
  //           },
  //           {
  //             description: 'Färg: långt/extra långt',
  //             time: '120 - 180 min',
  //             price: 'Från 1 195 kr',
  //           },
  //           {
  //             description: 'Färg: långt/extra långt & klipp',
  //             time: '180 - 240 min',
  //             price: 'Från 1 295 kr',
  //           },
  //         ],
  //       },
  //       {
  //         title: 'Slingor & Balayage',
  //         items: [
  //           {
  //             description: 'Bayalage exkl. klippning',
  //             time: '240 minuter',
  //             price: 'Från 1 695 kr',
  //           },
  //           {
  //             description: 'Bayalage ink. klippning',
  //             time: '180 - 240 min',
  //             price: '1 800-2 195 kr',
  //           },
  //           {
  //             description: 'Folieslingor & klippning',
  //             time: '180 - 290 min',
  //             price: 'Från 1 695 kr',
  //           },
  //           {
  //             description: 'Folieslingor av utväxt & klippning',
  //             time: '180 minuter',
  //             price: 'Från 1 695 kr',
  //           },
  //           {
  //             description: 'Folieslingor (utan klipp)',
  //             time: '150 minuter',
  //             price: 'Från 1 595 kr',
  //           },
  //         ],
  //       },
  //       {
  //         title: 'Tjänster',
  //         items: [
  //           { description: 'Tvätt', time: '15 - 20 min', price: '190-250 kr' },
  //           {
  //             description: 'Tvätt & styling: kort',
  //             time: '40 minuter',
  //             price: '250 kr',
  //           },
  //           {
  //             description: 'Nyansering',
  //             time: '45 - 90 min',
  //             price: 'Varierande pris',
  //           },
  //           {
  //             description: 'Tvätt & styling: långt',
  //             time: '45 minuter',
  //             price: '280 kr',
  //           },
  //           {
  //             description: 'Inpackningskur Miracle Elixir',
  //             time: '45 - 55 min',
  //             price: '395-495 kr',
  //           },
  //         ],
  //       },
  //       {
  //         title: 'Fransar & Bryn',
  //         items: [
  //           {
  //             description: 'Färg av fransar',
  //             time: '30 minuter',
  //             price: '190-250 kr',
  //           },
  //           {
  //             description: 'Färg av fransar + ögonbryn inkl. plock',
  //             time: '30 minuter',
  //             price: '330-450 kr',
  //           },
  //           {
  //             description: 'Ögonbryns plock',
  //             time: '15 minuter',
  //             price: '159-220 kr',
  //           },
  //           {
  //             description: 'Färg av ögonbryn + plock',
  //             time: '30 - 50 min',
  //             price: '299-350 kr',
  //           },
  //         ],
  //       },
  //     ];

  //     services.forEach((service) => {
  //       const section = document.createElement('div');
  //       section.className = 'prices_section';

  //       const titleElement = document.createElement('h3');
  //       titleElement.textContent = service.title;
  //       section.appendChild(titleElement);

  //       service.items.forEach((item) => {
  //         const itemElement = document.createElement('p');
  //         itemElement.innerHTML = `${item.description}<br>${item.time}, ${item.price}`;
  //         section.appendChild(itemElement);
  //       });

  //       container.appendChild(section);
  //     });
  //   });
  // }
}
