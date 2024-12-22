class StatusBar extends DrawableObject {

    images = [
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/20.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/100.png'
    ];

    persentage = 100;

    constructor() {
        super();
        this.loadImages(this.images);
        this.setPersentage(100);
        this.x = 0;
        this.y = 0;
        this.width = 300;
        this.height = 60;
    }


setPersentage(persentage) {
    this.persentage = persentage;
    let path = this.images[this.resolveImageIndex()];
    this.img = this.imageCache[path];
}

resolveImageIndex() {
    if (this.persentage == 100) {
        return 5;
    }else if (this.persentage > 80) {
        return 4;
    }else if (this.persentage > 60) {
        return 3;
    }else if (this.persentage > 40) {
        return 2;
    }else if (this.persentage > 20) {
        return 1;
    }else {
        return 0;
    }
}
}