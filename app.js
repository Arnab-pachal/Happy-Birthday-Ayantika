
let box = document.querySelector(".style");
box.style.height = '600px';
box.style.width = '600px';

const textArray = ['H','A','P','P','Y','','B','I','R','T','H','D','A','Y','','A','Y','A','N','T','I','K','A'];
const container = document.getElementById('letter-reveal');

function revealLetters() {

    container.innerHTML = '';

    textArray.forEach((letter, index) => {
        if (letter === '') {
          
            const br = document.createElement('br');
            container.appendChild(br);
        } else {
     
            const span = document.createElement('span');
            span.textContent = letter;
            span.classList.add('letter');
            container.appendChild(span);
            span.style.animationDelay = `${index * 0.2}s`;
        }
    });
}
function startAnimationLoop() {
    revealLetters(); 
    setInterval(() => {
        revealLetters();
    }, 8000);
}
startAnimationLoop();

document.addEventListener("DOMContentLoaded", function() {

    let clickableDiv = document.getElementById("next1");
    clickableDiv.addEventListener("click", function() {
    window.location.href = "page6.html";
    });
  });
  
  const card = document.querySelector(".card");
  setInterval(function() {
   
   
    console.log(card.classList)
  if(card.classList.contains('rotate')){card.classList.remove('rotate');console.log(card.classList.contains('rotate'))}
  else{card.classList.add('rotate');}
    console.log("rotation happend") 
  }, 4000); 
   
  //for music button of page605
  let playstyle = async function(music){
    music.style.color ='red';
    music.style.width = '160px';
    music.style.height='55px';
    music.style.fontWeight='900';
    music.style.display='flex';
    music.style.alignItems ='center'
    music.style.justifyContent ='center'
    music.style.textAlign = 'center'
    music.style.opacity = 1;
    music.style.boxShadow = '3px 3px 18px rgb(0, 38, 255)';
    music.style.backgroundColor='rgb(106, 252, 8)'
    return music;
  }
  let pausestyle = async function(music){
    music.style.width = '150px';
    music.style.color='darked';
    music.style.height='55px';
    music.style.fontWeight='800';
    music.style.display='flex';
    music.style.alignItems ='center'
    music.style.justifyContent ='center'
    music.style.textAlign = 'center'
    music.style.opacity = 0.8;
    music.style.backgroundColor='rgb(106, 252, 8)'
    return music;
  }
  
   let music1 = document.querySelector("#music1");
   let music2 = document.querySelector("#music2");
   music1.addEventListener('click',async()=>{
    let audio1 = document.querySelector("#audio1");
    if(audio1.paused){
      await playstyle(music1);
      audio1.play();}
    else{
      await pausestyle(music1);
      audio1.pause();}
    })
  
   music2.addEventListener('click',async()=>{let audio2 = document.querySelector("#audio2");
    if(audio2.paused){
       await playstyle(music2)
        audio2.play();
     }
    else{
      await pausestyle(music2);
      audio2.pause();}
   })
    
  
  