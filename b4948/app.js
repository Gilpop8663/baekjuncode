const fs = require("fs");

const filePath = process.platform === "linux" ? "./input.txt" : "/dev/stdin"; //제 개발환경은 리눅스이기에 input.txt를 앞에 두었습니다.

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; // 실제 백준사이트에 제출할 때는 위에 filePath를 삭제하고 이 부분을 입력하면 됩니다.

let input = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((item) => +item);

//console.log(input);
solution(input);

function solution(A) {
  for (let i = 0; i < A.length; i++) {
    // 입력값을 받는 for문
    if (A[i] === 0) {
      // 0이라면 for문을 끝낸다.
      break;
    }
    //console.log(A[i]);
    let decimal = 0; // 소수 숫자세기위한 변수
    for (let j = A[i] + 1; j <= A[i] * 2; j++) {
      // 자연수 n보다 크고 2n보다 작거나 같은 조건입니다.
      //console.log(j);

      if ((j === 2) | (j === 3) | (j === 5) | (j === 7)) {
        // 2,3,5,7은 소수입니다.
        decimal++;
      } else if (
        // 에라토스테네스의 체를 이용했습니다.
        (j % 2 === 0) |
        (j % 3 === 0) |
        (j % 5 === 0) |
        (j % 7 === 0)
      ) {
        continue;
      } else {
        let count = 0; // k로 j를 나누었을 때 정수가 된다면 소수가 아닙니다.
        for (let k = 2; k <= Math.sqrt(j); k++) {
          if (Number.isInteger(j / k)) {
            count++;
          }
        }
        if (count === 0) {
          //count가 0이라면 소수입니다.
          decimal++;
        }
      }
    }
    console.log(decimal);
  }
}
