
var dog, happyDog

var database,milk;

var food, foodStock;

var dogImg,happyDogImg;


function preload()
{
  dogImg = loadImage('images/dogImg.png');

  happyDogImg = loadImage("images/dogImg1.png");

}

  function setup() {
    createCanvas(500, 500);
  

    dog = createSprite(250,250,50,50);
    happyDog = createSprite(250,250,50,50);
  
    dog.addImage(dogImg);
    happyDog.addImage(happyDogImg);
    dog.scale = 0.2;
    happyDog.scale = 0.2;
    dog.visible = true;
    happyDog.visible = false;

    database = firebase.database();

  }


function draw() {  

  background(46, 139, 87);

  if(keyIsDown(UP_ARROW)){

    writeStock(food);

    dog.visible = false;
    happyDog.visible = true;

  }

 foodStock = database.ref('Food');
  
  foodStock.on("value" , readStock)


  drawSprites();

  fill("white");

  textSize(16);

  stroke("red");

  text(" NOTE : Press UP_ARROW TO FEED THE DOG " , 100,100);

  

}

  function readStock(data){

    food = data.val();

  }

  function writeStock(x1){

    if(x1<=0){

      x1 = 0;

    }
  else{
    x1 = x1-1;
    }

   database.ref('/').update({

    Food : x1
      
    })
  
  }


