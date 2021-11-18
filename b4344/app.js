const fs = require("fs");

const filePath = process.platform === "linux" ? "./input.txt" : "/dev/stdin"; //제 개발환경은 리눅스이기에 input.txt를 앞에 두었습니다.

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; // 실제 백준사이트에 제출할 때는 위에 filePath를 삭제하고 이 부분을 입력하면 됩니다.

let input = fs.readFileSync(filePath).toString().split("\n");

// console.log(input);

// console.log(input);

let testCount = +input[0];

solution(input);

function solution(A) {
  let sum = 0;
  let average = 0;
  let count = 0;
  let howMany = 0;
  let answer = 0;
  for (let i = 1; i <= testCount; i++) {
    sum = 0;
    average = 0;
    count = 0;
    A[i] = A[i].split(" ").map((item) => +item); //각 줄의 number 타입 형식으로 변경
    let student = A[i][0]; // 점수를 가진 학생수
    for (let j = 1; j <= student; j++) { // 모든 학생들의 점수의 합
      sum = sum + A[i][j];
    }
    average = sum / student; // 합한 점수 나누기 학생수 = 평균
    for (let k = 1; k <= student; k++) { // 평균보다 높은 학생의 수를 구함
      if (A[i][k] > average) {
        count = count + 1;
      }
      howMany = (count / student) * 100; // 몇퍼센트인지 .. 평균을 넘은 학생 수 /전체 학생수 * 100
    }
    let u = 1000;
    answer = (Math.round(howMany * u) / u).toFixed(3); // 소수점 3번째 자리에서 반올림을 하고 40.000%로 표현하기 위해 toFixed 함수 활용.
    console.log(`${answer}%`);
  }
}
