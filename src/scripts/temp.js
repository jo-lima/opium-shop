const btnSwitch = document.querySelectorAll(".products__switch");
const background = document.querySelector(".products__background");
const animationTime = 1.5;

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

btnSwitch.forEach((button) => {
  button.addEventListener("click", function (e) {
    background.classList.add("products__background--animated");
    background.style.backgroundColor = getRandomColor();
    setTimeout(function () {
      background.classList.remove("products__background--animated");
    }, animationTime * 1000);
  });
});
