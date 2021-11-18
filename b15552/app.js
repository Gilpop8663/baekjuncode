const fs = require("fs");

const filePath = process.platform === "linux" ? "./input.txt" : "/dev/stdin"; //제 개발환경은 리눅스이기에 input.txt를 앞에 두었습니다.

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; // 실제 백준사이트에 제출할 때는 위에 filePath를 삭제하고 이 부분을 입력하면 됩니다.

let input = fs.readFileSync(filePath).toString().split("\n");

solution(input);

function solution(A) {
  let answer = ""; // 마지막에 한꺼번에 출력하기 위한 answer 추가
  let testCount = +A[0]; // 테스트 숫자를 맨 처음에 알려줌. +를 붙혀서  Number 타입으로 바꿨습니다.
  for (i = 1; i <= testCount; i++) {
    A[i] = A[i].split(" "); // 1 1 , 12 34, 이렇게 같은 줄에 공백으로 나누어져있어서 스플릿으로 나누어주는 역할입니다.
    A[i][0] = +A[i][0]; // 넘버 타입으로 바꾸는중
    A[i][1] = +A[i][1];
    answer = answer + (A[i][0] + A[i][1] + "\n"); // 매번 콘솔로 출력하면 백준사이트에서 시간초과로 나오므로 "\n" 을 추가하여 줄바꿈을 시켜줍니다.
  }
  console.log(answer); // 정답 출력
}
