let oneToMill = [];
for (let i = 1; i <= 10000; i++) {
  oneToMill.push(i);
}
//console.log(oneToMill);
let num = 1;
for (let i = 0; i <= 10000; i++) {
  let numResult = 0;
  let sumOfNumIndex = 0;

  for (let j = 0; j < i.toString().length; j++) {
    // i.toString().length == 1~10000까지 돌리는데 12345로 몇자리의 숫자인지 알려줌 . 1= 1의자리 2= 10의자리 3= 100의자리 4= 1000의자리 5=10000의자리
    //console.log(j); i가 1,2,3,4,5 일때마다 다름 . j<1 , j<2 , j<3 , j<4 , j<5
    //console.log(i.toString()[j]); // i의 숫자를 전부 표현함 . i = 959 이다  i가 3이기에 j<3 => j= 0,1,2 959[0]=9,959[1]=5,959[2]=9
    sumOfNumIndex = sumOfNumIndex + Number(i.toString()[j]);
  }
  //console.log(sumOfNumIndex); 0~10000까지 각 인덱스를 더한 값을 나타냄 1253이라면 sumofIndex[1253] = 1+2+5+3 = 11
  numResult = i + sumOfNumIndex; // i + i[j]의 합  = 생성자가 있는 숫자들
  //console.log(numResult);
  let idx = oneToMill.indexOf(numResult);
  //console.log(idx); //일치하지 않는다면 -1을 출력하고 , 있다면 idx 의 값은 oneToMill 배열안의 몇번째에 위치해있는지 알려준다
  if (idx !== -1) {
    // idx가 -1이 아니라면 ==> idx가 oneToMill 배열안에 포함되어 있다면
    oneToMill.splice(idx, 1); // // splice (idx,1) idx순서에서 1가지를 제거하라
  }
}

for (let k in oneToMill) {
  // 전부 다 제거가 된 이후 oneToMill의 배열안의 내용들을 출력하라.
  console.dir(oneToMill[k]);
}
