//1 class movie

class Movie  {
    constructor(title,studio,PG)
    {
this.title=title;
this.studio=studio;
this.PG=PG;
    }
op()
{
   return "Title"+":"+this.title+" "+"Studio"+":"+this.studio+" "+"Rating"+":"+this.PG
}
get getPG(){
    return this.PG;
}
}

let m1 =new Movie("Casino Royale","Eon Productions","5.5");
console.log(m1.op());
console.log(m1.getPG);

//2 Circle - Class

class Circle  {
    constructor(radius, color)
    {
this.radius=radius;
this.color=color;
    }
    get circle(){
        return (Math.PI*this.radius*Math.pow(1,1)).toFixed(2);
    }
    get circleradius(){
        return (this.radius);
    }
    get circleradiusstr(){
        return ( this.radius +" "+this.color);
    }
    get rad(){
        return ( this.radius)
    }
    set radchange (modifirad){
        this.radius=modifirad;
    }
    get color1(){
        return ( this.color)
    }

    set colorchange (modificolor){
        this.color=modificolor;
    }
    get str(){
            return ("radius = "+this.radius+", color = "+this.color);
    }
    get area(){
        return (Math.PI*this.radius*this.radius).toFixed(2);
    }
    get circumfrerence(){
        return  (2*Math.PI*this.radius).toFixed(2);
    }

}
let c1 =new Circle("1.0","red")

console.log(c1.circle);
console.log(c1.circleradius);

console.log(c1.circleradiusstr);
console.log(c1.rad);

c1.radchange = 5;
console.log(c1.rad)
console.log(c1.color1);
c1.colorchange = "yellow";

console.log(c1.color)

console.log(c1.str.toString());
console.log(c1.circumfrerence);
console.log(c1.area);


//3. Write a “person” class to hold all the details.

class Person {
    constructor( name,dob,course,exp,local)
    {
this.name=name;
this.dob=dob;
this.course=course;
this.exp=exp;
this.local=local;
    }
result(){
    return this.name+" "+this.dob+" "+ this.course+" "+this.exp+" "+this.local;
}

}
let people1 = new Person("gowtham","02apr1993","mechatronics","8yrs","cbe");
console.log(people1.result());

//4. write a class to calculate the uber price.
class Uber {
    constructor(km,){
        this.km=km;

    }
    get getcost(){
        return (this.km*23);
    }
}
let charge = new Uber("10");
console.log(charge.getcost);