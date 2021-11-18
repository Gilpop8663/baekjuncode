const fs = require("fs");

const filePath = process.platform === "linux" ? "./input.txt" : "/dev/stdin"; //제 개발환경은 리눅스이기에 input.txt를 앞에 두었습니다.

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; // 실제 백준사이트에 제출할 때는 위에 filePath를 삭제하고 이 부분을 입력하면 됩니다.

let input = fs.readFileSync(filePath).toString();

solution(input);

function solution(A) {
  let answer = "";
  let testCount = +A;
  for (let i = 1; i <= testCount; i++) {
    // testCount = 5 , i=5 일때 j는 4까지 반복함
    for (let j = 1; j <= testCount - i; j++) {
      // 공백은 각줄의 testCount - i(for문 실행횟수) 만큼 필요합니다
      answer = answer + " ";
      //console.log("j문" + answer);
    }
    for (let k = 1; k <= i; k++) {
      // 문자는 i 의 for문 실행횟수와 똑같이 필요로 합니다.
      answer = answer + "*";
    }
    answer = answer + "\n"; // 각줄로 표시하기 위한 코드입니다.
  }
  console.log(answer);
}
