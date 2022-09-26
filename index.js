const navigation = document.querySelector("nav");
const main = document.querySelector("main");
const circle = document.querySelector("#circle");

let lastScroll = 0;
const documentTotalHeight = document.body.getBoundingClientRect().height;
const windowHeight = window.innerHeight;
const total = documentTotalHeight - windowHeight;

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

const rotateCircle = e => {
  // console.log(window.pageYOffset);

  const percentage = Math.ceil((window.pageYOffset / total) * 100);
  // console.log(percentage);

  const circlePercentage = (360 / 100) * percentage;
  console.log(circlePercentage);
  circle.style.transform = `rotate(${circlePercentage}deg)`;
};

window.addEventListener("scroll", e => {
  fixNavigation();
  rotateCircle(e);
});
