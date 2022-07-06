let randomNumber1= Math.floor(Math.random() * 6)+1;
let firstImage = document.querySelector(".img1");
let newFirstImage = "/images/"+"dice"+randomNumber1+".png";
firstImage.setAttribute("src",newFirstImage);

let randomNumber2= Math.floor(Math.random() * 6)+1;
let secondImage = document.querySelector(".img2");
let newSecondImage = "/images/"+"dice"+randomNumber2+".png";
secondImage.setAttribute("src",newSecondImage);


if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 wins";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML="Player 2 wins";
} else {
    document.querySelector("h1").innerHTML="Draw"
}