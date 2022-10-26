const player = document.getElementById("player");
var btnPlay = document.getElementById("play");
var btnStop = document.getElementById("stop");
btnPlay.onclick = function(){
    player.volume = 0.1;
    player.play();
    btnPlay.style.display = "none";
    btnStop.style.display = "block";
}
btnStop.onclick = function(){
    player.pause();
    player.currentTime=0;
    btnStop.style.display = "none";
    btnPlay.style.display = "block";
}
