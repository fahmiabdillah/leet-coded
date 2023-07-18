/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const left = [];
    const pare = {
        '(':')',
        '{':'}',
        '[':']'
    };
    for (let i = 0; i < s.length; i++){
        if (s[i] === '(' || s[i] === '{' || s[i] === '['){
            left.push(s[i]);
        } else if (pare[left.pop()] !== s[i]){
            return false
        }
    }
    return left.length ? 0 : 1;
};