function add(...num){
    return num.reduce((total,num)=>total+ num,0);
}

let ret = add(10,20,30,40);
console.log(ret);