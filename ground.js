class Ground {
    constructor(x, y, w, h) {
        let option = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, w, h, option);
        this.w = w;
        this.h = h;
       World.add(world,this.body);
       
    }
    show() {
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        
        stroke('grey');
        fill('brown');
        rect(pos.x, pos.y, this.w, this.h);
        
        pop();
    }
   
        
    
}