/**
 * Created by war3_2 on 2017/3/2.
 */
//邻接表
class SparseGraph{
    constructor(n,directed){
        this.n = n;
        this.m = 0;
        this.directed = directed;
        this.g = [];
        for (let i = 0; i < n; i++){
            this.g.push(null);
        }
    }
    v(){
        return this.n;
    }
    E(){
        return this.w;
    }
    addEdge(v,w){
        if(v >= 0 && v < n) {
            if (w >= 0 && w < n) {
                this.g[v] = w;
                if(v != w &&!this.directed){
                    this.g[w].push(v);
                }
                this.m++;
            }
        }
    }
    hasEdge(v,w){
        if(v >= 0 && v < n) {
            if (w >= 0 && w < n) {
                for(let i = 0; i < this.g[v].length+1;i++){
                    if(this.g[v][i] == w){
                        return true;
                    }
                    return false;
                }
            }
        }
    }
}