const reviews = [
    {
        id: 1,
        name: "Jimmy N.",
        job: "Design",
        img: "img/jimmyphoto.png",
        text: "Jimmy, chargé de la direction artistique du jeu et de tout l'aspect graphique d'Hélios Studios que ce soit du site web en passant par la télécommunication.",
    },
    {
        id: 2,
        name: "Gabriel T.",
        job: "Programmation & Multijoueur",
        img: "img/gabrielphoto.png", 
        text: "Délégué en programmation & multijoueur, c'est un passionné de jeux vidéos. Il souhaite maintenant créer lui-même ses jeux-vidéos avec sa vision et n'arrête jamais d'apprendre.",
    },
    {
        id: 3,
        name: "Rania B.",
        job: "Menu/Interface",
        img: "img/raniaphoto.png", 
        text: "Délégué sur ce qui est de l'interface en général, elle a toujours été passionnée par les jeux vidéos. Dès son plus jeune âge, elle s'est intéressée à cet univers et a toujours rêvé de créer ses propres jeux. Elle a canalisé cette passion grâce à son imagination débordante, sa fascination pour la lecture et l'écriture, ainsi qu'en s'inspirant fréquemment de la mythologie grecque.",
    },
    {
        id: 4,
        name: "Nicolas B.",
        job: "Game Design",
        img: "img/nicolasphoto.png", 
        text: "Délégué sur l'UX et Game Design, C’est sa passion pour les jeux vidéos qui l’a poussé à entreprendre des études dans le domaine de l’informatique et qui lui a permis de viser et d’atteindre des objectifs à première vue inatteignable.",
    },
    {
        id: 5,
        name: "Jubair L.",
        job: "Chef d'équipe",
        img: "img/jubairphoto.png", 
        text: "Délégué de l'IA en général, il est passionné par l'informatique. Il a déjà travaillé sur plusieurs projets, notamment dans le domaine des jeux vidéo. En dehors de ses ́etudes et de ses projets, il consacre volontiers son temps libre à l'expansion de ses connaissances dans divers domaines",
    },

]

// select items

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// set starting item

let currentItem = 0;

// load initial tem

window.addEventListener('DOMContentLoaded', function(){
    const item = reviews[currentItem]
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
})

function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }

// show next person
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

  

const openAboutUsButton = document.getElementById("A_propos-btn");
const openChronologyButton = document.getElementById("Chronologie-btn");
const openDownloadButton = document.getElementById("Telechargement-btn");

const closeAboutUsButton = document.getElementById("A_propos-btn-close");
const closeChronologyButton = document.getElementById("Chronologie-btn-close");
const closeDownloadButton = document.getElementById("Telechargement-btn-close");


function openModal(modal){
  if (modal == null) return
  modal.classList.add("active")
}
function closeModal(modal){
  if (modal == null) return
  modal.classList.remove("active")
}


openAboutUsButton.addEventListener("click", () => {
  const window = document.querySelector(".container1")
  openModal(window);
});
openChronologyButton.addEventListener("click", () => {
  const window = document.querySelector(".container2")
  openModal(window);
});
openDownloadButton.addEventListener("click", () => {
  const window = document.querySelector(".container3")
  openModal(window);
});

closeAboutUsButton.addEventListener("click", () => {
  const window = document.querySelector(".container1")
  closeModal(window);
});
closeChronologyButton.addEventListener("click", () => {
  const window = document.querySelector(".container2")
  closeModal(window);
});
closeDownloadButton.addEventListener("click", () => {
  const window = document.querySelector(".container3")
  closeModal(window);
});



window.addEventListener("load", () => {
  clock();
  function clock() {
    const today = new Date();

    // get time components
    const hours = today.getHours();
    const minutes = today.getMinutes();

    //add '0' to hour, minute & second when they are less 10
    const hour = hours < 10 ? "0" + hours : hours;
    const minute = minutes < 10 ? "0" + minutes : minutes;

    // if (hour === 0) {
    //   hour = 12;
    // }

    // get date components
    const month = today.getMonth();
    const year = today.getFullYear();
    const day = today.getDate();

    const fmonth = month < 10 ? "0" + month : month;
    const fday = day < 10 ? "0" + day : day;

    //get current date and time
    const date = fday + "/" + fmonth + "/" + year;
    const time = hour + ":" + minute;

    //combine current date and time
    const dateTime = time + " - " + date;

    //print current date and time to the DOM
    document.getElementById("date-time").innerHTML = dateTime;
    setTimeout(clock, 1000);
  }
});