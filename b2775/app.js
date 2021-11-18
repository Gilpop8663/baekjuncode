const fs = require("fs");

const filePath = process.platform === "linux" ? "./input.txt" : "/dev/stdin"; //제 개발환경은 리눅스이기에 input.txt를 앞에 두었습니다.

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; // 실제 백준사이트에 제출할 때는 위에 filePath를 삭제하고 이 부분을 입력하면 됩니다.

let input = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((item) => +item); // split을 없앴습니다.

solution(input);

function solution(A) {
  let problem = [];
  let problem2 = [];

  for (let c = 0; c < A[0]; c++) {
    problem = []; // 변수 초기화
    //console.log(A[2 * c + 1]);
    //console.log(A[2 * c + 2]);
    problem.push(A[c * 2 + 1]); // A[1],A[3]...
    problem.push(A[c * 2 + 2]); // A[2],A[4]...
    problem2.push(problem); //[ [ 1 ,2] ,[3 ,4]] 이렇게 배열안에 배열을 넣기 위함
  }
  //console.log(problem2);

  let answer = 0;
  let Arr = [];
  let Arr2 = [];

  for (let d = 0; d < A[0]; d++) {
    // 테스트 횟수만큼 함, A[0] 의 값만큼
    answer = 0;
    Arr = [];
    Arr2 = [];
    for (let i = 1; i <= problem2[d][1]; i++) {
      Arr.push(i); // 0층의 problem2[d][1](호수) 만큼 0층의 호수 > [1,2,3,4,5] 를 함
    }

    for (let n = 1; n <= problem2[d][0]; n++) {
      // 실행횟수 층수 만큼
      answer = 0;
      n % 2 === 1 ? (Arr2 = []) : (Arr = []); // 층수가 홀수이면 Arr2 , 짝수면 Arr 을 초기화 시킨다.
      for (let a = 0; a < problem2[d][1]; a++) {
        if (n % 2 === 1) {
          // 홀수층 일때
          answer = Arr[a] + answer;
          Arr2.push(answer);
        } else {
          // 짝수층 일때
          answer = Arr2[a] + answer;
          Arr.push(answer);
        }
      }
    }
    console.log(
      // 홀수 ,짝수층일때 다르게 출력시킴
      problem2[d][0] % 2 === 1
        ? Arr2[problem2[d][1] - 1]
        : Arr[problem2[d][1] - 1]
    );
  }
}
