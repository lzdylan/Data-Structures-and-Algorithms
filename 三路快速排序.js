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
    console.log("我是三路快速排序"+arr)
}
function __quickSort(arr,l,r) {
    if(l>=r){
        return;
    }
    [arr[l],arr[Math.floor((r+l)/2)]] = [arr[Math.floor((r+l)/2)],arr[l]]
    let v = arr[l]
    let lt = l;     // arr[l+1...lt] < v
    let gt = r + 1; // arr[gt...r] > v
    let i = l+1;    // arr[lt+1...i) == v
    while( i < gt ){
        if( arr[i] < v ){
            [arr[i], arr[lt+1]]=[arr[lt+1],arr[i]]
            i ++;
            lt ++;
        }
        else if( arr[i] > v ){
            [arr[i], arr[gt-1]]=[arr[gt-1],arr[i]]
            gt --;
        }
        else{ // arr[i] == v
            i ++;
        }
    }
    [arr[l] , arr[lt]]=[arr[lt],arr[l]]
    __quickSort(arr, l, lt-1);
    __quickSort(arr, gt, r);
}
function main() {
    creatArrar(10000,0,10000)
    fntime(quickSort)
}
main()