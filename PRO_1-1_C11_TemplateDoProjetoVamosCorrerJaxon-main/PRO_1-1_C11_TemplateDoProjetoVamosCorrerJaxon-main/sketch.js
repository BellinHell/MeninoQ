var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;



function preload(){
pathImg = loadImage("path.png");
boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
 createCanvas(400,600);

// Movendo o fundo 
path = createSprite(200,200,10,40) ;
path.addImage("path.png");
path.velocityY = 4;



//Criando menino que corre 
boy = createSprite(60,200,75,25)
boy.addAnimation("Runner-1.png","Runner-2.png")

// Criando Boundary (Limite) esquerdo  
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;


//Crie Boundary direito 
rightBoundary=createSprite(400,0,100,800);
rightBoundary.visible = false;


}


function draw() {
background(white);


// Menino se movendo no eixo X com o mouse
boy.x = World.mouseX;

edges= createEdgeSprites();
boy.collide(edges[3]);
boy.collide(leftBoundary);
boy.collide(rightBoundary);
 
 if(path.y > 400 ){
    path.y = height/2;
  }




 drawSprites();

 }




