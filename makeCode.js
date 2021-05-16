const alphabetArr=['a','b','c','d','e','f','g','h','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const alphaArr = Array.from(Array(5), () => Array(5).fill(null));
const secretKey='sleeply'.trim().split('');
const secretSentence ='Are you sleepy'.toLowerCase().split('');
//const newKey=new Set(secretKey); //set은 중복된 값을 제거한다.
//1. 중복된 값 제거
//indexOf는 처음에 찾은 값을 반환 이거랑 element의 index랑 같을 때만
const uniqueKey = secretKey.filter((element, index) => {
    return secretKey.indexOf(element) === index;
});



//2. 2개씩 잘라주고 연속되면 x 넣어주기 => 공백 제거
const uniqueSen = secretSentence.filter((element)=>element!==' ');
let tmpArr=[0,0];
let tmpArr2=[];
for(let i=0;i<uniqueSen.length;i+=2){
    tmpArr[0]=uniqueSen[i];
    tmpArr[1]=uniqueSen[i+1];
    if(tmpArr[0]===tmpArr[1]){
        tmpArr[1]='x';
    }
    tmpArr2.push([tmpArr[0],tmpArr[1]]);
}

console.log(secretKey);
console.log(uniqueKey);
console.log(uniqueSen);
console.log(tmpArr2);