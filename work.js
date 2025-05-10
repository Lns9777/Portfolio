// Fade in the page and animate cards
window.addEventListener('load', () => {
  document.body.style.opacity = '1';

  const cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add('animate');
    }, index * 200); // Delay each card
  });
});

// Modal Functionality (if not already implemented)
const modal = document.getElementById("cert-modal");
const modalImg = document.getElementById("cert-img");
const closeModal = document.getElementById("cert-close");

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    const certSrc = card.getAttribute('data-cert');
    if (certSrc) {
      modalImg.src = certSrc;
      modal.classList.add('show');
    }
  });
});

closeModal.addEventListener('click', () => {
  modal.classList.remove('show');
});
