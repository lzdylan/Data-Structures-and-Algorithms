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
function mergeSortBU() {
    for(let sz = 1; sz<arr.length;sz += sz){//从底部归并，1，2，4，8，16元素个数归并
        for (let i = 0; i+sz<arr.length;i+=sz+sz){//每一次递归的时候元素的起始位置，arr[i……i+sz-1],arr[i+sz……i+2*sz-1]
            _merge(arr,i,i+sz-1,Math.min(i+sz+sz-1,arr.length-1))
        }
    }
    console.log("我是从底到顶归并排序"+arr);
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
    fntime(mergeSortBU)
}
main()