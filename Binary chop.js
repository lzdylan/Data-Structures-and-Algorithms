/**
 * Created by war3_2 on 2017/3/1.
 */
function binarySearch(arr,target) {
    let l = 0;
    let r = arr.length-1;
    while (l <= r){
        //let mid = Math.floor((l + r)/2)有bug 如果l和r是数值型里最大值的话，l+r会溢出
        let mid = l + Math.floor((r - l)/2)
        if (target === arr[mid]){
            return mid
        }else if(target > arr[mid]){
            l = mid + 1;
        }else {
            r = mid -1;
        }
    }
    return -1;
}