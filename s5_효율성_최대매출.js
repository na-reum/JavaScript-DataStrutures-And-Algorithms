function solution(k, arr){
    let answer=0;
    for(let i = 0; i<arr.length-2; i++){
        let sum = arr[i];
        for(let j = i+1; j<i+k; j++ ){
            sum += a[j];
        }
        if(answer<sum)answer=sum
    }          
    return answer;
}

let a=[12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
