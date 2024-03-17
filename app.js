const reviews = [
    {
        id: 1,
        name: "Jimmy",
        job: "designer",
        img: "img/jimmyphoto.png",
        text: "Jimmy, chargé de la direction artistique du jeu et de gloabelement tout l'aspect graphique de studion que ce soit du site en passant par la telecommuniatction",
    },
    {
        id: 2,
        name: "Gabriel",
        job: "Programmation & Multijoueur",
        img: "img/gabrielphoto.png", 
        text: "Gabriel, chargé de faire le mutltiojour du jeu et joui je sais que jefais des rerreuds danqje vçuugvazoevguiyogvre je suis fatigué ok ???",
    },
    {
        id: 3,
        name: "Rania",
        job: "interface",
        img: "img/raniaphoto.png", 
        text: "Rania, chargé de faire le mutltiojour du jeu et joui je sais que jefais des rerreuds danqje vçuugvazoevguiyogvre je suis fatigué ok ???",
    },
    {
        id: 4,
        name: "Nicolas",
        job: "items",
        img: "img/nicolasphoto.png", 
        text: "Niacolas, chargé de faire le mutltiojour du jeu et joui je sais que jefais des rerreuds danqje vçuugvazoevguiyogvre je suis fatigué ok ???",
    },
    {
        id: 5,
        name: "Chef de la vie et de la mort",
        job: "IA",
        img: "img/jubairphoto.png", 
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
  

  window.addEventListener("load", () => {
    clock();
    function clock() {
      const today = new Date();
  
      // get time components
      const hours = today.getHours();
      const minutes = today.getMinutes();
      const seconds = today.getSeconds();
  
      //add '0' to hour, minute & second when they are less 10
      const hour = hours < 10 ? "0" + hours : hours;
      const minute = minutes < 10 ? "0" + minutes : minutes;
      const second = seconds < 10 ? "0" + seconds : seconds;
  
      //make clock a 12-hour time clock
      const hourTime = hour > 12 ? hour - 12 : hour;
  
      // if (hour === 0) {
      //   hour = 12;
      // }
      //assigning 'am' or 'pm' to indicate time of the day
      const ampm = hour < 12 ? "AM" : "PM";
  
      // get date components
      const month = today.getMonth();
      const year = today.getFullYear();
      const day = today.getDate();
  
      //declaring a list of all months in  a year
      const monthList = [
        "Janvier",
        "Février",
        "Mars",
        "Avril",
        "Mai",
        "Juin",
        "Juillet",
        "Août",
        "Septembre",
        "Octobre",
        "Novembre",
        "Décembre"
      ];
  
      //get current date and time
      const date = monthList[month] + " " + day + ", " + year;
      const time = hourTime + ":" + minute + ":" + second + ampm;
  
      //combine current date and time
      const dateTime = date + " - " + time;
  
      //print current date and time to the DOM
      document.getElementById("date-time").innerHTML = dateTime;
      setTimeout(clock, 1000);
    }
  });