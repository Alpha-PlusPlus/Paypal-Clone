// Pages

// Show main page
document.querySelectorAll('.logo').forEach(logo => {
  logo.addEventListener('click', () => {
    document.querySelector('.front-page').style.display = 'block';
    document.querySelector('.login-page').style.display = 'none';
    document.querySelector('.signup-page').style.display = 'none';
  });
});

// Show Login page
document.querySelectorAll('.login').forEach(loginBtn => {
  loginBtn.addEventListener('click', () => {
    document.querySelector('.front-page').style.display = 'none';
    document.querySelector('.login-page').style.display = 'block';
    document.querySelector('.signup-page').style.display = 'none';
  });
});

// Show Signup page
document.querySelectorAll('.signup').forEach(signupBtn => {
  signupBtn.addEventListener('click', () => {
    document.querySelector('.front-page').style.display = 'none';
    document.querySelector('.login-page').style.display = 'none';
    document.querySelector('.signup-page').style.display = 'flex';
  });
});


// Navigation

const dropdownItems = document.querySelectorAll('.dropdown-hover');

if (window.innerWidth < 1000) {
  // Hamborger Menyu

  const menuIcon = document.querySelector('.menu');
  const navbar = document.querySelector('.navbar');

  menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('change');

    if (!navbar.classList.contains('change')) {
      document.querySelectorAll('.nav-dropdown').forEach(dropdown => {
        dropdown.style.left = '-20rem';
      });
    }

  });

  // Hide menu on click
  document.querySelectorAll('.show-dropdown').forEach((link) => {

    link.addEventListener('click', () => {
      link.nextElementSibling.style.left = "0";
    });
  });

  // Hide drop-down menus on click
  document.querySelectorAll('.dropdown-heading-link').forEach(headingLink => {
    headingLink.addEventListener('click', () => {
      headingLink.parentElement.parentElement.style.left = '-20rem';
    });
  });

} else {
  // Nav Menyu

  dropdownItems.forEach(dropdownItem => {
    dropdownItem.addEventListener('mouseover', () => {
      // Display menu
      dropdownItem.lastElementChild.style.cssText = "opacity: 1; visibility: visible";
  
      // Change BG of wrapper
      document.querySelector('.navbar-wrapper').style.background = 'linear-gradient(to right, #066399, #2f8fdf, #066399)'

      // Rotate arrow
      dropdownItem.firstElementChild.firstElementChild.style.transform = 'rotate(180deg)'
    });
  
    dropdownItem.addEventListener('mouseout', () => {
      // Display menu
      dropdownItem.lastElementChild.style.cssText = "opacity: 0; visibility: hidden";
  
      // Change BG of wrapper
      document.querySelector('.navbar-wrapper').style.background = 'none';

      // Rotate arrow
      dropdownItem.firstElementChild.firstElementChild.style.transform = 'rotate(0)'
    });
  });
}

// Refresh page if screen is resized so nav works properly
window.addEventListener('resize', () => {
  window.location.reload();
});



