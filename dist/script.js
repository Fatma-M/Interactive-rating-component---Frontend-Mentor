"use strict";
// UI ELEMENTS
const rates = document.querySelectorAll(".rate");
const thankYouDiv = document.querySelector("#thank-you-state");
const ratingDiv = document.querySelector("#rating-state");
const ratingNum = document.querySelector("#num");
const submitBtn = document.querySelector("#submit");
let selectedRate = "";
rates.forEach((el) => {
    el.addEventListener("click", (e) => {
        removeAllSelectedClasses();
        el.classList.add("selected");
        selectedRate = el.textContent;
    });
});
function removeAllSelectedClasses() {
    rates.forEach((el) => {
        el.classList.remove("selected");
    });
}
submitBtn === null || submitBtn === void 0 ? void 0 : submitBtn.addEventListener("click", () => {
    if (selectedRate == "") {
        alert("Make sure to select a number before submit");
    }
    else {
        if (ratingDiv && thankYouDiv) {
            ratingDiv.style.display = "none";
            thankYouDiv.style.display = "flex";
            if (ratingNum && selectedRate) {
                ratingNum.textContent = selectedRate;
            }
        }
    }
});
