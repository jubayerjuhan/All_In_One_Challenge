//!Challenge 1 Age In days
function convertIntoDays() {
    let birthYear = prompt('Enter Your Birth Year');
    let days = (2020 - birthYear) * 365;
    let h1 = document.createElement('h1');
    let textAnswer = document.createTextNode(`You're ${days} days old`);
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById("flexbox-result").appendChild(h1);
}

resetTheValue = () => {
    document.getElementById('ageInDays').remove();
}

//! Adding The GIF

addGif = () => {
    //<img src="https://media.tenor.com/images/800a46ca3a946f908b8a5c7cd2eabe35/tenor.gif" alt=""></img>
    let image = document.createElement('img');
    let div = document.getElementById('cat-gen')
    image.id = "cat_gif_gen"
    image.src = "https://media.tenor.com/images/800a46ca3a946f908b8a5c7cd2eabe35/tenor.gif";
    div.appendChild(image);
}

rpsGame = (yourChoice) => {
    let humanChoice = yourChoice.id;
    let botChoice = numberToMainChoice(randomNumberPick());

    let result = decideWinner(humanChoice, botChoice);
    console.log(`Computer Choice ${botChoice}`)
    console.log(result);

    let message = finalMessage(result);
    console.log(message);

    rpsFrontEnd(yourChoice.id, botChoice, message);

}



randomNumberPick = () => {
    return Math.floor(Math.random() * 3);
}

numberToMainChoice = (number) => {
    return ['rock', 'paper', 'scissor'][number];
}


decideWinner = (humanChoice, computerchoice) => {
    let rpsDatabase = {
        'rock': {
            'rock': 0.5,
            'paper': 0,
            'scissor': 1
        },
        'paper': {
            'rock': 1,
            'paper': 0.5,
            'scissor': 0
        },
        'scissor': {
            'rock': 0,
            'paper': 1,
            'scissor': 0.5
        }
    }

    let yourScore = rpsDatabase[humanChoice][computerchoice]
    let computerScore = rpsDatabase[computerchoice][humanChoice]

    return [yourScore, computerScore];
}


finalMessage = ([yourScore, computerScore]) => {
    if (yourScore === 0) {
        return {
            'message': 'You Lost!',
            'Color': 'Red'
        }
    } else if (yourScore === 0.5) {
        return {
            'message': 'You Tied!',
            'Color': 'Yellow'
        }
    } else {
        return {
            'message': 'You Won!',
            'Color': 'Green'
        }
    }
}


rpsFrontEnd = (humanImageChoice, botImageChoice, finalMessage) => {
    let imageDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src
    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    let humandiv = document.createElement('div');
    let botdiv = document.createElement('div');
    let message_div = document.createElement('div');

    humandiv.innerHTML = "<img src = '" + imageDatabase[humanImageChoice] + "' height='150px' width='150px' style='box-shadow: 0px 10px 50px rgba(37,50,233,1)'>"
    message_div.innerHTML = "<h1 style='color:" + finalMessage['Color'] + "; font-size: 60px; padding : 30px; '>" + finalMessage['message'] + "</h1>"
    botdiv.innerHTML = "<img src = '" + imageDatabase[botImageChoice] + "' height='150px' width='150px' style='box-shadow: 0px 10px 50px rgb(201, 70, 70)'>"

    document.getElementById('flexbox-rps-div').appendChild(humandiv);
    document.getElementById('flexbox-rps-div').appendChild(message_div);
    document.getElementById('flexbox-rps-div').appendChild(botdiv);
}

let allButtons = document.getElementsByTagName('button');
console.log(allButtons);

let copyAllButtons = [];
for (let i = 0; i < allButtons.length; i++) {
    copyAllButtons.push(allButtons[i].classList[1])
}
console.log(copyAllButtons);


buttonColorChange = (buttonParam) => {
    if (buttonParam.value === 'red') {
        buttonsRed();
    } else if (buttonParam.value === 'green') {
        buttonsGreen();
    } else if (buttonParam.value === 'yellow') {
        buttonsYellow();
    } else if (buttonParam.value === 'reset') {
        buttonsReset();
    }
}

buttonsRed = () => {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-danger')
    }
}

buttonsGreen = () => {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-success')
    }
}

buttonsYellow = () => {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-warning')
    }
}
