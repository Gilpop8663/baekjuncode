const fs = require("fs");

const filePath = process.platform === "linux" ? "./input.txt" : "/dev/stdin"; //제 개발환경은 리눅스이기에 input.txt를 앞에 두었습니다.

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; // 실제 백준사이트에 제출할 때는 위에 filePath를 삭제하고 이 부분을 입력하면 됩니다.

let input = +fs.readFileSync(filePath).toString();

//console.log(input);

solution(input);

function solution(A) {
  let n = 1;
  let right = true;
  while (right) {
    if (A === 1) {
      // A가 1이 된다면 while문을 중단시킵니다.
      right = false;
      break;
    }
    if (Number.isInteger(A / n) & (n !== 1)) {
      // A/n이 정수라면 나누어진다는 뜻이고 n=1이 아닐때 console.log(n) 그리고 A를 n으로 나누어주고 while문을 반복 했습니다
      console.log(n);
      A = A / n;
      n = 1;
    }
    n++;
  }
}
