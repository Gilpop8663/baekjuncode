const fs = require("fs");

const filePath = process.platform === "linux" ? "./input.txt" : "/dev/stdin"; //제 개발환경은 리눅스이기에 input.txt를 앞에 두었습니다.

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; // 실제 백준사이트에 제출할 때는 위에 filePath를 삭제하고 이 부분을 입력하면 됩니다.

let input = fs
  .readFileSync(filePath)
  .toString()
  .split(" ")
  .map((item) => +item); // .split()이 붙어있으면 오류가 납니다 틀렸다고 나와요

//console.log(input);

solution(input);

function solution(A) {
  let x = 0;
  let y = 0;
  x = A[2] - A[0]; // (w,h)에서 x ,y 의 경계선까지의 최솟값
  y = A[3] - A[1]; // h -y
  if (A[0] < x) {
    // (0,0)에서 x,y의 경계선까지의 최솟값
    x = A[0];
  }
  if (A[1] < y) {
    y = A[1];
  }
  console.log(x < y ? x : y);
}
