let boxes = document.getElementById("boxes");
let buttonStart = document.getElementById("buttonStart");


let showBoxes = function(){
    console.log("klick");
    buttonStart.style.display = "none";
    boxes.style.display = "flex";    
}

buttonStart.addEventListener("click", showBoxes);