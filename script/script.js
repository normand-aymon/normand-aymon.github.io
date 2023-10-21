// Querry selector of sidebar
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

// acivate or deactivate backgroud color of main
function setActiveLink(activeLinkId) {
  sidebarLinks.forEach((link) => {
    if (link.id === activeLinkId) {
      link.classList.add('active');
      link.style.backgroundColor = '#1165a15d';
    } else {
      link.classList.remove('active');
      link.style.backgroundColor = '';
    }
  });
  for (const key in sections) {
    if(key === 'welcome') {
      link.style.backgroundColor = '';
    }
}
}

// click on sidebar
sidebarLinks.forEach((link) => {
  link.addEventListener('click', () => {
    const id = link.id;
    
    // see if main page is visible or not
    if (sections[id].style.display === 'grid') {
      sections[id].style.display = 'none';
      sections.welcome.style.display = 'grid';
    } else {
      // display none to all other main page
      for (const key in sections) {
        sections[key].style.display = 'none';
      }
      // display grid for selected main page
      sections[id].style.display = 'grid';
      setActiveLink(id);
    }
  });
});

// set welcome as default
for (const key in sections) {
  if (key !== 'welcome') {
    sections[key].style.display = 'none';
  }
}

sidebarLinks.forEach((link) => {
  link.style.backgroundColor = 'transparent';
})
// if click on header = refresh the page, back to welcome
document.addEventListener('DOMContentLoaded', function() {
  var header = document.querySelector('.header');
  header.addEventListener('click', function(event) {
    event.preventDefault();
    location.reload();
  });
});

// try to make an effect follow the mouse... failed...
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


const cards = document.querySelectorAll(".autodidacte.projet.competences.formations.experiences.moi");
for (const card of cards) {
  card.onmousemove = e => handleOnMouseMove(e);
}