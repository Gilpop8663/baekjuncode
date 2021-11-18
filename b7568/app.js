const fs = require("fs");

const filePath = process.platform === "linux" ? "./input.txt" : "/dev/stdin"; //제 개발환경은 리눅스이기에 input.txt를 앞에 두었습니다.

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; // 실제 백준사이트에 제출할 때는 위에 filePath를 삭제하고 이 부분을 입력하면 됩니다.

let input = fs.readFileSync(filePath).toString().split("\n");

const testCount = +input[0]; //실행 횟수

for (let i = 1; i <= testCount; i++) {
  // 각각의 입력값 숫자의 배열을 만드는 과정
  input[i] = input[i].split(" ").map((item) => +item);
}

//console.log(input);

solution(input);

function solution(A) {
  for (let m = 1; m <= testCount; m++) {
    // 배열 1부터 textCount 배열까지 실행
    let ranking = 1; // 등수
    //console.log(A[m]);
    for (let k = 1; k <= testCount; k++) {
      // 각각의 덩치를 비교하기 위한 for문
      //console.log(A[k]);
      if (A[m][0] < A[k][0] && A[m][1] < A[k][1]) {
        // A[m][0] 과 나머지 값들을 비교하고 A[m][1] 과 나머지 값들을 전부 비교한다.
        ranking++; //두 값 모두 큰 다른 수가 있다면 등수를 +1 해준다
      }
    }
    console.log(ranking);
  }
}
