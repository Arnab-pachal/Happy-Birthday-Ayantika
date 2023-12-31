let bold1=document.querySelector(".bold1");
 bold1.addEventListener("click",()=>{
   alert("Global Family Day emphasizes unity, values, and cultural harmony on a global scale. It raises awareness about family issues, promotes social stability, and advocates for policies supporting work-life balance. Celebrating families strengthens communities and highlights the intergenerational impact of positive family dynamics.");})
 
 let bold2=document.querySelector(".bold2");
 bold2.addEventListener("click",()=>{
   alert(
    " National Youth Day in India celebrates the birth anniversary of Swami Vivekananda, a key figure in Indian philosophy and a youth icon. It aims to inspire and empower the youth, encouraging them to contribute to nation-building and social development.")
 })
 let bold3=document.querySelector(".bold3");
 bold3.addEventListener("click",()=>{
   alert("Commitment Day is a day dedicated to encouraging individuals to make resolutions and commitments for positive changes in their lives. It serves as a reminder to stay dedicated to personal goals and aspirations throughout the year.");})
 
   let know= document.querySelector(".know");
   know.addEventListener("click",()=>{
    alert("this is birthday of very near ones of arnab pachal\n do you want to guess ?\n type the NUMBER of the option");
    let input=prompt("1)Yes \n 2)No");
    let suc=false;
    while(suc==false){
    if(input=="1"|| input=="Yes"){
    let final=prompt("Guess of Whom ?\n 1)Father \n 2)Mother \n 3)Brother \n4)Friend 5) Love of Arnab \n 6)THE PERSON WHO DEFINES ARNAB AND WITHOUT HER ARNAB IS NOTHING.");
    if(final=="6"){alert("Congratulations ! You have Successfully guessed");suc="true";break;}
    else if(final=="4"|| final=="5"){
       input=prompt("You are Partially Correct ! Do you Want to guess Further ?\n 1)yes \n2)No");
     
        }
    }
    else{
      alert("You Have exit");
      break;
    }
  }
  let name="ARNAB" ;
  if(input==1){fi=prompt("Do you Want to Guess Her Name ?\n 1)yes \n2)No");}
  if(fi==1){  name=prompt("type  her name :(type all the letters in BLOCK LETTERS) ");}
  if(name=="AYANTIKA"){alert("WoW ! You are Absolutely right \n Press lets check button for next page");}
  else{
    alert("press lets check for next page");
  }


   })