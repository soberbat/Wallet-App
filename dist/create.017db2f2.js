const generateKeyButton = document.querySelector(".generate-box-button");
const generateContainer = document.querySelector(".generate-box");
const keyGeneratingContainer = document.querySelector(".key-generating-section");
const KeyContainerDisplay = document.querySelector(".key-generating-container");
const verifiedContainerDisplay = document.querySelector(".verified-section-container");
const modalAlert = document.querySelector(".alert");
const generateKey = document.querySelector("#regenerate-button");
const gridİtems = document.querySelectorAll(".grid span");
const gridParagraph = document.querySelector(".key-phrase p");
const checkbox = document.querySelector(".checkboxİnput");
const buttonn = document.querySelector("#disabledButton");
const verifyClose = document.querySelector("#verify-close");
const modal = document.querySelector(".modal-container");
const verifyButton = document.querySelector("#verify-button");
const inputs = document.querySelectorAll(".modal__grid label input");
// ADJUSTİNG THE STYLE PROPERTY OF GENERATE KEY
generateKeyButton.addEventListener("click", ()=>{
    generateContainer.style.opacity = "0";
    setTimeout(()=>{
        generateContainer.style.display = "none";
        keyGeneratingContainer.style.display = "block";
    }, 400);
});
// ADJUSTİNG THE STYLE PROPERTY OF GENERATE KEY
// GENERATİNG THE KEY LOGİC
async function getUser() {
    try {
        const response = await axios.get("https://random-word-api.herokuapp.com/word?number=24");
        fillTheBlanks(response.data);
    } catch (error) {
        console.error(error);
    }
}
//FİLLİNG THE BLANKS OF BOTH MODAL AND GRİD
function fillTheBlanks(data) {
    //PARAGRAPH AND GRİD WORDS
    gridİtems.forEach((item, index)=>{
        item.innerHTML = `<strong>${index + 1}</strong>.   ${data[index]}`;
    });
    let paragraph = data.join(" ");
    gridParagraph.innerText = paragraph;
    //PARAGRAPH AND GRİD WORDS
    //FILL THE MODAL
    fillTheModal(data);
//FILL THE MODAL
}
//FİLLİNG THE BLANKS OF BOTH MODAL AND GRİD
//RANDOM NUMBER
function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}
//RANDOM NUMBER
// CHECKİNG WHETHER THE GİVEN İNPUT İS THE RİGHT ONE
function checkTheBlanks(numbers, emptyWords, emptyİnputs) {
    console.log(emptyWords);
    console.log(emptyİnputs);
    verifyButton.addEventListener("click", ()=>{
        let checked = 0;
        for(let index = 0; index < emptyWords.length; index++)if (emptyİnputs[index].value === emptyWords[index]) {
            checked += 1;
            console.log(checked);
        }
        if (checked === emptyWords.length) {
            modal.classList.add("animate-show");
            setTimeout(()=>{
                modal.classList.add("display-none");
            }, 1000);
            Swal.fire({
                title: "You have the access to your wallet.",
                width: 400,
                padding: "2em",
                color: "#716add",
                background: "#fff url(/images/trees.png)",
                toast: true,
                position: "bottom-start",
                timer: 3000
            });
        } else modalAlert.style.display = "block";
    });
}
// CHECKİNG WHETHER THE GİVEN İNPUT İS THE RİGHT ONE
// FİLL THE MODAL WİTH THE İNDEXES AND LEAVİNG SOME BLANK
function fillTheModal(data) {
    // GENERATE RANDOM NUMBER
    let numbers = [];
    for(let index1 = 0; index1 < 5; index1++){
        let number = randomNumber(0, 24);
        number = Math.floor(number);
        numbers.push(number);
    }
    // GENERATE RANDOM NUMBER
    // FİLLİNG THE BLANKS
    let emptyİnputs = [];
    let emptyWords = [];
    inputs.forEach((item, index)=>{
        if (!numbers.includes(index)) {
            item.value = data[index];
            item.setAttribute("readonly", "readonly");
        } else {
            let word = data[index];
            emptyWords.push(word);
            item.removeAttribute("readonly");
            item.value = "";
            emptyİnputs.push(item);
        }
    });
    // FİLLİNG THE BLANKS
    // CHECK THE BLANKS
    checkTheBlanks(numbers, emptyWords, emptyİnputs);
    // CHECK THE BLANKS
    console.log(numbers);
}
// FİLL THE MODAL WİTH THE İNDEXES AND LEAVİNG SOME BLANK
generateKey.addEventListener("click", getUser);
// GENERATİNG THE KEY LOGİC
//MODAL DİSPLAY
verifyClose.addEventListener("click", ()=>{
    modal.classList.add("animate-show");
    setTimeout(()=>{
        modal.classList.add("display-none");
    }, 1000);
});
buttonn.addEventListener("click", ()=>{
    modal.classList.remove("animate-show");
    modal.classList.remove("display-none");
    modal.classList.add("animate-opacity");
});
//MODAL DİSPLAY
checkbox.addEventListener("change", ()=>{
    console.log("değişti");
    if (checkbox.checked) {
        buttonn.disabled = false;
        console.log("şuan checked");
        buttonn.style.backgroundColor = "#e94a70";
    } else {
        buttonn.disabled = true;
        console.log("şuan checked değil");
        buttonn.style.backgroundColor = "#f4a3b8";
    }
});
getUser();

//# sourceMappingURL=create.017db2f2.js.map
