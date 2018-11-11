// wszystkie kolory boksów x 2
let colors = ["red", "red", "green", "green", "yellow", "yellow", "blue", "blue", "violet", "violet", "gold", "gold", "maroon", "maroon", "pink", "pink", "lime", "lime", "cyan", "cyan"]; 

let cardField = document.querySelectorAll(".field"); // pobranie wszystkich boksów
cardField = [...cardField];

let boxes = document.getElementById("boxes"); // pobranie diva zawierającego wszystkie boksy
let buttonStart = document.getElementById("buttonStart"); // pobranie przycisku mającego pokazać planszę gry


// pokazanie planszy gry poprzez przyciśnięcie przycisku 'start gry'
let showBoxes = function(){    
    buttonStart.style.display = "none";
    boxes.style.display = "flex";         
    colorBox();
}

// nadsłuchiwanie klika na przycisku 'start gry'
buttonStart.addEventListener("click", showBoxes);

// przypisanie losowe kolorów do poszczególnych boksów
let colorBox = function() {    
    cardField.forEach(function(card){        
        const position = Math.floor(Math.random() * colors.length);
        card.classList.add(colors[position]);
        colors.splice(position, 1);        
    });    
    
    // zasłonięcie wszystkich pól
    setTimeout(function(){
        cardField.forEach(function(card){
            card.classList.add("offCard");            
            card.addEventListener("click", clickCard);
        })        
    },500)
}

let oneCard = "";
let twoCards = []; //miejsce na pobranie dwóch klikniętych pojedynczych boksów

let gamePairs = cardField.length/2;
let result = 0;

// mechanika działania gry
let clickCard = function(){
    
    oneCard = this;
    if (oneCard == twoCards[0]){
        return;
    }
    oneCard.classList.remove("offCard");
    
    if(twoCards.length == 0){
        twoCards[0] = oneCard;
        return;
    } else{
        cardField.forEach(function(card){
            card.removeEventListener("click", clickCard);
            twoCards[1] = oneCard;
            setTimeout(function(){
                if(twoCards[0].className === twoCards[1].className){
                    twoCards.forEach(function(card){
                        card.classList.add("onCard");
                        result++;                        
                        cardField = cardField.filter(function(card){                            
                            !card.classList.contains("onCard");
                            
                        })
                    })
                } else{
                    twoCards.forEach(function(card){
                        card.classList.add("offCard")
                    })
                } 
                oneCard = "";
                twoCards.length = 0;
                cardField.forEach(function(card){
                    card.addEventListener("click", clickCard);
                })
            },300);            
        })        
    }
}

