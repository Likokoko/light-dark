const button = document.querySelectorAll("button");
const ham = document.querySelector("#nav-icon4");
const cover = document.querySelector(".cover");
const h3 = document.querySelector("h3");
const h4 = document.querySelector("h4");
const source = document.querySelector("source");
const audio = document.querySelector("audio");
const img = document.querySelector("img")

button.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("button-80")) {
      document.body.style.background = "white";
    } else if (button.classList.contains("button-70")) {
      document.body.style.background = "black";
      const Asiblings = document.querySelectorAll("a");
      Asiblings.forEach((sibling) => {
        sibling.style.color = "white";
      });
      h3.style.color = "white";
      h4.style.color = "white";
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

const play = document.querySelector(".fa-play");

play.addEventListener("click", () => {
  if ((audio.paused)) {
    audio.play();
    play.classList.replace("fa-play", "fa-pause")
  } else {
    audio.pause();
    play.classList.replace("fa-pause", "fa-play");
  }
});

const arr = ["song2.mp3", "song3.mp3", "song4.mp3"];
const imgArr = ["pic1.jpg", "pic2.jpg", "pic3.jpg", ]
const artist = ["Baba Bido", "Lolo Jejdf", "JIee Hiwig"]
const songName = ["this is a dog", "this is a cat", "this is a chicken"]


const forward = document.querySelector(".fa-forward");
forward.addEventListener("click", (arr)=>{
  let songIndex = 0
  if (arr[songIndex]<3){
    h3.innerText = songName[+1];
    h4.innerText = artist[+1];
    audio.src = arr[+1];
    img.src = imgArr[+1]; //why not found?
  }else {
    h3.innerText = songName[1]
    h4.innerText = artist [1]
    audio.src= arr[1]
    img.src = imgArr[1] 
  }


})
const backward = document.querySelector(".fa-backward");
backward.addEventListener("click", ()=>{

}
)

