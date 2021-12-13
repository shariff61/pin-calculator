const generateButton = document.querySelector(".generate-btn");
const formControl = document.querySelector(".form-control1");
const calcFormControl = document.querySelector(".form-control2");
const submitButton = document.querySelector(".submit-btn");

// Random number
generateButton.addEventListener("click", function () {
  const formRandom = Math.round(Math.random() * 9999) + 1;

  formControl.value = formRandom;
});

// calculator button click side
const calculateBody = document.querySelector(".calc-body");
const button = calculateBody.querySelectorAll(".button");
for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function () {
    if (this.innerText == "C") {
      calcFormControl.value = "";
    } else if (this.innerText == "<") {
      calcFormControl.value = calcFormControl.value.slice(0, -1);
    } else {
      calcFormControl.value += this.innerText;
    }
  });
}

// submit side

submitButton.addEventListener("click", function () {
  if (formControl.value === calcFormControl.value) {
    const twoNotify = document.getElementsByClassName("notify");
    for (let i = 0; i < twoNotify.length; i++) {
      twoNotify[i].style.display = "block";
    }
  }
});
