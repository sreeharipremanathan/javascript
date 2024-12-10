// alert("heyy guys")
// a="good morning"
// console.log("welcome all",a)
// alert(a)

// var a="hey"
// var a=10

// let a="heyy"
// a=20

// const a="hey"


//data types
// let a=1.0         //number
// let a="hello"      //string
// let a=true         //boolean
// let a=[1,2,3]        //array
// let a={name:"abc",age:"18"}     //object
// let a       //undefined

// console.log(typeof a)

//operators
//arithmetic
//+,-,*,/,%,++,--
// let a=3
// a++
// a--
// console.log(a)

// assignment operators
//=,+=,-=,*=,/=,%=,**=
// let a=10
// a+=5
// a**=2
// console.log(a)

// comparison operator
// ==,!=<,>,<=,>=,===,!==

// let a=10
// let b="10"
// console.log(a===b)
// console.log(a!==b)

//logical operators
// &&,||
// let a=10
// let b="10"
// console.log(a!=b && a==10)
// console.log(a!=b ||  a==10)



//functions

// function sample(){
//     let result=document.getElementById("name").value
//     console.log(result)
//     let result=document.getElementById("name")
//     console.log(result.value)


//     document.getElementById("display").innerHTML=result.value
//     let h2=document.getElementById("display")
//     h2.innerHTML=result.value
// }

function add(){
    let no1=parseInt(document.getElementById("no1").value)
    let no2=parseInt(document.getElementById("no2").value)
    let h2=document.getElementById("display")
    h2.innerHTML=no1+no2
}

function sub(){
    let no1=parseInt(document.getElementById("no1").value)
    let no2=parseInt(document.getElementById("no2").value)
    let h2=document.getElementById("display")
    h2.innerHTML=no1-no2
}
function multi(){
    let no1=parseInt(document.getElementById("no1").value)
    let no2=parseInt(document.getElementById("no2").value)
    let h2=document.getElementById("display")
    h2.innerHTML=no1*no2
}
function div(){
    let no1=parseInt(document.getElementById("no1").value)
    let no2=parseInt(document.getElementById("no2").value)
    let h2=document.getElementById("display")
    h2.innerHTML=no1/no2
}
function mod(){
    let no1=parseInt(document.getElementById("no1").value)
    let no2=parseInt(document.getElementById("no2").value)
    let h2=document.getElementById("display")
    h2.innerHTML=no1%no2
}

function condition(){
    let no1=parseInt(document.getElementById("no1").value)
    let no2=parseInt(document.getElementById("no2").value)
    let h2=document.getElementById("display")
    if (no1==no2){
        h2.innerHTML="equal"
    }
    else if(no1!=no2){
        h2.innerHTML="not equal"
    }   
}

