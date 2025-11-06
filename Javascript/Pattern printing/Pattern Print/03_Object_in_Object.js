let student = {
    Name : "Viraj",
    Age : 21,
    Address : {
        City : "Patan",
        Pincode : 415206
    }
};

for(let key in student){
    if(typeof Student[key] === "Object"){
        for(let innerkey in Student[key]){
            Console.log(innerkey + ":",Student[key][innerkey]);
        }
    }
    else
    {
        Console.log(key + ":",Student[key]);
    }    
}