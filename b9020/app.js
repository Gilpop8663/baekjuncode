const fs = require("fs");

const filePath = process.platform === "linux" ? "./input.txt" : "/dev/stdin"; //제 개발환경은 리눅스이기에 input.txt를 앞에 두었습니다.

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; // 실제 백준사이트에 제출할 때는 위에 filePath를 삭제하고 이 부분을 입력하면 됩니다.

let input = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((item) => +item);

//console.log(input);

solution(input);

function solution(A) {
  let answer = "";
  for (let i = 1; i <= A[0]; i++) {
    // A[0]만큼 실행함
    //console.log(A[i]);
    let numArray = []; //소수를 모아둘 배열
    for (let j = 2; j <= A[i]; j++) {
      // j는 소수의 최하값인 2부터 A[i] 까지 실행시켰다.
      if ((j === 2) | (j === 3) | (j === 5) | (j === 7)) {
        // j가 2,3,5,7은 소수이므로 소수배열에 push한다.
        numArray.push(j);
      } else if (
        // 에라토스테네스의 체를 이용했습니다.
        (j % 2 === 0) |
        (j % 3 === 0) |
        (j % 5 === 0) |
        (j % 7 === 0)
      ) {
        continue;
      } else {
        //console.log(j);
        let decimal = 0; // 소수 판별 변수
        for (let n = 2; n <= Math.sqrt(j); n++) {
          if (Number.isInteger(j / n)) {
            // j를 n으로 나누었을 때 정수가 되는 값이 있다면 소수가 아니다.
            decimal++;
          }
          //console.log(decimal);
        }
        if (decimal === 0) {
          // 소수만 push 했다.
          numArray.push(j);
        }
      }
    }
    //console.log(numArray);
    let minus = 186746578;
    let a = 13245646;
    let b = 45686765;
    for (let k = 0; k < numArray.length; k++) {
      // k는 소수배열의 길이 만큼 실행
      for (let m = 0; m < numArray.length; m++) {
        // m은 소수 배열의 길이 만큼 실행
        if (numArray[k] + numArray[k + m] === A[i]) {
          // numArray[k] + numArray[k+1,k+2,k+3 ...  k+m] 이 A[i]의 값일때를 구했습니다
          if (minus > numArray[k + m] - numArray[k]) {
            // minus 값이  numArray[k + m] - numArray[k] 보다 크다면 새로운 최하값인 것을 if문을 통해 판별했습니다.
            minus = numArray[k + m] - numArray[k]; // minus 변수 설정
            a = numArray[k]; // minus가 최저일 때 a값 설정
            b = numArray[k + m]; // minus 가 최저일 때 b값 설정
          }
        }
      }
      //console.log(a, b);
    }
    answer += `${a} ${b}\n`; // 정답
  }
  answer = answer.split("\n"); // 출력 과정
  answer.pop();
  answer = answer.join("\n");
  console.log(answer);
}
