//!Challenge 1 Age In days
function convertIntoDays() {
    let birthYear = prompt('Enter Your Birth Year');
    let days = (2020 - birthYear)*365;
    let h1 = document.createElement('h1');
    let textAnswer = document.createTextNode(`You're ${days} days old`);
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById("flexbox-result").appendChild(h1);
}

resetTheValue = () =>{
    document.getElementById('ageInDays').remove();
}

//! Adding The GIF

addGif = () =>{
    //<img src="https://media.tenor.com/images/800a46ca3a946f908b8a5c7cd2eabe35/tenor.gif" alt=""></img>
    let image = document.createElement('img');
    let div = document.getElementById('cat-gen')
    image.id = "cat_gif_gen"
    image.src = "https://media.tenor.com/images/800a46ca3a946f908b8a5c7cd2eabe35/tenor.gif";
    div.appendChild(image);

}

