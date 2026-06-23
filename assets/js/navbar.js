document.addEventListener('DOMContentLoaded', () => {
  const navbarContainer = document.getElementById('navbar');

  if (!navbarContainer) return;

  const currentPath = window.location.pathname.split('/').pop().toLowerCase();
  const currentPage = currentPath || 'acceuil.html';
  const homePages = ['acceuil.html', 'index.html', ''];

  navbarContainer.innerHTML = `
    <div class="bar">🚚 Livraison gratuite dès 50 $ · Fabriqué à Lévis, Québec 🍁</div>
    <nav>
      <a href="index.html" class="nav-logo">
        <span class="nav-logo-icon"><img src="assets/images/logo_UNIQUEPLASTIQUE.png" alt="Unique Plastique"></span>
        <span>Unique Plastique</span>
      </a>
      <ul class="nav-links">
        <li><a href="index.html" data-page="acceuil.html">Accueil</a></li>
        <li><a href="pinces.html" data-page="pinces.html" class="active">Pinces à cheveux ▾</a></li>
        <li><a href="#">Fournisseur / Distributeur ♻️</a></li>
        <li><a href="#">Campagnes</a></li>
        <li><a href="#">À propos</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div class="nav-actions">
        <button class="nav-icon-btn" title="Rechercher">🔍</button>
        <button class="nav-icon-btn" title="Compte">👤</button>
        <button class="cart-btn" id="cartBtn">🛒 Panier <span class="cart-count" id="cartCount">0</span></button>
      </div>
    </nav>
  `;

  navbarContainer.querySelectorAll('.nav-links a[data-page]').forEach((link) => {
    const page = link.getAttribute('data-page');
    if (page && currentPage === page.toLowerCase()) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
