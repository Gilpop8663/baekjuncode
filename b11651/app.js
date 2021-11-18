const fs = require("fs");

const filePath = process.platform === "linux" ? "./input.txt" : "/dev/stdin"; //제 개발환경은 리눅스이기에 input.txt를 앞에 두었습니다.

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; // 실제 백준사이트에 제출할 때는 위에 filePath를 삭제하고 이 부분을 입력하면 됩니다.

let input = fs.readFileSync(filePath).toString().trim().split("\n");

//console.log(input);

solution(input);

function solution(A) {
  //console.log(A[1].split(" "));
  let testCount = +A[0];
  A = A.slice(1);
  for (let i = 0; i < testCount; i++) {
    A[i] = A[i].split(" ").map((item) => +item.trim("\r"));
  }
  //console.log(A);
  A.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    } else return a[1] - b[1];
  });
  A = A.map((v) => v.join(" ")).join("\n");
  console.log(A);
}
