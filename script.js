// Task-1
// selectors--
const incBtn = document.querySelector(".inc-btn");
const decBtn = document.querySelector(".dec-btn");
const userInput = document.querySelector(".user-input");

// Event handlers--
incBtn.addEventListener("click", () => {
  +userInput.value++;
});
decBtn.addEventListener("click", () => {
  if (userInput.value != 1) {
    Number(userInput.value--);
  }
});
// Task-2
// selector--
const bg = document.querySelector(".bg-change");
const bgChangeBtn = document.querySelector(".bg-change-btn");

// Event handlers--
bgChangeBtn.addEventListener("click", () => {
  const randomNum1 = Math.trunc(Math.random() * 256);
  const randomNum2 = Math.trunc(Math.random() * 256);
  const randomNum3 = Math.trunc(Math.random() * 256);

  console.log(randomNum1);
  bg.style.backgroundColor = `rgb(${randomNum1},${randomNum2},${randomNum3})`;

  console.dir(bg);
});
// Task-3
// Selectors--
const passwordInput = document.querySelector(".password-input");
const eyeBtn = document.querySelector(".eye-btn");

// event handlers--
eyeBtn.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";

    eyeBtn.innerHTML = `<i class="fa-regular fa-eye"></i>`;
  } else {
    passwordInput.type = "password";
    eyeBtn.innerHTML = `<i class="fa-regular fa-eye-slash"></i>`;
  }
});

// Task Four--
// Selectors--
const slider = document.querySelector(".range-slider");
const sliderValue = document.querySelector(".slide-value");

// Event handlers--
slider.addEventListener("input", (e) => {
  sliderValue.textContent = e.target.value;
});
