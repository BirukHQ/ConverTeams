const gallery = document.getElementById("imageGallery");
const images = gallery.querySelectorAll("img");
const dotContainer = document.querySelector(".dot-container");

let index = 0;

// Clear any pre-existing dots
dotContainer.innerHTML = "";

// Create dots and add hover events
images.forEach((img, i) => {
  // Create navigation dot
  const dot = document.createElement("div");
  dot.classList.add("dot");
  dot.addEventListener("click", () => {
    index = i;
    updateGallery();
  });
  dotContainer.appendChild(dot);

  // Hover to make image active
  img.addEventListener("mouseenter", () => {
    images.forEach(i => i.classList.remove("active"));
    img.classList.add("active");
  });

  // Restore scroll-based active image
  img.addEventListener("mouseleave", () => {
    updateGallery();
  });
});

// Update gallery display
function updateGallery() {
  images.forEach((img, idx) => {
    img.classList.toggle("active", idx === index);
  });

  const dots = dotContainer.querySelectorAll(".dot");
  dots.forEach((dot, idx) => {
    dot.classList.toggle("active", idx === index);
  });
}

// Scroll changes active image
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const range = 300; // Change image every 300px
  const newIndex = Math.floor(scrollY / range) % images.length;
  if (newIndex !== index) {
    index = newIndex;
    updateGallery();
  }
});

updateGallery(); // Initial display
