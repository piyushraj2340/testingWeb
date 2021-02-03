"use strict";
var winX = window.innerWidth;
var winY = window.innerHeight;
var circleCodX = [];
var circleCodY = []; 

var count = 0;

for(let i=0; i < winY; i = i + 20) {
  let line = document.createElementNS("http://www.w3.org/2000/svg", "path");
  line.setAttribute("fill", "none");
  line.setAttribute("stroke", "#0ed4e3");
  line.setAttribute("stroke-width", "0.5");
  line.setAttribute("stroke-opacity","0.1");
  line.setAttribute("d", "M" + 0 + " " + i + "L" + winX + " " + i);
  line.setAttribute("class", "line" + Math.floor(Math.random() * 10));

  

  document.getElementById("circuit").appendChild(line);
  
  console.log(winY + " " + winX );
  
}

for(let j=0; j<= winX; j = j + 20) {
  let line = document.createElementNS("http://www.w3.org/2000/svg", "path");
  line.setAttribute("fill", "none");
  line.setAttribute("stroke", "#0ed4e3");
  line.setAttribute("stroke-width", "0.5");
  line.setAttribute("stroke-opacity","0.1");
  line.setAttribute("d", "M" + j + " " + 0 + "L" + j + " " + winY);
  line.setAttribute("class", "line" + Math.floor(Math.random() * 10));

  

  document.getElementById("circuit").appendChild(line);

}

