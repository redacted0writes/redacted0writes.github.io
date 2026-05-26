// [redacted] — subtle interactions

document.addEventListener('DOMContentLoaded', () => {

  // slightly randomize word wobble on page load
  const words = document.querySelectorAll('.w');
  words.forEach(w => {
    const jitter = (Math.random() - 0.5) * 2;
    const current = w.style.transform || '';
    if (!current) {
      w.style.transform = `translateY(${jitter}px) rotate(${jitter * 0.5}deg)`;
    }
  });

  // book rows — slight tilt on hover
  const bookRows = document.querySelectorAll('.book-row');
  bookRows.forEach(row => {
    row.addEventListener('mouseenter', () => {
      row.style.paddingLeft = '0.4rem';
    });
    row.addEventListener('mouseleave', () => {
      row.style.paddingLeft = '';
    });
  });

  // nav links — wobbly underline on hover
  const navLinks = document.querySelectorAll('.nav a');
  navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      link.style.borderBottomColor = '#aaa';
    });
    link.addEventListener('mouseleave', () => {
      link.style.borderBottomColor = '#e0e0e0';
    });
  });

});
