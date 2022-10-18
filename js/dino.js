class Dino {
    static image;
    constructor(){
        this.r = 50;
        this.iy = height - this.r;
        this.x = 10;
        // this.vx = 2;
        this.y = this.iy;
        this.vy = 0
        this.gravity = 2;
        this.vForce = 0;
    }

    jump(){
        if(this.y == this.iy){
            this.vForce = -7;
            this.y = this.iy - 1;
        }
    } 

    move(){
        this.vy += this.gravity + this.vForce;
        if(this.y == this.iy){
            this.vy = 0;
        }
        this.y += this.vy;
        // this.x += this.vx;
        this.vForce += 1;
        this.vForce = constrain(this.vForce, -10, 0);
        this.y = constrain(this.y, 0, this.iy);
        // this.vy = constrain(this.y, -100, 60);
        console.log(this.vy);
        // this.x = constrain(this.y, 10, 20);
    }

    show(){
        rect(this.x, this.y, this.r, this.r);
        image(Dino.image, this.x, this.y, this.r, this.r);
    }

    hits(c){
        return collideRectRect(this.x, this.y, this.r, this.r, c.x, c.y, c.r, c.r);
    }
}