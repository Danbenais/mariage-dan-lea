/* ============================================
   Dan & Léa — Wedding Page Logic
   ============================================ */

// ============================================
// EVENT DATA — modify here if anything changes
// ============================================
const EVENT = {
  title: "Mariage de Dan & Léa",
  description: "Mariage de Dan Moshé & Léa Néhama. Kabbalat Panim à 16h, 'Houpa à 17h, suivi de la réception.",
  location: "Salons Palace de Villiers, 12 bis Avenue des Entrepreneurs, 95400 Villiers-le-Bel, France",
  // Local time: 2 June 2026, 16:00 → 3 June 2026, 00:00 (Paris)
  start: new Date("2026-06-02T16:00:00+02:00"),
  end:   new Date("2026-06-03T00:00:00+02:00"),
};

const WISHLIST_URL = "https://easywishlist.app/w/PZnsbUos/my-wishlist";

// ============================================
// HELPERS
// ============================================
function formatGoogleDate(date) {
  // YYYYMMDDTHHmmssZ
  return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
}

function buildGoogleCalendarUrl() {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: EVENT.title,
    dates: `${formatGoogleDate(EVENT.start)}/${formatGoogleDate(EVENT.end)}`,
    details: EVENT.description,
    location: EVENT.location,
    ctz: "Europe/Paris"
  });
  return `https://www.google.com/calendar/render?${params.toString()}`;
}

function buildYahooCalendarUrl() {
  const formatYahoo = d => d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  const params = new URLSearchParams({
    v: "60",
    title: EVENT.title,
    st: formatYahoo(EVENT.start),
    et: formatYahoo(EVENT.end),
    desc: EVENT.description,
    in_loc: EVENT.location
  });
  return `https://calendar.yahoo.com/?${params.toString()}`;
}

function showToast(message, duration = 3000) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => toast.classList.remove("show"), duration);
}

// ============================================
// AGENDA — toggle dropdown
// ============================================
document.querySelectorAll('[data-toggle]').forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = btn.getAttribute("data-toggle");
    const target = document.getElementById(targetId);
    if (!target) return;
    const isOpen = !target.hasAttribute("hidden");
    if (isOpen) {
      target.setAttribute("hidden", "");
      btn.setAttribute("aria-expanded", "false");
      btn.querySelector("span").textContent = "Choisir mon agenda";
    } else {
      target.removeAttribute("hidden");
      btn.setAttribute("aria-expanded", "true");
      btn.querySelector("span").textContent = "Réduire";
    }
  });
});

// ============================================
// AGENDA — calendar links
// ============================================
document.querySelectorAll('[data-action]').forEach(link => {
  link.addEventListener("click", (e) => {
    const action = link.getAttribute("data-action");
    if (action === "google-calendar") {
      e.preventDefault();
      window.open(buildGoogleCalendarUrl(), "_blank", "noopener");
    } else if (action === "yahoo-calendar") {
      e.preventDefault();
      window.open(buildYahooCalendarUrl(), "_blank", "noopener");
    }
  });
});

// ============================================
// WISHLIST — set link & show placeholder toast
// ============================================
const wishlistLink = document.getElementById("wishlist-link");
if (wishlistLink) {
  wishlistLink.href = WISHLIST_URL;
  wishlistLink.addEventListener("click", (e) => {
    if (WISHLIST_URL.includes("PLACEHOLDER")) {
      e.preventDefault();
      showToast("La liste sera bientôt disponible — merci pour votre patience 💛", 3500);
    }
  });
}

// ============================================
// SCROLL REVEAL — extra subtle animation
// ============================================
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  // Could be extended for additional reveal-on-scroll elements
}

// ============================================
// LOG (signed)
// ============================================
console.log("%cDan & Léa — 02.06.2026", "color: #d4af6f; font-size: 16px; font-family: serif; font-style: italic;");
console.log("%cMazal Tov 🥂", "color: #e8c98a; font-size: 12px;");
