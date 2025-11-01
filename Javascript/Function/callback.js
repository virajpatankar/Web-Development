function add(){
    return 10+20;

}

function print(res){
    console.log(res)
}

let result = add();
print(result);













//console.log(add());

//calback
function result(Res){

    console.log(Res);
}   


function add(num1,num2,callback){
    let sum = num1 + num2;
    callback(sum);

}



add(30,40,result);  
console.log("hello");