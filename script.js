// FEATURES CLICK ALERT
const features = document.querySelectorAll(".feature");

features.forEach((box) => {
  box.onclick = function() {
    alert("You clicked: " + box.querySelector("h3").innerText);
  };
});

// HERO BUTTON CLICK ALERT
document.querySelector(".hero-text button").onclick = function() {
  alert("Thanks for booking! We will contact you soon.");
};

// CTA BUTTON CLICK ALERT
document.querySelector(".cta button").onclick = function() {
  alert("Thanks for booking! We will contact you soon.");
};
