const btnHamburger = document.querySelector(".hamburger-btn");
const navlist = document.querySelector(".nav-list");
const listItems = document.querySelectorAll(".nav-item");

btnHamburger.addEventListener("click", function() {
  btnHamburger.classList.toggle("hamburger-btn--active")
  navlist.classList.toggle("nav-list--active")
});
listItems.forEach(function(item){
  item.addEventListener("click",function(){
    btnHamburger.classList.remove("hamburger-btn--active")
    navlist.classList.remove("nav-list--active")  
  })
}
)
const videoElement = document.querySelector("video");
const playBtn = document.querySelector(".play-btn");
const videoCaption = document.querySelector(".video-caption");
playBtn.addEventListener("click", function () {
  if (videoElement.paused) {
    videoElement.play();
    playBtn.style.display = "none";
    videoCaption.style.display = "none";
  } else {
    videoElement.pause();
    playBtn.style.display = "block";
    playBtn.style.left = "50%";
  }
});
videoElement.addEventListener("click", function () {
  if (!videoElement.paused) {
    videoElement.pause();
  }
});
videoElement.addEventListener("pause", function () {
  playBtn.style.display = "block";
  playBtn.style.left = "50%";
});
videoElement.addEventListener("ended", function () {
  playBtn.style.display = "block";
  playBtn.style.left = "50%";
});
