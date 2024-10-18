
// console.log("Hello World");
// let a=10;
// if(a>10) console.log("Greater Then 10");
// else console.log("Less Then 10");
// console.log(typeof a);

// let d= function(str=a){
//     console.log(a+" Hello");
// }
// d("H");

// function cCompiler(){
//     return "C Compiler";
// }
// function cppCompiler(){
//     return "C++ Compiler";
// }
// function javaCompiler(){
//     return "Java Compiler";
// }

// function CallBack1(callB,callA){
//     console.log(callB + callA);
// }

// CallBack1(cCompiler(),javaCompiler());

// const a=20;
// document.body.innerHTML=a;
// document.body.getElementsByClassName("Hf").innerHTML="Hii";
//-------------------------------------------------------------------------------------------------------------------
console.log(document);
div=document.getElementsByClassName("parent");
// div[0].innerHTML="<marquee>Hello World</marquee>";
const h1=document.createElement("h1");
h1.innerHTML="ABESEC";
div[0].style="color:red";
div[0].append(h1);

const h2=document.createElement('img');
h2.src='car.jpeg';
h2.setAttribute('height','200px');
div[0].append(h2);
console.log(h2);
// -------------------------------------------------------------------------------------------------------------------
flag=0;

function hf2(){
    if(flag==0){
        h1.style="color:blue";
        document.body.style="width: 150px;height: 80px;background-color: yellow;transform: rotate(10deg);";
        flag=1;
    }
    else{
        h1.style="color:blue";
        document.body.style="width: 150px;height: 80px;background-color: green;transform: rotate(-10deg);";
        h1.style="color:white";
        flag=0;
    }
        
}

//-------------------------------------------------------------------------------------------------------------------

const promise1= new Promise(
    (resolve,reject)=>{
        let a=12;
        if(a>10){
            resolve("Value of a is resolved");
        }
        else{
            reject("Value of a is reject");
        }
    }
);

promise1.then((msg)=>(console.log(msg)))
.catch(error=>(console.log(error)))
.finally(msg=>(console.log("Resources have been closed")));


//-------------------------------------------------------------------------------------------------------------------


const promise2= new Promise(
    (resolve,reject)=>{
        let b=Math.random()*150;
        if(b>=100 && b<=200){
            resolve("Value of b is resolved");
        }
        else{
            reject("Value of b is reject");
        }
    }
);

promise2.then((msg)=>(console.log(msg)))
.catch(error=>(console.log(error)))
.finally(msg=>(console.log("Resources have been closed")));


//-------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------