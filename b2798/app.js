const fs = require("fs");

const filePath = process.platform === "linux" ? "./input.txt" : "/dev/stdin"; //제 개발환경은 리눅스이기에 input.txt를 앞에 두었습니다.

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; // 실제 백준사이트에 제출할 때는 위에 filePath를 삭제하고 이 부분을 입력하면 됩니다.

let input = fs.readFileSync(filePath).toString().split("\n"); // split을 없앴습니다.

let line = input[0].split(" ").map((item) => +item);

const testCount = line[0]; // 실행 횟수
const goalNum = line[1]; // 목표하는 점수

//console.log(testCount, goalNum);
//console.log(input[1]);

solution(input);

function solution(A) {
  let nums = A[1].split(" ").map((item) => +item); // 숫자 입력값
  nums = nums.sort(function (a, b) {
    return a - b;
  }); // 숫자 입력값 숫자크기대로 정렬
  //console.log(nums);
  let max = 0;
  for (let i = 0; i < testCount - 2; i++) {
    // nums[0] ... nums[testCount -2 ]까지 돌린다.
    for (let j = i + 1; j < testCount - 1; j++) {
      //nums[i+1] ... nums[testCount -1 ]까지 돌린다.
      for (let k = i + 2; k < testCount; k++) {
        //nums[i+2] ... nums[testCount]까지 돌린다.
        let sum = nums[i] + nums[k] + nums[j];
        if ((sum <= goalNum) & (sum > max)) {
          // 목표점수보다 작거나 같아야 하고 max보다 커야함
          max = sum;
        }
      }
    }
  }
  console.log(max); // 3가지의 숫자를 더해야 함으로 3개의 for문을 통해 풀었습니다.
}

//nums[1] + nums[2] + mums[3] <= goalNum

//console.log(nums[i]);