function randCircle() {
  

  for(let i = 0 ; i < 30; i++) {
    circleCodX[i] =  Math.floor(Math.random() * (winX)); 
    circleCodY[i] =  Math.floor(Math.random() * (winY)); 
  }


  circleCodY.sort((a, b) => a - b);

  for(let i = 0, j = 1 ; i < 30; i++, j++) {
      let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      circle.setAttribute("cx", circleCodX[i]);
      circle.setAttribute("cy", circleCodY[i]);
      circle.setAttribute("r", 3 + "px");
      circle.setAttribute("fill", "#043b3b");
      circle.setAttribute("class",  "makeCircle");

      document.getElementById("circuit").appendChild(circle);
    }
 

  var MoveX = [];

  for(let i = 0, j = 1 ; i < 30; i++ , j++ ) {
      let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      if(circleCodX[i] < circleCodX[j]) {
        MoveX[i] = circleCodX[i] + Math.random() * Math.abs((circleCodX[i] - circleCodX[j]));
        path.setAttribute("d", "M" + circleCodX[i] + " " + circleCodY[i] + " " + "H" +  MoveX[i]  + "L" + (MoveX[i] + Math.abs(circleCodY[i] - circleCodY[j])) + " " + circleCodY[j] + " " + "L" + circleCodX[j] + " " + circleCodY[j]);
      }
      else {
        MoveX[i] = circleCodX[i] - Math.random() * Math.abs(circleCodX[i] - circleCodX[j]);
        path.setAttribute("d", "M" + circleCodX[i] + " " + circleCodY[i] + " " + "H" +  MoveX[i]  + "L" + (MoveX[i] - Math.abs(circleCodY[i] - circleCodY[j])) + " " + circleCodY[j] + " " + "L" + circleCodX[j] + " " + circleCodY[j]);
      }
      i++;
      j++;
      path.setAttribute("stroke", "#043b3b");
      path.setAttribute("stroke-width", 1);
      path.setAttribute("fill", "none");
      path.setAttribute("class",  "makePath");
    
      document.getElementById("circuit").appendChild(path);
  }

  var circleLeftCodX = [];
  var circleLeftCodY = [];
  var circleTopCodX = [];
  var circleTopCodY = [];
  var circleBottomCodX = [];
  var circleBottomCodY = [];
  var circleRightCodX = [];
  var circleRightCodY = [];

 

  for(let i = 0 ; i < 5; i++) {
    circleTopCodX[i] =  Math.floor(Math.random() * winX);
    circleTopCodY[i] = Math.floor(Math.random() * 200);
    circleBottomCodX[i] =  Math.floor(Math.random() * winX);
    circleBottomCodY[i] = winY - Math.floor(Math.random() * 200);
  }

  for(let i = 0 ; i < 3; i++) {
    circleLeftCodX[i] =  Math.floor(Math.random() * 150);
    circleLeftCodY[i] = Math.floor(Math.random() * winY);
    circleRightCodX[i] = winX - Math.floor(Math.random() * 150);
    circleRightCodY[i] = Math.floor(Math.random() * winY);
  }

  for(let i = 0; i < 5; i++) {
    let circleTop = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circleTop.setAttribute("cx", circleTopCodX[i]);
    circleTop.setAttribute("cy", circleTopCodY[i]);
    circleTop.setAttribute("r", 3 + "px");
    circleTop.setAttribute("fill", "#043b3b");
    circleTop.setAttribute("class",  "makeCircle");

    let circleBootm = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circleBootm.setAttribute("cx", circleBottomCodX[i]);
    circleBootm.setAttribute("cy", circleBottomCodY[i]);
    circleBootm.setAttribute("r", 3 + "px");
    circleBootm.setAttribute("fill", "#043b3b");
    circleBootm.setAttribute("class",  "makeCircle");

    document.getElementById("circuit").appendChild(circleTop);
    document.getElementById("circuit").appendChild(circleBootm);
  }

  for(let i = 0; i < 3; i++) {
    let circleLeft = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circleLeft.setAttribute("cx", circleLeftCodX[i]);
    circleLeft.setAttribute("cy", circleLeftCodY[i]);
    circleLeft.setAttribute("r", 3 + "px");
    circleLeft.setAttribute("fill", "#043b3b");
    circleLeft.setAttribute("class", "makeCircle");

    document.getElementById("circuit").appendChild(circleLeft);

    let circleRight = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circleRight.setAttribute("cx", circleRightCodX[i]);
    circleRight.setAttribute("cy", circleRightCodY[i]);
    circleRight.setAttribute("r", 3 + "px");
    circleRight.setAttribute("fill", "#043b3b");
    circleRight.setAttribute("class", "makeCircle");

    document.getElementById("circuit").appendChild(circleRight);
  }


  for(let i = 0 ; i < 5; i++ ) {
      let pathTop = document.createElementNS("http://www.w3.org/2000/svg", "path");
      pathTop.setAttribute("d" , "M" + circleTopCodX[i] + " " + -40 + "V"  + circleTopCodY[i]);
      pathTop.setAttribute("stroke", "#043b3b");
      pathTop.setAttribute("stroke-width", 1);
      pathTop.setAttribute("fill", "none");
      pathTop.setAttribute("class", "makePath");
    

      let pathBootm = document.createElementNS("http://www.w3.org/2000/svg", "path");
      pathBootm.setAttribute("d" , "M" + circleBottomCodX[i] + " " + winY + 40 + "V"  + circleBottomCodY[i]);
      pathBootm.setAttribute("stroke", "#043b3b");
      pathBootm.setAttribute("stroke-width", 1);
      pathBootm.setAttribute("fill", "none");
      pathBootm.setAttribute("class", "makePath");

    
      document.getElementById("circuit").appendChild(pathTop);
      document.getElementById("circuit").appendChild(pathBootm);
  }

  for(let i = 0 ; i < 3; i++ ) {
      let pathLeft = document.createElementNS("http://www.w3.org/2000/svg", "path");
      pathLeft.setAttribute("d" , "M" + -40 + " " + circleLeftCodY[i] + "H"  + circleLeftCodX[i]);
      pathLeft.setAttribute("stroke", "#043b3b");
      pathLeft.setAttribute("stroke-width", 1);
      pathLeft.setAttribute("fill", "none");
      pathLeft.setAttribute("class",  "makePath");
    

      let pathRight = document.createElementNS("http://www.w3.org/2000/svg", "path");
      pathRight.setAttribute("d" , "M" + winX  + 40 + " " + circleRightCodY[i] + "H"  + circleRightCodX[i]);
      pathRight.setAttribute("stroke", "#043b3b");
      pathRight.setAttribute("stroke-width", 1);
      pathRight.setAttribute("fill", "none");
      pathRight.setAttribute("class", "makePath");
    
      document.getElementById("circuit").appendChild(pathLeft);
      document.getElementById("circuit").appendChild(pathRight);
  }

}



randCircle();
