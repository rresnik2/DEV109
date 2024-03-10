i=0;
myImages = ["https://parade.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_400/MTkwNTgxMzczMjk4MjIyOTcy/cookies-n-cream.webp", "https://parade.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_400/MTkwNTgxMzcyNDkzNzAzMDM2/chocolate-chip-cookie-dough.webp", "https://parade.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_400/MTkwNTgxMzcyNDg5Mzc3NjYw/mint-chocolate-chip-ice-cream.webp", "https://parade.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_400/MTkwNTgxMzcyNzU4NjY1MDg0/strawberry-ice-cream.webp", "https://parade.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_400/MTkwNTgxMzczMDI2MTE3NTAw/vanilla-ice-cream.webp"];
iceCream = ["Cookies N Creme", "Chocolate Chip Cookie Dough", "Mint Chocolate Chip", "Strawberry", "Vanilla"];
window.setInterval(showIceCream, 2000);
function next(){
  if (i == myImages.length - 1){
    i = 0;
    document.getElementById("newImage").src=myImages[i];
  }
  else{
    i++;
    document.getElementById("newImage").src=myImages[i];
  }
}
function back(){
  if (i === 0){
    i = myImages.length - 1;
    document.getElementById("newImage").src=myImages[i];
  }
  else{
    i--;
    document.getElementById("newImage").src=myImages[i];
  }
}

function showIceCream(){

if (i < iceCream.length)
{ document.getElementById("names").innerHTML = "<h1>" + iceCream[i] + "</h1>";
document.getElementById("newImage").src=myImages[i];
i++;}
else
i=0;
}
