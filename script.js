let a1=document.getElementById("a1")
let a5=document.querySelector(".a5")
let a6=document.querySelector(".a6")
let a7=document.querySelector(".a7")



function send(){
    

    let cleanedInput = a1.value.replace(/[.\s]/g, '');

let sentences=a1.value.split(".");
let word=a1.value.split(" ");
let char = cleanedInput



a5.innerHTML=""
a6.innerHTML=""
a7.innerHTML=""
a5.innerHTML+=sentences.length-1
a6.innerHTML+=word.length
a7.innerHTML+=char.length;    


}
