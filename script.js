
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {

            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            
            sec.classList.add('show-animate')
        }
        
        else{
            sec.classList.remove('show-animate')
        }
    });

    let header = document.querySelector('header')

    header.classList.toggle('sticky', window.scrollY > 100);

    
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');



    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}

document.addEventListener('DOMContentLoaded', function() {
  var readMoreLink = document.getElementById('read-more-link');
  var secondParagraph = document.getElementById('second-paragraph');

  readMoreLink.addEventListener('click', function(event) {
    event.preventDefault();
    if (secondParagraph.style.display === 'block') {
      secondParagraph.style.display = 'none';
    } else {
      secondParagraph.style.display = 'block';
    }
  });
});


function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var messageInput = document.getElementById('message');
    var mobileNum = document.getElementById('mobileNum')
    var emailSub = document.getElementById('emailSub')

    if (nameInput.value === '') {
      alert('Please Enter Your Name');
      nameInput.focus();
      return;
    }

    if (emailInput.value === '') {
      alert('Please enter your email');
      emailInput.focus();
      return;
    }

    if (!isValidEmail(emailInput.value)) {
      alert('Please enter a valid email address');
      emailInput.focus();
      return;
    }

    if (messageInput.value === '') {
      alert('Please enter your message');
      messageInput.focus();
      return;
    }

    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
    mobileNum.value = '';
    emailSub.value = '';

    alert('Message submitted successfully!');
  });