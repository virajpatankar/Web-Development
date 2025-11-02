let Student = new Map([
    ["Name","Amit"],
    ["Age",25],
    ["City","Pune"],
    ["Pincode",415206]

])

for(let [key,Value] of Student){
    console.log(key,":",Value);
}