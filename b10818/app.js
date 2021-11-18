const fs = require("fs");

const filePath = process.platform === "linux" ? "./input.txt" : "/dev/stdin"; //제 개발환경은 리눅스이기에 input.txt를 앞에 두었습니다.

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; // 실제 백준사이트에 제출할 때는 위에 filePath를 삭제하고 이 부분을 입력하면 됩니다.

let input = fs.readFileSync(filePath).toString().split("\n");

let testCount = +input[0];

let testNumber = input[1].split(" ").map((item) => +item);

//console.log(input);
//console.log(testCount);

solution(input); //받는 값이 3개입니다

function solution(A) {
  let min = 4542127244742; // N의 범위가 -10000000< N < 10000000입니다 겹치지 않게 설정해줍니다
  let max = -10212156484;
  for (let i = 0; i < testCount; i++) {
    if (min >= testNumber[i]) {
      min = testNumber[i];
    }
    if (max <= testNumber[i]) {
      max = testNumber[i];
    }
  }
  console.log(`${min} ${max}`);
}
