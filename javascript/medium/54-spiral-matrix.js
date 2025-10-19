/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function( matrix ) {

    let result = [];

    let reverse = false;
    
    while( matrix.length > 0 ) {

        let index  = reverse ? matrix.length -1 : 0;
        let length = matrix[index].length;

        for( let i = 0; i < length; i++ ) {
            
            let val = reverse ? matrix[index].pop() : matrix[index].shift();

            if( val !== undefined ) {
                result.push( val );
            } 
        }

        if( reverse ) {
            matrix.pop();
        }
        else{
            matrix.shift();
        }
        
        for( let c = 0; c < matrix.length; c++ ) {

            let val = reverse ? matrix[ ( matrix.length - c - 1 ) ].shift()  : matrix[c].pop();
            
            if( val !== undefined ) {
                result.push( val );
            }   
        }

        reverse = !reverse;
    }

    return result;
};


const testMatrix1 = [[1,2,3],[4,5,6],[7,8,9]];
const testMatrix2 = [[7],[9],[6]];
const testMatrix3 = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16],[17,18,19,20],[21,22,23,24]];

console.log( spiralOrder( testMatrix1 ) );
console.log( spiralOrder( testMatrix2 ) );
console.log( spiralOrder( testMatrix3 ) );