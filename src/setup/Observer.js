const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      entry.target.classList.add('animate__animated');
    }
    else {
      entry.target.classList.remove('animate__animated');
    }
  })
});

const sectionInfo = document.querySelectorAll('.pj-info');
sectionInfo.forEach((el) => observer.observe(el));