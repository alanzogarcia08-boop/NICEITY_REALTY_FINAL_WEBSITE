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
    const fields = form.querySelectorAll('input');
    let allFilled = true;

    // Check that every field has a value
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

    // Open the visitor's email app with the request filled in
    const body = 'Name: ' + form.name.value +
      '\nUnit: ' + form.unit.value +
      '\nPreferred time and date: ' + form.datetime.value +
      '\nEmail: ' + form.email.value;
    window.location.href = 'mailto:niceityrealty@gmail.com?subject=House Viewing Request&body=' + encodeURIComponent(body);

    message.className = 'success';
    message.textContent = 'Thank you! Your viewing request has been submitted.';
    form.reset();
  });
}

