class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 50;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(239, 68, 68, 0.2);
        }
        
        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }
        
        .logo {
          font-family: 'VT323', monospace;
          font-size: 1.5rem;
          font-weight: bold;
          color: #fef2f2;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .logo:hover {
          color: #fecaca;
        }
        
        .nav-links {
          display: flex;
          gap: 1.5rem;
        }
        
        .nav-link {
          color: #fef2f2;
          text-decoration: none;
          font-size: 1.1rem;
          position: relative;
          padding: 0.5rem 0;
        }
        
        .nav-link:hover {
          color: #fecaca;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: #ef4444;
          transition: width 0.3s ease;
        }
        
        .nav-link:hover::after {
          width: 100%;
        }
        
        @media (max-width: 768px) {
          nav {
            padding: 1rem;
          }
          
          .nav-links {
            display: none;
          }
        }
      </style>
      <nav>
        <a href="/" class="logo">
          <i data-feather="eye" class="w-5 h-5 text-red-500"></i>
          STALKER'S GAZE
        </a>
        <div class="nav-links">
          <a href="#features" class="nav-link">FEATURES</a>
          <a href="#ratings" class="nav-link">REVIEWS</a>
          <a href="#download" class="nav-link">DOWNLOAD</a>
          <a href="#" class="nav-link">ABOUT</a>
        </div>
      </nav>
    `;
  }
}

customElements.define('custom-navbar', CustomNavbar);