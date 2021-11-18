const fs = require("fs");

const filePath = process.platform === "linux" ? "./input.txt" : "/dev/stdin"; //제 개발환경은 리눅스이기에 input.txt를 앞에 두었습니다.

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; // 실제 백준사이트에 제출할 때는 위에 filePath를 삭제하고 이 부분을 입력하면 됩니다.

let input = fs.readFileSync(filePath).toString().split("\n");

let testCount = +input[0];

input = input[1].split(" ").map((item) => +item);

//console.log(testCount, input);

solution(input);

function solution(A) {
  let max = -12456; // max값의 변수 설정
  let Nums = 0; // 나오는 숫자들을 전부 더해줄 변수 설정
  for (let i = 0; i < testCount; i++) {
    if (max < A[i]) {
      max = A[i]; // 최댓값 구하기 위한 for if
    }
  }
  for (let j = 0; j < testCount; j++) {
    Nums = Nums + (A[j] / max) * 100; // 새로 나온 점수들의 합을 구함
  }
  console.log(Nums / testCount); // 점수들의 합 / 더한 점수의 개수 == 평균
}
