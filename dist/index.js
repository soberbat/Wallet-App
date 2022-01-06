const generateKeyButton = document.querySelector(".generate-box-button");
const generateContainer = document.querySelector(".generate-box");
const keyGeneratingContainer = document.querySelector(
  ".key-generating-section"
);
const generateKey = document.querySelector("#regenerate-button");
const gridİtems = document.querySelectorAll(".grid span");
const gridParagraph = document.querySelector(".key-phrase p");
const checkbox = document.querySelector(".checkboxİnput");
const buttonn = document.querySelector("#disabledButton");

// ADJUSTİNG THE STYLE PROPERTY OF GENERATE KEY
generateKeyButton.addEventListener("click", () => {
  generateContainer.style.opacity = "0";
  setTimeout(() => {
    generateContainer.style.display = "none";
    keyGeneratingContainer.style.display = "block";
  }, 400);
});
// ADJUSTİNG THE STYLE PROPERTY OF GENERATE KEY

// GENERATİNG THE KEY LOGİC
async function getUser() {
  try {
    const response = await axios.get(
      "https://random-word-api.herokuapp.com/word?number=24"
    );

    fillTheBlanks(response.data);
  } catch (error) {
    console.error(error);
  }
}

function fillTheBlanks(data) {
  gridİtems.forEach((item, index) => {
    item.innerText = data[index];
  });

  let paragraph = data.join(" ");
  gridParagraph.innerText = paragraph;
}
getUser();

generateKey.addEventListener("click", getUser);
// GENERATİNG THE KEY LOGİC

//MODAL DİSPLAY

//MODAL DİSPLAY

checkbox.addEventListener("change", () => {
  console.log("değişti");
  if (checkbox.checked) {
    buttonn.disabled = false;
    console.log("şuan checked");
    buttonn.style.backgroundColor = "#e94a70";
  } else {
    buttonn.disabled = true;
    console.log("şuan checked değil");
    buttonn.style.backgroundColor = "grey";
  }
});

console.log(buttonn);
console.log(checkbox);
