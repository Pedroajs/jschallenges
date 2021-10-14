// const insertion_Sort = (nums) => {
//     for (let i = 1; i < nums.length; i++) {
      
//       let currentNum = i - 1;
//       let comparedNum = nums[i];

//       while (currentNum >= 0 && nums[currentNum] > comparedNum) {
//         nums[currentNum + 1] = nums[currentNum];
//         currentNum--;
//       }
//       nums[currentNum + 1] = comparedNum;
//     } 
//     return nums;
//   }
// console.log(insertion_Sort([3,2,1]));

let arr = [1,2,3,4,5];


let newArr = arr.map(item=> item + 1);

console.log(arr, newArr);