/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const material = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    };
    
    let total = 0;
    s.split('').forEach((num, i) => {
        if (material[num] < material[s[i+1]]) total -= material[num];
        else total += material[num];
    });
    
    return total
};