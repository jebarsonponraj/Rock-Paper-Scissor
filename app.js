const emojis = document.querySelectorAll(".emoji");
let playerResult = document.querySelector(".playerResult");
let computerResult = document.querySelector(".computerResult");
const computer = document.querySelector(".computer");

// console.log(computerResult + );
const emojiArray = ["✊", "✋", "✌"];

let computerPoint = 0;
let userPoint = 0;






// console.log(randomNumber);
let computerChoice;

let userChoice;

emojis.forEach(emoji => {

    emoji.addEventListener("click", (event) =>{


    const randomNumber = Math.floor(Math.random() * emojiArray.length);
    computerChoice = emojiArray[randomNumber];

    userChoice =  event.target.innerHTML;
    if(userChoice == computerChoice){
    const html =  `<div class="selected-emoji">${userChoice}</div>
    <div class="selected-emoji">${computerChoice}</div>`;
    computer.insertAdjacentHTML('afterend',html);
    }
    else if(userChoice == "✊" && computerChoice == "✋"){
        const html =  `<div class="selected-emoji">${userChoice}</div>
        <div class="selected-emoji winner">${computerChoice}</div>`;
        computer.insertAdjacentHTML('afterend',html);
        computerPoint++;
        computerResult.innerHTML = computerPoint;
        console.log("Computer Point",computerPoint);
    }
    else if(userChoice == "✋" && computerChoice == "✊"){
        const html =  `<div class="selected-emoji winner">${userChoice}</div>
        <div class="selected-emoji">${computerChoice}</div>`;
        computer.insertAdjacentHTML('afterend',html);
        userPoint++;
        playerResult.innerHTML = userPoint;
        console.log("User Point",userPoint);

    }
    else if(userChoice == "✌" && computerChoice == "✊"){
        const html =  `<div class="selected-emoji ">${userChoice}</div>
        <div class="selected-emoji winner">${computerChoice}</div>`;
        computer.insertAdjacentHTML('afterend',html);
        computerPoint++;
        computerResult.innerHTML = computerPoint;
        console.log("Computer Point",computerPoint);
    }
    else if(userChoice == "✊" && computerChoice == "✌"){
        const html =  `<div class="selected-emoji winner">${userChoice}</div>
        <div class="selected-emoji ">${computerChoice}</div>`;
        computer.insertAdjacentHTML('afterend',html);
        userPoint++;
        playerResult.innerHTML = userPoint;
        console.log("User Point",userPoint);
    }
    else if(userChoice == "✌" && computerChoice == "✋"){
        const html =  `<div class="selected-emoji winner">${userChoice}</div>
        <div class="selected-emoji">${computerChoice}</div>`;
        computer.insertAdjacentHTML('afterend',html);
        userPoint++;
        playerResult.innerHTML = userPoint;
        console.log("User Point",userPoint);
    }
    else if(userChoice == "✋" && computerChoice == "✌"){
        const html =  `<div class="selected-emoji">${userChoice}</div>
        <div class="selected-emoji winner">${computerChoice}</div>`;
        computer.insertAdjacentHTML('afterend',html);
        computerPoint++;
        computerResult.innerHTML = computerPoint;
        console.log("Computer Point",computerPoint);
    }
   
})
});


if(userPoint == 10 || computerPoint == 10){
    
}
