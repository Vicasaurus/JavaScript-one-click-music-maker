window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");
  const colors = [
    "#668cff",
    "#ff0066",
    "#e6e600",
    "#33cc00",
    "#9933ff",
    "#ffb84d"
  ];
  pads.forEach((pad, index) => {
    pad.addEventListener("click", function(){
      sounds[index].currentTime = 0;
      sounds[index].play();
      });
    });
  });
