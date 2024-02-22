const box = document.getElementById("box");
box.addEventListener("click", () => {
  const lines = box.querySelectorAll(".line");
  lines.forEach(function (line) {
    line.classList.toggle("active");
    line.classList.remove("no-animation");
  });
});
