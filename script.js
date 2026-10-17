// ===== Hamburger menu =====
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

// Open / close the menu and animate the icon
hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('open');
  nav.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', nav.classList.contains('open'));
});

// Close the menu when a link is clicked
document.querySelectorAll('nav a').forEach(function (link) {
  link.addEventListener('click', function () {
    hamburger.classList.remove('open');
    nav.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

// ===== Booking form (Contact page) =====
const form = document.getElementById('bookingForm');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const message = document.getElementById('message');
    
    // Validation
    const fields = form.querySelectorAll('input, select');
    let allFilled = true;

    // Validates if it is empty or invalid
    fields.forEach(function (field) {
      if (field.value.trim() === '' || !field.checkValidity()) {
        field.classList.add('error');
        allFilled = false;
      } else {
        field.classList.remove('error');
      }
    });

    if (!allFilled) {
      message.className = '';
      message.textContent = 'Please fill in all fields correctly.';
      return;
    }
    
    const body = 'Name: ' + form.name.value +
      '\nUnit: ' + form.unit.value +
      '\nPreferred Date: ' + form.date.value +
      '\nPreferred Time: ' + form.time.value +
      '\nEmail: ' + form.email.value;
      
    window.location.href = 'mailto:alanzogarcia08@gmail.com?subject=House Viewing Request&body=' + encodeURIComponent(body);

    message.className = 'success';
    message.textContent = 'Thank you! Your viewing request has been submitted.';
    form.reset();
  });
}

