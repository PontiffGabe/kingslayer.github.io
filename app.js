// ------------- OPEN CLOSE DIV --------------
const openAboutUsButton = document.getElementById("btn-about_us");
const closeAboutUsButton = document.getElementById("btn-close-about_us");

const openChronologyButton = document.getElementById("btn-chronology");
const closeChronologyButton = document.getElementById("btn-close-chronology");

const openDownloadButton = document.getElementById("btn-download");
const closeDownloadButton = document.getElementById("btn-close-download");

function openModal(modal){
  if (modal == null) return
  modal.classList.add("show")
};
function closeModal(modal){
  if (modal == null) return
  modal.classList.remove("show")
};


openAboutUsButton.addEventListener("click", () => {
  const window = document.getElementById("wrapper-about_us")
  openModal(window);
});
closeAboutUsButton.addEventListener("click", () => {
  const window = document.getElementById("wrapper-about_us")
  closeModal(window);
});

openChronologyButton.addEventListener("click", () => {
  const window = document.getElementById("wrapper-chronology")
  openModal(window);
});
closeChronologyButton.addEventListener("click", () => {
  const window = document.getElementById("wrapper-chronology")
  closeModal(window);
});

openDownloadButton.addEventListener("click", () => {
  const window = document.getElementById("wrapper-download")
  openModal(window);
});
closeDownloadButton.addEventListener("click", () => {
  const window = document.getElementById("wrapper-download")
  closeModal(window);
});


// ----------------------------------

// ------------- DRAGGABLE DIV --------------
const about_us_wrapper = document.getElementById("wrapper-about_us");
about_us_header = about_us_wrapper.querySelector("header");

const chronology_wrapper = document.getElementById("wrapper-chronology");
chronology_header = chronology_wrapper.querySelector("header");

const download_wrapper = document.getElementById("wrapper-download");
download_header = download_wrapper.querySelector("header");

function onDrag1({movementX, movementY})
{
    let getStyle = window.getComputedStyle(about_us_wrapper);

    let left = parseInt(getStyle.left); 
    let top = parseInt(getStyle.top);

    about_us_wrapper.style.left = `${left + movementX}px` ;
    about_us_wrapper.style.top = `${top + movementY}px` ;
}
function onDrag2({movementX, movementY})
{
    let getStyle = window.getComputedStyle(chronology_wrapper);

    let left = parseInt(getStyle.left); 
    let top = parseInt(getStyle.top);

    chronology_wrapper.style.left = `${left + movementX}px` ;
    chronology_wrapper.style.top = `${top + movementY}px` ;
}
function onDrag3({movementX, movementY})
{
    let getStyle = window.getComputedStyle(download_wrapper);

    let left = parseInt(getStyle.left); 
    let top = parseInt(getStyle.top);

    download_wrapper.style.left = `${left + movementX}px` ;
    download_wrapper.style.top = `${top + movementY}px` ;
}

about_us_header.addEventListener("mousedown", () => {
  about_us_header.addEventListener("mousemove", onDrag1);
  about_us_wrapper.style.zIndex = "2";
  chronology_wrapper.style.zIndex = "1";
  download_wrapper.style.zIndex = "1";
});

about_us_header.addEventListener("mouseup", () => {
  about_us_header.removeEventListener("mousemove", onDrag1);
});

about_us_header.addEventListener("mouseleave", () => {
  about_us_header.removeEventListener("mousemove", onDrag1);
});

chronology_header.addEventListener("mousedown", () => {
  chronology_header.addEventListener("mousemove", onDrag2);
  about_us_wrapper.style.zIndex = "1";
  chronology_wrapper.style.zIndex = "2";
  download_wrapper.style.zIndex = "1";
});

chronology_header.addEventListener("mouseup", () => {
  chronology_header.removeEventListener("mousemove", onDrag2);
});

chronology_header.addEventListener("mouseleave", () => {
  chronology_header.removeEventListener("mousemove", onDrag2);
});

download_header.addEventListener("mousedown", () => {
  download_header.addEventListener("mousemove", onDrag3);
  about_us_wrapper.style.zIndex = "1";
  chronology_wrapper.style.zIndex = "1";
  download_wrapper.style.zIndex = "2";
});

download_header.addEventListener("mouseup", () => {
  download_header.removeEventListener("mousemove", onDrag3);
});

download_header.addEventListener("mouseleave", () => {
  download_header.removeEventListener("mousemove", onDrag3);
});