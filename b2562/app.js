const fs = require("fs");

const filePath = process.platform === "linux" ? "./input.txt" : "/dev/stdin"; //제 개발환경은 리눅스이기에 input.txt를 앞에 두었습니다.

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; // 실제 백준사이트에 제출할 때는 위에 filePath를 삭제하고 이 부분을 입력하면 됩니다.

let input = fs.readFileSync(filePath).toString().split("\n");

input = input.map((item) => +item);

//console.log(input);

solution(input);

function solution(A) {
  let max = -15674876;
  let maxI = 0;
  for (let i = 0; i < A.length; i++) {
    if (max < A[i]) {
      max = A[i];
      maxI = i + 1; // +1을 한 이유는 i가 0부터 시작하여서 1이 모자라게 나옵니다.
    }
  }
  console.log(max); // 최댓값
  console.log(maxI); //최대값이 나온 i의 순서
}
