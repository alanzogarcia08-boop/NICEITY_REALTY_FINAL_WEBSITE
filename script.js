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
var bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

  bookingForm.onsubmit = function (event) {

    var message = document.getElementById("message");

    var boxes = ["name", "unit", "date", "time", "email"];
    var allFilled = true;

    // Validates if it is empty
    for (var i = 0; i < boxes.length; i++) {
      var box = document.getElementById(boxes[i]);

      if (box.value.trim() == "") {
        box.classList.add("error");
        allFilled = false;
      } else {
        box.classList.remove("error");
      }
    }

    if (allFilled == false) {
      message.className = "";
      message.innerHTML = "Please fill in all fields correctly.";
      event.preventDefault();
      return;
    }

    // Validates the email
    var email = document.getElementById("email").value;
    if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
      message.className = "";
      message.innerHTML = "Please enter a valid e-mail address.";
      document.getElementById("email").classList.add("error");
      event.preventDefault();
      return;
    }

    // Validates the date (today or later)
    var chosenDate = new Date(document.getElementById("date").value + "T00:00:00");
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    if (chosenDate < today) {
      message.className = "";
      message.innerHTML = "Please choose a date that is today or later.";
      document.getElementById("date").classList.add("error");
      event.preventDefault();
      return;
    }

    message.className = "success";
    message.innerHTML = "Sending your request...";
  };
}