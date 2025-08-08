// Wait for DOM loaded
document.addEventListener("DOMContentLoaded", function () {
  const mainImage = document.getElementById("mainImage");
  const thumbnails = document.querySelectorAll("#thumbnailContainer img");

  thumbnails.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      // Remove active class from all thumbnails
      thumbnails.forEach(t => t.classList.remove("active"));
      // Add active class to clicked thumbnail
      thumb.classList.add("active");
      // Change main image src to clicked thumbnail's large image
      mainImage.src = thumb.getAttribute("data-large");
    });
  });

  // Optional: zoom on main image click (simple toggle zoom-in cursor)
  mainImage.addEventListener("click", () => {
    if (mainImage.style.transform === "scale(2)") {
      mainImage.style.transform = "scale(1)";
      mainImage.style.cursor = "zoom-in";
    } else {
      mainImage.style.transform = "scale(2)";
      mainImage.style.cursor = "zoom-out";
    }
  });
});
