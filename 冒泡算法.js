/**
 * Created by yinchi on 2017/2/19.
 */
var arr = [];
function creatArray(len,start,end) {
    for(let i = 0;i < len; i++){
        arr.push(Math.floor(Math.random()*(start+end)));
    }
}
function fntime(fn) {
    let start = new Date().getTime();
    fn();
    let end = new Date().getTime();
    console.log("------------------------------------------------------------------------------------")
    console.log(end-start+"毫秒!")
}
function maopao() {
    for(let i = 0;i < arr.length;i++){
        for (let j = 1;j < arr.length; j++){
            if(arr[j] < arr[j-1]){
                [arr[j],arr[j-1]] = [arr[j-1],arr[j]]
            }
        }
    }
    console.log("我是冒泡算法"+arr)
}
function main() {
    creatArray(10000,0,10000);
    fntime(maopao)
}
main()