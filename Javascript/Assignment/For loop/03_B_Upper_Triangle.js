let i,j;

let pattern = "";
for(i = 5; i>= 1;i--){
    for(j=1;j<=i;j++){
        pattern = pattern+ " * ";
    }
    console.log(pattern);
    pattern= "";
}
