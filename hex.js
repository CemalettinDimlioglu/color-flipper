const hex = [0,1,2,3,4,5,6,7,8,9, "A","B","C","D","E","F"] // 1.aşama

const btn = document.getElementById("btn"); // 2.aşama
const color = document.querySelector(".color"); //.3.aşama

btn.addEventListener("click",function(){ //4.aşama
     let hexColor = "#";
     for(let i =0; i<6;i++){
          hexColor += hex[randomNumber()]
     }
     color.textContent = hexColor; //5.aşama
     document.body.style.backgroundColor = hexColor;
})
function randomNumber(){   //6.aşama
     return Math.floor(Math.random()*hex.length)
}