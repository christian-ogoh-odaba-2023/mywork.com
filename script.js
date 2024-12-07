document.addEventListener("DOMContentLoaded", () => {
  console.log("Website loaded successfully!");

  // Smooth Scroll for Navigation Links
  const links = document.querySelectorAll(".navigation a");
  links.forEach(link => {
      link.addEventListener("click", e => {
          e.preventDefault();
          const targetId = e.target.getAttribute("href").substring(1);
          const targetElement = document.getElementById(targetId);
          targetElement.scrollIntoView({ behavior: "smooth" });
      });
  });

  // Call Now Button Alert
  const callNowButton = document.querySelector(".call-now");
  callNowButton.addEventListener("click", () => {
      alert("Calling Ben Gold Swimming Academy!");
  });
});

document.querySelector(".gallery-container").addEventListener("mouseover", function () {
    this.style.animationPlayState = "paused";
});

document.querySelector(".gallery-container").addEventListener("mouseout", function () {
    this.style.animationPlayState = "running";
});