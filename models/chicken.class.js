class Chicken extends MovableObject{
y = 350;
height = 70;
width = 60;
images_walking = [
    'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
    'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
    'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'


];
chicken_clucking = new Audio('audio/chicken.mp3');


    constructor() {
        super().loadImage('./img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.images_walking);
        this.x = 200 + Math.random() * 500;
        this.speed = this.speed + Math.random() * 0.25;
        this.animate();
        document.addEventListener('keydown', this.enableSound.bind(this));
        
        
    }

     enableSound() {
        this.chicken_clucking.play();
    }



animate() {
    setInterval(() => {
        this.moveLeft();
    }, 1000/60);
   
    setInterval(() => {
       this.playAnimation(this.images_walking);
        
    }, 200);
    
    
}
  
}