// function city(){
//     let city=document.getElementById("city").value
//     let h2=document.getElementById("display")

//     if (city=='delhi'){
//         h2.innerHTML="red fort"
//     }
//     else if (city=='agra'){
//         h2.innerHTML="taj mahal"
//     }
//     else if (city=='jaipur'){
//         h2.innerHTML="jal mahal"
//     }
//     else{
//         h2.innerHTML="invalid!!"
//     }
// }

function bill(){
    let unit=parseInt(document.getElementById("unit").value)
    let h2=document.getElementById("display")

    if (unit<=100){
        h2.innerHTML="there is no charge"
    }
    else if (unit<=200){
        h2.innerHTML=(unit-100)*5
    }
    else if (unit>200){
        h2.innerHTML=((unit-200)*10)+500
    }
    else{
        h2.innerHTML="invalid!!"
    }
}

function tax(){
    let cost=parseInt(document.getElementById('cost').value)
    let h2=document.getElementById('display')
    h2.innerHTML=cost
    if (cost>100000){
        h2.innerHTML=cost*0.15
    }
    else if (cost>50000 && cost<=100000){
        h2.innerHTML=cost*0.10
    }
    else if (cost<=50000){
        h2.innerHTML=cost*0.05
    }
    else{
        h2.innerHTML="invalid!!"
    }
}

function days(){
    let day=parseInt(document.getElementById("day").value)
    let h2=document.getElementById("display")

    if (day==1){
        h2.innerHTML="sunday"
    }
    else if (day==2){
        h2.innerHTML="monday"
    }
    else if (day==3){
        h2.innerHTML="tuesday"
    }
    else if (day==4){
        h2.innerHTML="wednesday"
    }
    else if (day==5){
        h2.innerHTML="thursday"
    }
    else if (day==6){
        h2.innerHTML="friday"
    }
    else if (day==7){
        h2.innerHTML="saturday"
    }
    else{
        h2.innerHTML="invalid!!"
    }
}