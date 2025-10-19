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

var twoSumBetter = function( nums, target ) {

    let numbers   = new Set( nums );
    let positions = [];

    for( let i = 0; i < nums.length; i++ ) {

        let num = nums[i];

        let diff = target - num;

        if( numbers.has( diff ) ) {

            let index = nums.indexOf( diff, i + 1 );

            if( index > -1 ) {

                positions.push( i, index );

                return positions;
            }
        }
    }

    return positions;
}

var twoSumEvenBetter = function( nums, target ) {

    let positions = {};
    let results   = [];

    for( let i = 0; i < nums.length; i++ ) {

        let num  = nums[i];
        let diff = target - num;

        if( diff in positions ) {
            results = [ positions[diff], i ];

            return results;
        }

        positions[num] = i;
    }

    return results;
}

console.log( twoSum( [2,7,11,15], 9 ) );
console.log( twoSumBetter( [2,7,11,15], 9 ) );
console.log( twoSumEvenBetter( [2,7,11,15], 9 ) );

// [0,1]

console.log( twoSum( [3,2,4], 6 ) );
console.log( twoSumBetter( [3,2,4], 6 ) );
console.log( twoSumEvenBetter( [3,2,4], 6 ) );

// [1,2]