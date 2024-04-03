
// script.js

// Smooth scrolling when a navigation link is clicked
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    const offset = 60; // Adjust this value to include any fixed headers or other elements

    window.scrollTo({
      top: target.offsetTop - offset,
      behavior: 'smooth'
    });
  });
});

function playSound() {
  var audio = document.getElementById("zap");
  audio.play();
}

const homeButton = document.getElementById('home-button');

homeButton.addEventListener('click', (event) => {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  const animation = document.querySelector('.animation');

  if (window.scrollY > 0) {
    animation.style.left = '0';
    animation.style.opacity = '1';
  } else {
    animation.style.left = '100%';
    animation.style.opacity = '5';
  }
});

const logoImage = document.getElementById('logo-image');

logoImage.addEventListener('click', function() {
  location.reload();
});


const button = document.getElementById('CTA');

button.addEventListener('click', function() {
  const email = 'alessandropinto@outlook.it';
  const subject = 'Website Inquiry'; // Optional
  const body = 'Hello, I have a question...'; // Optional

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  // Simulate clicking a link
  const hiddenLink = document.createElement('a');
  hiddenLink.href = mailtoLink;
  hiddenLink.style.display = 'none'; 
  document.body.appendChild(hiddenLink);
  hiddenLink.click();
  document.body.removeChild(hiddenLink);
});
