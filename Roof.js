class Roof {
    constructor (x, y, width, height){
        var roof_options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x, y, width, height, roof_options);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }

    display() {
        strokeWeight(3);
        fill(255, 255, 0);
        var roofPos = this.body.position;
        push();
        translate(roofPos.x, roofPos.y);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
     }
}