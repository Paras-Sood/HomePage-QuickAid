function updateVal(location_id,finalVal){
    let currVal=parseInt(document.querySelector(`#${location_id}`).innerHTML)
    if (currVal < finalVal) {
        currVal++;
    
    document.querySelector(`#${location_id}`).innerHTML=`${currVal} +`;
    setTimeout(function() {
        updateVal(location_id, finalVal);
      }, 50)
    }
}
function metrics(){
    fetch('https://shrouded-castle-52205.herokuapp.com/api/metrics/')
    .then(response=>response.json())
    .then(metrics=>{
    
        updateVal('total_api_calls',metrics.total_api_calls)
        // // update('google_api_calls',metrics.google_api_calls)
        updateVal('alert_messages_sent',metrics.alert_messages_sent)
    })
}
var i=0,speed=80,text="Don’t waste time waiting for help in an accident, Get Quicker Aid...";
function typeWriter(){
    // console.log(i,text.length)
    if(i<text.length){
        document.getElementById("quote").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
    else if(i==text.length){
        let j=0;
        let t=document.getElementById("quote")
        setInterval(function(){
            if(j===0){
                t.innerHTML=text+"<span style=\"color:red;\">|</span>";
                j=1;
            }else{
                t.innerHTML=text;
                j=0;
            }
        },500);
        // i++;
        // setTimeout(typeWriter, 1000);
    }
    // else{
    //     document.getElementById("quote").innerHTML="D";
    //     i=1;
    //     setTimeout(typeWriter,speed);
    // }
}
document.addEventListener('DOMContentLoaded',()=>{
    metrics();
    typeWriter();
    var navLinks = document.getElementById("navLinks");
    document.querySelector('#showMenu').addEventListener('click',()=>navLinks.style.right="0")
    document.querySelector('#hideMenu').addEventListener('click',()=>navLinks.style.right="-200px")
})


