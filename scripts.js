// Add a fade-in animation to the header
document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    header.style.opacity = 0;
    let opacity = 0;
  
    const fadeIn = setInterval(() => {
      if (opacity >= 1) {
        clearInterval(fadeIn);
      } else {
        opacity += 0.05;
        header.style.opacity = opacity;
      }
    }, 50);
  });
  // Trigger animation on page load
document.addEventListener("DOMContentLoaded", function () {
    const names = document.querySelectorAll(".name");
    const ampersand = document.querySelector(".ampersand");
  
    names.forEach((name, index) => {
      setTimeout(() => {
        name.style.opacity = 1;
        name.style.transform = "translateY(0)";
      }, 500 * (index + 1));
    });
  
    setTimeout(() => {
      ampersand.style.opacity = 1;
      ampersand.style.transform = "scale(1)";
    }, 750);
  });
  .name:hover {
    color: #ff7e5f;
    cursor: pointer;
    transition: color 0.3s ease;
  }
  
  .ampersand:hover {
    transform: rotate(360deg);
    transition: transform 0.5s ease;
  }