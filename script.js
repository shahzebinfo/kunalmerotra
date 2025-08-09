document.addEventListener("DOMContentLoaded", () => {
  const products = [
    {
      name: "Diya",
      price: 350,
      rating: 4,
      description: "Elegant handcrafted diya to light up your celebrations.",
      images: [
        "images/product1/A.png",
        "images/product1/B.png",
        "images/product1/C.png",
        "images/product1/D.png"
      ]
    },
    {
      name: "Ram idol",
      price: 1200,
      rating: 5,
      description: "Beautiful Ram idol made from brass, perfect for your pooja room.",
      images: [
        "images/product2/A.png",
        "images/product2/B.png",
        "images/product2/C.png",
        "images/product2/D.png"
      ]
    },
    {
      name: "Brass glasses",
      price: 800,
      rating: 4,
      description: "Set of 4 brass glasses, ideal for traditional drinks.",
      images: [
        "images/product3/A.png",
        "images/product3/B.png",
        "images/product3/C.png",
        "images/product3/D.png"
      ]
    },
    {
      name: "Brass radha krishna",
      price: 1500,
      rating: 5,
      description: "Beautiful brass Radha Krishna statue with intricate details.",
      images: [
        "images/product4/A.png",
        "images/product4/B.png",
        "images/product4/C.png",
        "images/product4/D.png"
      ]
    },
    {
      name: "Brass shiv parivaar",
      price: 2000,
      rating: 4,
      description: "Brass statue of Shiv Parivaar, perfect for worship and gifting.",
      images: [
        "images/product5/A.png",
        "images/product5/B.png",
        "images/product5/C.png",
        "images/product5/D.png"
      ]
    },
    {
      name: "Brass flower pot",
      price: 600,
      rating: 3,
      description: "Decorative brass flower pot for indoor plants.",
      images: [
        "images/product6/A.png",
        "images/product6/B.png",
        "images/product6/C.png",
        "images/product6/D.png"
      ]
    },
    {
      name: "Brass cooker",
      price: 1800,
      rating: 4,
      description: "Premium brass cooker for traditional cooking styles.",
      images: [
        "images/product7/A.png",
        "images/product7/B.png",
        "images/product7/C.png",
        "images/product7/D.png"
      ]
    },
    {
      name: "Brass candle holder",
      price: 400,
      rating: 3,
      description: "Elegant brass candle holder for home décor.",
      images: [
        "images/product8/A.png",
        "images/product8/B.png",
        "images/product8/C.png",
        "images/product8/D.png"
      ]
    },
    {
      name: "Brass pot",
      price: 900,
      rating: 4,
      description: "Traditional brass pot suitable for multiple uses.",
      images: [
        "images/product9/A.png",
        "images/product9/B.png",
        "images/product9/C.png",
        "images/product9/D.png"
      ]
    },
    {
      name: "Brass cutlery",
      price: 1100,
      rating: 5,
      description: "Complete set of brass cutlery for your dining needs.",
      images: [
        "images/product10/A.png",
        "images/product10/B.png",
        "images/product10/C.png",
        "images/product10/D.png"
      ]
    }
  ];

  const productsGrid = document.getElementById("productsGrid");

  function createStarRating(rating) {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;
    return "★".repeat(fullStars) + "☆".repeat(emptyStars);
  }

  products.forEach((product) => {
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
      if (mainImage.classList.contains("zoomed")) {
        mainImage.classList.remove("zoomed");
      } else {
        mainImage.classList.add("zoomed");
      }
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
});

