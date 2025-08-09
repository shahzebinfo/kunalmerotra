document.addEventListener("DOMContentLoaded", () => {
  const products = [ /* aapke products data wahi rahega */ ];

  const productsGrid = document.getElementById("productsGrid");

  let currentProducts = [...products];

  function createStarRating(rating) {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;
    return "★".repeat(fullStars) + "☆".repeat(emptyStars);
  }

  function renderProducts(productsArray) {
    productsGrid.innerHTML = ""; // Clear previous
    productsArray.forEach(product => {
      // Create product card exactly as before
      const card = document.createElement("div");
      card.classList.add("product-card");

      const gallery = document.createElement("div");
      gallery.classList.add("gallery");

      const mainImageDiv = document.createElement("div");
      mainImageDiv.classList.add("main-image");

      const mainImage = document.createElement("img");
      mainImage.src = product.images[0];
      mainImage.alt = product.name + " Main Image";
      mainImageDiv.appendChild(mainImage);

      const thumbsDiv = document.createElement("div");
      thumbsDiv.classList.add("thumbnails");

      product.images.forEach((imgSrc, i) => {
        const thumb = document.createElement("img");
        thumb.src = imgSrc;
        thumb.alt = product.name + " Thumb " + (i + 1);
        if (i === 0) thumb.classList.add("active");
        thumb.addEventListener("click", () => {
          thumbsDiv.querySelectorAll("img").forEach(t => t.classList.remove("active"));
          thumb.classList.add("active");
          mainImage.src = imgSrc;
          mainImage.classList.remove("zoomed");
        });
        thumbsDiv.appendChild(thumb);
      });

      mainImage.addEventListener("click", () => {
        mainImage.classList.toggle("zoomed");
      });

      gallery.appendChild(mainImageDiv);
      gallery.appendChild(thumbsDiv);

      const infoDiv = document.createElement("div");
      infoDiv.classList.add("product-info");

      const nameEl = document.createElement("h2");
      nameEl.classList.add("product-name");
      nameEl.textContent = product.name;

      const priceEl = document.createElement("p");
      priceEl.classList.add("price");
      priceEl.textContent = `Rs ${product.price}`;

      const ratingEl = document.createElement("p");
      ratingEl.classList.add("rating");
      ratingEl.textContent = createStarRating(product.rating);

      const descEl = document.createElement("p");
      descEl.classList.add("description");
      descEl.textContent = product.description;

      const buttonsDiv = document.createElement("div");
      buttonsDiv.classList.add("buttons");

      const addBtn = document.createElement("button");
      addBtn.classList.add("btn", "btn-add");
      addBtn.textContent = "Add to Cart";

      const buyBtn = document.createElement("button");
      buyBtn.classList.add("btn", "btn-buy");
      buyBtn.textContent = "Buy Now";

      buttonsDiv.appendChild(addBtn);
      buttonsDiv.appendChild(buyBtn);

      infoDiv.appendChild(nameEl);
      infoDiv.appendChild(priceEl);
      infoDiv.appendChild(ratingEl);
      infoDiv.appendChild(descEl);
      infoDiv.appendChild(buttonsDiv);

      card.appendChild(gallery);
      card.appendChild(infoDiv);

      productsGrid.appendChild(card);
    });
  }

  renderProducts(currentProducts);

  // Hamburger menu toggle
  const hamburger = document.getElementById("menuToggle");
  const navMenu = document.getElementById("mainNav");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });

  // Sorting & Searching code (optional)
  // Aapko agar chahiye to main update karke de deta hoon
});
