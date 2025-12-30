/* ================= GOOGLE REVIEWS (UPDATED & SECURE) ================= */

const reviewLink = "https://g.page/r/CSyV6Gi2mI3HEBI/review";

async function loadGoogleReviews() {
  const container = document.getElementById("google-reviews-section");
  if (!container) return;

  try {
    const res = await fetch("google-reviews.php");
    const data = await res.json();

    if (!data.result || !data.result.reviews) {
      showQR(container);
      return;
    }

    const reviews = data.result.reviews.slice(0, 5);

    let html = `
      <div class="testimonials-header">
        <h2 class="section-title">What Our Clients Say</h2>
        <a href="${reviewLink}" target="_blank" class="btn-whatsapp">
          ⭐ Review on Google
        </a>
      </div>
      <div class="testimonial-slider">
    `;

    reviews.forEach(r => {
      html += `
        <div class="slider-card">
          <p>"${r.text || "Great service and professional support."}"</p>
          <strong>- ${r.author_name}</strong><br>
          ⭐ ${r.rating}
        </div>
      `;
    });

    html += `</div>`;
    container.innerHTML = html;

  } catch (err) {
    showQR(container);
  }
}

function showQR(container) {
  container.innerHTML = `
    <h2 class="section-title">Review Us on Google</h2>
    <p style="text-align:center">Your feedback helps us grow.</p>

    <div class="qr-block">
      <img src="assets/img/google-review-qr.png" alt="Google Review QR">
    </div>

    <div style="text-align:center">
      <a href="${reviewLink}" target="_blank" class="btn-whatsapp">
        ⭐ Write a Review on Google
      </a>
    </div>
  `;
}

loadGoogleReviews();

/* ================= EXISTING CODE (UNCHANGED) ================= */

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

if (hamburger && mobileMenu) {
  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    mobileMenu.style.display =
      mobileMenu.style.display === "block" ? "none" : "block";
  });

  document.addEventListener("click", (e) => {
    if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
      mobileMenu.style.display = "none";
    }
  });
}

// ===== SCROLL ANIMATION =====
const animatedItems = document.querySelectorAll(".animate");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  { threshold: 0.15 }
);

animatedItems.forEach(el => observer.observe(el));

// WhatsApp quick open
function openWhatsApp() {
  const phone = "919427004202";
  const message = "Hello, I need consultation for PAN / GST / Accounting services.";
  window.open(
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
}

// Contact form → WhatsApp
document.getElementById("contactForm")?.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value.trim();

  const adminNumber = "919427004202";

  const whatsappMessage =
    "🔔 *New Website Enquiry* 🔔\n\n" +
    "👤 Name: " + name + "\n" +
    "📱 Mobile: " + phone + "\n" +
    "📧 Email: " + email + "\n" +
    "🛠 Service: " + service + "\n" +
    "💬 Message: " + (message || "Not Provided");

  window.open(
    "https://wa.me/" +
      adminNumber +
      "?text=" +
      encodeURIComponent(whatsappMessage),
    "_blank"
  );
});

// FAQ accordion
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".faq-question").forEach(question => {
    question.addEventListener("click", () => {
      const item = question.closest(".faq-item");
      const answer = item.querySelector(".faq-answer");
      const icon = question.querySelector(".faq-icon");

      document.querySelectorAll(".faq-item").forEach(other => {
        if (other !== item) {
          other.classList.remove("active");
          other.querySelector(".faq-answer").style.maxHeight = null;
          other.querySelector(".faq-icon").textContent = "+";
        }
      });

      item.classList.toggle("active");

      if (item.classList.contains("active")) {
        answer.style.maxHeight = answer.scrollHeight + "px";
        icon.textContent = "−";
      } else {
        answer.style.maxHeight = null;
        icon.textContent = "+";
      }
    });
  });
});
// ===== Sticky Service Helper WhatsApp =====
function serviceWA(service) {
  const phone = "919427004202";
  const message = `Hello, I need help with ${service}.`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}
/* ===== Active Menu Highlight ===== */
document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll(".nav-menu a, .mobile-menu a").forEach(link => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });
});
