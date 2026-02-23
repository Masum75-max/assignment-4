let rejCards = [];
let interCards = [];
let allCards = [];
const avn=document.getElementById("avn");
const oops=document.getElementById("oops")
let cards = document.getElementsByClassName('card');
for(const card of cards){
  allCards.push(card);
}
let rejCount = document.getElementById("rejCount");
let intCount = document.getElementById("intCount");
let total = document.getElementById("total");

total.innerText = allCards.length;

for(const card of allCards){
  const intBtn= card.querySelector('.int')
  const rejBtn = card.querySelector('.rej');

  const status =card.querySelector(".status")

  intBtn.addEventListener("click",function(){

  
    if(!interCards.includes(card)){
      interCards.push(card);
    }
    status.classList.remove("bg-slate-200");
status.classList.add("bg-green-500","text-white","text-center");
status.innerText = "Interview";
    rejCards=rejCards.filter(c=> 
      c!==card)

      rejCount.innerText=rejCards.length;
    intCount.innerText=interCards.length
  })

  


  rejBtn.addEventListener("click",function(){
    if(!rejCards.includes(card)){
      rejCards.push(card);
    }
    interCards=interCards.filter(c=>
      c!==card
    )
              status.classList.remove("bg-slate-200");
status.classList.add("bg-red-500","text-white","text-center");
status.innerText = "Rejected";
    

    rejCount.innerText=rejCards.length;
  intCount.innerText=interCards.length
  })
}


const showInt=document.getElementById("ShowInt");

showInt.addEventListener("click",function(){

     if(interCards.length===0){
      oops.classList.remove("hidden");
    }
     else{
    oops.classList.add("hidden");
  }
   
       
  
    for(const card of allCards){
     card.classList.add("hidden");
    }
     for(const card of allCards){
     const text=card.querySelector(".status").innerText.trim();

     if(text==="Interview"){
      card.classList.remove("hidden");
     }
    }

  

    avn.innerText=interCards.length;
})


const showAll=document.getElementById("showAll");

showAll.addEventListener("click",function sall(){

  if(allCards.length==0) {
   oops.classList.remove("hidden");

  }
  else{
    oops.classList.add("hidden");
  }
    for(const card of allCards){   
        card.classList.remove("hidden");  
    }

    avn.innerText=allCards.length;
})

const showRej=document.getElementById("showRej");

showRej.addEventListener("click",function(){

   if(rejCards.length==0) {
   oops.classList.remove("hidden");
  }
   else{
    oops.classList.add("hidden");
  }
    for(const card of allCards){
     card.classList.add("hidden");
    }
     for(const card of allCards){
     const text=card.querySelector(".status").innerText.trim();
       
     if(text==="Rejected"){
      card.classList.remove("hidden");
     }
    }

    avn.innerText=rejCards.length;
})


for (const card of allCards) {

  const delBtn = card.querySelector(".del");

  delBtn.addEventListener("click", function () {

    
    allCards = allCards.filter(c => c !== card);
    interCards = interCards.filter(c => c !== card);
    rejCards = rejCards.filter(c => c !== card);
    
    card.remove();
    total.innerText = allCards.length;
    intCount.innerText = interCards.length;
    rejCount.innerText = rejCards.length;
    avn.innerText = allCards.length;

    if (allCards.length === 0) {
      oops.classList.remove("hidden");
    }

  });
}

for(const card of allCards){
  const status=card.querySelector(".status");

  console.log(status);
}

