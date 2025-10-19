/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {

    let original    = new ListNode( 0 );
    let element     = original;
    let prevElement = null;
    let carry       = 0;

    while( l1 || l2 || carry ) {

        let num1 = l1 ? l1.val : 0;
        let num2 = l2 ? l2.val : 0;

        let sum  = num1 + num2 + carry;

        sum = sum.toString();
        sum = sum.split('');

        let digit = parseInt( sum.pop() );

        carry = sum.length ? parseInt( sum.join() ) : 0;

        element.val = digit;

        if( prevElement ) {
            prevElement.next = element;
        }

        prevElement = element;
        element     = new ListNode( 0 );

        l1 = l1 && l1.next ? l1.next : null;
        l2 = l2 && l2.next ? l2.next : null;
    }

    return original;

    // Original attempt below
    // Failed on larger numbers due to .toString() converting standard form literally
    
    // let num1 = '';
    // let num2 = '';

    // while( l1 || l2 ) {

    //     if( l1 ) {
    //         num1 = l1.val + num1;
    //     }
        
    //     if( l2 ) {
    //         num2 = l2.val + num2;
    //     }

    //     if( l1 && l1.next ) {
    //         l1 = l1.next;
    //     }
    //     else{
    //         l1 = null;
    //     }

    //     if( l2 && l2.next ) {
    //         l2 = l2.next;
    //     }
    //     else{
    //         l2 = null;
    //     }
    // }
    
    // let total = parseInt( num1 ) + parseInt( num2 );
    // // total = total.toString();

    // console.log( total );

    // let original    = new ListNode( 0 );
    // let element     = original;
    // let prevElement = null;

    // for( let i = total.length; i > 0; i-- ) {

    //     let digit = parseInt( total[i-1] );

    //     element.val = digit;

    //     if( prevElement ) {
    //         prevElement.next = element;
    //     }

    //     prevElement = element;
    //     element     = new ListNode( 0 );
    // }

    // return original;
};

/**
 * Wrapper not part of the actual solution, but to emulate the class that exists on Leetcode
 * @param {array} l1 
 * @param {array} l2 
 * @returns {ListNode}
 */
var addTwoNumbersWrap = function( l1, l2 ) {

    l1 = arrayToLinkedList( l1 );
    l2 = arrayToLinkedList( l2 );

    return addTwoNumbers( l1, l2 );
} 

/**
 * Helper not part of the actual solution, but to enable testing outside of Leetcode
 * @param {*} arr 
 * @returns 
 */
function arrayToLinkedList( arr ) {

    let element = new ListNode( 0 );
    let current = element;

    for( let i = 0; i < arr.length; i++ ) {

        current.val  = arr[i];

        if( i !== arr.length - 1 ) {
            current.next = new ListNode( 0 );

            current = current.next;
        }
    }

    return element;
}


console.log( addTwoNumbersWrap( [2,4,3], [5,6,4] ) );

// [7,0,8]

// console.log( addTwoNumbersWrap( [0], [0] ) );

// [0]

// console.log( addTwoNumbersWrap( [9,9,9,9,9,9,9], [9,9,9,9] ) );

// [8,9,9,9,0,0,0,1]

// console.log( addTwoNumbersWrap( [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], [5,6,4] ) );