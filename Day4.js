/**
 * @Author: Derek Roemhildt
 * @Date: 12/31/2019
 */

//HackerRank 10 Days of Javascript Day 4

//Create a function that models a Rectangle Object taking in length and width and calculating area and perimeter
function Rectangle(a,b){
    return {
        length: a,
        width: b,
        perimeter: 2 * (a + b),
        area: a * b
    }
}

//Create a function that takes an array of objects(each contains 2 int values) and returns the number of objects with the same x & y values
function getCount(objects){
    let count = 0;
    for(let i = 0; i < objects.length; i++){
        if(objects[i].x == objects[i].y) {
            count += 1;
        }
    }
    return count;
}

//Create a Polygon class that takes an array of numbers
//Create a perimeter() method
class Polygon{
    constructor(arr) {
        this.arr = arr;
    }
    perimeter(){
        let perim = 0;
        for(let i = 0; i < this.arr.length; i++){
            perim += this.arr[i];
        }
        return perim;
    }
}