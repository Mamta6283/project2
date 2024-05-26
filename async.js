// console.log("first")

// setTimeout(function(){
//     console.log("third")
// },1000)
// console.log("third")



//async code

// function getData(){
//     setTimeout(function(){
//         data1="nitin jaswal "
        
//     },1000)
// }

// console.log("start")//first this will run 
// let data1 //undefined because you have used the data already  //sec thi will be run

// getData()
//  console.log("welcome",data1)




//but you can handle this asyncode by callback 

// function getData(callback){
//     setTimeout(function(){
//         data2="nitin jaswal "
//         callback(data2)
//     },1000)
// }

// console.log("start")
// let data2

// getData( function(value){
//     console.log("welcome",value)
// })

// // console.log("welcome",data)



//promise (function (resolve ,reject))
//first promise production or defining 

const mypromise=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("starting")
    resolve()
    },5000)
})





// promise consume
// syntax promise_name.then(function.catch(function))0

mypromise.then(function(){console.log("sucess")})
.catch(function(){console.log("error")})

//getting data from server and putting into our cliet side 

let head=document.querySelector("#brand")
console.log(head)

let p=document.querySelector("p")
let h1=document.querySelector("h1")

let img=document.querySelector("img")
console.log(img)



async function datafromserver(){
    let response= await fetch('https://dummyjson.com/products/1')
    let formatted=await response.json()
    console.log(formatted)
   head.innerHTML=formatted.brand
   h1.innerHTML=formatted.category
   img.src=formatted.thumbnail
   
}
datafromserver()


// let div=document.getElementById("div")
// let ul=document.getElementById("list")
// let head=document.getElementById("brand")


// async function getData(){
//     let response= await fetch('https://dummyjson.com/products/1')
//        let formatted=await response.json()
//        console.log(formatted)
//       head.innerHTML=formatted.brand

// }