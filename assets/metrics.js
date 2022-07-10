function update(location_id,value){
    let val=parseInt(document.querySelector(`#${location_id}`).innerHTML)
    document.querySelector(`#${location_id}`).innerHTML=`${value} +`;
}
document.addEventListener('DOMContentLoaded',()=>{
    fetch('https://shrouded-castle-52205.herokuapp.com/api/metrics/')
    .then(response=>response.json())
    .then(metrics=>{
        update('total_api_calls',metrics.total_api_calls)
        // update('google_api_calls',metrics.google_api_calls)
        update('alert_messages_sent',metrics.alert_messages_sent)
    })
    var navLinks = document.getElementById("navLinks");
    document.querySelector('#showMenu').addEventListener('click',()=>navLinks.style.right="0")
    document.querySelector('#hideMenu').addEventListener('click',()=>navLinks.style.right="-200px")
})