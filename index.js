
var winX = window.innerWidth;
var winY = window.innerHeight;
var circleCodX = [];
var circleCodY = []; 

count = 0;

for(let i=0; i < winY; i = i + 20) {
  let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("fill", "none");
  path.setAttribute("stroke", "#0ed4e3");
  path.setAttribute("stroke-width", "0.5");
  path.setAttribute("stroke-opacity","0.1");
  path.setAttribute("d", "M" + 0 + " " + i + "L" + winX + " " + i);
  //path.setAttribute("d", "M" + i + " " + 0 + "L" + i + " " + winY);
  path.setAttribute("class", "rect" + Math.floor(Math.random() * 10));

  

  document.getElementById("circuit").appendChild(path);
  
  console.log(winY + " " + winX );
  
}

for(let j=0; j<= winX; j = j + 20) {
  let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("fill", "none");
  path.setAttribute("stroke", "#0ed4e3");
  path.setAttribute("stroke-width", "0.5");
  path.setAttribute("stroke-opacity","0.1");
  //path.setAttribute("d", "M" + i + " " + 0 + "L" + i + " " + winY);
  path.setAttribute("d", "M" + j + " " + 0 + "L" + j + " " + winX);
  path.setAttribute("class", "rect" + Math.floor(Math.random() * 10));

  

  document.getElementById("circuit").appendChild(path);
  
  console.log(winY + " " + winX );
}

function randCircle() {
  for(let i = 0 ; i < 35; i++) {
    circleCodX[i] = 100 + Math.random() * winX - 100; 
    circleCodY[i] = 100 + Math.random() * winY - 100;
    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", circleCodX[i]);
    circle.setAttribute("cy", circleCodY[i]);
    circle.setAttribute("r", 3 + "px");
    circle.setAttribute("fill", "#043b3b");

    let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", )
    // console.log(100 + Math.random() * winX - 100);
    // console.log(100 + Math.random() * winY - 100);

  document.getElementById("circuit").appendChild(circle);
  }
}

randCircle();
