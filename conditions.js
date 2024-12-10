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