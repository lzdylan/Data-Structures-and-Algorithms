/**
 * Created by yinchi on 2017/2/19.
 */
var arr = [];
function creatArray(len,start,end) {
    for(let i = 0; i < len; i++){
        arr.push(Math.floor(Math.random()*(end+start)))
    }
}
function fntime(fn) {
    let start = new Date().getTime();
    fn();
    let end = new Date().getTime();
    console.log("------------------------------------------------------------------------------------")
    console.log(end-start+"毫秒!")
}
function selectSort() {
    for(let i = 0; i < arr.length-1; i++){
        let mixid = i;
        for(let j = i+1;j<arr.length;j++){
            if(arr[j]<arr[mixid]){
                mixid = j;
            }
        }
        [arr[i],arr[mixid]] = [arr[mixid],arr[i]]
    }
    console.log("我是选择排序"+arr);
}
function main() {
    creatArray(10000,0,10000)
    fntime(selectSort)
}
main()