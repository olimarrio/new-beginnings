const initUpdateNavbarOnScroll = () => {
  const navbar = document.querySelector('.navbar-home');
  const navlinks = document.querySelectorAll('.nav-link-black');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 420) {
        navbar.classList.add('navbar-lewagon-white');
        navlinks.forEach(link => link.classList.add('nav-link-blue'));
      } else {
        navbar.classList.remove('navbar-lewagon-white');
        navlinks.forEach(link => link.classList.remove('nav-link-blue'));
      }
    });
  }
}

export { initUpdateNavbarOnScroll };

