
var dog, happyDog, database, food, foodStock;


function preload()
{

  dog = loadImage("images/dogImg.png");

  happyDog = loadImage("images/dogImg1.png");

}

function setup() {
  createCanvas(500, 500);
  
  database = firebase.database;

  foodStock = database.ref('Food');
  
  foodStock.on("value" , readStock())

}


function draw() {  

  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){

    writeStock(food);

    dog.addImage(happyDog);
  }

  drawSprites();

  fill("white");

  textSize(16);

  stroke("red");

  text(" NOTE : Press UP_ARROW TO FEED THE DOG " , 100,100);

}

  function readStock(data){

    food = data.val();

  }

  function writeStock(x){

    if(x<=0){

      x = 0;

    }
  else{
    x = x-1;
    }

    database.ref('/').update({

     Food : x
      
    })

  }


