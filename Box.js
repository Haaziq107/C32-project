class Block extends BaseClass {
  constructor(x, y) {
      super(x,y,50,50);
      this.image = loadImage("sprites/images.png");
      this.visiblity=255;
      World.add(world, this.body);
  }

  score(){
    block9.score();
    block8.score();
    block7.score();
    block6.score();
    block5.score();
    block4.score();
    block3.score();
    block2.score();
    block1.score();
  
  }
  display(){
    var pos =this.body.position;
      //console.log(this.body.speed);
      if(this.body.speed<10){
        super.display();
      }else{
        World.remove(world,this.body)
        push();
        this.visiblity=this.visiblity-50;
        tint(500,this.visiblity);
        image(this.image, this.body.position.x, this.body.position.y);
        pop();
      }
  }
};
