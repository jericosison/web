
const navLinks = document.querySelectorAll('nav a');
const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('nav ul');
const adjustIcon = document.querySelector('.adjust-icon');
const body = document.querySelector('body');
const sections = document.querySelectorAll('section');
const cards = document.querySelectorAll('.container .card');
const boxes = document.querySelectorAll('.box');
const loaderPaths = document.querySelectorAll("#home .loader path.fill");



let isDarkMode = false;

menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show');

    const sectionId = link.getAttribute('href');
    const section = document.querySelector(sectionId);

    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth'
    });
  });
});


adjustIcon.addEventListener('click', () => {
  isDarkMode = !isDarkMode;

  if (isDarkMode) {
  
    body.style.backgroundImage = 'url(img/dark.jpg)';
    body.style.backgroundSize = 'cover';
    body.style.backgroundPosition = 'center';
    body.style.backgroundAttachment = 'fixed'; // Set background attachment to fixed
    body.style.color = '#eed9d9';
    sections.forEach(section => {
      section.style.backgroundImage = 'url(img/dark.jpg)';
      section.style.backgroundSize = 'cover';
      section.style.backgroundPosition = 'center';
      section.style.backgroundAttachment = 'fixed'; // Set background attachment to fixed
      section.style.color = '#eed9d9';
    });
   
    cards.forEach(card => {
      card.style.color = '#fff';
    
    });
    boxes.forEach(box => {
      box.style.backgroundColor = '#000';
    });
    cards.forEach(card => {
      const text = card.querySelector('.text');
      text.style.color = '#fff';
     
      card.style.background = '#000';
    });
    // Update logo style for dark mode
    const logo = document.querySelector('.logo h3');
    logo.style.color = '#eed9d9';
    // Update bars icon style for dark mode
    const barsIcon = document.querySelector('.fa-bars');
    barsIcon.style.color = '#eed9d9';

    // Update navigation list item styles for dark mode
    const navListItems = document.querySelectorAll('nav ul li a');
    navListItems.forEach(item => {
      item.style.color = '#eed9d9';
      // Change input and textarea colors for dark mode
    const formInputs = document.querySelectorAll('#contact form input, #contact form textarea');
    formInputs.forEach(input => {
      input.style.color = '#fff';
      input.style.backgroundColor = '#000';
    });

      const h2Elements = document.querySelectorAll("#home .container h2");
    h2Elements.forEach(element => {
      element.style.color = '#000';
    });
    const h2Elements1 = document.querySelectorAll("#about h2");
    h2Elements1.forEach(element => {
      element.style.color = '#000';
    });
    const h2Elements2 = document.querySelectorAll("#services h2");
    h2Elements2.forEach(element => {
      element.style.color = '#000';
    });
    const h2Elements3 = document.querySelectorAll("#contact h2");
    h2Elements3.forEach(element => {
      element.style.color = '#000';
    });
    loaderPaths.forEach((path) => {
      path.style.fill = "#000"; // Replace with your desired dark mode color
    });
    });




    adjustIcon.style.color = '#eed9d9';
    
  } else {
    // Light mode styles
 
    body.style.backgroundImage = '';
    body.style.backgroundSize = '';
    body.style.backgroundPosition = '';
    body.style.backgroundAttachment = '';
    body.style.color = '';
    sections.forEach(section => {
      section.style.backgroundImage = '';
      section.style.backgroundSize = '';
      section.style.backgroundPosition = '';
      section.style.backgroundAttachment = '';
      section.style.color = '';
    });
    cards.forEach(card => {
      card.style.color = '';
    });
    boxes.forEach(box => {
      box.style.backgroundColor = '';
    });
    cards.forEach(card => {
      const text = card.querySelector('.text');
      text.style.color = '';
      card.style.background = '';
    });
    const logo = document.querySelector('.logo h3');
    logo.style.color = '';
    const barsIcon = document.querySelector('.fa-bars');
    barsIcon.style.color = '';
    const navListItems = document.querySelectorAll('nav ul li a');
    navListItems.forEach(item => {
      item.style.color = '';
       // Change input and textarea colors for light mode
      const formInputs = document.querySelectorAll('#contact form input, #contact form textarea');
      formInputs.forEach(input => {
        input.style.color = '';
        input.style.backgroundColor = '';
      });
      const h2Elements = document.querySelectorAll("#home .container h2");
      h2Elements.forEach(element => {
        element.style.color = '';  
      });
      const h2Elements1 = document.querySelectorAll("#about h2");
      h2Elements1.forEach(element => {
        element.style.color = '';
      });
      const h2Elements2 = document.querySelectorAll("#services h2");
      h2Elements2.forEach(element => {
        element.style.color = '';
      });
      const h2Elements3 = document.querySelectorAll("#contact h2");
      h2Elements3.forEach(element => {
        element.style.color = '';
      });
      loaderPaths.forEach((path) => {
        path.style.fill = ""; // Replace with your desired dark mode color
      });
    });
   
    adjustIcon.style.color = '';
  }
});


// Add this to your JavaScript file

// Function to handle the animations
function animateOnScroll(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    } else {
      entry.target.classList.remove("visible");
    }
  });
}

// Initialize the Intersection Observer
const observer = new IntersectionObserver(animateOnScroll, {
  root: null,
  threshold: 0.3,
});

// Apply animations to all h2 elements
const h2Elements = document.querySelectorAll("h2");
h2Elements.forEach((element) => {
  element.classList.add("fade-in");
  observer.observe(element);
});

// Apply animations to all p elements
const pElements = document.querySelectorAll("p");
pElements.forEach((element) => {
  element.classList.add("fade-in");
  observer.observe(element);
})

// Apply animations to all ulelements
const liElements = document.querySelectorAll("li");
liElements.forEach((element) => {
  element.classList.add("fade-in");
  observer.observe(element);
})
// Apply animations to all divelements
const divElements = document.querySelectorAll("div");
divElements.forEach((element) => {
  element.classList.add("fade-in");
  observer.observe(element);
})
const labelElements = document.querySelectorAll("label");
labelElements.forEach((element) => {
  element.classList.add("fade-in");
  observer.observe(element);
})
const inputElements = document.querySelectorAll("input");
inputElements.forEach((element) => {
  element.classList.add("fade-in");
  observer.observe(element);
})
const textareaElements = document.querySelectorAll("textarea");
textareaElements.forEach((element) => {
  element.classList.add("fade-in");
  observer.observe(element);
})
const buttonElements = document.querySelectorAll("button");
buttonElements.forEach((element) => {
  element.classList.add("fade-in");
  observer.observe(element);
})