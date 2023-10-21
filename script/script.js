const sidebarLinks = document.querySelectorAll('.sidebar-link');
const sections = {
  welcome: document.querySelector('.main > .welcome'),
  autodidacte: document.querySelector('.autodidacte'),
  projet: document.querySelector('.projet'),
  competences: document.querySelector('.competences'),
  formations: document.querySelector('.formations'),
  experiences: document.querySelector('.experiences'),
  moi: document.querySelector('.moi'),
};

// Function to set the active link and background color
function setActiveLink(activeLinkId) {
  sidebarLinks.forEach((link) => {
    if (link.id === activeLinkId) {
      link.classList.add('active');
      link.style.backgroundColor = '#1165a15d'; // Set the background color
    } else {
      link.classList.remove('active');
      link.style.backgroundColor = ''; // Remove the background color
    }
  });
  for (const key in sections) {
    if(key === 'welcome') {
      link.style.backgroundColor = '';
    }
}
}

// Add a click event listener to each sidebar link
sidebarLinks.forEach((link) => {
  link.addEventListener('click', () => {
    const id = link.id;
    
    // Check if the section is already visible
    if (sections[id].style.display === 'grid') {
      sections[id].style.display = 'none';
      sections.welcome.style.display = 'grid';
    } else {
      // Hide all sections
      for (const key in sections) {
        sections[key].style.display = 'none';
      }
      // Show the corresponding section
      sections[id].style.display = 'grid';
      // Set the active link and background color
      setActiveLink(id);
    }
  });
});

// Initially hide all sections except the welcome section
for (const key in sections) {
  if (key !== 'welcome') {
    sections[key].style.display = 'none';
  }
}

sidebarLinks.forEach((link) => {
  link.style.backgroundColor = 'transparent';
})

document.addEventListener('DOMContentLoaded', function() {
  var header = document.querySelector('.header');
  header.addEventListener('click', function(event) {
    event.preventDefault();
    location.reload();
  });
});


document.addEventListener('mousemove', e => {
  const elements = document.querySelectorAll(".autodidacte.projet.competences.formations.experiences.moi");

  for (const element of elements) {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    element.style.setProperty("--mouse-x", `${x}px`);
    element.style.setProperty("--mouse-y", `${y}px`);
  }
});

// Select all elements with the specified classes and attach the mousemove event handler
const cards = document.querySelectorAll(".autodidacte.projet.competences.formations.experiences.moi");
for (const card of cards) {
  card.onmousemove = e => handleOnMouseMove(e); // Corrected function name here
}