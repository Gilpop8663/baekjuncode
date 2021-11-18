const fs = require("fs");

const filePath = process.platform === "linux" ? "./input.txt" : "/dev/stdin"; //제 개발환경은 리눅스이기에 input.txt를 앞에 두었습니다.

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; // 실제 백준사이트에 제출할 때는 위에 filePath를 삭제하고 이 부분을 입력하면 됩니다.

let input = fs.readFileSync(filePath).toString().split("\n");

let example = input[0].split(" ").map((item) => +item); //첫번째 줄 split 실행조건들
input = input[1].split(" ").map((item) => +item); // 두번째 줄 split 입력값

let Num = +example[1]; // X의 역할 이 숫자보다 작은 숫자를 찾아낼 것임.
let testCount = +example[0]; // 전체 실행될 숫자의 개수

let answer = "";
solution(input);
function solution(A) {
  for (let i = 0; i < testCount; i++) {
    if (A[i] < Num) {
      answer = answer + A[i] + " ";
    }
  }
  console.log(answer);
}
