/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    let positions = [];
    
    for( let i = 0; i < nums.length; i++ ) {

        let num = nums[i];

        for( let c = (i + 1); c < nums.length; c++ ) {

            let num2 = nums[c];

            if( ( num + num2 ) === target ) {

                positions.push( i, c );
                
                return positions;
            }
        }
    }

    return positions;
};

console.log( twoSum( [2,7,11,15], 9 ) );

// [0,1]