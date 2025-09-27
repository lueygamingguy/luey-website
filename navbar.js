// Loads navbar.html into the placeholder and sets up mobile toggle.
fetch('navbar.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('navbar-placeholder').innerHTML = html;
    // mobile toggle
    const toggle = document.getElementById('nav-toggle');
    const links = document.getElementById('navLinks');
    if (toggle && links) {
      toggle.addEventListener('click', () => {
        links.classList.toggle('open');
      });
    }
  })
  .catch(err => {
    console.error('Could not load navbar:', err);
  });