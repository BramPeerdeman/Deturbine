let counter = 0;
let timer;

let playlist = [{name:"clock-blocks", source:"clock-blocks/index.html",time:"20"},
                {name:"countdown-o", source:"countdown-o/index.html",time:"20"},
                {name:"weather", source:"weather/index.html",time:"15"},
                {name:"countdown-h", source:"countdown-hours/index.html",time:"20"},
                {name:"clock", source:"clock/index.html",time:"20"},
                {name:"weather", source:"weather/index.html",time:"15"},
                {name:"voorjaarsvakantie", source:"voorjaarsvakantie-c/index.html",time:"20"}
                
              ]

function init(){
  startTimer();
  play();
}

function play(){
  console.log(counter);
  document.getElementById("digitalsignage").src = playlist[counter].source;
  clearInterval(timer); 
  startTimer(playlist[counter].time); //restart timer

  counter++;
  counter = counter > playlist.length-1 ? 0 : counter;
  
}


function startTimer(time){
  timer = setInterval(function() {
    play();
  },time*1000);
}

init();
