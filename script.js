const pages = document.querySelectorAll(".page");

function showPage(pageId) {

    pages.forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");

}


const noBtn = document.getElementById("noBtn");

if(noBtn){

    noBtn.addEventListener("mouseover", moveButton);
    noBtn.addEventListener("click", moveButton);

}

function moveButton(){

    let x = Math.random() * (window.innerWidth - 200);
    let y = Math.random() * (window.innerHeight - 100);

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

}

let selectedDate = "";
let selectedTime = "";

function saveDate(){

    const dateInput = document.getElementById("datePicker");

    if(dateInput.value === ""){

        alert("Please choose a date ❤️");
        return;

    }

    selectedDate = dateInput.value;

    showPage("timePage");

}

function saveTime(){

    const timeInput = document.getElementById("timePicker");

    if(timeInput.value === ""){

        alert("Please choose a time ❤️");
        return;

    }

    selectedTime = formatTime(timeInput.value);

    document.getElementById("finalDate").innerHTML =
    formatDate(selectedDate);

    document.getElementById("finalTime").innerHTML =
    selectedTime;

    showPopup();

}

function showPopup(){

    document.getElementById("lovePopup").style.display="flex";

}

function closePopup(){

    document.getElementById("lovePopup").style.display="none";

    showPage("finalPage");

    startMusic();

    createHearts();

}


const popupButton=document.querySelector("#lovePopup button");

if(popupButton){

popupButton.onclick=function(){

closePopup();

}

}

function formatDate(date){

const d=new Date(date);

const options={

weekday:"long",
year:"numeric",
month:"long",
day:"numeric"

};

return d.toLocaleDateString("en-US",options);

}


function formatTime(time){

let hour=time.split(":")[0];

let minute=time.split(":")[1];

hour=parseInt(hour);

let ampm="AM";

if(hour>=12){

ampm="PM";

}

if(hour>12){

hour-=12;

}

if(hour==0){

hour=12;

}

return hour+":"+minute+" "+ampm;

}

function createHearts(){

const container=document.querySelector(".hearts");

if(!container) return;

setInterval(()=>{

const heart=document.createElement("span");

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*20)+"px";

heart.style.animationDuration=(4+Math.random()*3)+"s";

container.appendChild(heart);

setTimeout(()=>{

heart.remove();

},7000);

},300);

}


window.onload=function(){

const today=new Date();

today.setMinutes(today.getMinutes()-today.getTimezoneOffset());

const minDate=today.toISOString().split("T")[0];

const picker=document.getElementById("datePicker");

if(picker){

picker.min=minDate;

}

}

const heartsContainer=document.querySelector(".hearts");

if(heartsContainer){

for(let i=0;i<25;i++){

let heart=document.createElement("div");

heart.classList.add("floating-heart");

heart.innerHTML="❤";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=(6+Math.random()*8)+"s";

heart.style.fontSize=(15+Math.random()*25)+"px";

heart.style.opacity=Math.random();

heartsContainer.appendChild(heart);

}

}

function launchConfetti(){

for(let i=0;i<120;i++){

const confetti=document.createElement("div");

confetti.className="confetti";

confetti.style.left=Math.random()*100+"vw";

confetti.style.animationDelay=Math.random()*2+"s";

document.body.appendChild(confetti);

setTimeout(()=>{

confetti.remove();

},4000);

}

}

const finalPage=document.getElementById("finalPage");

const observer=new MutationObserver(()=>{

if(finalPage.classList.contains("active")){

launchConfetti();

}

});

observer.observe(finalPage,{

attributes:true

});

function createFireworks(){

const container=document.getElementById("fireworks");

if(!container) return;

for(let i=0;i<10;i++){

let centerX=Math.random()*window.innerWidth;

let centerY=Math.random()*window.innerHeight*0.6;

for(let j=0;j<35;j++){

let dot=document.createElement("div");

dot.className="firework";

let angle=Math.random()*360;

let distance=80+Math.random()*120;

let x=Math.cos(angle*Math.PI/180)*distance+"px";

let y=Math.sin(angle*Math.PI/180)*distance+"px";

dot.style.left=centerX+"px";

dot.style.top=centerY+"px";

dot.style.background=

`hsl(${Math.random()*360},100%,60%)`;

dot.style.setProperty("--x",x);

dot.style.setProperty("--y",y);

container.appendChild(dot);

setTimeout(()=>{

dot.remove();

},1200);

}

}

}


function createPetals(){

const petals=document.getElementById("petals");

if(!petals) return;

setInterval(()=>{

let petal=document.createElement("div");

petal.className="petal";

petal.innerHTML="🌹";

petal.style.left=Math.random()*100+"vw";

petal.style.animationDuration=

(5+Math.random()*5)+"s";

petals.appendChild(petal);

setTimeout(()=>{

petal.remove();

},9000);

},350);

}

function startCelebration(){

launchConfetti();

createFireworks();

createPetals();

}


const final=document.getElementById("finalPage");

const watch=new MutationObserver(()=>{

if(final.classList.contains("active")){

startCelebration();

}

});

watch.observe(final,{

attributes:true

});