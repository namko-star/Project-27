class Bob {
    constructor (x, y, radius) {
        var bob_options = {
            isStatic: false, 
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }

        this.x = x;
        this.y = y;
        this.r = radius;
        
        this.body = Bodies.circle(this.x, this.y, (this.r - 20)/2, bob_options);
        World.add(world, this.body);
    }

    display() {
       var bobPosition = this.body.position;
       push();
       translate(bobPosition.x, bobPosition.y);
       rectMode(CENTER);
       strokeWeight(3);
       fill(255, 0, 255);
       ellipse(0, 0, this.r, this.r);
       pop();
    }
}