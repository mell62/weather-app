export { activateCelsius, activateFahrenheit };

const celsiusBtn = document.querySelector(".celsius-btn");
const fahrenheitBtn = document.querySelector(".fahrenheit-btn");

let celsiusActive = true;

const unitBtnStyling = function applyUnitBtnStyling() {
  if (celsiusActive) {
    fahrenheitBtn.classList.remove("unit-btn-active");
    celsiusBtn.classList.add("unit-btn-active");
  } else {
    celsiusBtn.classList.remove("unit-btn-active");
    fahrenheitBtn.classList.add("unit-btn-active");
  }
};

const activateCelsius = function toggleCelsiusActive() {
  celsiusActive = true;
  unitBtnStyling();
};

const activateFahrenheit = function toggleCelsiusInactive() {
  celsiusActive = false;
  unitBtnStyling();
};
