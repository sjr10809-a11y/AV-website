const playBothBtn = document.querySelector('#play-both-button'); 
//we use const instead of let simply because the button wont change, it will always be this button, however, let will work the same way 
let videoOne = document.querySelector("#video-one");
let audioOne = document.querySelector("#audio-one");
//we also save the video and audio into variables here so that we can affect them later

playBothBtn.addEventListener("click",function(){
  console.log("both button has been clicked ( ^ _ ^ )");
  videoOne.play();
  audioOne.play();

});
