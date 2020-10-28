//Break chain


function brakeChain(){
    const chain=document.querySelector("#chain");
    chain.innerHTML="&#xf0c1";

    setTimeout(function(){
     chain.innerHTML="&#xf127";
    },1000)

}
brakeChain();
setInterval(brakeChain,2000);

//Battery charge animation



function chargeBattery(){
    const battery=document.querySelector("#battery");

    battery.innerHTML="&#xf244";
    setTimeout(function(){
   battery.innerHTML="&#xf243";
    },1000);
    setTimeout(function(){
        battery.innerHTML="&#xf242";
    },2000);
    setTimeout(function(){
    battery.innerHTML="&#xf241";
    },3000);
    setTimeout(function(){
        battery.innerHTML="&#xf240";
     },4000);
}
chargeBattery();
setInterval(() => {
    chargeBattery();
},5000);

//Hour glass

function hourTimer(){
const hourGlass=document.querySelector("#hourglass");

hourGlass.innerHTML="&#xf251";
setTimeout(() => {
    hourGlass.innerHTML="&#xf252";
},1000);
setTimeout(() => {
    hourGlass.innerHTML="&#xf253";
},2000);
}
hourTimer();
setInterval(() => {
    hourTimer();
}, 3000);