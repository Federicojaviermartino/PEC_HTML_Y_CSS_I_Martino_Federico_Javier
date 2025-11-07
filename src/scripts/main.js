import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

document.addEventListener('DOMContentLoaded', function() {
  initMobileMenu();
  initLightbox();
  initSearchFilter();
  initScrollAnimations();
  initMap();
});

function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav ul');

  if (!menuToggle || !nav) return;

  menuToggle.addEventListener('click', function() {
    const isOpen = nav.classList.contains('nav-open');
    nav.classList.toggle('nav-open');
    menuToggle.setAttribute('aria-expanded', !isOpen);
  });

  document.addEventListener('click', function(event) {
    const isClickInside = menuToggle.contains(event.target) || nav.contains(event.target);

    if (!isClickInside && nav.classList.contains('nav-open')) {
      nav.classList.remove('nav-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });

  const navLinks = nav.querySelectorAll('a');
  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      if (window.innerWidth < 768) {
        nav.classList.remove('nav-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });
}

function initLightbox() {
  const galleryImages = document.querySelectorAll('.gallery-image');
  const lightbox = document.querySelector('.lightbox');
  const lightboxImg = lightbox ? lightbox.querySelector('img') : null;
  const lightboxClose = lightbox ? lightbox.querySelector('.lightbox-close') : null;

  if (!lightbox || !lightboxImg) return;

  galleryImages.forEach(function(image) {
    image.addEventListener('click', function() {
      lightboxImg.src = this.src;
      lightboxImg.alt = this.alt;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });

    image.style.cursor = 'pointer';
    image.setAttribute('tabindex', '0');
    image.setAttribute('role', 'button');

    image.addEventListener('keypress', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });
  });

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });
}

function initSearchFilter() {
  const searchInput = document.getElementById('search-destinations');
  const destinationCards = document.querySelectorAll('.destination-card');

  if (!searchInput || destinationCards.length === 0) return;

  searchInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase().trim();

    destinationCards.forEach(function(card) {
      const title = card.querySelector('h2');
      const description = card.querySelector('p');
      const cardName = card.dataset.name || '';

      const titleText = title ? title.textContent.toLowerCase() : '';
      const descText = description ? description.textContent.toLowerCase() : '';

      const matches = titleText.includes(searchTerm) ||
                     descText.includes(searchTerm) ||
                     cardName.includes(searchTerm);

      if (matches) {
        card.style.display = '';
        setTimeout(function() {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, 10);
      } else {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(function() {
          card.style.display = 'none';
        }, 300);
      }
    });
  });
}

function initScrollAnimations() {
  const fadeElements = document.querySelectorAll('.fade-in');

  if (fadeElements.length === 0) return;

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  fadeElements.forEach(function(element) {
    observer.observe(element);
  });
}

function initMap() {
  const mapContainer = document.getElementById('map');

  if (!mapContainer) return;

  const currentPage = window.location.pathname;
  let lat, lng, cityName;

  if (currentPage.includes('det1')) {
    lat = 41.3874;
    lng = 2.1686;
    cityName = 'Barcelona';
  } else if (currentPage.includes('det2')) {
    lat = 52.5200;
    lng = 13.4050;
    cityName = 'Berlín';
  } else {
    return;
  }

  const map = L.map('map').setView([lat, lng], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19
  }).addTo(map);

  const marker = L.marker([lat, lng]).addTo(map);
  marker.bindPopup('<b>' + cityName + '</b>').openPopup();

  setTimeout(function() {
    map.invalidateSize();
  }, 100);
}