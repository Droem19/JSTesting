/**
 * @Author: Derek Roemhildt
 * @Date: 01/02/2020
 */

//HackerRank 10 Days of Javascript Day 5

//Implement Inheritance by creating a Rectangle class and a Square subclass
//Also, Add a new method 'Area' using a prototype of Rectangle
class Rectangle{
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}
Rectangle.prototype.area = function(){
    return (this.w * this.h);
}

class Square extends Rectangle{
    constructor(x) {
        super(x, x);
    }
}