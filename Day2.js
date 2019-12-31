/**
 * @Author: Derek Roemhildt
 * @Date: 12/30/2019
 */

//HackerRank 10 Days of Javascript Day 2

//Create a function that returns a letter grade based on the given score
/**
 * If the score falls in the following range - Output the correct grade
 * 0-5 = F
 * 6-10 = E
 * 11-15 = D
 * 16-20 = C
 * 21-25 = B
 * 26-30 = A
 */
function grade(score){
    const Letters = 'FEDCBA'
    //Take the given score -1, divide by 5 (grade intervals are in 5s), truncate the answer with ~~
    // Ex: 20 - 1 = 19 --> 19/5 = 3.8 --> ~~3.8 = 3 --> Letters[3] = C
    return Letters[~~((score-1)/5)];
}

//Create a function that returns a letter A,B,C,D depending on the first letter of the given string
/**
 * If the given string begins with one of the following - return the proper letter
 * a,e,i,o,u = A
 * b,c,d,f,g = B
 * h,j,k,l,m = C
 * n,p,q,r,s,t,v,w,x,y,z = D
 */
function getLetter(s){
    let letter = "START";
    const setA = 'aeiou';
    const setB = 'bcdfg';
    const setC = 'hjklm';
    const setD = 'npqrstvwxyz';
    //Check the letter sets against the 1st char of the given string and return the correct letter
    switch(true) {
        case setA.includes(s[0]):
            letter = 'A';
            break;
        case setB.includes(s[0]):
            letter = 'B';
            break;
        case setC.includes(s[0]):
            letter = 'C';
            break;
        case setD.includes(s[0]):
            letter = 'D';
            break;
        default:
            letter = 'BAD INPUT';
            break;
    }
    return letter;
}

//Create a function that takes a string and prints out all vowels on a new line in the order they appear and all the consonants after
function vowelsAndConsonants(s) {
    const vowels = 'aeiou';
    var consonants = '';
    //Ideally this function would log the letters to console, but to keep things similar I have printed them to the doc.
    for(var i = 0; i < s.length; i++) {
        if(vowels.includes(s[i])){
            document.write(s[i] + "<br>");
        }
        else{
            consonants += s[i] + "<br>";
        }
    }
    document.write(consonants);
}