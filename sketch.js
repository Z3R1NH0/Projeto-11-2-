var bg,bg_Img;
var boy,boyIng;
var score;

function preload(){

  bg_Img = loadImage ("BG.png");
  boyIng = loadAnimation ("Run (1).png","Run (2).png","Run (3).png","Run (4).png","Run (5).png","Run (6).png","Run (7).png","Run (8).png");
}

function setup(){
  createCanvas(600,400);

  text ("Voltas: " + score, 300,200);

  // movendo o plano de fundo
  bg = createSprite(200,200);
  bg.addImage (bg_Img);
  bg.scale = 1.2;
  bg.velocityX = - 2;

  //criando o menino correndo
  boy = createSprite(100,330,30,30);
  boy.scale = 0.3;
  boy.addAnimation ("Run", boyIng);

  score = 0;
}

function draw () {
 background ("black");

 if (boy.x > 500){

    boy.x = 100;
    score = score + 1;
  }

  if (boy.x < 0){

    boy.x = 100;

    score = score - 1;
  }

  if (bg.x < 0){

    bg.x = bg.width/4;
  }

  if (keyDown ("space")){
    boy.velocityX = + 2;
  }

  if (keyDown ("A")){
    boy.velocityX = - 2;
  }

  drawSprites();
}


