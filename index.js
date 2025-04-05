var noofbtn = document.querySelectorAll(".drum").length
var i=0
var audio = new Audio('kick-bass.mp3')
while (i<noofbtn){
    document.querySelectorAll(".drum")[i].addEventListener("click", handle)

    function handle(){
        audio.play()
    }
    i++
}
