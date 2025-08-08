const imageFolder = 'images/product1/';
const images = ['A.png', 'B.png', 'C.png', 'D.png'];

const container = document.getElementById('imageScroll');
images.forEach(imgName => {
  const img = document.createElement('img');
  img.src = imageFolder + imgName;
  img.alt = 'Product Image';
  container.appendChild(img);
});
