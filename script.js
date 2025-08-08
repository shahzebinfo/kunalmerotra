document.addEventListener("DOMContentLoaded", () => {
  const products = [
    {
      name: "Product 1",
      price: 500,
      rating: 3,
      description: "High quality product 1 with great features.",
      images: [
        "images/product1/A.png",
        "images/product1/B.png",
        "images/product1/C.png",
        "images/product1/D.png"
      ]
    },
    {
      name: "Product 2",
      price: 700,
      rating: 4,
      description: "Amazing product 2 loved by everyone.",
      images: [
        "images/product2/A.png",
        "images/product2/B.png",
        "images/product2/C.png",
        "images/product2/D.png"
      ]
    },
    // Add all 10 products similarly:
    {
      name: "Product 3",
      price: 600,
      rating: 5,
      description: "Top rated product 3 with awesome features.",
      images: [
        "images/product3/A.png",
        "images/product3/B.png",
        "images/product3/C.png",
        "images/product3/D.png"
      ]
    },
    {
      name: "Product 4",
      price: 450,
      rating: 3,
      description: "Affordable and durable product 4.",
      images: [
        "images/product4/A.png",
        "images/product4/B.png",
        "images/product4/C.png",
        "images/product4/D.png"
      ]
    },
    {
      name: "Product 5",
      price: 850,
      rating: 4,
      description: "Premium quality product 5 for your needs.",
      images: [
        "images/product5/A.png",
        "images/product5/B.png",
        "images/product5/C.png",
        "images/product5/D.png"
      ]
    },
    {
      name: "Product 6",
      price: 300,
      rating: 2,
      description: "Budget friendly product 6 with great value.",
      images: [
        "images/product6/A.png",
        "images/product6/B.png",
        "images/product6/C.png",
        "images/product6/D.png"
      ]
    },
    {
      name: "Product 7",
      price: 550,
      rating: 4,
      description: "Popular product 7 with amazing performance.",
      images: [
        "images/product7/A.png",
        "images/product7/B.png",
        "images/product7/C.png",
        "images/product7/D.png"
      ]
    },
    {
      name: "Product 8",
      price: 750,
      rating: 5,
      description: "Highly recommended product 8.",
      images: [
        "images/product8/A.png",
        "images/product8/B.png",
        "images/product8/C.png",
        "images/product8/D.png"
      ]
    },
    {
      name: "Product 9",
      price: 620,
      rating: 3,
      description: "Reliable product 9 with good reviews.",
      images: [
        "images/product9/A.png",
        "images/product9/B.png",
        "images/product9/C.png",
        "images/product9/D.png"
      ]
    },
    {
      name: "Product 10",
      price: 900,
      rating: 5,
      description: "Top of the line product 10 for experts.",
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

  products.forEach((product, index) => {
    // Create product card div
    const card = document.createElement("div");
    card.classList.add("product-card");

    // Create gallery div
    const gallery = document.createElement("div");
    gallery.classList.add("gallery");

    // Main image container
    const mainImageDiv = document.createElement("div");
    mainImageDiv.classList.add("main-image");

    const mainImage = document.createElement("img");
    mainImage.src = product.images[0];
    mainImage.alt = product.name + " Main Image";
    mainImageDiv.appendChild(mainImage);

    // Thumbnails container
    const thumbsDiv = document.createElement("div");
    thumbsDiv.classList.add("thumbnails");

    product.images.forEach((imgSrc, i) => {
      const thumb = document.createElement("img");
      thumb.src = imgSrc;
      thumb.alt = product.name + " Thumb " + (i+1);
      if(i === 0) thumb.classList.add("active");
      thumb.addEventListener("click", () => {
        // Remove active class from all thumbs for this product
        thumbsDiv.querySelectorAll("img").forEach(t => t.classList.remove("active"));
        // Add active to clicked thumb
        thumb.classList.add("active");
        // Change main image src
        mainImage.src = imgSrc;
        mainImage.classList.remove("zoomed");
      });
      thumbsDiv.appendChild(thumb);
    });

    // Zoom on main image click
    mainImage.addEventListener("click", () => {
      if(mainImage.classList.contains("zoomed")){
        mainImage.classList.remove("zoomed");
      } else {
        mainImage.classList.add("zoomed");
      }
    });

    gallery.appendChild(mainImageDiv);
    gallery.appendChild(thumbsDiv);

    // Product info div
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
