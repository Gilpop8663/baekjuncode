const fs = require("fs");

const filePath = process.platform === "linux" ? "./input.txt" : "/dev/stdin"; //제 개발환경은 리눅스이기에 input.txt를 앞에 두었습니다.

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; // 실제 백준사이트에 제출할 때는 위에 filePath를 삭제하고 이 부분을 입력하면 됩니다.

// let input = fs.readFileSync(filePath).toString().split("\n"); // split 부분을 없애야 백준사이트에서 정답으로 인식합니다.!

let input = fs.readFileSync(filePath).toString();

input = Number(input); //입력 값이 하나여서 넘버만 해주었습니다

// console.log(input);

solution(input);

function solution(A) {
  if (90 <= A) {
    return console.log("A");
  } else if (80 <= A) {
    return console.log("B");
  } else if (70 <= A) {
    return console.log("C");
  } else if (60 <= A) {
    return console.log("D");
  } else {
    return console.log("F");
  }
}
// function solution(A) {
//   if ((90 <= A) & (A <= 100)) {
//     return console.log("A");
//   } else if ((80 <= A) & (A <= 89)) {
//     return console.log("B");
//   } else if ((70 <= A) & (A <= 79)) {
//     return console.log("C");
//   } else if ((60 <= A) & (A <= 69)) {
//     return console.log("D");
//   } else {
//     return console.log("F");
//   }
// } 2가지의 방법이 있습니다

//시험 점수를 입력받아 90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F를 출력하는 프로그램을 작성하시오.
