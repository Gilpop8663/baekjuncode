const fs = require("fs");

const filePath = process.platform === "linux" ? "./input.txt" : "/dev/stdin"; //제 개발환경은 리눅스이기에 input.txt를 앞에 두었습니다.

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; // 실제 백준사이트에 제출할 때는 위에 filePath를 삭제하고 이 부분을 입력하면 됩니다.

let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);

function solution(A) {
  let testCount = +A[0];
  let results = "";
  A = A.slice(1);
  for (let i = 0; i < testCount; i++) {
    A[i] = A[i]
      .trim("\r")
      .split(" ")
      .map((item) => +item);
    //console.log(A[i]);
  }

  A.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    } else return a[0] - b[0];
  }).forEach((items) => {
    results += `${items[0]} ${items[1]}\n`;
  });
  console.log(results);
}
