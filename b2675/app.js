const fs = require("fs");

const filePath = process.platform === "linux" ? "./input.txt" : "/dev/stdin"; //제 개발환경은 리눅스이기에 input.txt를 앞에 두었습니다.

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; // 실제 백준사이트에 제출할 때는 위에 filePath를 삭제하고 이 부분을 입력하면 됩니다.

let input = fs.readFileSync(filePath).toString().split("\n");

let testCount = +input[0];

//console.log(testCount);

solution(input);

function solution(A) {
  let repeat;
  let answer = "";
  for (let i = 1; i <= testCount; i++) {
    A[i] = A[i].split(" "); // 입력값이 공백으로 구분되어 있으므로 split(" ")을 해준다
    repeat = +A[i][0]; // 반복되는 숫자는 맨 앞에 있기에 [0]번째에서 찾아준다
    //console.log(repeat);
    for (let j = 0; j < A[i][1].length; j++) {
      // 입력값의 [1]번째인 문자열의 글자수를 범위로 정해준다
      for (let k = 0; k < repeat; k++) {
        // for문 중첩으로 repeat 의 값만큼 범위를 정해준다
        answer = answer + A[i][1][j]; // repeat 만큼 반복되고 answer에 저장된다
      }
    }
    answer = answer + "\n"; // 아직 for문 안이기에 출력초과가 난다. answer + "\n"으로 줄바꿈을 해주고 다음줄에서 console.log 해주면 for문 밖에서 answer를 불러올 수 있다
    //answer = answer + answer;
  }
  console.log(answer);
}
