/* ==========================================================================
   NAZARET VALERO - ARCHIVO JAVASCRIPT COMPLETAMENTE NUEVO (CORREGIDO)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    console.log("Nazaret Professional Architecture Environment: Loaded successfully.");

    // Función para añadir interactividad o métricas sutiles al botón de WhatsApp
    const whatsappBtn = document.querySelector(".free-trial-btn");

    if (whatsappBtn) {
        whatsappBtn.addEventListener("click", () => {
            console.log("Contractor initiated contact via WhatsApp Estimate Offer.");
        });
    }
});

// Manejo del formulario de contacto sin salir de la página
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', async function(event) {
    event.preventDefault(); // Evita que la página se recargue o redirija
    
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;
    
    // Cambia el texto del botón mientras envía
    submitBtn.innerHTML = 'Sending...';
    submitBtn.disabled = true;

    const formData = new FormData(contactForm);

    try {
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        // Mensaje de éxito elegante
        contactForm.reset();
        submitBtn.innerHTML = '✓ Message Sent!';
        submitBtn.style.backgroundColor = '#2e7d32'; // Verde suave
        
        setTimeout(() => {
          submitBtn.innerHTML = originalBtnText;
          submitBtn.style.backgroundColor = '';
          submitBtn.disabled = false;
        }, 8000);
      } else {
        throw new Error('Form error');
      }
    } catch (error) {
      alert('Oops! There was a problem submitting your form. Please try again.');
      submitBtn.innerHTML = originalBtnText;
      submitBtn.disabled = false;
    }
  });
}

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Abrir y cerrar el menú
function toggleMenu() {
  const navLinks = document.getElementById('nav-links');
  const icon = document.querySelector('#menu-toggle i');
  
  if (navLinks) {
    navLinks.classList.toggle('open');
  }

  // Cambia la hamburguesa por una X
  if (icon) {
    if (icon.classList.contains('fa-bars')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
    } else {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  }
}

// Cierra el menú al hacer clic en un enlace
function closeMenu() {
  const navLinks = document.getElementById('nav-links');
  const icon = document.querySelector('#menu-toggle i');
  
  if (navLinks && navLinks.classList.contains('open')) {
    navLinks.classList.remove('open');
    if (icon) {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  }
}