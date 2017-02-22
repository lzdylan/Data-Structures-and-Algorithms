/**
 * Created by war3_2 on 2017/2/21.
 */
class MaxHeap {
    constructor(){
        this.data = [];
        this.count = 0;
    }
    size() {
        return this.count;
    }
    isEmpty() {
        return this.count === 0;
    }
    insert(item) {
        this.data[this.count+1] = item;
        this.count++;
        this.shiftUp(this.count);
    }
    shiftUp(k) {
        while (k > 1 && this.data[Math.floor(k/2)] < this.data[k]){
            [this.data[Math.floor(k/2)],this.data[k]] = [this.data[k],this.data[Math.floor(k/2)]]
            k = Math.floor(k / 2);
        }
    }
    shiftDown(k){
        while (2*k <= this.count){
            let j = 2*k;
            if(j+1 <= this.count && this.data[j+1] > this.data[j]){
                j = j+1
            }
            if(this.data[k] >= this.data[j]){
                break
            }
            [this.data[k],this.data[j]] = [this.data[j],this.data[k]]
            k = j;
        }
    }
    extractMax(){
        if(this.count > 0){
            let ret = this.data[1]
            console.log(this.data[1]+"----------------------------"+this.data[this.count])
            if([this.data[1],this.data[this.count]] = [this.data[this.count],this.data[1]]){
                this.data = this.data.slice(0,this.count)
                this.count--
            }
            this.shiftDown(1)
            return ret;
        }
    }
}
function main() {
    let maxheap = new MaxHeap();
    for (let i = 0; i < 20;i++){
        maxheap.insert(Math.floor(Math.random()*100));
    }
    console.log(maxheap);
    maxheap.extractMax()
    console.log(maxheap);
}
main()
