let title = document.querySelector("#home");
title.addEventListener("click", () => {
  window.location.href = "http://localhost:3000";
});
let input = document.querySelector("#search");
input.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    window.location.href = `http://localhost:3000/search?q=${encodeURIComponent(
      input.value
    )}`;
  }
});