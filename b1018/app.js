const fs = require("fs");

const filePath = process.platform === "linux" ? "./input.txt" : "/dev/stdin"; //제 개발환경은 리눅스이기에 input.txt를 앞에 두었습니다.

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; // 실제 백준사이트에 제출할 때는 위에 filePath를 삭제하고 이 부분을 입력하면 됩니다.

let input = fs.readFileSync(filePath).toString().trim().split("\n");

//console.log(input);

function solution(A) {
  [size, ...arr] = A; // ...object >> size= 첫번째 배열 8 8 그리고 ...arr = 나머지 배열들을 합친것이  A 이다
  [row, col] = size.split(" "); // row 와 col 은 size 8 8 을 split(" ")한 것이다.
  arr = arr.map((item) => item.trim("\r").split("")); // arr의 \r 을 없애주고 한글자씩 배열로 만듬
  //console.log(arr);

  const answer = [];
  const line = ["WBWBWBWB", "BWBWBWBW"];

  // i = x 축 -8
  // j = y 축 -8
  for (let i = 0; i <= row - 8; i++) {
    for (let j = 0; j <= col - 8; j++) {
      //2가지의 경우를 위해 z for문을 이용하였습니다 white로 시작할 경우 black으로 시작할 경우
      for (let z = 0; z < 2; z++) {
        let count = 0;
        // 8*8 정사각형의 틀을 도는 for 문 입니다.
        for (let x = 0; x < 8; x++) {
          for (let y = 0; y < 8; y++) {
            const current = arr[i + x][j + y]; //current는 모든 각 글자를 비교하여 모든 경우의 8*8을 유추합니다
            //console.log(current);
            //console.log(line[(x + z) % 2][y]);
            if (current !== line[(x + z) % 2][y]) {
              //line의 올바른 줄과 비교하여 틀린 것이 있다면 count를 셉니다
              count++;
            }
          }
        }
        answer.push(count); //count의 개수를 배열에 넣습니다
      }
    }
  }
  //console.log(answer);
  console.log(Math.min(...answer)); // 모든 경우의 count 개수를 얻었다면 min으로 최솟값을 구해줍니다.
}

solution(input);
