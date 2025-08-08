// Helpers
function $(sel) { return document.querySelector(sel); }
function q(id) { return document.getElementById(id); }

// Format Indian Rupees
function formatINR(n) {
  return '₹' + Number(n).toLocaleString('en-IN');
}

// Product data (simulate loading from server)
const product = {
  name: "Tst Product",
  price: 500,
  stock: 10,
  description: "This is a test product description. High quality and great value!",
  rating: 3,
  images: [
    "images/product1/A.png",
    "images/product1/B.png",
    "images/product1/C.png",
    "images/product1/D.png"
  ]
};

// Render product details and gallery
function renderProduct() {
  q("prodName").innerText = product.name;

  // rating stars (full star: ★, empty star: ☆)
  const fullStars = Math.floor(product.rating);
  const stars = "★".repeat(fullStars) + "☆".repeat(5 - fullStars);
  q("prodRating").innerText = stars + " (" + product.rating + ")";

  q("prodPrice").innerText = formatINR(product.price);
  q("prodDesc").innerText = product.description;

  const slides = q("slides");
  const thumbs = q("thumbs");
  slides.innerHTML = "";
  thumbs.innerHTML = "";

  product.images.forEach((src, i) => {
    // Main images
    const img = document.createElement("img");
    img.src = src;
    img.alt = product.name + " Image " + (i + 1);
    img.onclick = () => showZoom(src);
    slides.appendChild(img);

    // Thumbnails
    const thumb = document.createElement("img");
    thumb.src = src;
    thumb.alt = product.name + " Thumb " + (i + 1);
    thumb.onclick = () => scrollToImage(i);
    if (i === 0) thumb.classList.add("active");
    thumbs.appendChild(thumb);
  });
}

// Scroll main gallery to image at index i
function scrollToImage(i) {
  const slides = q("slides");
  const images = slides.querySelectorAll("img");
  if (images[i]) {
    images[i].scrollIntoView({ behavior: "smooth", inline: "center" });
  }
  highlightThumb(i);
}

// Highlight active thumbnail
function highlightThumb(i) {
  const thumbs = q("thumbs").querySelectorAll("img");
  thumbs.forEach((t, idx) => {
    if (idx === i) t.classList.add("active");
    else t.classList.remove("active");
  });
}

// Zoom modal show/hide
function showZoom(src) {
  const modal = q("zoomModal");
  const img = q("zoomImage");
  img.src = src;
  modal.style.display = "flex";
}

function hideZoom() {
  q("zoomModal").style.display = "none";
}

// Init
window.onload = () => {
  renderProduct();

  // Close zoom modal on click
  q("zoomModal").addEventListener("click", hideZoom);

  // Update thumbnail highlight on main gallery scroll
  const slides = q("slides");
  slides.addEventListener("scroll", () => {
    const images = slides.querySelectorAll("img");
    let closestIndex = 0;
    let closestDistance = Infinity;
    const scrollLeft = slides.scrollLeft;
    images.forEach((img, idx) => {
      const offset = img.offsetLeft;
      const distance = Math.abs(offset - scrollLeft);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = idx;
      }
    });
    highlightThumb(closestIndex);
  });
};
