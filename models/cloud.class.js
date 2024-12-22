class Cloud extends MovableObject {
    width = 400;
    height = 150;
   
    
        constructor() {
            super().loadImage('./img/5_background/layers/4_clouds/1.png');
            this.x =  Math.random() * 500;
            this.y = 20;
            this.moveClouds();
           
        }

    moveClouds() {
        this.moveLeft();
    }

  
    
}