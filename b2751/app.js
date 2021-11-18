const fs = require("fs");

const filePath = process.platform === "linux" ? "./input.txt" : "/dev/stdin"; //제 개발환경은 리눅스이기에 input.txt를 앞에 두었습니다.

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; // 실제 백준사이트에 제출할 때는 위에 filePath를 삭제하고 이 부분을 입력하면 됩니다.

let input = fs.readFileSync(filePath).toString().split("\n");

input = input.map((item) => +item.trim("\r")); // 숫자로 변환

//console.log(input);

let inputNum = []; // 맨 첫번째 숫자는 실행횟수이기에 빼고 배열을 만드려고 합니다
for (let k = 1; k <= input[0]; k++) {
  inputNum.push(input[k]); // 첫번째 배열 빼고 나머지의 배열 만듬
  //console.log(A[k]);
}

//console.log(inputNum);

solution(inputNum);
//bubbleSort(inputNum);
//insertionSort(inputNum);

function solution(A) {
  let answer = "";
  A = A.sort((a, b) => a - b); // sort로 숫자를 정렬
  let set = new Set(A); // set은 데이터를 중복없이 표현합니다
  //console.log(set);
  //console.log([...set]);
  let arr = [...set]; // [...objetct]를 이용하여 arr을 표현했습니다
  //console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    answer += arr[i] + "\n";
    //console.log(arr[i]); // 한줄 씩 출력
  }
  console.log(answer);
}

function bubbleSort(A) {
  // 거품 정렬 앞의 것과 현재의 것을 바꾸며 큰 것을 가장 오른쪽으로 밀어가는 형식입니다.
  //console.log(A);
  for (let i = 0; i < A.length; i++) {
    let swap;
    //console.log(A[i]);
    for (let j = 0; j < A.length - 1 - i; j++) {
      // j for문은 arr.length -1 - i 만큼 실행하는데 -1을 하는 이유는 A[j] A[j+1]을 비교할 것이라서 맨 마지막은 비교하지 않아도 됨으로 -1을 히였고 -i는 이미 정렬된 숫자들을 제외시켜 주는 것입니다
      if (A[j] > A[j + 1]) {
        swap = A[j]; // A[j]가 오른쪽에 있는 배열보다 크다면 A[j]의 값을 swap 이라는 변수에 넣어주고
        A[j] = A[j + 1]; // A[j] 는 A[j +1] 의 값으로 변경해주며
        A[j + 1] = swap; // A[j+1]은 아까 저장한 swap 변수를 이용해 저장해줍니다.
        // 결과적으로는 큰 숫자 기준으로 작은숫자가 오른쪽에 있다면 오른쪽으로 이동하는 것입니다.
      }
      console.log(`${i}회전 : ${A}`);
      if (!swap) {
        // swap 이  undefined 일때는 for 문이 전부 다 돌았을 때 정렬이 전부 끝난 상태입니다.
        // swap === undefined 일 떄 for문을 멈춥니다.
        break;
      }
    }
  }
  let set = new Set(A);
  console.log(set);
  //console.log(set);
  let arr = [...set];
  //console.log(arr.length);
}

function insertionSort(A) {
  // 삽입 정렬은 왼쪽에서 오른쪽으로 가면서 각 요소들을 왼쪽 요소들과 비교하여 알맞은 자리에 삽입하는 형식의 정렬 방법이다.

  for (let i = 1; i < A.length; i++) {
    let cur = A[i]; // 현재 A[i]
    let left = i - 1; // 현재 A[i] 의 왼쪽

    //console.log(A[left + 1]);
    while (left >= 0 && A[left] > cur) {
      A[left + 1] = A[left]; //A[i]인 현재를 왼쪽 값으로 옮기고
      A[left] = cur; // 왼쪽은 현재 값으로 옮긴다.

      cur = A[left]; // 다시 현재값 변수를 왼쪽값으로 옮긴다.
      //console.log(left);
      left--; // l
    }
  }
  console.log(A);
}
