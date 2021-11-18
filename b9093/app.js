const fs = require("fs");

const filePath = process.platform === "linux" ? "./input.txt" : "/dev/stdin"; //제 개발환경은 리눅스이기에 input.txt를 앞에 두었습니다.

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; // 실제 백준사이트에 제출할 때는 위에 filePath를 삭제하고 이 부분을 입력하면 됩니다.

let input = fs.readFileSync(filePath).toString().split("\n");

//console.log(input);

let testCount = +input[0];
//console.log(input);

//input = input.split(" ");

solution(input);

function solution(A) {
  let answer = "";
  let reverseArr = [];
  for (let i = 1; i <= testCount; i++) {
    reverseArr = [];
    A[i] = A[i].replace("\r", "").split(" "); // "\r" 이 있어서 단어뒤집기 정답에 오류가 있는걸 발견했습니다.
    //console.log(A[i]);
    for (let j = 0; j < A[i].length; j++) {
      // split으로 단어를 한 글자씩 나누어주고 배열을 reverse로 뒤집어준 후 다시 join으로 한문장으로 만들어줍니다
      //console.log(A[i].length);
      reverseArr.push(A[i][j].split("").reverse().join(""));
    }
    console.log(reverseArr.join(" ")); // reverseArr 에 있는 각 문장들을 " " 공백을 추가하여 조인해줍니다.
  }
}
