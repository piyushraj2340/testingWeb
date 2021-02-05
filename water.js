

// // "circle" may be any tag name
// var shape = document.createElementNS("http://www.w3.org/2000/svg", "path");
// // Set any attributes as desired
// document.getElementById("test").setAttribute("viewbox",'0 0 100 100');
// shape.setAttribute("d", 'M200 300 L300 200 V300');
// shape.setAttribute("stroke-linecap", "round");
// shape.setAttribute("stroke-width", 5);
// shape.setAttribute("stroke", "black");
// shape.setAttribute("fill", "none");

// var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
// var circleX = [200, 300, 300];
// var circleY = [300, 200, 300];
// circle.setAttribute("cx",circleX[0]);
// circle.setAttribute("cy",circleY[0]);
// circle.setAttribute("r", 2);
// circle.setAttribute("fill", "blue");
// circle.setAttribute("stroke-width", 1);

// // Add to a parent node; document.documentElement should be the root svg element.
// // Acquiring a parent element with document.getElementById() would be safest.
// document.getElementById("test").appendChild(shape);
// document.getElementById("test").appendChild(circle);
var getDoct = document.getElementById("water");
// getDoct.addEventListener("mouseover", function() {
//     document.getElementsByClassName("wave0")[0].style.animation = "w 1s forwards";
//     document.getElementsByClassName("wave1")[0].style.animation = "w 1s .2s forwards";
//     document.getElementsByClassName("wave2")[0].style.animation = "w 1s .4s forwards";
//     document.getElementsByClassName("wave3")[0].style.animation = "w 1s .5s forwards";
//     document.getElementsByClassName("wave4")[0].style.animation = "w 1s .8s forwards";
//     document.getElementsByClassName("wave5")[0].style.animation = "w 1s 1s forwards";
//     setTimeout(() => {
//       document.getElementsByClassName("wave0")[0].style.animation = "none";
//     document.getElementsByClassName("wave1")[0].style.animation = "none";
//     document.getElementsByClassName("wave2")[0].style.animation = "none";
//     document.getElementsByClassName("wave3")[0].style.animation = "none";
//     document.getElementsByClassName("wave4")[0].style.animation = "none";
//     document.getElementsByClassName("wave5")[0].style.animation = "none";
//     }, 3000);
// });


// var mx, my, timer;
// var z = 2;

// getDoct.addEventListener('click', function(event) {
//   mx = event.pageX;
//   my = event.pageY;
//   z = z + 1;
//   console.log("woking");
//   console.log("mx : " + mx);
//   console.log("my : " + my);
//   console.log("x : " + z);
//   _wave(mx, my, z);
// });

// var count = 0;

// function _wave(i, j, k) {
//   var waveClass = document.querySelectorAll(".wave");
//   waveClass.forEach((elem) => {
//     elem.addEventListener('click', function(e) {

//     })

//     elem.classList.add("water" + k);
//     elem.style.zIndex = k;
//     // getDoct.style.position = "absolute";
//     elem.style.animation = "w 1s forwards";

//     document.getElementsByClassName("wave0")[0].style.animation = "w 1s forwards";
//     document.getElementsByClassName("wave1")[0].style.animation = "w 1s .2s forwards";
//     document.getElementsByClassName("wave2")[0].style.animation = "w 1s .4s forwards";
//     document.getElementsByClassName("wave3")[0].style.animation = "w 1s .5s forwards";
//     document.getElementsByClassName("wave4")[0].style.animation = "w 1s .8s forwards";
//     document.getElementsByClassName("wave5")[0].style.animation = "w 1s 1s forwards";
//     setTimeout(() => {
//       document.getElementsByClassName("wave0")[0].style.animation = "none";
//     document.getElementsByClassName("wave1")[0].style.animation = "none";
//     document.getElementsByClassName("wave2")[0].style.animation = "none";
//     document.getElementsByClassName("wave3")[0].style.animation = "none";
//     document.getElementsByClassName("wave4")[0].style.animation = "none";
//     document.getElementsByClassName("wave5")[0].style.animation = "none";
  
