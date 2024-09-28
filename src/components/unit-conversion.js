export { activateCelsius, activateFahrenheit, deriveUnit };

const celsiusBtn = document.querySelector(".celsius-btn");
const fahrenheitBtn = document.querySelector(".fahrenheit-btn");

let celsiusActive = true;
let unit;

const unitBtnStyling = function applyUnitBtnStyling() {
  if (celsiusActive) {
    fahrenheitBtn.classList.remove("unit-btn-active");
    celsiusBtn.classList.add("unit-btn-active");
    celsiusBtn.disabled = true;
    fahrenheitBtn.disabled = false;
  } else {
    celsiusBtn.classList.remove("unit-btn-active");
    fahrenheitBtn.classList.add("unit-btn-active");
    celsiusBtn.disabled = false;
    fahrenheitBtn.disabled = true;
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

const deriveUnit = function getCurrentUnit() {
  if (celsiusActive) {
    unit = "metric";
  } else {
    unit = "us";
  }
  return unit;
};
