// Add event listeners to images
let paper = document.querySelector("#paper").addEventListener("click",  choicePaper, picOfBotChoice )
let stone = document.querySelector("#stone").addEventListener("click", choiceRock, picOfBotChoice)
let scissor = document.querySelector("#scissor").addEventListener("click", choeiceScissor, picOfBotChoice)

// Pictures of choices of the bot
let botPaper = document.querySelector("#botPaper");
let botScissor = document.querySelector("#botScissor");
let botRock = document.querySelector("#botStone");

// Results showing
let myPoint = document.querySelector("#pointForMe");
let botPoint = document.querySelector("#pointForBot")

// Result counting
let resultMe = 0;
let resultBot = 0;

// BOT - function that returns ( rock, paper, scissors) randomly
function rockPaperScissors(){
    let random = Math.random();

    if( random < .33 ){
        botPaper.classList.toggle('hidden');
        botRock.classList.add('hidden');
        botScissor.classList.add('hidden')
        return botPaper;
        
    }else if( random < .66 ){
        botRock.classList.toggle('hidden');
        botScissor.classList.add('hidden');
        botPaper.classList.add('hidden')
        return botRock;

    }else{
        botScissor.classList.toggle('hidden'); 
        botPaper.classList.add('hidden');   
        botRock.classList.add('hidden')
        return botScissor;

    }
    
}

// PLAYER CHOICE PAPER - function that adds player choice  and give the outcome of the match
function choicePaper () {
    let botChoice = rockPaperScissors();

    if (botChoice === botPaper) {
        myPoint.innerHTML = resultMe++;
        botPoint.innerHTML = resultBot++;

    }else if (botChoice === botScissor) {
         botPoint.innerHTML = resultBot++;

    }else {
        myPoint.innerHTML = resultMe++;

    }

    
}

function choiceRock() {
    let botChoice = rockPaperScissors();

    if (botChoice === botPaper) {
        botPoint.innerHTML = resultBot++;

    }else if (botChoice === botScissor) {
        myPoint.innerHTML = resultMe++;

    }else {
        myPoint.innerHTML = resultMe++;
        botPoint.innerHTML = resultBot++;


    }

}

function choeiceScissor() {
    let botChoice = rockPaperScissors();

    if (botChoice === botPaper) {
        myPoint.innerHTML = resultMe++;

    }else if (botChoice === botScissor) {
        myPoint.innerHTML = resultMe++;
        botPoint.innerHTML = resultBot++;

    }else {
        botPoint.innerHTML = resultBot++;


    }

}

// PICTURES OF BOTS CHOICE

function picOfBotChoice () {
     
    if (botChoice === botPaper) {
        botPaper.classList.toggle('hidden');
        



    }else if(botChoice === botScissor) {
        botPaper.classList.toggle('hidden');

    }else {
        botPaper.classList.toggle('hidden');


    }
}


for ( let i = 0; i<100 ; i++) {
    console.log(i)
}