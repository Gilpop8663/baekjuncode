const fs = require("fs");

const filePath = process.platform === "linux" ? "./input.txt" : "/dev/stdin"; //제 개발환경은 리눅스이기에 input.txt를 앞에 두었습니다.

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; // 실제 백준사이트에 제출할 때는 위에 filePath를 삭제하고 이 부분을 입력하면 됩니다.

let input = +fs.readFileSync(filePath).toString();

//console.log(input);

solution(input);

function solution(A) {
  let num = 666; // 제시된 숫자
  let count = 1; // 카운트
  while (A !== count) {
    // 입력값 A 와 count 가 같지 않으면 num 을 1씩 늘린다.
    num++;
    if (String(num).includes("666")) {
      // String 된 num 이 666을 포함하고 있으면 count 를 늘린다.
      count++;
    }
  }
  console.log(num);
}

// 666 1666 2666 3666 4666 5666 6660 6666 7666 8666 9666 10666 11666 12666 13666 14666 15666 16660 16666 17666
