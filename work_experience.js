// Select elements
const cards = document.querySelectorAll('.card[data-cert]');
const modal = document.getElementById('cert-modal');
const modalImg = document.getElementById('cert-img');
const closeBtn = document.getElementById('cert-close');

// Show modal on card click
cards.forEach(card => {
  card.addEventListener('click', () => {
    const certSrc = card.getAttribute('data-cert');
    modalImg.src = certSrc;
    modal.style.display = 'flex';
  });
});

// Close handlers
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});
modal.addEventListener('click', e => {
  if (e.target === modal) modal.style.display = 'none';
});

window.addEventListener('load', () => {
  document.body.style.opacity = '1';

  const cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add('animate');
    }, index * 100); // Staggered delay
  });
});