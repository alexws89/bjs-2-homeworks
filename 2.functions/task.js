function getArrayParams(...arr) {
let min = Math.min(...arr);
let max = Math.max(...arr);
let sum = 0;

for (let i of arr) {
 sum += i;
}

let avg = sum / arr.length;
avg = +avg.toFixed(2);
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length===0) return 0;
  let sum = 0;
  for (let i of arr) {
    sum += i;
   }
   return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length===0) return 0;
  let min = Math.min(...arr);
  let max = Math.max(...arr);
    
    return (max-min);
}

function differenceEvenOddWorker(...arr) {
  if (arr.length===0) return 0;
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i of arr) {
    if (i%2 ===0){
      sumEvenElement += i;
    }
    else {
      sumOddElement += i;
    }
  }

  return (sumEvenElement - sumOddElement);
}

function averageEvenElementsWorker(...arr) {
  if (arr.length===0) return 0;
  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i of arr) {
    if (i%2 ===0){
      sumEvenElement += i;
      countEvenElement += 1;
    }
  }
  return (sumEvenElement / countEvenElement);
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i of arrOfArr){
   let arr = func(...i);
    if (arr > maxWorkerResult) {
      maxWorkerResult = arr;
    }
  }
  return maxWorkerResult;
}

const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];
console.log(makeWork(arr, summElementsWorker)); // максимум из 61, 206, 328, 284 => 328
console.log(makeWork(arr, differenceMaxMinWorker)); // максимум из 10, 86, 44, 66 => 86
console.log(makeWork(arr, differenceEvenOddWorker)); // максимум из 39, -6, -184, 92 => 92
console.log(makeWork(arr, averageEvenElementsWorker)); // максимум из 12.5, 33.333, 72, 62.666 => 72