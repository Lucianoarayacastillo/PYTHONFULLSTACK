const buttons = document.querySelectorAll(".btn-ninja");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const id = e.target.getAttribute("aria-current");
    const currentBtn = document.getElementById(id)
    let currentNum = parseInt(currentBtn.textContent) + 1 
    currentBtn.textContent = currentNum
});
});
