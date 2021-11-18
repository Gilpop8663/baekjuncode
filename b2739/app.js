const fs = require("fs");

const filePath = process.platform === "linux" ? "./input.txt" : "/dev/stdin"; //제 개발환경은 리눅스이기에 input.txt를 앞에 두었습니다.

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; // 실제 백준사이트에 제출할 때는 위에 filePath를 삭제하고 이 부분을 입력하면 됩니다.

let input = fs.readFileSync(filePath).toString(); // .split("\n") 을 없애야 백준사이트에서 답으로 인정해줍니다. (값이 하나인데 split 기능을 이용해서 오류가 나는 것 같습니다)

input = +input;

solution(input);

function solution(A) {
  for (let i = 1; i < 10; i++) {
    console.log(`${A} * ${i} = ${A * i}`);
  }
}
