/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// convert-input
const convertInput = document.getElementById("convert-input");
// convert-btn
const convertBtn = document.getElementById("convert-btn");
// length-p
let lengthEl = document.getElementById("length-p");
// volume-p
let volumeEl = document.getElementById("volume-p");
// mass-p
let massEl = document.getElementById("mass-p");

let setMode = document.getElementById("set-mode");

convertBtn.addEventListener("click", function () {
  const inputValue = Number(convertInput.value);

  const imperialLength = (inputValue * 3.281).toFixed(3);
  const metricLength = (inputValue / 3.281).toFixed(3);
  lengthEl.textContent = `${inputValue} meters = ${imperialLength} feet | ${inputValue} feet = ${metricLength} meters`;

  const imperialVolume = (inputValue * 0.264).toFixed(3);
  const metricVolume = (inputValue / 0.264).toFixed(3);
  volumeEl.textContent = `${inputValue} liters = ${imperialVolume} gallons | ${inputValue} gallons = ${metricVolume} liters`;

  const imperialMass = (inputValue * 2.204).toFixed(3);
  const metricMass = (inputValue / 2.204).toFixed(3);
  massEl.textContent = `${inputValue} kilos = ${imperialMass} pounds | ${inputValue} pounds = ${metricMass} kilos`;
});

setMode.addEventListener("click", function () {
  // set-mode
  setMode.classList.toggle("set-mode-btn-on");

  // box-container (id)
  document
    .getElementById("box-container")
    .classList.toggle("box-container-color-dark");

  // convert-box (class)
  let convertBox = document.querySelectorAll(".convert-box");
  for (let i = 0; i < convertBox.length; i++) {
    convertBox[i].classList.toggle("convert-box-dark");
  }
});
