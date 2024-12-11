// function for_loop(){
//     let limit=parseInt(document.getElementById("limit").value)
//     for (let i=1;i<=limit;i++){
//         console.log(i);
        
//     }
// }

// function while_loop(){
//     let limit=parseInt(document.getElementById("limit").value)
//     let i=1
//     while(i<=limit){
//         console.log(i);
//         i++
        
//     }
// }

// function dowhile_loop(){
//     let limit=parseInt(document.getElementById("limit").value)
//     let i=1
//     do{
//         console.log(i);
//         i++
        
//     }
//     while(i<=limit)
// }

// function odd(){
//     let s=parseInt(document.getElementById("start").value)
//     let l=parseInt(document.getElementById("limit").value)
//     for(let i=s;i<=l;i++){
//         if (i%2!=0){
//             console.log(i);
            
//         }
//     }
// }

// function multi(){
//     let n1=parseInt(document.getElementById("no1").value)
//     for (let i=1;i<=10;i++){
//         console.log(i,'*',n1,'=',i*n1);
        
//     }    
// }

// function sum(){
//     let n=parseInt(document.getElementById("no1").value)
//     let sum=0
//     for (let i=1;i<=n;i++){
//         sum+=i
//     }
//     console.log(sum);
// }

// function fact(){
//     let n=parseInt(document.getElementById("no1").value)
//     let fact=1
//     for (let i=1;i<=n;i++){
//         fact*=i

//     }
//     console.log(fact);
    
// }


function even(){
    let n=parseInt(document.getElementById("no1").value)
    for (let i=1;i<=n;i++){
        if (i%2==0){
            console.log(i);
            
        }
    }
}