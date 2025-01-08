const burger = document.getElementById("burger");
const menu = document.getElementById("menu");
const T1 = document.getElementById("T1");
const boks = document.getElementById("boks");

burger.addEventListener("click", () => {
  burger.classList.toggle("open");
  menu.classList.toggle("active");
  T1.classList.toggle("close");
});

document.querySelector("#boks").addEventListener("click", pauseAnimation);

function pauseAnimation() {
  document.querySelector("#boks").classList.add("paused");
  document.querySelector("#boks").removeEventListener("click", pauseAnimation); // Fjern denne eventlistener
  document.querySelector("#boks").addEventListener("click", resumeAnimation); // Tilføj eventlistener for at starte igen
}
function resumeAnimation() {
  document.querySelector("#boks").classList.remove("paused");
  document.querySelector("#boks").removeEventListener("click", resumeAnimation); // Fjern denne eventlistener
  document.querySelector("#boks").addEventListener("click", pauseAnimation); // Tilføj eventlistener for at pause igen
}

// function addPaused() {
//   box.classList.add(".paused"); // Stop rotation
//   box.addEventListener("click", removePaused); // Fjern denne eventlistener
//   box.addEventListener("click", removePaused); // Tilføj eventlistener for at starte rotation igen
// }

// function removePaused() {
//   box.classList.remove("paused"); // Start rotation
//   box.removeEventListener("click", removePaused); // Fjern denne eventlistener
//   box.addEventListener("click", addPaused); // Tilføj eventlistener for at stoppe rotation igen
// }

// box.addEventListener("click", addPaused);

// box.addEventListener("click", () => {
//   function pauseAnimation() {
//     document.querySelector("box").classList.add("paused");
//   }
// });
// function continueAnimation() {
//   document.querySelector("box").classList.remove("paused");
// }
