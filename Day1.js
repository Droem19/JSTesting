/**
 * @Author: Derek Roemhildt
 * @Date: 12/30/2019
 */

//HackerRank 10 Days of Javascript Day 1

//Create a function that returns the factorial of any passed integer
function factorial(n){
    for(var i = n -1; i > 0; i--){
        n = (n * (i));
    }
    return n;
}

//Create a function that returns the area of a circle with a given radius
//Area = PI * R^2
const PI = Math.PI;
function area(r){
    var area = PI * (r * r);
    return area;
}

//Create a function that returns the perimeter of a circle with a given radius
//Perimeter = 2 * PI * R
function perimeter(r){
    var perim = 2 * PI * r;
    return perim;
}