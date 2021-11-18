const fs = require("fs");

const filePath = process.platform === "linux" ? "./input.txt" : "/dev/stdin"; //제 개발환경은 리눅스이기에 input.txt를 앞에 두었습니다.

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; // 실제 백준사이트에 제출할 때는 위에 filePath를 삭제하고 이 부분을 입력하면 됩니다.

let input = fs.readFileSync(filePath).toString().split("\n");

input = input[0];

input = input.split(" ").map((item) => +item);

// console.log(input);

solution(input[0], input[1]);

function solution(A, B) {
  if (A > B) {
    return console.log(">");
  } else if (A < B) {
    return console.log("<");
  } else if (A === B) {
    return console.log("==");
  }
}
