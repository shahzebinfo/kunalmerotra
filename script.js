document.addEventListener("DOMContentLoaded", function () {
  // Suppose tum products ki total sankhya rakhte ho
  const totalProducts = 10;

  for (let i = 0; i < totalProducts; i++) {
    const mainImage = document.getElementById(`mainImage-${i}`);
    const thumbnailContainer = document.getElementById(`thumbnailContainer-${i}`);
    if (!mainImage || !thumbnailContainer) continue; // agar element nahi mila to skip karo

    const thumbnails = thumbnailContainer.querySelectorAll("img");

    thumbnails.forEach((thumb) => {
      thumb.addEventListener("click", () => {
        // Remove active class from all thumbnails in this product
        thumbnails.forEach(t => t.classList.remove("active"));
        // Add active class to clicked thumbnail
        thumb.classList.add("active");
        // Change main image src to clicked thumbnail's large image
        mainImage.src = thumb.getAttribute("data-large");
        // Reset zoom on image change
        mainImage.style.transform = "scale(1)";
        mainImage.style.cursor = "zoom-in";
      });
    });

    // Zoom toggle on main image click
    mainImage.addEventListener("click", () => {
      if (mainImage.style.transform === "scale(2)") {
        mainImage.style.transform = "scale(1)";
        mainImage.style.cursor = "zoom-in";
      } else {
        mainImage.style.transform = "scale(2)";
        mainImage.style.cursor = "zoom-out";
      }
    });
  }
});
