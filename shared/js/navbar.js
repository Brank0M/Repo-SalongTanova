document.addEventListener('DOMContentLoaded', function () {
  const burgerMenu = document.querySelector('.burger-menu');
  const navLinks = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-links li');

  burgerMenu.addEventListener('click', function () {
    // Toggle navigation links visibility
    navLinks.classList.toggle('nav-active');

    // Toggle burger menu animation
    burgerMenu.classList.toggle('cross');

    // Toggle transition effect on each nav item
    navItems.forEach((item, index) => {
      if (item.style.animation) {
        item.style.animation = '';
      } else {
        item.style.animation = `navItemFade 0.5s ease forwards ${
          index / 5 + 0.2
        }s`;
      }
    });
  });
});
