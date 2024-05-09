// menu nav
const dark = document.querySelector(".col");
const nav = document.querySelector(".nav-right-menu");
const bt1 = document.querySelector(".show-menu");
const bt2 = document.querySelector(".hide-menu");
const main = document.querySelector("body");
bt1.addEventListener("click", function () {
  nav.classList.add("show-navbar");
  dark.style.display = "block";
  main.style.overflowY = "hidden";
});
bt2.addEventListener("click", function () {
  nav.classList.remove("show-navbar");
  dark.style.display = "none";
  main.style.overflowY = "visible";
});
window.addEventListener("click", function (e) {
  if (e.target == dark) {
    nav.classList.add("hide-navbar");
    nav.classList.remove("show-navbar");
    dark.style.display = "none";
    main.style.overflowY = "visible";
  }
});
// End menu nav

// scrol img slider
// scrol-1
const tabsBox = document.querySelector(".main-item5-description");
tabsBox.addEventListener("mousemove", function (e) {
  if (!isDragging) return;
  tabsBox.scrollLeft -= e.movementX;
});
document.addEventListener("mouseup", () => {
  isDragging = false;
});
tabsBox.addEventListener("mousedown", function () {
  isDragging = true;
});

// scrol-2
const tabsBox2 = document.querySelector(".main-item7-description");
tabsBox2.addEventListener("mousemove", function (e) {
  if (!isDragging) return;
  tabsBox2.scrollLeft -= e.movementX;
});
document.addEventListener("mouseup", () => {
  isDragging = false;
});
tabsBox2.addEventListener("mousedown", function () {
  isDragging = true;
});
// End scrol img slider

// slider auto
var imgs = document.querySelectorAll(".slider-item1 img");
var dots = document.querySelectorAll(".dot");
var currentImg = 0;
const interval = 5000;
function changeSlide(n) {
  for (var i = 0; i < imgs.length; i++) {
    imgs[i].style.opacity = 0;
    dots[i].className = dots[i].className.replace(" active", "");
  }
  currentImg = n;
  imgs[currentImg].style.opacity = 1;
  dots[currentImg].className += " active";
}
var timer = setInterval(function () {
  changeSlide((currentImg + 1) % imgs.length);
}, interval);
// End slider auto

// item2
const counters = document.querySelectorAll("#number");

counters.forEach((counter) => {
  counter.innerText = "0";

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;

    const increment = target / 400;

    if (c < target) {
      counter.innerText = Math.ceil(c + increment);
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
});
