// Pixel rain effect
document.addEventListener('DOMContentLoaded', function() {
    // Create pixel rain
    const pixelRain = document.getElementById('pixel-rain');
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    // Create pixels
    for (let i = 0; i < 200; i++) {
        const pixel = document.createElement('div');
        pixel.className = 'absolute w-0.5 h-6 bg-red-900';
        pixel.style.left = Math.random() * width + 'px';
        pixel.style.top = Math.random() * -height + 'px';
        pixel.style.animation = `rain ${(Math.random() * 3 + 1)}s linear infinite`;
        pixel.style.animationDelay = Math.random() * 5 + 's';
        pixelRain.appendChild(pixel);
    }
    
    // Add CSS for rain animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes rain {
            to {
                transform: translateY(${height}px);
            }
        }
    `;
    document.head.appendChild(style);
    
    // Eye follow effect
    document.addEventListener('mousemove', function(e) {
        const eyes = document.querySelectorAll('.eye-follow');
        eyes.forEach(eye => {
            const rect = eye.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const angle = Math.atan2(y, x) * 180 / Math.PI;
            eye.style.transform = `rotate(${angle}deg)`;
        });
    });
    
    // Scare effect - random flashes
    setInterval(() => {
        if (Math.random() > 0.98) { // 2% chance
            const flash = document.createElement('div');
            flash.className = 'fixed inset-0 bg-red-900 opacity-30 z-50 pointer-events-none';
            document.body.appendChild(flash);
            
            setTimeout(() => {
                flash.style.opacity = '0';
                setTimeout(() => flash.remove(), 1000);
            }, 100);
        }
    }, 5000);
});