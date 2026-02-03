document.querySelectorAll("li").forEach(li => {
  li.addEventListener("click", () => {
    document.querySelector(".active")?.classList.remove("active");
    li.classList.add("active");
  });
});
