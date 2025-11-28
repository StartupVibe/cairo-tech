let currentLang = "en";
let translations = {};

async function loadTranslations() {
  try {
    const res = await fetch(`lang/${currentLang}.json`);
    translations = await res.json();
    applyTranslations();
  } catch (err) {
    console.error("Error loading translation file:", err);
  }
}

function applyTranslations() {
  for (const key in translations) {
    const element = document.getElementById(key);
    if (element) {
      element.textContent = translations[key];
    }
  }

  // Change direction by language
  if (currentLang === "ar") {
    document.body.dir = "rtl";
    document.body.style.textAlign = "right";
    document.body.classList = "ar";
  } else {
    document.body.dir = "ltr";
    document.body.style.textAlign = "left";
    document.body.classList = "en";
  }

  // Update button text
  const langBtn = document.getElementById("lang_btn");
  if (langBtn) langBtn.textContent = currentLang === "en" ? "AR" : "EN";
}

document.addEventListener("DOMContentLoaded", () => {
  const langBtn = document.getElementById("lang_btn");

  if (langBtn) {
    langBtn.addEventListener("click", () => {
      currentLang = currentLang === "en" ? "ar" : "en";
      loadTranslations();
    });
  }

  // Download the first translation file
  loadTranslations();
});
