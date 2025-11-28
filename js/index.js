var nav = document.querySelector(".navbar");

function scrollDown() {
  window.scrollBy({
    top: 600,
    behavior: "smooth",
  });
}

window.onscroll = function () {
  if (window.scrollY >= 200) {
    nav.classList.add("fixed");
  } else {
    nav.classList.remove("fixed");
  }
};
