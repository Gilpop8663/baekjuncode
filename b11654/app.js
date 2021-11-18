const fs = require("fs");

const filePath = process.platform === "linux" ? "./input.txt" : "/dev/stdin"; //제 개발환경은 리눅스이기에 input.txt를 앞에 두었습니다.

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; // 실제 백준사이트에 제출할 때는 위에 filePath를 삭제하고 이 부분을 입력하면 됩니다.

let input = fs.readFileSync(filePath).toString();

//console.log(input);

solution(input);

function solution(A) {
  let answer = "";
  answer = A.charCodeAt(); // String.charCodeAt 은 문자열을 받고 아스키 코드 넘버로 변환시켜주는 자바스크립트 함수이다
  console.log(answer);
}
