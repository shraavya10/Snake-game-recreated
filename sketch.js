const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var total=0;
var nw=70;
var engine, world;
var box1;
let arr=[];
var gameState="play";

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

     box1 = createSprite(200,300,70,20);
     box1.shapeColor="green";
    
      this.width=width;
     //arr=[this.width];
      this.height=height;
     // this.grow=[];
      
    // this.grow.push(5);
      World.add(world, box1);
    
    
    
    
    fruit = createSprite(100,300,20,20);
    fruit.shapeColor="red";
    this.width=width;
    this.height=height;
    World.add(world, fruit);

    
   

}

function draw(){
    background("black");
    Engine.update(engine);
    text("Please be an HONEST player and do not lift your finger from the keys,unnecessarily",200,100);
    text("score:"+total,350,350);
   // rect(200,200,70,200);
   // rect(100,300,20,20);
        

   if (keyDown("up") && gameState=="play") {
    box1.y=box1.y-2;
    changeDirection(box1.height,box1.width);
   // box1.width=20;
   // box1.height=70;
    
  }
  if (keyDown("down")&& gameState=="play") {
    box1.y=box1.y+2;
    changeDirection(box1.height,box1.width)
   // box1.width=20;
   // box1.height=70;
  }
  if (keyDown("left")&& gameState=="play") {
    box1.x=box1.x-2;
    changeDirection(box1.width,box1.height);
   // box1.width=70;
   // box1.height=20;
  }
  if (keyDown("right")&& gameState=="play") {
        box1.x=box1.x+2;
        changeDirection(box1.width,box1.height);
   // box1.width=70;
  //  box1.height=20;

  } 
          
          if(box1.x>canvas.width || box1.x<0 || box1.y>canvas.height || box1.y<0){
            gameState=="end";
            background("yellow");
          text("You LOSE,refresh your screen.Your score:"+total,300,300);
          
          


          }
        
          
            
             
            
            // fruit.visible="false";
            // box1.visible="false";
          
          

         // console.log(box1.width);
          
         
  
  

    box1.display();
    fruit.display();

    
   collide(box1);
    

 // return total;   




    
     
}
function collide(box1){
 // console.log("before" +box1.width);
   
if(box1.isTouching(fruit)){
        box1.width=box1.width+5;
      //  arr.push(this.width*2);
       // newwidth=arr;
      // this.grow.push(length+20);
      //  box1=createSprite(box1.x,box1.y,this.grow,box1.height);
        console.log(arr);
        fruit.destroy();
        total=total+1;

      fruit.x=random(100,780);
      fruit.y=random(10,350);

      fruit=createSprite(fruit.x,fruit.y,20,20);
      fruit.shapeColor="red";
      text("score:"+total,350,350);
   
}  



}
function changeDirection(width,height){
  box1.width=width;
  box1.height=height;



}

