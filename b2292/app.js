const fs = require("fs");

const filePath = process.platform === "linux" ? "./input.txt" : "/dev/stdin"; //제 개발환경은 리눅스이기에 input.txt를 앞에 두었습니다.

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; // 실제 백준사이트에 제출할 때는 위에 filePath를 삭제하고 이 부분을 입력하면 됩니다.

let input = fs.readFileSync(filePath).toString(); // split을 쓰면 시간초과로 오류가 납니다!
input = +input;

//console.log(input);

solution(input);

function solution(A) {
  //console.log(A);
  let n = 0;
  let answer = true;
  let bee = 1;
  if (A === 1) {
    // 예시가 1일때 거리는 1입니다
    console.log(1);
  } else {
    while (answer) {
      if (A <= bee) {
        // 조건에 해당된다면 false로 while을 멈춥니다.
        answer = false;
        break;
      }
      bee += n * 6; // bee =1 에 6n을 계속 더하여 줍니다. 벌집의 크기가 1,6,12,18,24,30 순으로 커지는 등차수열이기 떄문입니다.
      //console.log(6 * n);
      n++;
    }
    console.log(n);
  }
}
