// Load navbar
fetch('navbar.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('navbar-placeholder').innerHTML = html;
  })
  .catch(err => console.error('Error loading navbar:', err));

// Load footer
fetch('footer.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('footer-placeholder').innerHTML = html;
  })
  .catch(err => console.error('Error loading footer:', err));