// var rHeight =5;
// var colorEven = "orange";
// var colorOdd = "black";
// var symbol ="*";

function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
up(pHeight, pColorEven, pColorOdd, pSymbol);
down(pHeight, pColorEven, pColorOdd, pSymbol);
}

function up(pHeight, pColorEven, pColorOdd, pSymbol){
var rLine ="";
for (i=0;i<pHeight;i++){
rLine +="<p> <pre>";
//Create each line on the Rhombus
  for (z=pHeight-i; z > 0; z--) {
    rLine += " "
  }
  // printing star
  for (k=0; k<2*i; k++) {
    if (k%2)
      //even
      rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
    else
        //odd
      rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";

}
rLine +="</pre> </p>";
// console.log(rLine);

}

document.getElementById("upRight").innerHTML = rLine;
}

function down(pHeight, pColorEven, pColorOdd, pSymbol){
var rLine ="";
for (i=0;i<pHeight;i++){
rLine +="<p> <pre>";
//Create each line on the Rhombus
  for (z=0; z <= i; z++) {
    rLine += " "
  }
  // printing star
  for (k=(pHeight-1-i)*2; k>0; k--) {
    if (k%2)
      //even
      rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
    else
        //odd
      rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";

}
rLine +="</pre> </p>";
// console.log(rLine);

}

document.getElementById("downLeft").innerHTML = rLine;
}
