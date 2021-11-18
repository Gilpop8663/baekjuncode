const fs = require("fs");

const filePath = process.platform === "linux" ? "./input.txt" : "/dev/stdin"; //제 개발환경은 리눅스이기에 input.txt를 앞에 두었습니다.

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; // 실제 백준사이트에 제출할 때는 위에 filePath를 삭제하고 이 부분을 입력하면 됩니다.

let input = fs.readFileSync(filePath).toString(); // .split()이 붙어있으면 오류가 납니다 틀렸다고 나와요

input = +input;

//console.log(input);

solution(input);

function solution(A) {
  let count = 0;
  let answer = [];

  for (let i = 1; i <= input; i++) {
    //console.log(i);
    answer = []; // for 문 돌때마다 초기화
    if (i < 100) {
      // 1~9까지는 모두 등차수열 한수의 조건임.
      count++;
    } else if (i < 100) {
      //10~99까지도 모두 등차수열임 . 1 0 은 첫항 1 공차 -1 , 1 1 은 첫항 1 공차 0 ...;
      count++;
    } //이렇게 길게 작성하면 출력 초과라고 나옵니다.
    else if (100 <= i) {
      answer = [];
      for (let j = 0; j < i.toString().length; j++) {
        answer.push(i.toString()[j]); // 각 숫자를 배열안에 넣음 101 이면 [1 , 0 , 1 ]
      }
      answer = answer.map((item) => +item);
      //console.log(answer);
      //console.log(answer);
      let A = answer[0]; //9630 B-A = -3 C-B = -3 , 1357 B-A = 2 , C-B=2  A-B = -2 , B-C =-2
      let B = answer[1];
      let C = answer[2];

      if (B - A == C - B && A - B === B - C) {
        // 세자리 수의 등차중항의 조건
        count++;
      }
      //console.log((answer[1] = (answer[2] + answer[0]) / 2));
    }
  }
  console.log(count);
}
