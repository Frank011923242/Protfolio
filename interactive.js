// Interactive Color-Changing Effects
document.addEventListener("DOMContentLoaded", function () {
  // Removed custom cursor for eye comfort

  // Static hero name styling
  const heroName = document.querySelector(".hero-name");
  if (heroName) {
    heroName.style.background = "linear-gradient(135deg, #8b5cf6, #a855f7)";
    heroName.style.webkitBackgroundClip = "text";
    heroName.style.webkitTextFillColor = "transparent";
  }

  // Removed floating particles effect for eye comfort

  // Add CSS for particle animation
  const style = document.createElement("style");
  style.textContent = `
        @keyframes float {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) rotate(360deg);
                opacity: 0;
            }
        }
        
        .custom-cursor {
            transition: all 0.2s ease !important;
        }
    `;
  document.head.appendChild(style);

  // Interactive button press effects
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("mousedown", function () {
      this.style.transform = "scale(0.95)";
      this.style.boxShadow = "0 5px 15px rgba(0, 212, 255, 0.5)";
    });

    button.addEventListener("mouseup", function () {
      this.style.transform = "";
      this.style.boxShadow = "";
    });

    button.addEventListener("mouseleave", function () {
      this.style.transform = "";
      this.style.boxShadow = "";
    });
  });

  // Scroll-triggered animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animation = "fadeInUp 0.6s ease forwards";
      }
    });
  }, observerOptions);

  // Observe elements for scroll animations
  const animatedElements = document.querySelectorAll(
    ".service-card, .portfolio-item, .skill-item, .stats-card"
  );
  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    observer.observe(el);
  });

  // Add fadeInUp animation
  const fadeStyle = document.createElement("style");
  fadeStyle.textContent = `
        @keyframes fadeInUp {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
  document.head.appendChild(fadeStyle);

  // Removed dynamic background color change for eye comfort

  // Typing effect for hero title
  const heroTitle = document.querySelector(".hero-title");
  if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = "";
    let i = 0;

    function typeWriter() {
      if (i < text.length) {
        heroTitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    }

    setTimeout(typeWriter, 1000);
  }

  // Glitch effect on logo hover
  const logo = document.querySelector(".navbar-brand .logo");
  if (logo) {
    logo.addEventListener("mouseenter", function () {
      this.style.animation = "glitch 0.3s ease-in-out";
    });

    logo.addEventListener("animationend", function () {
      this.style.animation = "";
    });
  }

  // Add glitch animation
  const glitchStyle = document.createElement("style");
  glitchStyle.textContent = `
        @keyframes glitch {
            0%, 100% { transform: translate(0); }
            20% { transform: translate(-2px, 2px); }
            40% { transform: translate(-2px, -2px); }
            60% { transform: translate(2px, 2px); }
            80% { transform: translate(2px, -2px); }
        }
    `;
  document.head.appendChild(glitchStyle);

  // Interactive skill bars
  const skillBars = document.querySelectorAll(".skill-progress");
  skillBars.forEach((bar) => {
    bar.addEventListener("mouseenter", function () {
      this.style.background = "linear-gradient(135deg, #ff6b35, #f7931e)";
      this.style.boxShadow = "0 0 20px rgba(255, 107, 53, 0.5)";
    });

    bar.addEventListener("mouseleave", function () {
      this.style.background = "linear-gradient(135deg, #00d4ff, #0099cc)";
      this.style.boxShadow = "";
    });
  });

  // Removed sparkle effects for eye comfort

  // Add sparkle animation
  const sparkleStyle = document.createElement("style");
  sparkleStyle.textContent = `
        @keyframes sparkleFloat {
            0% {
                opacity: 1;
                transform: scale(0) rotate(0deg);
            }
            50% {
                opacity: 1;
                transform: scale(1) rotate(180deg);
            }
            100% {
                opacity: 0;
                transform: scale(0) rotate(360deg);
            }
        }
    `;
  document.head.appendChild(sparkleStyle);

  console.log("🎨 Interactive effects loaded! Your portfolio is now super cool!");
});
