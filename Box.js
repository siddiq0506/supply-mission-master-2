class Box {
    constructor(x, y, width, height) {
      
      this.body = Bodies.rectangle(x, y, width, height, width);
      this.width = width;
      this.height = height;
      
      

    }
    display(){
      var pos =this.body.position;
      boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
      World.add(world, boxLeftBody);

      boxBase=createSprite(boxPosition+100, boxY+40, 200,20); boxBase.shapeColor=color(255,0,0);

      boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} ); World.add(world, boxBottomBody);

      boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100); boxleftSprite.shapeColor=color(255,0,0);

      boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
       World.add(world, boxRightBody);
      rectMode(CENTER);
      fill(255);
      rect(0, 0, this.width, this.height);
      
    }
  };