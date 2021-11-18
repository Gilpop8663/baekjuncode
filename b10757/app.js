const fs = require("fs");

const filePath = process.platform === "linux" ? "./input.txt" : "/dev/stdin"; //제 개발환경은 리눅스이기에 input.txt를 앞에 두었습니다.

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; // 실제 백준사이트에 제출할 때는 위에 filePath를 삭제하고 이 부분을 입력하면 됩니다.

let input = fs.readFileSync(filePath).toString().split(" ");

//console.log(input);

solution(input);

function solution(A) {
  /*
  console.log(BigInt(A[0]));
  console.log(BigInt(A[1]));
  console.log((BigInt(A[0]) + BigInt(A[1])).toString());
*/
  //console.log(A[1].length);
  A[0] = A[0]
    .split("")
    .reverse()
    .map((item) => +item); // 입력값 1 , 2 을 split으로 배열화 시키고 reverser를 해주며 number 타입으로 변경시켜줍니다.

  A[1] = A[1]
    .split("")
    .reverse()
    .map((item) => +item);

  let bigLength = A[0].length >= A[1].length ? A[0].length : A[1].length; // 입력값 1과 2의 배열 길이를 비교하여 두 배열값의 최대길이를 구합니다.
  let sumArr = [];

  for (let i = 0; i < bigLength; i++) {
    // 배열의 최대길이 만큼 실행
    //console.log(A[0][i]);
    //console.log(A[1][i]);
    if ((A[0][i] !== undefined) & (A[1][i] !== undefined)) {
      // 둘다 undefined가 아닐 때 sum배열에 두 수를 더해서 push 해줍니다.
      sumArr.push(A[0][i] + A[1][i]);
    } else if (A[0][i] === undefined) {
      // A[0][i] 가 undefinded 가 되었다면 더 짧은 쪽이므로 sumArr에 A[1][i]를 푸쉬해줍니다.
      sumArr.push(A[1][i]);
    } else if (A[1][i] === undefined) {
      // A[1][i] 가 undefinded 가 되었다면 더 짧은 쪽이므로 sumArr에 A[0][i]를 푸쉬해줍니다.
      sumArr.push(A[0][i]);
    }
    //console.log(i);
  }
  //console.log(sumArr);

  sumArr.push(0); // 배열의 각각의 값들이 10을 넘었을 때 +1을 해줄것이기에 맨 마지막에 0을 추가해준다. ( 안해주면 NaN이 뜸)

  for (let k = 0; k < sumArr.length; k++) {
    if (sumArr[k] >= 10) {
      // sumArr[k]의 값이 10과 같거나 10 이상이라면 sumArr[k] 의 값은 10의 나머지로 정의해준다
      sumArr[k] = sumArr[k] % 10;
      sumArr[k + 1] = sumArr[k + 1] + 1; // sumArr[k]을 10의 나머지를 진행해줌과 동시에 다음 숫자를 +1 해준다.
    }
  }

  sumArr = sumArr.reverse().join(""); // sumArr을 reverser해주며 배열을 join해줌으로써 문자열로 만들어준다.

  if (sumArr[0] === "0") {
    // 마지막에 push 했던 "0" 의 값이 sumArr[0]에 존재한다면 sumArr을 slice(1)을 해줌으로써 0을 지워준다
    sumArr = sumArr.slice(1);
  }

  console.log(sumArr); // 정답 출력

  // console.log(A[1]);
}
