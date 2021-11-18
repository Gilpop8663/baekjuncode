const fs = require("fs");

const filePath = process.platform === "linux" ? "./input.txt" : "/dev/stdin"; //제 개발환경은 리눅스이기에 input.txt를 앞에 두었습니다.

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; // 실제 백준사이트에 제출할 때는 위에 filePath를 삭제하고 이 부분을 입력하면 됩니다.

let input = fs.readFileSync(filePath).toString().split("\n");

//console.log(input);

solution(input);

function solution(A) {
  // 방법 1  시간초과가 났음

  /*

  let distance = 0;
  let sum = 0;
  let howMany = 0;
  for (let i = 1; i <= +A[0]; i++) { /
    // n번 반복
    A[i] = A[i].split(" ").map((item) => +item);
    //console.log(A[i]);
    let right = true;
    howMany = 0;
    let k = 0;
    distance = A[i][0];
    while (right) {
      //
      if (distance === A[i][1]) { // 거리가 A[i][1] 의 입력값과 같아지면 멈춘다
        right = false;
        break;
      }
      if (distance + k >= (A[i][1] + A[i][0]) / 2) { // 거리 + k 값이 절반이상일때
        // k를 더해야할떄
        //console.log("k값" + k);
        sum = 0;
        for (let a = k; a >= 1; a--) { // a= k 이고 a가 0까지 for문을 실행
          // n번 반복
          sum += a;
        }
        //console.log("섬" + sum);
        //console.log(A[i][1] - distance);

        if (A[i][1] - distance === 1) { // 거리가 1남았을 때는 k = 1 
          k = 1;
          distance += k;
        } else if (sum <= A[i][1] - distance) { // sum의 값보다 A[i][1]일 때 k 를 더한다
          distance += k;
        } else if (sum > A[i][1] - distance) { 
            // sum의 값보다 A[i][1]가 작을 때 k-- 을 해준다 >> sum의 값은 마지막에 1이 될때의 최솟값인데 이것보다 작으면 조건을 만족할 수 없기 때문이다.
          k--;
          distance += k;
        }
      }
      else if (distance + k < (A[i][1] + A[i][0]) / 2) {      // k ++ 를 더해야할떄 절반이상보다 작을 때
        k++;
        distance += k;
      }
      howMany++;
      //console.log("거리" + distance);
    }
    console.log(howMany);
  }
  */

  // 방법2 1+2+...+n+(n-1)+...+1 = n^2 을 이용함
  for (let i = 1; i <= +A[0]; i++) {
    A[i] = A[i].split(" ").map((item) => +item);
    //console.log(A[i]);
    //console.log(Math.sqrt(A[i][1] - A[i][0]));
    //console.log(Math.round(Math.sqrt(A[i][1] - A[i][0])));
    let n = 0;
    let distance = A[i][1] - A[i][0];
    let close = Math.floor(Math.sqrt(distance));
    //console.log(A[i][1], 2 * n - 1);
    let step = 2 * close - 1;
    let remain = distance - close * close; // 거리 - n*n 26 - 5의제곱 =1 이면 1이 남음
    if (remain !== 0) {
      if (remain <= close) {
        // 25는 123454321 26은  1234543211 26 -25 =1 <5 이기에 +1 을 해줍니다.
        //31을 예로들면  30은 1234554321 31은 12345543211 31-25 = 6 >5 이기에 +2를 해줍니다
        step += 1;
      } else {
        step += 2;
      }
    }
    console.log(step);
  }
}

// 0 4  0 1 3 4 //1 +2 +  1 = 4  는 2의 제곱 3번 움직임
// 0 7  0 1 3 5 6 7 // 1 +2 +2 + 1 = 8 는 3의 제곱과 근사치 5번 움직임
// 0 16 0 1 3 6 10 13 15 16 // 1 + 2 + 3 + 4 + 3 + 2 +1 = 16 는 4의 제곱  7번 움직임
// 0 1 3 6 10 15 20 24 27 29 30 31  == 11개
// 0 1 3 5 6 7
