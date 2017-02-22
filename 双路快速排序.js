/**
 * Created by war3_2 on 2017/2/20.
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
function quickSort() {
    __quickSort(arr,0,arr.length-1);
    console.log("我是双路快速排序"+arr)
}
function __quickSort(arr,l,r) {
    if(l>=r){
        return;
    }
    let p = __partition(arr,l,r);
    __quickSort(arr,l,p-1);
    __quickSort(arr,p+1,r);
}
function __partition(arr,l,r) {
    //取数组中间值跟第一个元素换位置，为了优化快速排序对于近乎排序的数组的性能问题
    [arr[l],arr[Math.floor((r+l)/2)]] = [arr[Math.floor((r+l)/2)],arr[l]]
    let v = arr[l];
    let j = r;
    let i = l+1;
    while (true){
        while (i <= r && arr[i] < v){
            i++
        }
        while (j >= l+1 && arr[j] > v){
            j--
        }
        if(i>j){
            break
        }else {
            [arr[i],arr[j]] = [arr[j],arr[i]]
            i++
            j--
        }
    }
    [arr[j],arr[l]]=[arr[l],arr[j]]
    return j;
}
function main() {
    creatArrar(10000,0,10000)
    fntime(quickSort)
}
main()