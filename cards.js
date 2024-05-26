let container=document.getElementById("container")
console.log(container)
console.log(container.innerHTML)

// let h1=document.getElementById("products")

async function datafromserver(){
    let response= await fetch('https://dummyjson.com/products/')
    let data=await response.json()
    console.log(data)//ismein sari value ayegi json ki so usko array mein rakh diya hai 
    let products=data.products

//just to get an array we have used for loop here
    for(let i=0; i<=products.length; i++){

         let container2=document.createElement("div")
         container2.className="card"
    
       let h1=document.createElement("h1")
       h1.innerHTML=products[i].title
       container2.appendChild(h1)

       let p=document.createElement("p")
       
    //    let arr=products[i].description.length
    //    console.log(arr)
        let arr=products[i].description.length
       if(arr>30){
       // arr=products[i].description
       p.innerHTML=products[i].description
       container2.appendChild(p)
       }
       else{
        console.log("nothing")
       }

       let h3=document.createElement("h3")
       h3.innerHTML="$"+products[i].price//this whole value so that you have to append your $ infront of value 
       container2.appendChild(h3)

       let img=document.createElement("img")
       img.src=products[i].thumbnail
       container2.appendChild(img)



       //yahna pe glt tareke se append kar rhi thi container2 ko container mein append kar rhi thi which is  wrong way 
    
//     let container2=document.createElement("div")
//    // console.log(container2)
//     container2.appendChild(container)
    
//     console.log(container2)

container.appendChild(container2)
 }
    }
datafromserver()