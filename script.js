function sum(){
    a=parseInt(document.getElementById("value2").value);
    b=parseInt(document.getElementById('value1').value);
    c=a+b;
    document.getElementById("one").innerHTML=c;

}
function sub(){
    a= document.getElementById("value2").value;
    b=document.getElementById('value1').value;
    c=a-b;
    document.getElementById("one").innerHTML=c;

}
function multi(){
    a= document.getElementById("value2").value;
    b=document.getElementById('value1').value;
    c=a*b;
    document.getElementById("one").innerHTML=c;

}
function dic(){
    a= document.getElementById("value2").value;
    b=document.getElementById('value1').value;
    c=a/b;
    document.getElementById("one").innerHTML=c;

}


