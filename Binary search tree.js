/**
 * Created by war3_2 on 2017/2/27.
 */
class BST{
    constructor(){
        this.count = 0;
        this.root = null;
    }
    size(){
        return this.count;
    }
    isEmpty(){
        return this.count === 0;
    }
    insert(key,value){//插入元素
        let node = {
            key:key,
            value:value,
            left:null,
            right:null
        }
        if(this.root === null){
            this.root = node;
        }else {
            this.__insert(this.root,node);
        }
        this.count++;
    }
    __insert(root,node){
        if(root.key < node.key){
            if(root.right === null){
                root.right = node
            }else {
                this.__insert(root.right,node)
            }
        }else {
            if(root.left === null){
                root.left = node
            }else {
                this.__insert(root.left,node)
            }
        }
    }
    contain(key){//搜索key值在不在二叉树中
        return this.__contain(this.root,key)
    }
    __contain(root,key){
        if(root === null){
            return false;
        }
        if(key === root.key){
            return true
        }else if (key < root.key){
            return this.__contain(root.left,key)
        }else {
            return this.__contain(root.right,key)
        }
    }
    search(key){//根据key值在二叉树中查找对应的vlaue
        return this.__search(this.root,key)
    }
    __search(root,key){
        if(root === null){
            return null;
        }else if(root.key === key){
            return root.value;
        }else if(root.key > key){
            return this.__search(root.left,key)
        }else {
            return this.__search(root.right,key)
        }
    }
    preOrder(){//前序遍历
        this.__preOrder(this.root);
    }
    __preOrder(root){
        if(root != null){
            console.log(root.key)
            this.__preOrder(root.left);
            this.__preOrder(root.right);
        }
    }
    inOrder(){//中序遍历
        this.__inOrder(this.root);
    }
    __inOrder(root){
        if(root != null){
            this.__inOrder(root.left);
            console.log(root.key);
            this.__inOrder(root.right);
        }
    }
    postOrder(){//后序遍历
        this.__postOrder(this.root);
    }
    __postOrder(root){
        if(root != null){
            this.__preOrder(root.left);
            this.__preOrder(root.right);
            console.log(root.key)
        }
    }
    destroy(){//释放空间
        this.__destroy(this.root);
    }
    __destroy(root){
        if(root != null){
            this.__destroy(root.left);
            this.__destroy(root.right);
            //delete root;
            this.count--;
        }
    }
    levelOrder(){//层序遍历
        let q = [];
        q.push(this.root);
        while (q.length===0){
            let node = q.shift();
            console.log(node.key)
            if(node.left){
                q.push(node.left)
            }
            if(node.right){
                q.push(node.right)
            }
        }
    }
    minmun(){//查找最小节点
        if(this.count != 0){
            return this.__minmun(this.root);
        }
    }
    __minmun(root){
        if(root.left === null){
            return root;
        }else {
            return this.__minmun(root.left);
        }
    }
    maxmun(){//查找最大节点
        if (this.count != 0){
            return this.__maxmun(this.root);
        }
    }
    __maxmun(root){
        if(root.right === null){
            return root;
        }else {
            return this.__maxmun(root.right);
        }
    }
    removemin(){//删除最小节点
        if(this.root){
            this.root = this.__removemin(this.root)
        }
    }
    __removemin(root){
        if(root.left === null){
            let node = root.right;
            this.count--;
            return node;
        }else {
            root.left = this.__removemin(root.left)
            return root
        }
    }
    removemax(){//删除最大节点
        if(this.root){
            this.root = this.__removemax(this.root);
        }
    }
    __removemax(root){
        if(root.right === null){
            let node = root.left;
            this.count--;
            return node
        }else {
            root.right = this.__removemax(root.right);
            return root;
        }
    }
    remove(key){//删除节点
        if(this.root){
            this.root = this.__remove(this.root,key);
        }
    }
    __remove(root,key){
        if(root === null){
            return null
        }
        if(key < root.key){
            root.left = this.__remove(root.left,key)
            return root;
        }else  if(key > root.key){
            root.right = this.__remove(root.right,key)
            return root;
        }else {
            if(root.left === null){
                let node = root.right;
                this.count--;
                return node;
            }
            if(root.right === null){
                let node = root.left;
                this.count--;
                return node;
            }
            let node = root;
            let successor = this.minmun(node.right);
            successor.right = this.removemin(node.right);
            successor.left = node.left;
            return successor;
        }
    }
}
function main() {
    let bst = new BST();
    for (let i = 0; i < 10; i++){
        bst.insert(Math.floor(Math.random()*100),"插入值"+Math.floor(Math.random()*100));
    }
    //console.log(bst);
    //console.log(bst.contain(5))
    /*bst.preOrder()
    console.log("----------------------------------")
    bst.inOrder()
    console.log("----------------------------------")
    bst.postOrder()
    console.log("----------------------------------")
    bst.levelOrder()*/
    /*console.log(bst.minmun())

    console.log(bst.maxmun())*/
    bst.inOrder()
    console.log("----------------------------------")
    bst.removemin()
    bst.inOrder()
    console.log("----------------------------------")
    bst.removemax()
    bst.inOrder()
    console.log("----------------------------------")
}
main()