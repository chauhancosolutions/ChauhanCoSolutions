function openWhatsAppPopup() {
  document.getElementById("whatsapp-popup").style.display = "flex";
  setBusinessStatus();
}

function closeWhatsAppPopup() {
  document.getElementById("whatsapp-popup").style.display = "none";
}

function setServiceMessage(service) {
  document.getElementById("waMessage").value =
    "Hello, I need " + service + " service.";
}

function setBusinessStatus() {
  const hour = new Date().getHours();
  const status = document.getElementById("wp-status");

  if (hour >= 10 && hour < 19) {
    status.innerText = "Online";
    status.style.color = "#d4f8d4";
  } else {
    status.innerText = "Offline – We’ll reply soon";
    status.style.color = "#ffdada";
  }
}

function sendWhatsAppMessage() {
  const msg = document.getElementById("waMessage").value.trim();
  if (!msg) return;

  const phone = "919427004202";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
}
function openWhatsAppPopupWithService(button) {
  const serviceName = button.getAttribute("data-service");

  const message =
    "Hello, I am interested in *" +
    serviceName +
    "* service.\n\nPlease guide me with details and pricing.";

  // message input me auto-fill
  document.getElementById("waMessage").value = message;

  // popup open
  document.getElementById("whatsapp-popup").style.display = "block";
}
