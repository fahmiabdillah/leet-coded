/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = function(n) {
    // var result = []
    // for(let i = 0 ; i < n ; ){
    //     console.log((++i % 3 ? "" : "Fizz") + (i % 5 ? "" : "Buzz") || i)
    // }
    // return result
    
    var result = []
for (var i = 1 ; i < n+1; i++) {
    if(!(i % 3) && !(i % 5)) {
        result.push('FizzBuzz')
    } else if(!(i % 3)) {
        result.push('Fizz')
    } else if(!(i % 5)) {
        result.push('Buzz')
    } else {
        result.push(i.toString())
    }
}
    return result
};