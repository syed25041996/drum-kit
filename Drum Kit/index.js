var drumClassLen = document.querySelectorAll(".drum").length;

for (var i = 0; i < drumClassLen; i++)
  document.querySelectorAll("button")[i].addEventListener("click", function (event) {
    var letter = this.innerHTML;
    checkLetter(letter);
    animate(letter)
  });


  document.addEventListener("keydown", function (event) {
    checkLetter(event.key)
    animate(event.key)
  })

  function animate(letter){
    document.querySelector("."+letter).classList.add("pressed")
    setTimeout(function(){
      document.querySelector("."+letter).classList.remove("pressed")
    },200)
  }


function checkLetter(key) {
  switch (key) {
    case "w":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      var audio1 = new Audio("sounds/kick-bass.mp3");
      audio1.play();
      break;
    case "s":
      var audio2 = new Audio("sounds/snare.mp3");
      audio2.play();
      break;
    case "d":
      var audio3 = new Audio("sounds/tom-1.mp3");
      audio3.play();
      break;
    case "j":
      var audio4 = new Audio("sounds/tom-2.mp3");
      audio4.play();
      break;
    case "k":
      var audio5 = new Audio("sounds/tom-3.mp3");
      audio5.play();
      break;
    default:
      alert("Button dosent exist");
      break;
  }
}
