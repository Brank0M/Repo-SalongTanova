// import Component from "../classes/Component";

// export default class Footer extends Component {
//     constructor({ element, elements }) {
//         super({ element, elements });

//         this.createObserver();
//     }

//     createObserver() {
//         this.observer = new IntersectionObserver((entries) => {
//         entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//             this.element.classList.add("footer--sticky");
//             } else {
//             this.element.classList.remove("footer--sticky");
//             }
//         });
//         });

//         this.observer.observe(this.element);
//     }
//     }
