const fs = require("fs");

const filePath = process.platform === "linux" ? "./input.txt" : "/dev/stdin"; //제 개발환경은 리눅스이기에 input.txt를 앞에 두었습니다.

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; // 실제 백준사이트에 제출할 때는 위에 filePath를 삭제하고 이 부분을 입력하면 됩니다.

let input = fs.readFileSync(filePath).toString().split(" "); // split을 없앴습니다.

input = input.map((item) => +item);

//console.log(input);

solution(input);

function solution(A) {
  let n = 0;

  // A[0] * (n+1) - A[1] *n >= A[2]
  // (A[2] - A[0]) <= (A[0] - A[1]) * n
  // (A[2] - A[0]) / A[0] - A[1] <= n
  n = Math.ceil((A[2] - A[0]) / (A[0] - A[1])); // Math.ceil을 맨 가장자리 ()에 사용하는것에 주의해야 함
  //n = (A[2] - A[0]) / min;
  console.log(n + 1);
}
