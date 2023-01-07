const button = document.querySelectorAll("button");
const ham = document.querySelector("#nav-icon4");
const cover = document.querySelector(".cover");
const h3 = document.querySelector("h3");
const h4 = document.querySelector("h4");
const source = document.querySelector("source");
const audio = document.querySelector("audio");

button.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("button-80")) {
      document.body.style.background = "white";
    } else if (button.classList.contains("button-70")) {
      document.body.style.background = "black";
      var a = (document.querySelector("a").style.color = "white"); // how to get all white?
    } else if (button.classList.contains("button-60")) {
      document.body.style.background = "purple";
    }
  });
});

window.addEventListener("scroll", function () {
  if (window.scrollY === 0) {
    location.reload();
  }
});

function myFunction(x) {
  x.classList.toggle("change");
}

ham.addEventListener("click", () => {
  if (cover.classList.contains("hide")) {
    cover.classList.remove("hide");
  } else {
    cover.classList.add("hide");
  }
});

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c3b58df377msh570c59f3f682c0ep1d6a2ajsn2e0951e6da44",
    "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
  },
};

fetch(
  "https://spotify23.p.rapidapi.com/tracks/?ids=4WNcduiCmDNfmTEz7JvmLv",
  options
)
  .then((response) => response.json())
  .then((response) =>
    console.log(
      (h3.innerText = response.tracks[0].album.name),
      "//",
      (h4.innerText = response.tracks[0].album.artists[0].name),
      "//",
      (source.src.innerText = response.tracks[0].preview_url)
    )
  );
  //why getRandom不能用在array裡

document.querySelector(".play").addEventListener("click", () => {
  audio.play();
  console.log('ji')
});//為什麼沒有播放 https://developer.mozilla.org/en-US/docs/Web/API/TimeRanges

const hi = document.querySelector(".hi")
// const progressBarContainer = document.querySelector(".progress-bar__container");
// const progressBar = document.querySelector(".progress-bar");
// const progressBarText = document.querySelector(".progress-bar__text");

// const progressBarStates = [0, 7, 27, 34, 68, 80, 95, 100];

// let time = 0;
// let endState = 100;

// progressBarStates.forEach((state) => {
//   let randomTime = Math.floor(Math.random() * 3000);
//   setTimeout(() => {
//     if (state == endState) {
//       gsap.to(progressBar, {
//         x: `${state}%`,
//         duration: 2,
//         backgroundColor: "#4895ef",
//         onComplete: () => {
//           progressBarText.style.display = "initial";
//           progressBarContainer.style.boxShadow = "0 0 5px #4895ef";
//         },
//       });
//     } else {
//       gsap.to(progressBar, {
//         x: `${state}%`,
//         duration: 2,
//       });
//     }
//   }, randomTime + time);
//   time += randomTime;
// });