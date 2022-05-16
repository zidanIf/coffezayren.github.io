const baris = document.querySelector("#menu");
const ul = document.querySelector(".link");

menu.addEventListener("click", () => {
  ul.classList.toggle("active");
  baris.classList.remove("#menu");
});
document.querySelectorAll(".link").forEach((e) =>
  e.addEventListener("click", () => {
    baris.classList.remove("active");
    ul.classList.remove("active");
  })
);
