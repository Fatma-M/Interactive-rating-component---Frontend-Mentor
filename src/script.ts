// UI ELEMENTS
const rates: NodeListOf<HTMLDivElement> = document.querySelectorAll(".rate");
const thankYouDiv: HTMLDivElement | null =
  document.querySelector("#thank-you-state");
const ratingDiv: HTMLDivElement | null =
  document.querySelector("#rating-state");
const ratingNum: HTMLElement | null = document.querySelector("#num");
const submitBtn: HTMLElement | null = document.querySelector("#submit");

let selectedRate: string | null = "";

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

submitBtn?.addEventListener("click", () => {
  if (selectedRate == "") {
    alert("Make sure to select a number before submit");
  } else {
    if (ratingDiv && thankYouDiv) {
      ratingDiv.style.display = "none";
      thankYouDiv.style.display = "flex";
      if (ratingNum && selectedRate) {
        ratingNum.textContent = selectedRate;
      }
    }
  }
});
