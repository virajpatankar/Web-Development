function Wakeup(next){
    console.log("In function Wake up ");
    next();
}
function breakfast(nextnext){
    console.log("In function Breakfast");
    next();

}
function goTocollege(roti){
    console.log("In function Go To college");
    roti();
}
function lunchbreak(){
    console.log("In College Lunch Break");
}
Wakeup(()=> breakfast(()=> goTocollege(()=>lunchbreak())));