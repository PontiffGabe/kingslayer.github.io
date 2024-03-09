const reviews = [
    {
        id: 1,
        name: "Jimmy",
        job: "designer",
        img: "img/pp.png",
        text: "Jimmy, chargé de la direction artistique du jeu et de gloabelement tout l'aspect graphique de studion que ce soit du site en passant par la telecommuniatction",
    },
    {
        id: 2,
        name: "Gabriel",
        job: "multijouer",
        img: "styles/images/gear1.png", 
        text: "Gabriel, chargé de faire le mutltiojour du jeu et joui je sais que jefais des rerreuds danqje vçuugvazoevguiyogvre je suis fatigué ok ???",
    },
    {
        id: 3,
        name: "Rania",
        job: "interface",
        img: "img/pp.png", 
        text: "Rania, chargé de faire le mutltiojour du jeu et joui je sais que jefais des rerreuds danqje vçuugvazoevguiyogvre je suis fatigué ok ???",
    },
    {
        id: 4,
        name: "Nicolas",
        job: "items",
        img: "img/pp.png", 
        text: "Niacolas, chargé de faire le mutltiojour du jeu et joui je sais que jefais des rerreuds danqje vçuugvazoevguiyogvre je suis fatigué ok ???",
    },
    {
        id: 5,
        name: "Chef de la vie et de la mort",
        job: "IA",
        img: "img/pp.png", 
        text: "MA GROSSSE BITE AUSSI , chargé de faire le mutltiojour du jeu et joui je sais que jefais des rerreuds danqje vçuugvazoevguiyogvre je suis fatigué ok ???",
    },

]

// select items

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')

// set starting item

let currentItem = 1;

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
  