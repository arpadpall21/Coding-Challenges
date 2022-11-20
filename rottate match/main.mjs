import { rottateMatch } from './rottateMatch.mjs'

const rect1 = [[1,1,1,1,1],
                [2,2,2,2,2],
                [3,3,3,3,3],
                [4,4,4,4,4],
                [5,5,5,5,5]]
const rect1Expect = [[5,5,5,5,5],
                      [4,4,4,4,4],
                      [3,3,3,3,3],
                      [2,2,2,2,2],
                      [1,1,1,1,1]]

const rect2 = [[1,1,1,1],
             [0,0,0,0],
             [1,1,1,1],
             [0,0,0,0]]
const rect2Expect = [[1,0,1,0],
                   [1,0,1,0],
                   [1,0,1,0],
                   [1,0,1,0]]

const rect3 = [[1,1,1,1],
           [0,0,0,0],
           [1,1,1,1]]
const rect3Expect = [[1,0,1],
                 [1,0,1],
                 [1,0,1],
                 [1,0,1]]

const rect4 = [['a','b','a','b','a'],
               ['b','a','b','a','b']]
const rect4Expect = [['a','b'],
                     ['b','a'],
                     ['a','b'],
                     ['b','a'],
                     ['a','b']]

console.log( rottateMatch(rect1, rect1Expect) )   // -> true
console.log( rottateMatch(rect2, rect2Expect) )   // -> true
console.log( rottateMatch(rect3, rect3Expect) )   // -> true
console.log( rottateMatch(rect4, rect4Expect) )   // -> true

console.log( rottateMatch(rect1, rect2Expect) )   // -> false
console.log( rottateMatch(rect4, rect3Expect) )   // -> false
