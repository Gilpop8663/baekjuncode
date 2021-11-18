const fs = require("fs");

const filePath = process.platform === "linux" ? "./input.txt" : "/dev/stdin"; //제 개발환경은 리눅스이기에 input.txt를 앞에 두었습니다.

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; // 실제 백준사이트에 제출할 때는 위에 filePath를 삭제하고 이 부분을 입력하면 됩니다.

let input = fs.readFileSync(filePath).toString().split("\n");

//console.log(input);

//console.log(input);

solution(input);

function solution(A) {
  let XArr = [];
  let YArr = [];
  let x = 0;
  let y = 0;
  //console.log(A.length);
  for (let i = 0; i < 3; i++) {
    // A.length로 하면 백준사이트에서는 오류가 납니다.
    A[i] = A[i].split(" ").map((item) => +item);
    XArr.push(A[i][0]); // x 값 push
    YArr.push(A[i][1]); // y값 push
  }
  //console.log(XArr);
  //console.log(YArr);
  XArr = XArr.sort(); // x값 숫자 크기대로 정렬
  YArr = YArr.sort(); // y값 숫자 크기대로 정렬
  if (XArr[2] === XArr[1]) {
    // 10 10 20
    x = XArr[0]; // 배열 마지막인 3번째와 2번째가 같으면 x값은 1번쨰 값으로 한다.
  } else {
    x = XArr[2];
  }
  if (YArr[2] === YArr[1]) {
    // 10 10 20
    y = YArr[0];
  } else {
    y = YArr[2];
  }
  //console.log(x, y);
  console.log(`${x} ${y}`);
}
