export function dayTwo() {
  const box = document.getElementById("dayTwo__box");
  box.addEventListener("click", () => {
    const lines = box.querySelectorAll(".dayTwo__line");
    console.log("df");
    lines.forEach(function (line) {
      line.classList.toggle("active");
      line.classList.remove("no-animation");
    });
  });
}
