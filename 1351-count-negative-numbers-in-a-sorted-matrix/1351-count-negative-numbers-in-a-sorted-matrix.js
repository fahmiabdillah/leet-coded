/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) 
{
  let count = 0
  
  for (let row = 0; row < grid.length; row++){
      for (let col = 0; col < grid[0].length; col++){
          const element = grid[row][col]
          if (element < 0) count++
      }
  }
    return count
};

// function binarySearch (arr){
//     let left = 0;
//     let right = arr.length - 1;
    
//     while (left <= right){
//         let mid = Math.floor((left + right) / 2);
        
//         if (arr[mid] > 0){
//             right = mid - 1;
//         } else{
//             left = mid + 1;
//         }
//     }
//     return left;
// }

// var countNegatives = function (grid){
//     let res = 0;
//     for (let i = 0; i < grid.length; i++){
//         res += grid[i].length - binarySearch(grid[i]);
//     }
    
//     return res;
// };