/////////////////////////////////
// Header animation
/////////////////////////////////

let slideRight = {
  distance: "80px",
  origin: "left",
  opacity: 0,
  duration: 1200,
};

let slideLeft = {
  distance: "80px",
  origin: "right",
  opacity: 0,
  duration: 1200,
};

ScrollReveal().reveal("#name-title", slideRight);
ScrollReveal().reveal("#job", slideLeft);

////////////////////////////////
// Projects animations
///////////////////////////////

let slideUp = {
  distance: "60px",
  origin: "bottom",
  opacity: 0,
  duration: 1000,
  mobile: false,
};

let cardSlideLeft = {
  distance: "80px",
  origin: "right",
  opacity: 0,
  delay: 500,
  duration: 1500,
  mobile: false,
};

let cardSlideRight = {
  distance: "80px",
  origin: "left",
  opacity: 0,
  delay: 500,
  duration: 1500,
  mobile: false,
};

ScrollReveal().reveal(".projects-header", slideUp);
ScrollReveal().reveal("#card1", cardSlideRight);
ScrollReveal().reveal("#card2", cardSlideLeft);
ScrollReveal().reveal("#card3", cardSlideRight);
ScrollReveal().reveal("#card4", cardSlideLeft);

// Skills animations

let html = {
  opacity: 0,
  delay: 250,
  duration: 750,
  mobile: false,
};

let css = {
  opacity: 0,
  delay: 600,
  duration: 750,
  mobile: false,
};

let javascript = {
  opacity: 0,
  delay: 1600,
  duration: 750,
  mobile: false,
};

let bootstrap = {
  opacity: 0,
  delay: 1500,
  duration: 750,
  mobile: false,
};

let react = {
  opacity: 0,
  delay: 800,
  duration: 750,
  mobile: false,
};

let mongodb = {
  opacity: 0,
  delay: 1800,
  duration: 750,
  mobile: false,
};

let node = {
  opacity: 0,
  delay: 750,
  duration: 750,
  mobile: false,
};

let express = {
  opacity: 0,
  delay: 1000,
  duration: 750,
  mobile: false,
};

let git = {
  opacity: 0,
  delay: 1250,
  duration: 750,
  mobile: false,
};

let bash = {
  opacity: 0,
  delay: 400,
  duration: 750,
  mobile: false,
};

// Skills animations
ScrollReveal().reveal("#html", html);
ScrollReveal().reveal("#css", css);
ScrollReveal().reveal("#javascript", javascript);
ScrollReveal().reveal("#bootstrap", bootstrap);
ScrollReveal().reveal("#react", react);
ScrollReveal().reveal("#mongodb", mongodb);
ScrollReveal().reveal("#node", node);
ScrollReveal().reveal("#express", express);
ScrollReveal().reveal("#git", git);
ScrollReveal().reveal("#bash", bash);

// About animation
let aboutSlide = {
  distance: "200px",
  origin: "left",
  opacity: 0,
  delay: 500,
  duration: 1500,
  mobile: false,
};
ScrollReveal().reveal(".content", aboutSlide);

// Contact animations
ScrollReveal().reveal(".contact-header", slideRight);
ScrollReveal().reveal(".contact-info", slideLeft);
