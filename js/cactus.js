class Cactus{
    static cactus_array = [];
    static image;
    static prop = 0.005;
    static vx = -5;
    static levelUp = 10;
    
    constructor(){
        this.r = 25;
        this.x = width;
        this.y = height - this.r;
    }

    static randomlyAdd(){
        if(random(1) < Cactus.prop){
            Cactus.cactus_array.push(new Cactus());
        }
    }

    static setLevel(count){
        let level = count % levelUp;
        Cactus.vx += 5; 
    }

    move(){
        this.x += Cactus.vx;
    }

    show(){
        // console.log(Cactus.cactus_array);
        rect(this.x, this.y, this.r, this.r);
        image(Cactus.image, this.x, this.y, this.r, this.r);
        if(this.x < 0){
            let index = Cactus.cactus_array.indexOf(this);
            Cactus.cactus_array.splice(index, 1);
        }
    }
}