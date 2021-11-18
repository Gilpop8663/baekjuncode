const fs = require("fs");

const filePath = process.platform === "linux" ? "./input.txt" : "/dev/stdin"; //제 개발환경은 리눅스이기에 input.txt를 앞에 두었습니다.

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; // 실제 백준사이트에 제출할 때는 위에 filePath를 삭제하고 이 부분을 입력하면 됩니다.

// let input = fs.readFileSync(filePath).toString().split("\n"); // split 부분을 없애야 백준사이트에서 정답으로 인식합니다.!

let input = fs.readFileSync(filePath).toString().split("\n");

//console.log(input);

solution(input);

function solution(A) {
  let n = 0;
  for (let i = 1; i <= +A[0]; i++) {
    A[i] = A[i].split(" ");
    A[i] = A[i].map((item) => +item);
    let floor = A[i][2] % A[i][0]; // 층수는 몇번째 손님 % 주어진 층수 의 값으로 구할수 있다. (나머지)
    let room = Math.ceil(A[i][2] / A[i][0]); // 방 호수는 몇번째 손님 / 주어진 층수 의 값으로 구할 수 있다. (몫)
    if (floor === 0) {
      //층수가 0 일경우 나머지가 0이라는 의미이므로 주어진 층수라고 할 수 있다.
      floor = A[i][0];
    }
    console.log(room < 10 ? `${floor}0${room}` : `${floor}${room}`);
  }
}
