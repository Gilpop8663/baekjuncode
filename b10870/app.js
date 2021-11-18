const fs = require("fs");

const filePath = process.platform === "linux" ? "./input.txt" : "/dev/stdin"; //제 개발환경은 리눅스이기에 input.txt를 앞에 두었습니다.

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; // 실제 백준사이트에 제출할 때는 위에 filePath를 삭제하고 이 부분을 입력하면 됩니다.

let input = +fs.readFileSync(filePath).toString();

//console.log(input);

//solution(input);
//방법 1 return 을 활용한 재귀 알고리즘 이용법

function solution(A) {
  if (A < 2) {
    // A 가 2보다 작을 때는 A 입니다.
    return A;
  } else if (A >= 2) {
    return solution(A - 1) + solution(A - 2); // (A-1) + 함수(A-2)+(A-3)+(A-4)....
  }
}
console.log(solution(input)); //soultion(input) 함수를 출력함
