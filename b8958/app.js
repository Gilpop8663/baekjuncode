const fs = require("fs");

const filePath = process.platform === "linux" ? "./input.txt" : "/dev/stdin"; //제 개발환경은 리눅스이기에 input.txt를 앞에 두었습니다.

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; // 실제 백준사이트에 제출할 때는 위에 filePath를 삭제하고 이 부분을 입력하면 됩니다.

let input = fs.readFileSync(filePath).toString().split("\n");

//console.log(input);

let testCount = +input[0];

solution(input);

function solution(A) {
  let count = 0; // O의 점수 계산을 할 변수 
  let sum = 0; // 0의 점수계산의 합산점수를 표현할 변수
  let answer = []; // 각 줄마다 몇점이 나왔는지 배열을 만들었습니다
  for (let i = 1; i <= testCount; i++) { // input[0]은 몇번 실행하는지 알려주는 숫자이기에 i=1부터시작합니다
    //console.log(A[i].length);
    for (let k in A[i]) { // A[i]의 내용을 볼 수 있는 for in 구문을 사용했습니다.
      //console.log(k);
      //console.log(A[i].length - 1);
      //console.log(A[i][k]);
      if (A[i][k] === "O") {
        count = count + 1; // O 일때 1씩 더한다
        //console.log(count);
        sum = sum + count; // sum에 count 를 더해준다
      } else if (A[i][k] === "X") {
        count = 0; // X일때 count 를 0으로 초기화 시켜준다
      }
      if (Number(k) === A[i].length - 1) { // k가 마지막을 가르키고  A[i].length -1 와 같을때 answer 배열에 sum을 넣어줍니다 . 초기화하기 때문에 이 코드는 맨 밑에 있어야 제대로 작동합니다
        answer.push(sum); 
        sum = 0;//초기화
        count = 0;//초기화
      }
    }
  }
  for (let m = 0; m < answer.length; m++) {
    console.log(answer[m]); // 배열의 각 점수를 console.log 합니다
  }
}
