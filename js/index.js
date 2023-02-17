// Random number between 1-6
var randomNumber1 = Math.floor(Math.random() * 6) + 1; 
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Random image
var randomImage1 = "dice" + randomNumber1 + ".png";
var randomImage2 = "dice" + randomNumber2 + ".png"

// Source of random image
var randomImageSource1 = "images/" + randomImage1;
var randomImageSource2 = "images/" + randomImage2;

//Change img src
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

// Deciding the winner
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "Player 1 Wins";
} else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").textContent = "Player 2 Wins";
} else{document.querySelector("h1").innerHTML = "Draw"}
