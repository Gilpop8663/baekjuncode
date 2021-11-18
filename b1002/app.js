const fs = require("fs");

const filePath = process.platform === "linux" ? "./input.txt" : "/dev/stdin"; // 실제 백준사이트에 제출할 때는 위에 filePath를 삭제하고 이 부분을 입력하면 됩니다.

//const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"; // 실제 백준사이트에 제출할 때는 위에 filePath를 삭제하고 이 부분을 입력하면 됩니다.
let input = fs.readFileSync(filePath).toString().split("\n");

//input.pop();

//console.log(input)

solution(input);

function solution(A) {
  let testCount = +A[0];
  for (let i = 1; i <= testCount; i++) {
    A[i] = A[i].split(" ").map((item) => +item);
    let x1 = A[i][0];
    let y1 = A[i][1];
    let x2 = A[i][3];
    let y2 = A[i][4];
    let range = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
    //console.log(range)
    let round1 = A[i][2];
    let round2 = A[i][5];
    if (range === 0) {
      // 같은 위치에 있을 때
      if (round1 !== round2) {
        // 반지름이 같지 않을 때
        console.log(0);
      } else if (round1 === round2) {
        //반지름이 같을 때
        console.log(-1);
      }
    } else if (range < round1 + round2) {
      // 두 원의 중심거리가 두 반지름의 합보다 작을 때
      if (range + round1 < round2) {
        // 원 안에 다른 원이 있지만 내접하지 않는 경우
        console.log(0);
      } else if (range + round2 < round1) {
        // 원 안에 다른 원이 있지만 내접하지 않는 경우
        console.log(0);
      } else if (range + round1 === round2) {
        // 두 원의 중심선 + 반지름 = 다른 반지름의 거리 === 내접
        console.log(1);
      } else if (range + round2 === round1) {
        // 같음
        console.log(1);
      } else {
        console.log(2); // 두 개의 교차점
      }
    } else if (range === round1 + round2) {
      // 두 중심선의 거리 === 두 원의 반지름의 합 == 외접
      console.log(1);
    } else if (range > round1 + round2) {
      // 두 중심선의 거리 > 두 원의 반지름의 합  == 접하지 않음
      console.log(0);
    }
  }
}
