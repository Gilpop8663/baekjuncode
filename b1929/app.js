const fs = require("fs");

const filePath = process.platform === "linux" ? "./input.txt" : "/dev/stdin"; //제 개발환경은 리눅스이기에 input.txt를 앞에 두었습니다.

//const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; // 실제 백준사이트에 제출할 때는 위에 filePath를 삭제하고 이 부분을 입력하면 됩니다.

let input = fs.readFileSync(filePath).toString().split(" "); // split을 쓰면 시간초과로 오류가 납니다!
input = input.map((item) => +item);

//console.log(input);

solution(input);

function solution(A) {
  let answer = "";
  for (let i = A[0]; i <= A[1]; i++) {
    // 입력값 A[0] 이상 A[1] 이하이다.
    if (i === 1) {
      // 1은 소수가 아니므로 통과한다
      continue;
    } else if ((i === 2) | (i === 3) | (i === 5) | (i === 7)) {
      // 2,3,5,7 에라토스테네스의 체의 방법을 이용했다.
      answer += `${i}\n`;
    } else if ((i % 2 === 0) | (i % 3 === 0) | (i % 5 === 0) | (i % 7 === 0)) {
      // 2,3,5,7 중 하나라도 나머지가 없다면 소수가 아니다.
      continue;
    } else {
      // 위의 에라토스테네스의 체를 통과한 숫자들이다.
      let decimal = 0; //소수판별 변수
      for (let n = 2; n <= Math.sqrt(i); n++) {
        // n=2부터 나누고 i 숫자의 제곱근까지만 범위를 둔다. 그 이유는 4 = 2*2 4의 제곱근은 2  8의 제곱근 2 루트 2 이므로 시간복잡도의 효율을 위해서 범위를 가장 효과적으로 줄일수 있다.
        //console.log(n);
        if (Number.isInteger(i / n)) {
          // i 숫자가 n으로 나누었을 때 하나라도 정수가 나온다면 소수가 아니다.
          //console.log(i);
          decimal++;
        }
      }
      if (decimal === 0) {
        // decimal의 값이 0이면 소수이다.
        answer += `${i}\n`;
      }
    }
  }
  answer = answer.split("\n"); // 마지막에 공백이 출력되는 것을 편집해주는 과정이다.
  answer.pop();
  answer = answer.join("\n");
  console.log(answer);
}
