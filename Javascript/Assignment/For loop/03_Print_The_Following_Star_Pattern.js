let i,j;
let Triangle = "";

for(i=1;i<=5;i++){

    for(j=1;j<=5;j++){

        if(i>=j)
        {
            Triangle = Triangle + " * ";
        }
    }
    console.log(Triangle);
    Triangle="";
}
