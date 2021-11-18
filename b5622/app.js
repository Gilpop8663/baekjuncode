const fs = require("fs");

const filePath = process.platform === "linux" ? "./input.txt" : "/dev/stdin"; //제 개발환경은 리눅스이기에 input.txt를 앞에 두었습니다.

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; // 실제 백준사이트에 제출할 때는 위에 filePath를 삭제하고 이 부분을 입력하면 됩니다.

let input = fs.readFileSync(filePath).toString();

solution(input);

function solution(A) {
  let count = 0;
  for (let i = 0; i < A.length; i++) { // for문을 A의 글자수 만큼 돌린다.
    //console.log(A[i]);
    if (A[i] === "1") {
      count = count + 2;
    } else if ((A[i] === "A") | (A[i] === "B") | (A[i] === "C")) {
      count = count + 3;
    } else if ((A[i] === "D") | (A[i] === "E") | (A[i] === "F")) {
      count += 4;
    } else if ((A[i] === "H") | (A[i] === "I") | (A[i] === "G")) {
      count += 5;
    } else if ((A[i] === "J") | (A[i] === "K") | (A[i] === "L")) {
      count += 6;
    } else if ((A[i] === "M") | (A[i] === "N") | (A[i] === "O")) {
      count += 7;
    } else if (
      (A[i] === "P") |
      (A[i] === "Q") |
      (A[i] === "R") |
      (A[i] === "S")
    ) {
      count += 8;
    } else if ((A[i] === "T") | (A[i] === "U") | (A[i] === "V")) {
      count += 9;
    } else if (
      (A[i] === "W") |
      (A[i] === "X") |
      (A[i] === "Y") |
      (A[i] === "Z")
    ) {
      count += 10;
    } else if (A[i] === "0") {
      count += 11;
    }
  }
  console.log(count);
}
