// Define your available image structure
const imageStructure = {
  red: [
    "/images/objects/red/flower1.jpg",
    "/images/objects/red/flower2.jpg",
    "/images/objects/red/flower3.jpg",
    "/images/objects/red/flower4.jpg",
  ],
  blue: [
    "/images/objects/blue/flower1.jpg",
  ],
  purple: [
    "/images/objects/purple/flower1.jpg",
    "/images/objects/purple/flower2.jpg",
    "/images/objects/purple/flower3.jpg",
    "/images/objects/purple/flower4.jpg",
    "/images/objects/purple/flower5.jpg",
  ],
  yellow:[
    "/images/objects/yellow/flower1.jpg",
    "/images/objects/yellow/flower2.jpg",
  ],
  white: [
    "/images/objects/white/flower1.jpg", 
  ],
  other: [
    "/images/objects/other/flower1.jpg",
    "/images/objects/other/flower2.jpg",
    "/images/objects/other/flower3.jpg",
  ],
};

export function getRandomImage() {
  // Pick a random color folder
  const colors = Object.keys(imageStructure);
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  // Pick a random image from that folder
  const images = imageStructure[randomColor];
  const randomImage = images[Math.floor(Math.random() * images.length)];

  return randomImage;
}
