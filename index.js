
var winX = window.innerWidth;
var winY = window.innerHeight;

count = 0;

for(let i=0; i < winX; i = i + 20) {
  for(let j=0; j< winY; j = j + 20) {
    var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", i);
    rect.setAttribute("y", j);
    rect.setAttribute("width",  20);
    rect.setAttribute("height", 20);
    rect.setAttribute("fill", "none");
    rect.setAttribute("stroke", "#0ed4e3");
    rect.setAttribute("stroke-width", "1px");
    rect.setAttribute("stroke-opacity","0.1");
    rect.setAttribute("class", "rect" + Math.floor(Math.random() * 10));

    

    document.getElementById("circuit").appendChild(rect);
    
    console.log(winY + " " + winX );
  }
}

//  setTimeout(function() {

//   let lineNumbX = Math.floor(winX / 20);
//   let lineNumbY = Math.floor(winY / 20);
//   console.log(lineNumbX + " " + lineNumbY);
//   var randLineHori0 = document.createElementNS("http://www.w3.org/2000/svg", "path");

//   randLineHori0.setAttribute("d", "M0" + " " +  20 * Math.floor(Math.random() * 5 ) + " " +  "H" +winX);
//   randLineHori0.setAttribute("stroke", "green");
//   randLineHori0.setAttribute("stroke-width", 1);
//   randLineHori0.setAttribute("stroke-opacity", 0.1);

//   document.getElementById("circuit").appendChild(randLineHori0);

   

// }, 3000);

