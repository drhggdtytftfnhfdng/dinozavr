var character = document.getElementById("character");

document.addEventListener("click",  jump);
 
function jump () {
    if(character.classList.contains("animate") == true) {
        return;
    } else {
        character.classList.add("animate");
        setTimeout(removeJump, 300); /*скорость прыжка*/ 
    }
} 

function removeJump () {
    character.classList.remove("animate");
}

var checkDead = setInterval(function(){
  var characterTop =  parseInt(window.getComputedStyle(
   charaster) = getPropertyValue("top"));
    var blockLeft =  parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>0 && characterTop>=130){
       block.style.animation = "none";
       block.style.display = "none";
       
        alert("u lose :(");
    }
},10);




