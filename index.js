
var winX = window.innerWidth;
var winY = window.innerHeight;
var circleCodX = [];
var circleCodY = []; 

count = 0;

for(let i=0; i < winY; i = i + 20) {
  let line = document.createElementNS("http://www.w3.org/2000/svg", "path");
  line.setAttribute("fill", "none");
  line.setAttribute("stroke", "#0ed4e3");
  line.setAttribute("stroke-width", "0.5");
  line.setAttribute("stroke-opacity","0.1");
  line.setAttribute("d", "M" + 0 + " " + i + "L" + winX + " " + i);
  //path.setAttribute("d", "M" + i + " " + 0 + "L" + i + " " + winY);
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
  //line.setAttribute("d", "M" + i + " " + 0 + "L" + i + " " + winY);
  line.setAttribute("d", "M" + j + " " + 0 + "L" + j + " " + winY);
  line.setAttribute("class", "line" + Math.floor(Math.random() * 10));

  

  document.getElementById("circuit").appendChild(line);
  
  console.log(winY + " " + winX );
}

function randCircle() {
  

  for(let i = 0 ; i < 30; i++) {
    circleCodX[i] =  Math.floor(Math.random() * (winX)); 
    circleCodY[i] =  Math.floor(Math.random() * (winY)); 
  }

  console.log(circleCodX);
  console.log(circleCodY);

  //circleCodX.sort((a, b) => a - b);
  circleCodY.sort((a, b) => a - b);

  for(let i = 0, j = 1 ; i < 30; i++, j++) {
    // if(Math.abs(circleCodX[i] - circleCodX[j]) > 50  && Math.abs(circleCodY[i] - circleCodY[j]) > 20 ) {
      var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      circle.setAttribute("cx", circleCodX[i]);
      circle.setAttribute("cy", circleCodY[i]);
      circle.setAttribute("r", 3 + "px");
      circle.setAttribute("fill", "#043b3b");

      document.getElementById("circuit").appendChild(circle);
    }
  //   else {
  //     circleCodX.splice(i,1);
  //     circleCodY.splice(i,1);
  //   }
  // }

  console.log(circleCodX);
  console.log(circleCodY);

  var MoveX = [];

  for(let i = 0, j = 1 ; i < 30; i++ , j++ ) {
    // if(Math.abs(circleCodX[i] - circleCodX[j]) > 50 && Math.abs(circleCodY[i] - circleCodY[j]) > 20 ) {
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
      path.setAttribute("fill", "none")
    
      document.getElementById("circuit").appendChild(path);
  //  }
  }

  for(let i = 0; i < 5; i++) {
    
  }


  // console.log(circleCodX);
  // console.log(circleCodY);

}



randCircle();
