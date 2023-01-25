
// You should implement your task here.

module.exports = function towelSort (matrix) {
   
  let result = [];
  if (arguments.length == 0 || matrix.length == 0) {
    return [] 
  } else {
    for (let i=0; i<matrix.length;i++){
      if( i%2 !== 0) {
          matrix[i] = matrix[i].reverse();
          result.push(matrix[i]);
      } else {
          result.push(matrix[i])
      }
      
      }
      return (result.join(",").split(","));
  }
  
  
}
