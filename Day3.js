/**
 * @Author: Derek Roemhildt
 * @Date: 12/30/2019
 */

//HackerRank 10 Days of Javascript Day 3

//Create a function that returns the 2nd largest int in an array
function SecondLargestNoDuplicates(nums){
    var x = nums.length;
    nums.sort() //sort the array
    nums.length = x - 1; //Shorten the array by 1 to get rid of the largest number
    document.write(nums.pop()); //pop the top number off the modified array
}
function getSecondLargest(nums){
    var largest = 0;
    var second = 0;
    for(let i = 0; i < nums.length; i++){
        if (nums[i] > largest){ //If the current num is the largest - set the current largest to second and the current num to largest
            second = largest
            largest = nums[i];
        }
        if (nums[i] > second && nums[i] < largest){
            second = nums[i];
        }
    }
    return second;
}

//Create a function that reverses a given string s
/**
 * Use the split, reverse, and join methods.
 * If an exception is thrown, catch it and print the error msg on a new line. Return the original string
 * If no exception is thrown, print the reversed string s on a new line
 */
function reverseString(s){
    try{
        s = s.split('').reverse().join(''); //Split the string into an array of chars, reverse the array, rejoin the array to a string
    }
    catch (e){
        return e.message;
    }
    finally{
        return s;
    }
}

//Create a function that checks a given integer and tests if it's positive
/**
 * If a < 0 throw the error "Negative Error"
 * If a = 0 throw the error "Zero Error"
 * If a > 0 return the string "YES"
 */
function isPositive(a){
    if (a === 0){
        throw new Error("Zero Error");
    }
    if (a < 0){
        throw new Error("Negative Error");
    }
    return "YES";
}