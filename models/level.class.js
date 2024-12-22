class Level {
    clouds;
    enemies;
    backgroundObjekts;
    level_end_x = 2200;

    constructor (enemies, clouds, backgroundObjekts) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjekts = backgroundObjekts;

    }
}