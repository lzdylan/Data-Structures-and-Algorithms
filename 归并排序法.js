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
var arr = [];
function guibing() {
    _gui(arr,0,arr.length-1);
    console.log("我是归并排序"+arr);
}
function _gui(arr,l,r) {
    if(l >= r){
        return;
    }
    let mid = Math.floor((r+l)/2);
    _gui(arr,l,mid);
    _gui(arr,mid+1,r);creatArrar
    _merge(arr,l,mid,r);
}
function _merge (arr,l,mid,r) {
    let aux = [];
    for (let i=l; i<=r; i++){
        aux[i-l] = arr[i]
    }
    let i = l;
    let j = mid + 1;
    for (let k = l;k <= r; k++){
        if(i>mid){
            arr[k] = aux[j-l];
            j++
        }else if(j>r) {
            arr[k] = aux[i-l];
            i++
        }
        else if(aux[i-l]<aux[j-l]){
            arr[k] = aux[i-l];
            i++
        }else {
            arr[k] = aux[j-l];
            j++
        }
    }
}
function main() {
    creatArrar(10000,0,10000)
    fntime(guibing)
}
main()