function setup(){
   createCanvas(800,800);
   background(0);

}
function draw(){

   background(0);
   fill(255);
   ellipse(mouseX, mouseY, 100, 100);

   drawDonut(25, 210, 20, 100, 100);
   drawDonut(103, 12, 42, 300, 100);
   drawDonut(144, 102, 240, 400, 200);
   drawDonut(74, 102, 240, 500, 300);

}

function drawDonut(r, g, b, x, y){
   //doughnut #1
   fill(r, g, b);
   ellipse(x, y, 200, 200);
   fill(0);
   ellipse(x, y, 120, 120);
}