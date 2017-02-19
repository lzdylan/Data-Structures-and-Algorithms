/**
 * Created by yinchi on 2017/2/19.
 */
var arr = []
function creatArrar(len,start,end) {
    for(let i = 0;i<len;i++){
        arr.push(Math.floor(Math.random()*(end-start))+start);
    }
}
function insertSort() {
    for(let i = 1; i<arr.length;i++){
        for(let j = i;j > 0;j--){
            if(arr[j]<arr[j-1]){
                [arr[j],arr[j-1]] = [arr[j-1],arr[j]]
            }else {
                break;
            }
        }
    }
    console.log("----------------------------------------------------------")
    console.log("我是插入排序"+arr)
}
function fntime(fn) {
    let start = new Date().getTime();
    fn()
    let end = new Date().getTime();
    console.log(end-start+"毫秒!")
}
function main() {
    creatArrar(10000,0,10000)
    fntime(insertSort)
}
main()