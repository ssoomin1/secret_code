<<<<<<< HEAD
//let myKey=document.getElementById(key);
let myKey='sleepy';
const alphabetArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const alphaArr = Array.from(Array(5), () => Array(5).fill(null)); //실제로 출력되는 알파벳보드
let secretKey=myKey.trim().split('');
function sk(key){
    secretKey=key.trim().split('').concat(alphabetArr);
}
const encArr = [[]];
//중복제거한 key
const uniquKey= secretKey.filter((e,idx)=>idx === secretKey.indexOf(e)).join('');
//소문자로
const secretSentence ='Are you sleepy'.toLowerCase().split('');
let keyLengthCount=0;

//알파벳판에 넣기 
for(let i = 0 ; i < alphaArr.length ; i++ )
{
    for(let j = 0; j <alphaArr[i].length ; j++ )
    {
        alphaArr[i][j] = uniquKey.charAt(keyLengthCount++);
        document.write(alphaArr[i][j]);
    }document.write("<br>");
}

//암호화할 문장 공백 제거
const uniqueSen = secretSentence.filter((element)=>element!==' ').join('');

//2개씩 자르고 조건에 맞추어 x 넣기
let tmpArr=[0,0];
let tmpArr2=[]; //이게 playFair와 같다. 
for(let i=0;i<uniqueSen.length;i+=2){
    tmpArr[0]=uniqueSen[i];
    tmpArr[1]=uniqueSen[i+1];
    if(tmpArr[0]===tmpArr[1]){
        tmpArr[1]='x';
        i--;
    }
    tmpArr[1]===undefined?tmpArr[1]='x':tmpArr[1];
    tmpArr2.push([tmpArr[0],tmpArr[1]]);
}

let x1=0,x2=0,y1=0,y2=0;


for(let f=0;f<tmpArr2.length;f++){
    let arr=[0,0] //tmparr과 동일
    for(let i=0;i<alphaArr.length;i++){
        //alphaBoard는 alphaArr와 같다.
        for(let j=0;j<alphaArr[i].length;j++){
            if(alphaArr[i][j]===tmpArr2[i][0]){
                x1=i;
                y1=j;
            }
            if(alphaArr[i][j] === tmpArr2[i][1]){
                x2=i;
                y2=j;
            }
        }
    }

    //행이 같은 경우
    if(x1===x2){
        arr[0]=alphaArr[x1][(y1+1)%5];
        arr[1]=alphaArr[x2][(y2+1)%5];
    }else if(y1===y2){
        //열이 같은 경우
        arr[0]=alphaArr[(x1+1)%5][y1];
        arr[1]=alphaArr[(x2+1)%5][y2];
    }else{
        //행,열 모두 다른 경우
        arr[0]=alphaArr[x2][y1];
        arr[1]=alphaArr[x1][y2];
    }
    encArr.push(arr);
}



// for(let i=0;i<alphaArr.length;)
// document.write(alphaArr);

// //맵핑하기
// function strEncryption(key,str){
//     let playFair=[[]];
//     let encPlayFiar=[[]];
//    // ArrayList<char[]> playFair = new ArrayList<char[]>();
//     //ArrayList<char[]> encPlayFair = new ArrayList<char[]>();
//     let x1=0,x2=0,y1=0,y2=0;
//    // int x1 = 0 , x2 = 0 , y1 = 0, y2 = 0;
//     let encStr="";
//    //String encStr ="";
//     for(let i=0;i<tmpArr2.length;i++){

//     }

    
//     for(int i = 0 ; i < playFair.size() ; i++ )
//     {

//         char[] tmpArr = new char[2];
//         for( int j = 0 ; j < alphabetBoard.length ; j++ ) //쌍자암호의 각각 위치체크
//         {
//             for( int k = 0 ; k < alphabetBoard[j].length ; k++ )
//             {
//                 if(alphabetBoard[j][k] == playFair.get(i)[0])
//                 {
//                     x1 = j;
//                     y1 = k;
//                 }
//                 if(alphabetBoard[j][k] == playFair.get(i)[1])
//                 {
//                     x2 = j;
//                     y2 = k;
//                 }
//             }
//         }
        
        
//         if(x1==x2) //행이 같은경우
//         {
//             tmpArr[0] = alphabetBoard[x1][(y1+1)%5];
//             tmpArr[1] = alphabetBoard[x2][(y2+1)%5];
//         }
//         else if(y1==y2) //열이 같은 경우
//         {
//             tmpArr[0] = alphabetBoard[(x1+1)%5][y1];
//             tmpArr[1] = alphabetBoard[(x2+1)%5][y2];
//         } 
//         else //행, 열 모두 다른경우
//         {
//             tmpArr[0] = alphabetBoard[x2][y1];
//             tmpArr[1] = alphabetBoard[x1][y2];
//         }
        
//         encPlayFair.add(tmpArr);
        
//     }
    
//     for(int i = 0 ; i < encPlayFair.size() ; i++)
//     {
//         encStr += encPlayFair.get(i)[0]+""+encPlayFair.get(i)[1]+" ";
//     }
    
    
//     return encStr;
// }



