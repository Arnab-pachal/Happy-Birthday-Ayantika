

let shayeri=document.querySelectorAll(".shayeri");
let divs= document.querySelectorAll(".songs");
let strbtn1=document.querySelector(".start1");
let strbtn2=document.querySelector(".start2");
let strbtn3=document.querySelector(".start3");

let res=0;
let h=0;
let i=0;

divs[0].addEventListener("click",()=>{
 if(res==0){shayeri[0].play();
   alert(" FIRST SHAYERI FOR AYANTIKA\n CLICK AGAIN TO PAUSE");
   strbtn1.setAttribute("src","on.jpg");
   divs[0].style.border="3px solid black"
   divs[0].style.backgroundColor="#fb25a5";
   
 res=1;}
 else{shayeri[0].pause();
   strbtn1.setAttribute("src","off.jpg");
   alert("ITS PAUSED");
   divs[0].style.border="2px solid black"
   divs[0].style.backgroundColor="#f582c7";
   
 res=0;}

})

divs[1].addEventListener("click",()=>{
 if(h==0){shayeri[1].play();
   alert(" ITS WISH OF ARNAB TO AYANTIKA\n CLICK AGAIN TO PAUSE");
   strbtn2.setAttribute("src","on.jpg");
   divs[1].style.border="3px solid black"
   divs[1].style.backgroundColor="#fb25a5";
   
 h=1;}
 else{shayeri[1].pause();
   strbtn2.setAttribute("src","off.jpg");
   alert("ITS PAUSED");
   divs[1].style.border="2px solid black"
   divs[1].style.backgroundColor="#f582c7";
 h=0;}

})

divs[2].addEventListener("click",()=>{
 if(i==0){shayeri[2].play();
   alert(" SECOND SHAYERI FOR AYANTIKA\n CLICK AGAIN TO PAUSE");
   strbtn3.setAttribute("src","on.jpg");
   divs[2].style.border="3px solid black"
   divs[2].style.backgroundColor="#fb25a5";
   
 i=1;}
 else{shayeri[2].pause();
   strbtn3.setAttribute("src","off.jpg");
   alert("ITS PAUSED");i=0;
   divs[2].style.border="2px solid black"
   divs[2].style.backgroundColor="#f582c7";}

})
let img1 =document.querySelector(".img1");
let img3=document.querySelector(".img3");
img1.addEventListener("click",()=>{
 alert("Happy Birthday Ayantika");
})
img3.addEventListener("click",()=>{
 alert("Happy Birthday to you Ayantika");
})








