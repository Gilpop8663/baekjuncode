const fs = require("fs");

const filePath = process.platform === "linux" ? "./input.txt" : "/dev/stdin"; //제 개발환경은 리눅스이기에 input.txt를 앞에 두었습니다.

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; // 실제 백준사이트에 제출할 때는 위에 filePath를 삭제하고 이 부분을 입력하면 됩니다.

let input = fs.readFileSync(filePath).toString().split("\n");

input = input.map((item) => +item);

//console.log(input);

solution(input[0], input[1], input[2]);

function solution(A) {
  let times = input[0] * input[1] * input[2]; // 3개의 숫자를 곱해준다
  let count = 0; // count 변수 선언
  times = times.toString(); // for ~in 을 사용하기 위해 문자열로 바꾸어준다
  //console.log(times);
  for (let i = 0; i < 10; i++) {
    // 0~9까지의 숫자이므로 0~9 <10 으로 설정해준다
    count = 0; // count  밑의 for~in 문이 다시 시작하기전 전의 count의 결과를 초기화시켜준다.
    for (let k in times) {
      // times = 17037300 의 k >> times의 특정 값을 가진 키가 있는지 확인하려는 경우에 for...in을 사용할 수 있습니다.
      if (times[k] === `${i}`) {
        // times[k] = i = 0123456789 까지 전부 돌음
        count++;
      }
    }
    console.log(count); //0부터 9까지의 숫자 개수가 나옴
  }
}
