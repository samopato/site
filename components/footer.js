class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
          background: rgba(0, 0, 0, 0.7);
          border-top: 1px solid rgba(239, 68, 68, 0.2);
          padding: 2rem 1rem;
          margin-top: 4rem;
        }
        
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
        }
        
        .footer-logo {
          font-family: 'VT323', monospace;
          font-size: 1.5rem;
          font-weight: bold;
          color: #fef2f2;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .social-links {
          display: flex;
          gap: 1.5rem;
        }
        
        .social-link {
          color: #fef2f2;
          transition: color 0.3s ease;
        }
        
        .social-link:hover {
          color: #ef4444;
        }
        
        .footer-links {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
          justify-content: center;
        }
        
        .footer-link {
          color: #fef2f2;
          text-decoration: none;
          font-size: 0.9rem;
        }
        
        .footer-link:hover {
          color: #fecaca;
          text-decoration: underline;
        }
        
        .copyright {
          color: #9ca3af;
          font-size: 0.8rem;
          text-align: center;
        }
      </style>
      <div class="footer-content">
        <a href="/" class="footer-logo">
          <i data-feather="eye" class="w-5 h-5 text-red-500"></i>
          THE FEAR OF STALKING
        </a>
        
        <div class="social-links">
          <a href="#" class="social-link">
            <i data-feather="twitter" class="w-5 h-5"></i>
          </a>
          <a href="#" class="social-link">
            <i data-feather="facebook" class="w-5 h-5"></i>
          </a>
          <a href="#" class="social-link">
            <i data-feather="instagram" class="w-5 h-5"></i>
          </a>
          <a href="#" class="social-link">
            <i data-feather="youtube" class="w-5 h-5"></i>
          </a>
        </div>
        
        <div class="footer-links">
          <a href="#" class="footer-link">Privacy Policy</a>
          <a href="#" class="footer-link">Terms of Service</a>
          <a href="#" class="footer-link">Contact</a>
          <a href="#" class="footer-link">Support</a>
          <a href="#" class="footer-link">Press Kit</a>
        </div>
        
        <p class="copyright">
          © 2023 Stalker's Gaze. All rights reserved. All horrors are real.
        </p>
      </div>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);