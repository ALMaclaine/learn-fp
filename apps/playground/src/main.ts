import * as A from 'fp-ts/lib/Array';
import * as R from 'fp-ts/lib/Record';
import * as E from 'fp-ts/lib/Either';
import * as O from 'fp-ts/lib/Option';
import { flow, pipe } from 'fp-ts/function';
import { has } from 'fp-ts/lib/Record';
import { IO } from 'fp-ts/IO';

const arr = [2, 7, 11, 15];
// const twoSum = function(nums, target) {
//   const seen = {};
//   for(let i = 0; i < nums.length; i++){
//     const firstNum = nums[i];
//     const secondNum = target - firstNum;
//     if(secondNum in seen){
//       return [seen[secondNum], i];
//     }
//     seen[firstNum] = i;
//   }
//   return [0, 0];
// };

function leetCode001() {
  const random: IO<number> = () => Math.random();
  console.log(random());
}

// main();
console.log(leetCode001());
