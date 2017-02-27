/**
 * Created by war3_2 on 2017/2/23.
 */
class ImdexMaxHeap {
    constructor(){
        this.data = [];
        this.index = [];//index中的值是data中的元素的索引
        this.reverse = [0];//reverse中的元素是data中的元素在堆的里索引
        this.count = 0;
    }
    size() {
        return this.count;
    }
    isEmpty() {
        return this.count === 0;
    }
    insert(item) {//插入元素,传入的i对用户而言，是从0索引的
        this.count++;
        this.data[this.count] = item;
        this.index[this.count] = this.count;
        this.reverse[this.count] = this.count
        this.shiftUp(this.count);
    }
    shiftUp(k) {
        while (k > 1 && this.data[this.index[Math.floor(k/2)]] < this.data[this.index[k]]){
            [this.index[Math.floor(k/2)],this.index[k]] = [this.index[k],this.index[Math.floor(k/2)]]
            this.reverse[this.index[Math.floor(k/2)]] = Math.floor(k/2)
            this.reverse[this.index[k]] = k
            k = Math.floor(k / 2);
        }
    }
    shiftDown(k){
        while (2*k <= this.count){
            let j = 2*k;
            if(j+1 <= this.count && this.data[this.index[j+1]] > this.data[this.index[j]]){
                j = j+1
            }
            if(this.data[this.index[k]] >= this.data[this.index[j]]){
                break
            }
            [this.index[k],this.index[j]] = [this.index[j],this.index[k]]
            this.reverse[this.index[k]] = k;
            this.reverse[this.index[j]] = j;
            k = j;
        }
    }
    extractMax(){
        if(this.count > 0){
            let ret = this.data[this.index[1]]
            //console.log(this.data[1]+"----------------------------"+this.data[this.count])
            if([this.index[1],this.index[this.count]] = [this.index[this.count],this.index[1]]){
                this.reverse[this.index[1]] = 1;
                this.reverse[this.index[this.count]] = 0;
                this.index = this.index.slice(0,this.count)
                this.reverse = this.reverse.slice(0,this.count)
                this.count--
            }
            this.shiftDown(1)
            return ret;
        }
    }
    extractMaxIndex(){
        if(this.count > 0){
            let ret = this.index[1]-1;
            //console.log(this.data[1]+"----------------------------"+this.data[this.count])
            if([this.index[1],this.index[this.count]] = [this.index[this.count],this.index[1]]){
                this.reverse[this.index[1]] = 1;
                this.reverse[this.index[this.count]] = 0;
                this.index = this.index.slice(0,this.count)
                this.reverse = this.reverse.slice(0,this.count)
                this.count--
            }
            this.shiftDown(1)
            return ret;
        }
    }
    getItem(i) {
        this.contain(i)
        return this.data[i+1]
    }
    contain(i){
        if(i+1 >=1 && i+1 <= this.data.length){
            return this.reverse[i+1] !=0;
        }
    }
    change(i,item) {
        this.contain(i)
        i += 1;
        this.data[i] = item
        for(let j = 1; j<= this.count;j++){
            if(this.index[j] ===i){
                this.shiftUp(j);
                this.shiftDown(j)
                return
            }
        }
    }
    change2(i,item) {
        this.contain(i)
        i += 1;
        this.data[i] = item
        let j = this.reverse[i]
        this.shiftUp(j);
        this.shiftDown(j)
    }
}
function main() {
    let maxheap = new ImdexMaxHeap();
    for (let i = 0; i < 20;i++){
        maxheap.insert(Math.floor(Math.random()*100));
    }
    console.log(maxheap.data+"---------"+maxheap.index+"---------"+maxheap.reverse);
    maxheap.extractMax()
    console.log(maxheap.data+"---------"+maxheap.index+"------------"+maxheap.reverse);
}
main()
