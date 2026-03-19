let hero = document.querySelector(".hero");

let images = [
"images/hero1.jpg",
"images/hero2.jpg",
"images/hero3.jpg"
];

let index = 0;

function changeBackground(){

hero.style.backgroundImage = `url(${images[index]})`;

index++;

if(index === images.length){
index = 0;
}

}

setInterval(changeBackground,4000);

changeBackground();

// TOP BUTTON SCROLLER 
let btn = document.getElementById("scrollTopBtn");

window.onscroll = function() {

if(document.documentElement.scrollTop > 300){
btn.style.display = "block";
}else{
btn.style.display = "none";
}

};

btn.onclick = function(){
window.scrollTo({
top:0,
behavior:"smooth"
});
};

//EXPERINCE SECTION 
