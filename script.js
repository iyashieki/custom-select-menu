const select = document.querySelector(".custom-select");
const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const options = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

options.forEach(option => {
  option.addEventListener("click", () => {
    selected.textContent = option.textContent;
    optionsContainer.classList.remove("active");
  });
});

// close dropdown when clicking outside
window.addEventListener("click", (e) => {
  if (!select.contains(e.target)) {
    optionsContainer.classList.remove("active");
  }
});
