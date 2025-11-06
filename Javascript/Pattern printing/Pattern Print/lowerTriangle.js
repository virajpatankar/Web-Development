let i = 0,j = 0;
let Pattern = "";

for(i = 1; i <= 5;i++)
{
    for(j = 1; j <= 5; j++)
    {
         if(i >= j)
         {
             Pattern = Pattern + " * ";

         }  

    }   

    console.log(Pattern);
    Pattern = "";
}