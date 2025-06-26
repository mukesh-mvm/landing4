// script.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    const inputs = form.querySelectorAll("input, textarea");
    let valid = true;

    inputs.forEach((input) => {
      if (!input.value.trim()) {
        valid = false;
        input.style.borderColor = "#f14b28";
      } else {
        input.style.borderColor = "#ccc";
      }
    });

    if (!valid) {
      e.preventDefault();
      alert("Please fill in all the fields.");
    }
  });
});



// for testinomia
const carousel = document.getElementById("carousel");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let scrollAmount = 0;

function updateScroll(direction) {
  const card = document.querySelector(".testimonial-card");
  const cardWidth = card.offsetWidth + 20; // 20 is the gap
  const visibleWidth = carousel.offsetWidth;
  const scrollStep = cardWidth * 1;

  if (direction === "next") {
    carousel.scrollLeft += scrollStep;
  } else if (direction === "prev") {
    carousel.scrollLeft -= scrollStep;
  }
}

nextBtn.addEventListener("click", () => updateScroll("next"));
prevBtn.addEventListener("click", () => updateScroll("prev"));



// for contact us form
// Example: Log form submit
document.getElementById('contact-form').addEventListener('submit', function () {
  console.log('Form submitted!');
});


// for delhi
document.getElementById("delhi-form").addEventListener("submit", function (e) {
  const successMsg = document.getElementById("delhi-success-msg");
  successMsg.style.display = "none"; // Hide before submission

  // Show after delay (simulate success)
  setTimeout(() => {
    successMsg.style.display = "block";
  }, 500);
});
