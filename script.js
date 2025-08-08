const imageFolder = 'image/product1/';
const images = [
  '1.jpg',
  '2.jpg',
  '3.jpg',
  '4.jpg'
  // Apne images ke naam yahan add karen
];

const container = document.getElementById('imageScroll');
images.forEach(imgName => {
  const img = document.createElement('img');
  img.src = imageFolder + imgName;
  img.alt = 'Product Image';
  container.appendChild(img);
});
