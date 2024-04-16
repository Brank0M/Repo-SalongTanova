// This script preloads images
document.addEventListener('DOMContentLoaded', () => {
  const imagesToPreload = JSON.parse(
    document.getElementById('preloadImagesData').textContent
  );
  imagesToPreload.forEach((imageUrl) => {
    const img = new Image();
    img.src = imageUrl;
  });
});