console.log(uniquKey);
console.log(alphaArr);
console.log(uniqueSen);
=======
//let myKey=document.getElementById(key);
let myKey='sleepy';
const alphabetArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const alphaArr = Array.from(Array(5), () => Array(5).fill(null)); //실제로 출력되는 알파벳보드
let secretKey=myKey.trim().split('');
function sk(key){
    secretKey=key.trim().split('').concat(alphabetArr);
}
const encArr = [[]];
//중복제거한 key
const uniquKey= secretKey.filter((e,idx)=>idx === secretKey.indexOf(e)).join('');
//소문자로
const secretSentence ='Are you sleepy'.toLowerCase().split('');
let keyLengthCount=0;

//알파벳판에 넣기 
for(let i = 0 ; i < alphaArr.length ; i++ )
{
    for(let j = 0; j <alphaArr[i].length ; j++ )
    {
        alphaArr[i][j] = uniquKey.charAt(keyLengthCount++);
        document.write(alphaArr[i][j]);
    }document.write("<br>");
}

//암호화할 문장 공백 제거
const uniqueSen = secretSentence.filter((element)=>element!==' ').join('');

//2개씩 자르고 조건에 맞추어 x 넣기
let tmpArr=[0,0];
let tmpArr2=[]; //이게 playFair와 같다. 
for(let i=0;i<uniqueSen.length;i+=2){
    tmpArr[0]=uniqueSen[i];
    tmpArr[1]=uniqueSen[i+1];
    if(tmpArr[0]===tmpArr[1]){
        tmpArr[1]='x';
        i--;
    }
    tmpArr[1]===undefined?tmpArr[1]='x':tmpArr[1];
    tmpArr2.push([tmpArr[0],tmpArr[1]]);
}

let x1=0,x2=0,y1=0,y2=0;


for(let f=0;f<tmpArr2.length;f++){
    let arr=[0,0] //tmparr과 동일
    for(let i=0;i<alphaArr.length;i++){
        //alphaBoard는 alphaArr와 같다.
        for(let j=0;j<alphaArr[i].length;j++){
            if(alphaArr[i][j]===tmpArr2[i][0]){
                x1=i;
                y1=j;
            }
            if(alphaArr[i][j] === tmpArr2[i][1]){
                x2=i;
                y2=j;
            }
        }
    }

    //행이 같은 경우
    if(x1===x2){
        arr[0]=alphaArr[x1][(y1+1)%5];
        arr[1]=alphaArr[x2][(y2+1)%5];
    }else if(y1===y2){
        //열이 같은 경우
        arr[0]=alphaArr[(x1+1)%5][y1];
        arr[1]=alphaArr[(x2+1)%5][y2];
    }else{
        //행,열 모두 다른 경우
        arr[0]=alphaArr[x2][y1];
        arr[1]=alphaArr[x1][y2];
    }
    encArr.push(arr);
}



// for(let i=0;i<alphaArr.length;)
// document.write(alphaArr);

// //맵핑하기
// function strEncryption(key,str){
//     let playFair=[[]];
//     let encPlayFiar=[[]];
//    // ArrayList<char[]> playFair = new ArrayList<char[]>();
//     //ArrayList<char[]> encPlayFair = new ArrayList<char[]>();
//     let x1=0,x2=0,y1=0,y2=0;
//    // int x1 = 0 , x2 = 0 , y1 = 0, y2 = 0;
//     let encStr="";
//    //String encStr ="";
//     for(let i=0;i<tmpArr2.length;i++){

//     }

    
//     for(int i = 0 ; i < playFair.size() ; i++ )
//     {

//         char[] tmpArr = new char[2];
//         for( int j = 0 ; j < alphabetBoard.length ; j++ ) //쌍자암호의 각각 위치체크
//         {
//             for( int k = 0 ; k < alphabetBoard[j].length ; k++ )
//             {
//                 if(alphabetBoard[j][k] == playFair.get(i)[0])
//                 {
//                     x1 = j;
//                     y1 = k;
//                 }
//                 if(alphabetBoard[j][k] == playFair.get(i)[1])
//                 {
//                     x2 = j;
//                     y2 = k;
//                 }
//             }
//         }
        
        
//         if(x1==x2) //행이 같은경우
//         {
//             tmpArr[0] = alphabetBoard[x1][(y1+1)%5];
//             tmpArr[1] = alphabetBoard[x2][(y2+1)%5];
//         }
//         else if(y1==y2) //열이 같은 경우
//         {
//             tmpArr[0] = alphabetBoard[(x1+1)%5][y1];
//             tmpArr[1] = alphabetBoard[(x2+1)%5][y2];
//         } 
//         else //행, 열 모두 다른경우
//         {
//             tmpArr[0] = alphabetBoard[x2][y1];
//             tmpArr[1] = alphabetBoard[x1][y2];
//         }
        
//         encPlayFair.add(tmpArr);
        
//     }
    
//     for(int i = 0 ; i < encPlayFair.size() ; i++)
//     {
//         encStr += encPlayFair.get(i)[0]+""+encPlayFair.get(i)[1]+" ";
//     }
    
    
//     return encStr;
// }



console.log(uniquKey);
console.log(alphaArr);
console.log(uniqueSen);
>>>>>>> 8a37a87fc18f23507e84813f090bbe04de9fef61
console.log(encArr);