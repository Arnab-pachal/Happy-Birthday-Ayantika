
document.addEventListener('DOMContentLoaded', function () {
   
     alert("click on the heart icons");


    // You can also use the play method to start playing the audio programmatically
  // audio.play();
});
 let image=document.querySelector(".image");
 image.addEventListener("click",()=>{
    image.style.width="80px";
    
    let mus=document.querySelector("#music1");  
    image.style.width="80px";
    mus.play();
    
 })