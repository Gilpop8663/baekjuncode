const fs = require("fs");

const filePath = process.platform === "linux" ? "./input.txt" : "/dev/stdin"; //제 개발환경은 리눅스이기에 input.txt를 앞에 두었습니다.

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; // 실제 백준사이트에 제출할 때는 위에 filePath를 삭제하고 이 부분을 입력하면 됩니다.

let input = fs.readFileSync(filePath).toString(); // split을 없앴습니다.

input = +input; // + 는 Number(input)의 역할을 합니다

solution(input);

function solution(A) {
  if (A % 4 === 0) {
    // 4의 나머지 값이 0인 값들을 걸러서 윤년에 해당하는 값들을 1차로 걸른다
    if (A % 400 === 0) {
      // 100의 배수이지만 400의 배수는 윤년에 해당하기에 400의 나머지 값이 0인 값들을 먼저 걸러준다
      return console.log(1);
    } else if (A % 100 === 0) {
      // 400의 배수들을 앞의 if문에서 걸렀기에 값이 없기에 그다음인 100의 나머지 값이 0인 값들은 윤년에서 제외시켜준다
      return console.log(0);
    } else {
      // 두가지 조건문에 해당하지 않으면 윤년이므로 1를 출력시켜준다
      return console.log(1);
    }
  } else {
    // 첫번째 if문에 해당하지 않으면 윤년이 아니므로 0을 출력시켜준다
    return console.log(0);
  }
}
