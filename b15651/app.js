const fs = require("fs");

const filePath = process.platform === "linux" ? "./input.txt" : "/dev/stdin"; //제 개발환경은 리눅스이기에 input.txt를 앞에 두었습니다.

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; // 실제 백준사이트에 제출할 때는 위에 filePath를 삭제하고 이 부분을 입력하면 됩니다.

let input = fs.readFileSync(filePath).toString().trim();

//console.log(input);

//solution(input);
/*
function solution(A) {
  [n, m] = A.split(" ");
  //console.log(n);
  //console.log(m);
  const N = Number(n);
  const M = Number(m);
  let result = "";
  const output = [];
  const visited = new Array(N).fill(false);

  //console.log(visited);

  function dfs(count) {
    if (count === M) {
      result += `${output.join(" ")}\n`;
      return;
    }

    for (let i = 0; i < N; i++) {
      if (visited[i] === true) {
        continue;
      }
      visited[i] = true; // visited[i] = true 라는 말은 한번 사용한 조합은 다시 사용하지 않기 위함이다.
      output.push(i + 1); // 조합의 수를 조합하는 것.
      //console.log(output);
      dfs(count + 1); // 재귀형식으로 그 다음 조합을 찾는 것.
      output.pop(); // 1 2 를 한 뒤 2를 pop으로 빼고 그다음 dfs(count+1)에서는 1 3 일때 3을 뺴는 역할을 한다.
      //console.log(output);
      //console.log(visited);
      visited[i] = false; // true와 false 로 사용했던 것을 체크해준다.
    }
  }
  dfs(0);
  return result;
}
*/
/*
function solution(A) {
  [n, m] = A.split(" ");
  const N = Number(n);
  const M = Number(m);
  //console.log(N);
  //console.log(M);
  let results = "";
  const output = [];
  const visited = new Array(N).fill(false);
  //console.log(visited);

  function dfs(idx, count) {
    if (count === M) {
      results += `${output.join(" ")}\n`;
      return;
    }
    for (let i = idx; i < N; i++) {
      if (visited[i] === true) {
        continue;
      }
      visited[i] = true;
      output.push(i + 1);
      dfs(i, count + 1);
      output.pop();
      visited[i] = false;
    }
  }
  dfs(0, 0);
  return results;
}
*/

function solution(A) {
  [n, m] = A.split(" ");
  const N = Number(n);
  const M = Number(m);
  let results = "";
  const output = [];

  //console.log(visited);

  function dfs(cnt) {
    if (cnt === M) {
      results += `${output.join(" ")}\n`;
      return;
    }

    for (let i = 0; i < N; i++) {
      output.push(i + 1);
      dfs(output.length);
      output.pop();
    }
  }
  dfs(0);
  return results;
}

console.log(solution(input));
