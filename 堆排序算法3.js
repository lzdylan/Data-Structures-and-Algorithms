/**
 * Created by war3_2 on 2017/2/23.
 */
function heapSort3(arr){
    for(let i = Math.floor((arr.length-1)/2);i >= 0;i--){
        shiftDown(arr,arr.length,i)
    }
    for (let i = arr.length-1;i > 0;i--){
        [arr[0],arr[i]] = [arr[i],arr[0]]
        shiftDown(arr,i,0)
    }
}
function shiftDown(arr,n,k){
    while (2*k+1 < n){
        let j = 2*k+1;
        if(j+1 < n && arr[j+1] > arr[j]){
            j = j+1
        }
        if(arr[k] >= arr[j]){
            break
        }
        [arr[k],arr[j]] = [arr[j],arr[k]]
        k = j;
    }
}
var arr = []
function creatArrar(len,start,end) {
    for(let i = 0;i<len;i++){
        arr.push(Math.floor(Math.random()*(end-start))+start);
    }
}
function main() {
    creatArrar(20,0,100)
    console.log(arr)
    heapSort3(arr)
    console.log(arr)
}
main()
