/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {

    if( nums.length === 0 ) {
        return 0;
    }

    let starts        = {};
    let ends          = {};
    let startsReverse = {};
    let endsReverse   = {}
    // let chains        = [];
    let chainLengths  = [];
    let processed = {};
    
    for( let i = 0; i < nums.length; i++ ) {

        let num = nums[i];

        if( num in processed ) {
            continue;
        }

        if( num in starts && num in ends ) {

            let indexOfFirstPart = ends[num];
            let indexOfLastPart  = starts[num];

            // Add the last part to the first part (leave the last part orphaned)
            chainLengths[indexOfFirstPart] += chainLengths[indexOfLastPart] + 1;

            // chains[indexOfFirstPart].push(num);
            // chains[indexOfFirstPart].push( ...chains[indexOfLastPart] );

            // Remove the end pointer for the first part
            delete ends[num];
            delete endsReverse[indexOfFirstPart];

            // Remove the start pointer for the last part
            delete starts[num];
            delete startsReverse[indexOfLastPart];

            // Update the end pointer of the last part to the newly combined element
            let endNum = endsReverse[indexOfLastPart];

            ends[endNum] = indexOfFirstPart;
            endsReverse[indexOfFirstPart] = endNum;

            delete endsReverse[indexOfLastPart];
        }
        else if( num in starts ) {

            let index = starts[num];

            chainLengths[index]++;
            // chains[index].unshift( num );

            delete starts[num];
            delete startsReverse[index];

            starts[num - 1] = index;
            startsReverse[index] = num -1;
        }
        else if( num in ends ) {

            let index = ends[num];

            chainLengths[index]++;
            // chains[index].push( num );

            delete ends[num];
            delete endsReverse[index];

            ends[num + 1] = index;
            endsReverse[index] = num + 1;
        }
        else{

            chainLengths.push( 1 );
            // chains.push( [num] );

            let index = chainLengths.length - 1;

            starts[num - 1] = index;
            ends[num + 1] = index;

            startsReverse[index] = num - 1;
            endsReverse[index] = num + 1;
        }
        
        processed[num] = true;
    }
    
    return Math.max( ...chainLengths );
};

console.log( longestConsecutive( [100,4,200,1,3,2] ) );
console.log( longestConsecutive( [0,3,7,2,5,8,4,6,0,1] ) );
console.log( longestConsecutive( [1,0,1,2] ) );
console.log( longestConsecutive( [] ) );
console.log( longestConsecutive( [1] ) );
console.log( longestConsecutive( [-6,-9,8,-8,-1,-3,-6,8,-9,-1,-4,-8,-5,0,1,6,-8,-5,-7,8,-2,-8,4,5,-5,-1,-5] ) );