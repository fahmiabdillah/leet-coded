/**
 * @param {string[]} operations
 * @return {number}
 */

var calPoints= function(operations) {
    let arrBaru = []
    for (let i = 0; i < operations.length; i++){
        if (operations[i] != 'C' && operations[i] != 'D' && operations[i] != '+'){
            let value = parseInt(operations[i])
            arrBaru.push(value)
        }

        if (operations[i] == "C"){
            arrBaru.pop()
        } 
        else if(operations[i] === "D"){
            let value = arrBaru[arrBaru.length - 1] * 2
            arrBaru.push(value)
        }
        else if(operations[i] === "+"){
            let newValue = arrBaru[arrBaru.length - 1] + arrBaru[arrBaru.length - 2]
            arrBaru.push(newValue)
        }
        
    }
    
    let total = arrBaru.reduce((acc, curr) => {
        return acc += curr
    }, 0)
    return total
};