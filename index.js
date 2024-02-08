const menu = document.querySelector(".menu-icon-active");
const mark = document.querySelector(".mark-icon-active")

const list = document.querySelector(".navigation-main-list")

menu.addEventListener('click', ()=>{
    list.style.display="flex"
    menu.style.display="none"
})
mark.addEventListener('click',()=>{
    menu.style.display="flex"
    list.style.display="none"
})

// TRANSITION

window.addEventListener("scroll",Fncreveal)


function Fncreveal(){
const reveal=document.querySelectorAll(".reveals")

for(i=0;i<reveal.length;i++){
const revealHeight=window.innerHeight;
const revealBound=reveal[i].getBoundingClientRect().top;
const revealPosition=250;

if(revealBound < revealHeight-revealPosition){
reveal[i].classList.add("active")
}

}

}