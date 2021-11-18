const fs = require("fs");

const filePath = process.platform === "linux" ? "./input.txt" : "/dev/stdin"; //제 개발환경은 리눅스이기에 input.txt를 앞에 두었습니다.

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; // 실제 백준사이트에 제출할 때는 위에 filePath를 삭제하고 이 부분을 입력하면 됩니다.

let input = fs.readFileSync(filePath).toString(); // split을 쓰면 시간초과로 오류가 납니다!

input = +input;

solution(input);

function solution(A) {
  let x = Math.floor(A / 10);
  let y = A % 10;
  let sum = 0;
  let newSum = 0.054848; // A === newSum 이 같을수도 있으므로 최솟값으로 무작위로 해주었습니다
  let newY = 0;
  let i = 0;
  while (A !== newSum) {
    sum = x + y; // 0 +2 = 2            & 2 +2 = 4
    newY = sum % 10; // 2               & newY = 2
    newSum = `${y}${newY}`; // 22       & newSum = 24
    newSum = +newSum; //
    x = Math.floor(newSum / 10); // x=2    &  x= 2
    y = newSum % 10; // y=2                & y = 4
    i++;
  }
  console.log(i);
}
