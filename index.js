var randomnumber1= Math.floor(Math.random() * 6)+1;// 1-6

var randomDiceimage="dice"+ randomnumber1+ ".png"; // dice1.png -dice6.png

img=document.querySelectorAll("img")[0];
img.setAttribute("src", randomDiceimage);

var randomnumber2= Math.floor(Math.random() * 6) + 1 ;
var randomDiceinage2= "dice"+ randomnumber2 +".png";
img2=document.querySelectorAll("img")[1];
img2.setAttribute("src", randomDiceinage2);

if (randomnumber1 > randomnumber2) {
  alert(" 🚩Play 1 Wins! GG");
}
else if (randomnumber2 > randomnumber1) {
  alert( "Player 2 Wins! 🚩");
}
else {
  alert("Draw");
}
