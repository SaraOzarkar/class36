class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
 this.gameState=true
  }
display()
{
 
if((this.body.speed)<2.5)
{super.display();
}else
{
      if(this.gameState=== true){
World.remove(world,this.body) 
score+=50
this.gameState=false
      }
}}
};


