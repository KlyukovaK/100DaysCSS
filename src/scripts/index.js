// day2
const box = document.getElementById("box");
box.addEventListener("click", () => {
  const lines = box.querySelectorAll(".dayTwo__line");
  lines.forEach(function (line) {
    line.classList.toggle("active");
    line.classList.remove("no-animation");
  });
});
