const navigation = document.querySelector("nav");
const main = document.querySelector("main");

let lastScroll = 0;

const fixNavigation = () => {
  let currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    document.body.classList.remove("scroll-up");
  }

  if (
    currentScroll > lastScroll &&
    !document.body.classList.contains("scroll-down")
  ) {
    document.body.classList.remove("scroll-up");
    document.body.classList.add("scroll-down");
  }

  if (
    currentScroll < lastScroll &&
    document.body.classList.contains("scroll-down")
  ) {
    document.body.classList.add("scroll-up");
    document.body.classList.remove("scroll-down");
  }
  lastScroll = currentScroll;
};

window.addEventListener("scroll", fixNavigation);
