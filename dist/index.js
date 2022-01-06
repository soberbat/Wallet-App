const generateKeyButton = document.querySelector(".generate-box-button");

const generateContainer = document.querySelector(".generate-box");
const keyGeneratingContainer = document.querySelector(
  ".key-generating-section"
);

generateKeyButton.addEventListener("click", () => {
  generateContainer.style.opacity = "0";
  setTimeout(() => {
    generateContainer.style.display = "none";
    keyGeneratingContainer.style.display = "block";
  }, 400);
});
