const fs = require("fs");

const filePath = process.platform === "linux" ? "./input.txt" : "/dev/stdin"; //제 개발환경은 리눅스이기에 input.txt를 앞에 두었습니다.

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; // 실제 백준사이트에 제출할 때는 위에 filePath를 삭제하고 이 부분을 입력하면 됩니다.

let input = fs.readFileSync(filePath).toString(); // split을 쓰면 시간초과로 오류가 납니다!

input = +input;

//console.log(input);

solution(input);

function solution(A) {
  let i = 1;
  let answer = 0;
  let about = true;
  let Arr = [];
  let many = 0;
  while (about) {
    if (answer >= A) {
      about = false;
      break;
    } else {
      // 1 2  3 4 5 를 answer에 더해줍니다.
      answer = answer + i;
      Arr.push(answer); // Arr 배열에 1,2,3,4,5를 더한 값을 넣어줍니다
      i++;
      //console.log(answer);
    }
  }
  //console.log(i - 1);
  //console.log(Arr);
  //console.log(Arr[i - 2]);
  //console.log((i - 1) % 2 === 0 ? `${i - 1} / 1` : `1 / ${i - 1}`);
  many = Arr[i - 2] - A; // Arr[i-2] 는  1,3,6,10,15 ... 에 해당하고  여기에 A를 빼면 분수값을 구할 수 있습니다.
  console.log(
    (i - 1) % 2 === 0
      ? `${i - 1 - many}/${1 + many}`
      : `${1 + many}/${i - 1 - many}` // 짝수일 때 홀수일 때 1/x , x/1 의 경우가 있습니다.
  );

  // console.log(answer); 1 + 2 + 3 + 4 + 5
}
