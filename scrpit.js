// let di =document.getElementById('error')//his return single element
// console.log(di);

// let ele=document.getElementsByClassName('pars')//return the array element 
// console.log(ele)
// let tags=document.getElementsByTagName('h1')
// console.log(tags)//this will retrun html collection 
// class key wordd predetermined 
//classname html class
//camel casing: phela word uska first  letter small rakho uskse bad wala word ka  first letter  capital 


//innerHTML is used html content 

// let e=document.getElementById('error')
// console.log(e.innerHTML)

//e.innerghtml-->reading
//e.innerhtml-->"nitin"--->writing 

//e.innerHTML="<h1>nitin</h1>"

//get value btayega //set value ko set kr 


//e.innerHTML=prompt("enter the name");

// // let hel=document.getElementsById('hello')
// // //  console.log(hel)


// //  let user=prompt("enter the name")
//  hel.innerHTML="welcome"+user
// hel.innerHTML=prompt("enter the name");

 //get and set 
// let user=prompt("enter the number")


// let a=document.getElementById('waring')

// let b=document.getElementById('success')
// if(user.length>=10){
//     a.innerHTML="name is greater 10" 
// }
// else{
//     b.innerHTML="success"
// }

// let elem=document.getElementsByTagName("box")
// console.log(elem[0].innerHTML)
  
//it is used to change the color of the text 

// let head=document.getElementById("waring")
// console.log(head.style.color="red")
// head.style.backgroundColor="green"


// let elem= document.getElementById("waring")

// function changetheme(){
//     elem.style.color="red"//elem.attribut  elem.styele
//     elem.style.backgroundColor="hotpink"
// }

let store=document.getElementsByClassName("box")

function changetheme(){
    store[0].style.display="block"
    //   a[0].style.backgroundcolor="red"
      
}

//let a=document.getElementsByTagName("box")

function closediv(){
    store[0].style.display="none"
}

// let elem=document.getElementById("sidebar")

//     function showbar(){
//         elem.style.left=0;
//         // elem.style.border="2px"



//     }

//     function closebar(){
//         // elem.style.position="relative"

//          elem.style.left="-300px"
//     }


