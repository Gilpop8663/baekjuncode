const fs = require("fs");

const filePath = process.platform === "linux" ? "./input.txt" : "/dev/stdin"; //제 개발환경은 리눅스이기에 input.txt를 앞에 두었습니다.

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; // 실제 백준사이트에 제출할 때는 위에 filePath를 삭제하고 이 부분을 입력하면 됩니다.

let input = fs.readFileSync(filePath).toString().split("\n");

solution(input); //받는 값이 3개입니다

function solution(A) {
  let answer = [];
  let submit = "";
  for (let i = 0; i < input.length; i++) {
    //console.log(answer);
    if (input[i].slice(0, 4) === "push") {
      // slice 를 활용해서 문자열이 일치하는지 확인하였습니다.
      answer.push(+input[i].slice(4, 99));
    } else if (input[i].slice(0, 3) === "pop") {
      answer.length !== 0 // answer의 배열안 정수의 개수가 0이 아니라면 pop을 하고 배열 갯수가 0이라면 -1을 출력한다
        ? (submit += answer.pop() + "\n")
        : (submit += "-1" + "\n");
    } else if (input[i].slice(0, 4) === "size") {
      // 배열의 갯수를 출력
      submit += answer.length + "\n";
    } else if (input[i].slice(0, 5) === "empty") {
      // 배열의 갯수가 0이라면 1 아니라면 0을 출력
      if (answer.length === 0) {
        submit += "1" + "\n";
      } else {
        submit += "0" + "\n";
      }
      //answer.length === 0 ? console.log("1") : console.log("0");
    } else if (input[i].slice(0, 3) === "top") {
      // 배열의 맨 마지막을 꺼내야 함으로 arr[arr.length-1] 을 사용하였다.
      answer.length !== 0
        ? (submit += answer[answer.length - 1] + "\n")
        : (submit += -1 + "\n");
    }
  }
  console.log(submit); // for문 마다 console.log를 한다면 시간초과가 나기 때문에 submit + 정답 + "\n"으로 시간을 줄였다.
}
