const fs = require("fs");

const filePath = process.platform === "linux" ? "./input.txt" : "/dev/stdin"; //제 개발환경은 리눅스이기에 input.txt를 앞에 두었습니다.

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; // 실제 백준사이트에 제출할 때는 위에 filePath를 삭제하고 이 부분을 입력하면 됩니다.

let input = +fs.readFileSync(filePath).toString();

//console.log(input);

//solution(input);
//방법 1 return 을 활용한 재귀 알고리즘 이용법

function solution(A) {
  if (A <= 1) {
    // A가 이하가 되면 멈춤
    return 1;
  }
  return A * solution(A - 1); // A * 함수(A-1)*(A-2)*(A-3).... (A-A+1);
}

console.log(solution(input)); //soultion(input) 함수를 출력함

//방법 2 for문을 통한 풀이법
/*
function solution(A) {
    let answer = 1; // 
    if (A === 0) { A가 0일 때 1임      0!은 1
      answer = 1;
    } else {
      for (let i = 1; i <= A; i++) { // 1~i까지 곱함 팩토리얼 함수
        answer = i * answer;
      }
    }
    console.log(answer);
  }
  */
