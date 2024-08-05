// Load all images eagerly
const images = import.meta.glob('../assets/images/*.{jpg,png,jpeg,gif}', { eager: true });

export function loadImage(filename) {
  const imagePath = `../assets/images/${filename}`;
  return images[imagePath]?.default || images[imagePath]; // Handle default export in case of CommonJS module
}
