/**
 * Created by war3_2 on 2017/3/2.
 */
class UnionFind{
    constructor(n){
        this.id = []
        for(let i = 0; i < n; i++){
            this.id[i] = "我是字符串"+Math.floor(Math.random()*i);
        }
        this.count = n;
    }
    find(p){
        if(p >=0 && p < this.count){
            return this.id[p];
        }
    }
    isConnected(p,q){
        return this.find(p) == this.find(q)
    }
    unionElements(p,q){
        let pID = this.find(p);
        let qID = this.find(q);
        if(pID == qID){
            return;
        }
        for(let i = 0; i< this.count;i++){
            if(this.id[i] == pID){
                this.id[i] = qID;
            }
        }
    }
}
function main() {
    let union = new UnionFind(100)
    /*for(let i = 0; i < 10000; i++){
        console.log(union.id[i])
    }
    console.log(union.find(5))*/
    console.log(union.find(100))
    console.log(union.id)
    union.unionElements(10,20)
    console.log(union.id)
    console.log(union.isConnected(10,100))
}
main()