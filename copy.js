document.querySelectorAll(".copy").forEach(b => b.addEventListener("click", () => {
  navigator.clipboard.writeText(b.dataset.copy).then(() => {
    b.textContent = "Copied";
    setTimeout(() => { b.textContent = "Copy"; }, 2000);
  });
}));
