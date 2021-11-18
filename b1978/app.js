const fs = require("fs");

const filePath = process.platform === "linux" ? "./input.txt" : "/dev/stdin"; //제 개발환경은 리눅스이기에 input.txt를 앞에 두었습니다.

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; // 실제 백준사이트에 제출할 때는 위에 filePath를 삭제하고 이 부분을 입력하면 됩니다.

let input = fs.readFileSync(filePath).toString().split("\n"); // split을 쓰면 시간초과로 오류가 납니다!

//console.log(input);

solution(input);

function solution(A) {
  A[1] = A[1].split(" ").map((item) => +item);
  let decimal = 0;
  for (let i = 0; i < +A[0]; i++) {
    //console.log(A[1][i]);
    let right = true;
    let n = 1;
    let howMany = 0;
    while (right) {
      if ((n === A[1][i]) | (A[1][i] === 1)) {
        // n이 입력값과 같아지거나 입력값이 1일때 while문을 멈춤
        right = false;
        break;
      } else {
        if (Number.isInteger(A[1][i] / n)) {
          // n으로 나누었을 때 정수이면 howMany 를 +1해줌
          howMany++;
        }
        n++;
      }
    }
    if (howMany === 1) {
      // n이 1이면 자기자신만 나누어진다는 뜻이므로 소수임
      decimal++;
    }
    //console.log(howMany);
  }
  console.log(decimal);
}
