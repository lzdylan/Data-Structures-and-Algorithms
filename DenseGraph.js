/**
 * Created by war3_2 on 2017/3/2.
 */
//邻接矩阵
class DenseGraph{
    constructor(n,directed){
        this.n = n;
        this.m = 0;
        this.directed = directed;
        this.g = [];
        for (let i = 0; i < n; i++){
            let s = new Array(n).fill(false)
            this.g.push(s);
        }
    }
    V(){
        return this.n;
    }
    M(){
        return this.m;
    }
    addEdge(v,w){
        if(v >= 0 && v < n){
            if(w >= 0 && w < n){
                if(this.hasEdge(v,w)){
                    return;
                }
                this.g[v][w] = true;
                if(!this.directed){
                    this.g[w][v] = true;
                }
                this.m++;
            }
        }
    }
    hasEdge(v,w){
        if(v >= 0 && v < n){
            if(w >= 0 && w < n){
                return this.g[v][w];
            }
        }
    }
}