var noofbtn = document.querySelectorAll(".drum").length
var i=0
while (i<noofbtn){
    document.querySelectorAll(".drum")[i].addEventListener("click", handle)

 var audio = new Audio('kick-bass.mp3');

    function handle(){
        Audio.play()
    }
    i++
}
