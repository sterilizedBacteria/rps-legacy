let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const lizard_div = document.getElementById("l");
const spock_div = document.getElementById("k");

function getComputerChoice(){
    const choices = ['r','p','s','l','k'];
    const randomNumber = Math.floor(Math.random()*5);
    return choices[randomNumber];
}

function convertToWord(letter){
    if( letter === "r") return "Rock";
    if( letter === "p") return "Paper";
    if( letter === "s") return "Scissors";
    if( letter === "l") return "Lizard";
    if( letter === "k") return "Spock";
}

function win(userChoice, computerChoice){
    const userChoice_div =  document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `Opponent chose ${convertToWord(computerChoice)}, you won!`;
    userChoice_div.classList.add("green-glow");
    setTimeout(function(){ userChoice_div.classList.remove("green-glow"); },300);
}

function lose(userChoice, computerChoice){
    const userChoice_div =  document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `Opponent chose ${convertToWord(computerChoice)}, your character died...`;
    userChoice_div.classList.add("red-glow");
    setTimeout(function(){ userChoice_div.classList.remove("red-glow"); },300);
}

function draw(userChoice, computerChoice){
    const userChoice_div =  document.getElementById(userChoice);
    result_p.innerHTML = `Opponent chose ${convertToWord(computerChoice)}, nothing happened.`;
    userChoice_div.classList.add("gray-glow");
    setTimeout(function(){ userChoice_div.classList.remove("gray-glow"); },300)
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case "pr":
        case "rl":
        case "lk":
        case "ks":
        case "sp":
        case "lp":
        case "kr":
        case "sl":
        case "pk":
        case "rs":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "lr":
        case "kl":
        case "sk":
        case "ps":
        case "pl":
        case "rk":
        case "ls":
        case "kp":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
        case "ll":
        case "kk":
            draw(userChoice, computerChoice);
            break;
    }
}

function main(){
    rock_div.addEventListener('click', function(){
        game("r");
    })
    paper_div.addEventListener('click', function(){
        game("p");
    })
    scissors_div.addEventListener('click', function(){
        game("s");
    })
    lizard_div.addEventListener('click', function(){
        game("l");
    })
    spock_div.addEventListener('click', function(){
        game("k");
    })
}

main();