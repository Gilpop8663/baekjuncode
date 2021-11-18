const fs = require("fs");

const filePath = process.platform === "linux" ? "./input.txt" : "/dev/stdin"; //제 개발환경은 리눅스이기에 input.txt를 앞에 두었습니다.

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; // 실제 백준사이트에 제출할 때는 위에 filePath를 삭제하고 이 부분을 입력하면 됩니다.

let input = fs.readFileSync(filePath).toString().split("\n"); // split을 없앴습니다.

// console.log(input);

// let testcase = +input[0];

let newArr = [];

// for (i = 1; i <= testcase; i++) {
//   input[i] = input[i].split(" ");
//   input[i][0] = Number(input[i][0]);
//   input[i][1] = Number(input[i][1]);
//   newArr.push(input[i][0] + input[i][1]);
// }

// console.log(newArr);
solution(input);

function solution(A) {
  let testcase = +A[0]; // 테스트를 몇번 해야하는지 배열 첫번째에 나와있습니다.
  for (i = 1; i <= testcase; i++) {
    A[i] = A[i].split(" "); // 이때까지는 문자열로 남아 있습니다.
    A[i][0] = Number(A[i][0]); // 더하기를 출력하기 위해 Number로 바꾸어줍니다
    A[i][1] = Number(A[i][1]);
    console.log(A[i][0] + A[i][1]);
  }
}
