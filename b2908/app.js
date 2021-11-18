const fs = require("fs");

const filePath = process.platform === "linux" ? "./input.txt" : "/dev/stdin"; //제 개발환경은 리눅스이기에 input.txt를 앞에 두었습니다.

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; // 실제 백준사이트에 제출할 때는 위에 filePath를 삭제하고 이 부분을 입력하면 됩니다.

let input = fs.readFileSync(filePath).toString();

input = input.split(" ");
//console.log(input);

//console.log(input);

solution(input);

function solution(A) {
  let changeNum = []; // 원래 숫자에서 상수가 보는 숫자로 변한 숫자를 넣을 배열 변수
  let sangsuNum = []; // 상수의 숫자 변환을 도울 배열 변수
  let answer; // 정답

  for (let i = 0; i < A.length; i++) {
    // 입력값의 배열안의 숫자만큼 i문을 돌린다.
    for (let k = 0; k < 3; k++) {
      //세자리의 숫자가 문제이므로 k<3 까지 k를 돌려서 각 숫자의 한자리씩 배열로 나눈다.
      sangsuNum.push(A[i][k]);
    }
    sangsuNum = sangsuNum.reverse(); // 각 자리의 숫자를 거꾸로 뒤집어준다.
    //console.log(sangsuNum);
    sangsuNum = sangsuNum.join(""); // 다시 문자열로 붙혀준다
    changeNum.push(sangsuNum); //바뀐 숫자를 changeNum에 따로 넣어준다

    sangsuNum = []; // 배열 초기화 후 i 문 반복
  }

  changeNum = changeNum.map((item) => +item); // Number 타입으로 변환
  //console.log(changeNum);

  if (changeNum[0] <= changeNum[1]) {
    // 더 큰 숫자를 정답으로 출력
    answer = changeNum[1];
  } else {
    answer = changeNum[0];
  }
  console.log(answer);
}
