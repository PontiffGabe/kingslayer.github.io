// ------------- DRAGGABLE DIV --------------
const openAboutUsButton = document.getElementById("btn-about_us");
const closeAboutUsButton = document.getElementById("btn-close-about_us");

const openChronologyButton = document.getElementById("btn-chronology");
const closeChronologyButton = document.getElementById("btn-close-chronology");

const openDownloadButton = document.getElementById("btn-download");
const closeDownloadButton = document.getElementById("btn-close-download");

function openModal(modal){
  if (modal == null) return
  modal.classList.add("show")
}
function closeModal(modal){
  if (modal == null) return
  modal.classList.remove("show")
}


openAboutUsButton.addEventListener("click", () => {
  const window = document.getElementById("wrapper-about_us")
  openModal(window);
});
closeAboutUsButton.addEventListener("click", () => {
  const window = document.getElementById("wrapper-about_us")
  closeModal(window);
});

openAboutUsButton.addEventListener("click", () => {
  const window = document.getElementById("wrapper-chronology")
  openModal(window);
});
closeAboutUsButton.addEventListener("click", () => {
  const window = document.getElementById("wrapper-chronology")
  closeModal(window);
});

openAboutUsButton.addEventListener("click", () => {
  const window = document.getElementById("wrapper-download")
  openModal(window);
});
closeAboutUsButton.addEventListener("click", () => {
  const window = document.getElementById("wrapper-download")
  closeModal(window);
});


// ----------------------------------