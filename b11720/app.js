const fs = require("fs");

const filePath = process.platform === "linux" ? "./input.txt" : "/dev/stdin"; //제 개발환경은 리눅스이기에 input.txt를 앞에 두었습니다.

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; // 실제 백준사이트에 제출할 때는 위에 filePath를 삭제하고 이 부분을 입력하면 됩니다.

let input = fs.readFileSync(filePath).toString().split("\n");

let testCount = +input[0];
input = input[1]; // 문자열로 받아야한다.

//console.log(input);

solution(input);

function solution(A) {
  let sum = 0;
  for (let k in A) {
    //console.log(A[k]);
    sum = sum + Number(A[k]); // A[k] 는 입력값의 54321 을 5, 4, 3, 2, 1, 따로 출력해서 sum에 더하는 방법을 썻다.
  }
  console.log(sum);
}
