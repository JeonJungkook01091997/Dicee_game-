
var nam1=(Math.ceil(Math.random()*6));

var photo1="images/dice"+nam1+".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", photo1);

var nam2=(Math.ceil(Math.random()*6));

var photo2="images/dice"+nam2+".png";

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", photo2);

if (nam1 > nam2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
  }
  else if (nam1 < nam2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }
  else if(nam1 == nam2) {
    document.querySelector("h1").innerHTML = "Draw!";
  }
 

