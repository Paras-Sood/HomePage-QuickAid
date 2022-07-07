function update(location_id,value){
    let val=parseInt(document.querySelector(`#${location_id}`).innerHTML)
    document.querySelector(`#${location_id}`).innerHTML=`${value} +`;
}
document.addEventListener('DOMContentLoaded',()=>{
    fetch('http://shrouded-castle-52205.herokuapp.com/api/metrics/')
    .then(response=>response.json())
    .then(metrics=>{
        update('total_api_calls',metrics.total_api_calls)
        update('google_api_calls',metrics.google_api_calls)
        update('alert_messages_sent',metrics.alert_messages_sent)
    })
})