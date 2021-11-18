const fs = require("fs");

const filePath = process.platform === "linux" ? "./input.txt" : "/dev/stdin"; //제 개발환경은 리눅스이기에 input.txt를 앞에 두었습니다.

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; // 실제 백준사이트에 제출할 때는 위에 filePath를 삭제하고 이 부분을 입력하면 됩니다.

let input = fs.readFileSync(filePath).toString();

input = +input;

solution(input);

function solution(A) {
  let sum = 0; // sum 이 for 문 안에 들어가 있으면 console.log를 하지 못합니다. for문 밖에 있어야함
  for (i = 1; i <= A; i++) {
    sum = i + sum; //1번쨰 :  0 + 1 = 1           ##  2번쨰 : 3 = 2+1 ...>>
  }
  console.log(sum); // 더하기가 된 sum..
}
