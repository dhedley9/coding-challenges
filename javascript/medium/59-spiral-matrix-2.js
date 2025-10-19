/**
 * Build a spiral matrix
 * @param {number} n - positive integer to generate an n x n matrix
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    
    var matrix = new Array( n ).fill( null ).map( () => [] );

    matrix = generateMatrixLayer( matrix, n );
    
    return matrix;
};

/**
 * Recursively generate the layers of the matrix
 * A layer being the one full circumference
 * 
 * @param {*} matrix - the current matrix
 * @param {*} n  - the number of elements per row
 * @param {*} layerNum - how many layers deep in the
 * @param {*} offset - the number preceding the first number of this layer
 * @returns 
 */
var generateMatrixLayer = function( matrix, n, layerNum = 0, offset = 0 ) {

    // Halt the recursion
    if( n <= 0 ) {
        return matrix;
    }

    let perimeter;

    // Perimeter is the number of elements on the outside for the current layer
    if( n === 1 ) {
        perimeter = 1;
    }
    else{
        perimeter = ( 2 * n ) + ( 2 * ( n - 2 ) );
    }
    
    // Keep track of which side and position we are
    let isLeft    = false;
    let pos       = 0;

    // Declare i here so we know what number it finished on outside the loop
    let i = 1;

    for( i = 1; i <= perimeter; i++ ) {

        let num = i + offset;

        if( isTop( i, n ) ) {

            // The array we need to add the items to is matrix[layerNum]
            // As we're going along the top, the items will be sequential (1, 2, 3 etc.)
            // If there are already items in the array (we're not at the first layer)
            // - we need to insert the items in the middle of the existing items
            // - the number of existing items will always be 2 * layerNum

            let start = matrix[layerNum].length - layerNum;

            matrix[layerNum].splice( start, 0, num );

            // If we're going along the top, the next side will always be the right side
            pos    = 0;
            isLeft = false;
        }
        else if( isBottom( i, n ) ) {

            // The array we need to add the items is the last array minus the number of layers we've already completed
            // (these arrays will be full already)
            // As we're going along the bottom, the items will be reversed (7, 6, 5 etc.)
            // If there are already items in the array (we're not at the first layer)
            // - we need to insert the items in the middle of the existing items

            let index = matrix.length - layerNum - 1;
            let start = layerNum;
            
            matrix[index].splice( start, 0, num );

            pos    = 0;
            isLeft = true;
        }
        else{

            let index;

            // If we're on the left-hand side, we're going bottom to top
            if( isLeft ) {
                index = matrix.length - layerNum - pos - 2;
            }
            // Otherwise we're going top to bottom
            else{
                index = pos + 1 + layerNum;
            }
            
            matrix[index].splice( layerNum, 0, num );

            pos++;
        }
    }

    // Generate the next layer
    return generateMatrixLayer( matrix, n - 2, layerNum + 1, i + offset - 1 );
}

var isTop = function( i, n ) {

    return i <= n;
}

var isBottom = function( i, n ) {

    let outside = ( 2 * n ) + ( 2 * ( n - 2 ) );

    let upperBound = outside - ( n - 2 );
    let lowerBound = outside - ( n - 2 ) - n;

    return i <= upperBound && i > lowerBound;
}

console.log( generateMatrix( 1 ) );
console.log( generateMatrix( 2 ) );
console.log( generateMatrix( 3 ) );
console.log( generateMatrix( 4 ) );
console.log( generateMatrix( 5 ) );