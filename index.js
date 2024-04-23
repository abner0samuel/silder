let nextDom= document.getElementById("next");
let prevDom= document.getElementById("prev");
let carouselDom =document.querySelector(".carousel");
let listItemDom = document.querySelector(".carousel .list");
let thumbnallDom = document.querySelector(".carousel .thumbnail");
nextDom.onclick =function(){
    showsilder('next');
}
prevDom.onclick = function(){
    showsilder('prev');
}
let timeRuning= 3000
let timeAutoNext = 7000
let runTimeOut;
let runAutoRun=setTimeout(()=>{
    nextDom.click()
},timeAutoNext)
function showsilder (type){
    let itemSilder = document.querySelectorAll(".carousel .list .item");
    let itemThumbnail =document.querySelectorAll(".carousel .thumbnail .item");
    if(type == "next"){
        listItemDom.appendChild(itemSilder[0]);
        thumbnallDom.appendChild(itemThumbnail[0]);
        carouselDom.classList.add("next");
    }else{
        positionlastItem = itemSilder.length -1;
        listItemDom.prepend(itemSilder[positionlastItem])
        thumbnallDom.prepend(itemThumbnail[positionlastItem])
        carouselDom.classList.add("prev")
    }
    clearTimeout(runTimeOut);
    runTimeOut= setTimeout(()=>{
        carouselDom.classList.remove("next");
        carouselDom.classList.remove("prev");
    },timeRuning);
    clearTimeout(runAutoRun)
    runAutoRun=setTimeout(()=>{
        nextDom.click()
    },timeAutoNext)
}