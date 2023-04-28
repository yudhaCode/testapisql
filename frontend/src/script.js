const moveBtn = document.getElementById("move-btn");
const coverUndanganWrapper = document.querySelector(".cover-undangan-wrapper");
const displayStatus = document.querySelectorAll(".display-status");

moveBtn.addEventListener("click", () => {
  coverUndanganWrapper.style.top = "-100%";
  setTimeout(() => {
    coverUndanganWrapper.style.display = "none";
    for (let i = 0; i < displayStatus.length; i++) {
      displayStatus[i].style.display = "block";
    }
  }, 500); // wait for transition to finish before hiding div
});
