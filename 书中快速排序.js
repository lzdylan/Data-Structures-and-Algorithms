/**
 * Created by war3_2 on 2017/2/22.
 */
var arr = []
function creatArrar(len,start,end) {
    for(let i = 0;i<len;i++){
        arr.push(Math.floor(Math.random()*(end-start))+start);
    }
}
function fntime(fn) {
    let start = new Date().getTime();
    fn()
    let end = new Date().getTime();
    console.log((end-start)+"毫秒!")
}
function quickSort() {
    __quickSort(arr, 0, arr.length - 1);
    console.log("我是书中的快速排序"+arr);
}
function __quickSort(arr,l,r) {
    if(arr.length > 1){
        let index = partition(arr,l,r);
        if(l < index-1){
            __quickSort(arr,l,index-1);
        }
        if(index < r){
            __quickSort(arr,index,r)
        }
    }
}
function partition(arr,l,r) {
    let middle = arr[Math.floor((r+l)/2)]
    let i = l;
    let j = r;
    while (i <= j){
        while (arr[i]<middle){
            i++
        }
        while (arr[j]>middle){
            j--
        }
        if(i <= j){
            [arr[i],arr[j]] = [arr[j],arr[i]]
            i++
            j--
        }
    }
    return i;
}
function main() {
    creatArrar(10000,0,10000);
    fntime(quickSort)
}
main()
