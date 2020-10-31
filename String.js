class String{

    constructor(b1,p2){

        var options={

            bodyA : b1,
            pointB : p2,
            stiffness : 1,
            length : 200
        }
        this.constraint = Constraint.create(options);
        World.add(world,this.constraint);

    }
        display(){
            var s1 = this.constraint.bodyA.position;
            var s2 = this.constraint.pointB;
            line(s1.x,s1.y,s2.x,s2.y);


        }
}
