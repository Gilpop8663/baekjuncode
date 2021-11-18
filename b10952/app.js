const fs = require("fs");

const filePath = process.platform === "linux" ? "./input.txt" : "/dev/stdin"; //제 개발환경은 리눅스이기에 input.txt를 앞에 두었습니다.

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; // 실제 백준사이트에 제출할 때는 위에 filePath를 삭제하고 이 부분을 입력하면 됩니다.

let input = fs.readFileSync(filePath).toString().split("\n");

solution(input);

function solution(A) {
  let i = 0; // i를 0으로 해준다
  answer = "";
  while (A[i]) {
    A[i] = A[i].split(" "); // input 의 각 줄의 공백을 없애준다.
    A[i][0] = Number(A[i][0]); // number 타입으로 변경
    A[i][1] = Number(A[i][1]);
    if (A[i][0] + A[i][1] > 0) {
      // 0 + 0 의 유형도 있었으니 if 문으로 제외시켜준다.
      answer = answer + (A[i][0] + A[i][1]) + "\n";
    }
    i++;
  }
  console.log(answer);
}
