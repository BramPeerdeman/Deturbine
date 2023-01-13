var images = [
"/opdracht1/assets/locatie1.jpg", 
"/opdracht1/assets/locatie2.jpg", 
"/opdracht1/assets/loctie3.jpeg", 
"/opdracht1/assets/locatie4.jpg", 
"/opdracht1/assets/muziek1.jpg"];
var currentImg = 0;

//Werkt niet
// let objects = [
//     "/opdracht1/assets/de_turbine-logo.png"
// ]; 
// let currentImg1 = 0;

setInterval(function() {
    currentImg++;
    if (currentImg === images.length) {
        currentImg = 0;
    }
    document.getElementById("bg-image").classList.add("animate");
    setTimeout(()=>{
        document.getElementById("bg-image").style.backgroundImage = "url(" + images[currentImg] + ")";
    },1000);
    setTimeout(()=>{
        document.getElementById("bg-image").classList.remove("animate");
    },1000);
}, 10000);

//werkt niet
// setInterval(function() {
//     currentImg++;
//     if (currentImg === images.length) {
//         currentImg = 0;
//     }
//     document.getElementById("bg-image").classList.add("animate");
//     document.getElementById("slide-object").classList.add("animate");
//     setTimeout(()=>{
//         document.getElementById("bg-image").style.backgroundImage = "url(" + images[currentImg] + ")";
//     },1000);
//     setTimeout(()=>{
//         document.getElementById("bg-image").style.backgroundImage = "url(" + objects[currentImg1] + ")";
//     },1000);
//     setTimeout(()=>{
//         document.getElementById("bg-image").classList.remove("animate");
//         document.getElementById("slide-object").classList.remove("animate");
//     },1000);
// }, 10000);

setTimeout(function() {
  document.getElementById('imageID').style.display='none'
}, 10*1000);

