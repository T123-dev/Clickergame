var count = 0;
function counter(){
    if(count<1000){
    count= count+1;
    document.getElementById("display").innerHTML=count;}

else {
    count= count+1+""
}
}