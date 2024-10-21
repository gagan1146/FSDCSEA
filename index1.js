// // console.log("Hello World");
// // let a=10;
// // if(a>10) console.log("Greater Then 10");
// // else console.log("Less Then 10");
// // console.log(typeof a);

// // let d= function(str=a){
// //     console.log(a+" Hello");
// // }
// // d("H");

// // function cCompiler(){
// //     return "C Compiler";
// // }
// // function cppCompiler(){
// //     return "C++ Compiler";
// // }
// // function javaCompiler(){
// //     return "Java Compiler";
// // }

// // function CallBack1(callB,callA){
// //     console.log(callB + callA);
// // }

// // CallBack1(cCompiler(),javaCompiler());

// // const a=20;
// // document.body.innerHTML=a;
// // document.body.getElementsByClassName("Hf").innerHTML="Hii";
// //-------------------------------------------------------------------------------------------------------------------
// console.log(document);
// div = document.getElementsByClassName("parent");
// const h1 = document.createElement("h1");
// h1.innerHTML = "ABESEC";
// div[0].style.color = "red";  // Corrected style assignment
// div[0].append(h1);

// const h2 = document.createElement('img');
// h2.src = 'car.jpeg';
// h2.setAttribute('height', '200px');
// div[0].append(h2);
// console.log(h2);
// // -------------------------------------------------------------------------------------------------------------------
// let flag = 0;  // Changed from var to let

// function hf2() {
//     if (flag == 0) {
//         h1.style.color = "blue";  // Corrected style assignment
//         document.body.style = "width: 150px;height: 80px;background-color: yellow;transform: rotate(10deg);";
//         flag = 1;
//     } else {
//         h1.style.color = "blue";  // Corrected style assignment
//         document.body.style = "width: 150px;height: 80px;background-color: green;transform: rotate(-10deg);";
//         h1.style.color = "white";  // Corrected style assignment
//         flag = 0;
//     }
// }

// //-------------------------------------------------------------------------------------------------------------------

// const promise1 = new Promise(
//     (resolve, reject) => {
//         let a = 12;
//         if (a > 10) {
//             resolve("Value of a is resolved");
//         } else {
//             reject("Value of a is reject");
//         }
//     }
// );

// promise1.then((msg) => console.log(msg))
//     .catch(error => console.log(error))
//     .finally(() => console.log("Resources have been closed"));  // Corrected finally function

// //-------------------------------------------------------------------------------------------------------------------

// const promise2 = new Promise(
//     (resolve, reject) => {
//         let b = Math.random() * 150;
//         if (b >= 100 && b <= 200) {
//             resolve("Value of b is resolved");
//         } else {
//             reject("Value of b is reject");
//         }
//     }
// );

// promise2.then((msg) => console.log(msg))
//     .catch(error => console.log(error))
//     .finally(() => console.log("Resources have been closed"));  // Corrected finally function

// //-------------------------------------------------------------------------------------------------------------------
// fetch("https://dummyjson.com/products")  // Corrected fetch call
//     .then(response => response.json())  // Chained to handle response
//     .then(res => {
//         res.products.forEach(product => {  // Changed map to forEach
//             const h3 = document.createElement("h6");
//             h3.innerHTML = product.id + " " + product.title;  // Corrected access to product
//             div[0].style.color = "red";  // Corrected style assignment
//             div[0].append(h3);
//             console.log(product.id + " " + product.title);  // Corrected access to product
//         });
//     });

// //-------------------------------------------------------------------------------------------------------------------
// const h3 = document.createElement("h1");
// h3.innerHTML = "ABESEC";
// div[0].style.color = "red";  // Corrected style assignment
// div[0].append(h3);
// //-------------------------------------------------------------------------------------------------------------------
// //-------------------------------------------------------------------------------------------------------------------
// //-------------------------------------------------------------------------------------------------------------------
// //-------------------------------------------------------------------------------------------------------------------


document.getElementById("btn").addEventListener("click", function() {
    document.getElementById("btn").remove();
    
    let input = document.createElement("input");
    input.setAttribute("type", "number");
    input.setAttribute("id", "bulbCount");
    input.setAttribute("placeholder", "Enter number of bulbs");
    
    let submitBtn = document.createElement("button");
    submitBtn.innerText = "Submit";
    submitBtn.setAttribute("id", "submitBtn");
    
    let container = document.getElementById("bulb-container");
    container.appendChild(input);
    container.appendChild(submitBtn);
    
    submitBtn.addEventListener("click", function() {
        let bulbCount = parseInt(document.getElementById("bulbCount").value);
        container.innerHTML = "";
        
        for (let i = 0; i < bulbCount; i++) {
            let bulbWrapper = document.createElement("div");
            bulbWrapper.style.display = "inline-block";
            bulbWrapper.style.textAlign = "center";
            bulbWrapper.style.margin = "10px";
            
            let bulb = document.createElement("div");
            bulb.classList.add("bulb");
            bulb.setAttribute("id", `bulb-${i}`);
            bulb.setAttribute("data-status", "off");
            
            let checkbox = document.createElement("input");
            checkbox.setAttribute("type", "checkbox");
            checkbox.setAttribute("id", `checkbox-${i}`);
            
            bulbWrapper.appendChild(bulb);
            bulbWrapper.appendChild(checkbox);
            container.appendChild(bulbWrapper);
            
            checkbox.addEventListener("change", function() {
                let bulbElement = document.getElementById(`bulb-${i}`);
                if (checkbox.checked) {
                    bulbElement.style.background = "url('Light_Bulb_PNG_Clip_Art-2102.png')";
                    bulbElement.style.backgroundSize = "contain";
                    bulbElement.style.backgroundPosition = "center";
                    bulbElement.style.backgroundRepeat = "no-repeat";
                    bulbElement.setAttribute("data-status", "on");
                } else {
                    bulbElement.style.background = "url('Yellow_Light_Bulb_PNG_Clip_Art-2108.png')";
                    bulbElement.style.backgroundSize = "contain";
                    bulbElement.style.backgroundPosition = "center";
                    bulbElement.style.backgroundRepeat = "no-repeat";
                    bulbElement.setAttribute("data-status", "off");
                }
            });
        }
    });
});
