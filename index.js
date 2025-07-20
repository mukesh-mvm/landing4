
// navbar
const toggleBtn = document.getElementById("barman-toggle");
const navLinks = document.getElementById("barman-nav-links");
const btns = document.querySelector(".barman-buttons");

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  btns.classList.toggle("active");
});

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


// specialist section
document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("gettouch-carousel");
  const prevBtn = document.querySelector(".gettouch-prev");
  const nextBtn = document.querySelector(".gettouch-next");
  const modal = document.getElementById("gettouch-modal");
  const iframe = document.getElementById("gettouch-video-frame");
  const closeBtn = document.getElementById("gettouch-close");

  function updateCarousel(direction) {
    if (direction === 'next') {
      track.appendChild(track.firstElementChild);
    } else {
      track.insertBefore(track.lastElementChild, track.firstElementChild);
    }
  }

  nextBtn.addEventListener("click", () => updateCarousel('next'));
  prevBtn.addEventListener("click", () => updateCarousel('prev'));

  document.querySelectorAll(".gettouch-play").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const videoUrl = btn.closest(".gettouch-card").dataset.videoUrl;
      iframe.src = `${videoUrl}&autoplay=1`;
      modal.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    iframe.src = "";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      iframe.src = "";
    }
  });
});



// demo section
document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("specialist-section-carousel");
  const prev = document.querySelector(".specialist-section-prev");
  const next = document.querySelector(".specialist-section-next");
  const modal = document.getElementById("specialist-section-modal");
  const iframe = document.getElementById("specialist-section-video-frame");
  const closeBtn = document.getElementById("specialist-section-close");

  function updateCarousel(direction) {
    const first = carousel.firstElementChild;
    const last = carousel.lastElementChild;
    if (direction === "next") {
      carousel.appendChild(first);
    } else {
      carousel.insertBefore(last, first);
    }
  }

  next.addEventListener("click", () => updateCarousel("next"));
  prev.addEventListener("click", () => updateCarousel("prev"));

  document.querySelectorAll(".specialist-section-play").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const videoUrl = btn.closest(".specialist-section-card").dataset.videoUrl;
      iframe.src = videoUrl;
      modal.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    iframe.src = "";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      iframe.src = "";
    }
  });
});


// testinomia


// first form submited
// document.addEventListener("DOMContentLoaded", function () {
//   const form = document.getElementById("gettouch-contact-form");
//   const messageBox = document.getElementById("gettouch-form-message");

//   form.addEventListener("submit", async function (e) {
//     e.preventDefault();

//     const formData = new FormData(form);

//     try {
//       const response = await fetch(form.action, {
//         method: "POST",
//         body: formData
//       });

//       const result = await response.json();

//       if (result.success) {
//         messageBox.innerText = "Form submitted successfully!";
//         messageBox.style.display = "block";
//         messageBox.style.color = "green";
//         form.reset();
//       } else {
//         messageBox.innerText = "Form submission failed. Please try again.";
//         messageBox.style.display = "block";
//         messageBox.style.color = "red";
//       }
//     } catch (error) {
//       messageBox.innerText = "Something went wrong. Please try again.";
//       messageBox.style.display = "block";
//       messageBox.style.color = "red";
//     }
//   });
// });






// third form
// document.addEventListener("DOMContentLoaded", function () {
//   const form = document.getElementById("delhi-form");
//   const messageBox = document.getElementById("delhi-success-msg");

//   form.addEventListener("submit", async function (e) {
//     e.preventDefault();

//     const formData = new FormData(form);

//     try {
//       const response = await fetch(form.action, {
//         method: "POST",
//         body: formData
//       });

//       const result = await response.json();

//       if (result.success) {
//         messageBox.innerText = "Form submitted successfully!";
//         messageBox.style.display = "block";
//         messageBox.style.color = "green";
//         form.reset();
//       } else {
//         messageBox.innerText = "Form submission failed. Please try again.";
//         messageBox.style.display = "block";
//         messageBox.style.color = "red";
//       }
//     } catch (error) {
//       messageBox.innerText = "Something went wrong. Please try again.";
//       messageBox.style.display = "block";
//       messageBox.style.color = "red";
//     }
//   });
// });
