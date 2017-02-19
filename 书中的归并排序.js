/**
 * Created by yinchi on 2017/2/19.
 */
var arr = []
function creatArrar(len,start,end) {
    for(let i = 0;i<len;i++){
        arr.push(Math.floor(Math.random()*(end-start))+start);
    }
}
function fntime(fn) {
    let start = new Date().getTime(); // 开始时间
    fn()
    let end = new Date().getTime(); // 结束时间
    console.log("------------------------------------------")
    console.log(end - start+"毫秒！");
}
function mergeSort() {
    arr = mergeSortRec(arr);
    console.log("我是书中的归并排序"+arr)
}
function mergeSortRec(arr) {
    if(arr.length===1){
        return arr;
    }
    let mid = Math.floor(arr.length/2);
    let left = arr.slice(0,mid);
    let right = arr.slice(mid,arr.length);
    return merge(mergeSortRec(left),mergeSortRec(right));
}
function merge(left,right) {
    let aux = [];
    let il = 0;
    let ir = 0;
    while (il < left.length && ir <right.length){
        if(left[il] < right[ir]){
            aux.push(left[il++]);
        }else {
            aux.push(right[ir++])
        }
    }
    while (il < left.length){
        aux.push(left[il++])
    }
    while (ir<right.length){
        aux.push(right[ir++])
    }
    return aux;
}
function main() {
    creatArrar(10000,0,10000)
    fntime(mergeSort)
}
main()