//       elem.classList.remove("water" + k);
//     }, 3000);
//   });
  
//   // $('.ui-content').prepend(
//   //   '<div class="wave-position water' + k + '" style="z-index:' + k + ';top:' + (j - 150) + 'px;left:' + (i - 150) + 'px;">' +
//   //   '<div class="wave-body">' +
//   //   '<div class="wave wave5"></div>' +
//   //   '<div class="wave wave4"></div>' +
//   //   '<div class="wave wave3"></div>' +
//   //   '<div class="wave wave2"></div>' +
//   //   '<div class="wave wave1"></div>' +
//   //   '<div class="wave wave0"></div>' +
//   //   '</div>' +
//   //   '</div>'
//   // );

//   // setTimeout(function () {
//     // $('.water' + k).remove();
//   // }, 3000);
// }

const divElem = document.querySelectorAll(".wave");
divElem.forEach(elem => { 
  elem.addEventListener('mousemove', function(e) {
    let x = e.clientX - e.target.offsetLeft - 30;
    let y = e.clientY - e.target.offsetTop - 30;

    let ripples0 = document.createElement('span');
    //ripples0.classList.add("wave");
    ripples0.classList.add("wave0");
    ripples0.style.left = x + 'px';
    ripples0.style.top = y + 'px';

    let ripples1 = document.createElement('span');
    //ripples1.classList.add("wave");
    ripples1.classList.add("wave1");
    ripples1.style.left = x + 'px';
    ripples1.style.top = y + 'px';

    let ripples2 = document.createElement('span');
    //ripples2.classList.add("wave");
    ripples2.classList.add("wave2");
    ripples2.style.left = x + 'px';
    ripples2.style.top = y + 'px';

    let ripples3 = document.createElement('span');
    //ripples3.classList.add("wave");
    ripples3.classList.add("wave3");
    ripples3.style.left = x + 'px';
    ripples3.style.top = y + 'px';

    let ripples4 = document.createElement('span');
    //ripples4.classList.add("wave");
    ripples4.classList.add("wave4");
    ripples4.style.left = x + 'px';
    ripples4.style.top = y + 'px';

    let ripples5 = document.createElement('span');
    ripples5.classList.add("wave");
    ripples5.classList.add("wave5");
    ripples5.style.left = x + 'px';
    ripples5.style.top = y + 'px';

    
   
    // ripples.classList.add("wave5");
    // ripples.classList.add("wave4");
    // ripples.classList.add("wave3");
    // ripples.classList.add("wave2");
    // ripples.classList.add("wave1");
    this.appendChild(ripples0);
    this.appendChild(ripples1);
    this.appendChild(ripples2);
    this.appendChild(ripples3);
    this.appendChild(ripples4);
    this.appendChild(ripples5);

    setTimeout(() => {
      ripples0.style.top = "calc((100% - 300px)/2);";
      ripples0.style.left = "calc((100% - 300px)/2);";
      ripples1.style.top = "calc((100% - 300px)/2);";
      ripples1.style.left = "calc((100% - 300px)/2);";
      ripples2.style.top = "calc((100% - 300px)/2);";
      ripples2.style.left = "calc((100% - 300px)/2);";
      ripples3.style.top = "calc((100% - 300px)/2);";
      ripples3.style.left = "calc((100% - 300px)/2);";
      ripples4.style.top = "calc((100% - 300px)/2);";
      ripples4.style.left = "calc((100% - 300px)/2);";
      ripples5.style.top = "calc((100% - 300px)/2);";
      ripples5.style.left = "calc((100% - 300px)/2);";

      ripples0.remove();
      ripples1.remove();
      ripples2.remove();
      ripples3.remove();
      ripples4.remove();
      ripples5.remove();
    }, 2000);
  })

})




