const navClose = document.querySelector(".nav_close");
const navButton = document.querySelector(".nav_button");
const navMenu = document.querySelector(".nav_menu");
const navLink = document.querySelectorAll(".nav__link");

function loader() {
  var tl = gsap.timeline();

  tl.from("#loader h3", {
    x: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
  });

  tl.to("#loader h3", {
    opacity: 0,
    x: -10,
    duration: 1,
    stagger: 0.2,
  });

  tl.to("#loader", {
    opacity: 0,
    delay: 0.5,
  });

  tl.from(" h3 span", {
    y: 50,
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
  });

  tl.to("#loader", {
    display: "none",
    duration: 1,
  });
}

loader();

navClose.addEventListener("click", () => {
  navMenu.classList.remove("show_menu");
});

navButton.addEventListener("click", () => {
  navMenu.classList.add("show_menu");
});

const linkAction = () => {
  navMenu.classList.remove("show_menu");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));

const shadowHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};
window.addEventListener("scroll", shadowHeader);

const robot = document.querySelector(".robot");
robot.addEventListener("click", () => {
  let name = prompt("What's your name?");
  let firstLetter = name.toUpperCase()[0];
  let restLetter = name.slice(1, name.length);
  let lowerRest = restLetter.toLowerCase();
  if (name === null) {
    alert("Please tell me your name.");
  } else if (name.trim() === "") {
    alert("You entered an empty name.");
  } else {
    alert("Hello, " + firstLetter + restLetter + ". I am Karyl.");
  }
});

function cursoreffect() {
  var main = document.querySelector(".main");
  var playReel = document.querySelector(".playReel");

  main.addEventListener("mousemove", function (e) {
    gsap.to(playReel, {
      x: e.x,
      y: e.y,
    });
  });
  main.addEventListener("mouseenter", function () {
    gsap.to(playReel, {
      scale: 1,
      opacity: 1,
    });
  });

  main.addEventListener("mouseleave", function () {
    gsap.to(playReel, {
      scale: 0,
      opacity: 0,
    });
  });
}

cursoreffect();

const contactForm = document.querySelector(".contact_form");
const contactMessage = document.getElementById("contact-message");
