let but1 = document.getElementById("but1");
let but2 = document.getElementById("but2");
let col=document.getElementById("color");
let col1=document.getElementById("zero");
let col2=document.getElementById("first");
let col3=document.getElementById("second");
let col4=document.getElementById("third");
let shape=document.getElementById("square")

 but2.addEventListener("click",changeColor);

 function changeColor(){
     let letters="0123456789ABCDEF";
     let color="#";

     for(let i=0;i<6;i++){
        let index=Math.random()*16;

        color += letters[Math.floor(index)];
     }
     col.style.background=color;
     col1.style.background=color;
     col2.style.background=color;
     col3.style.background=color;
     col4.style.background=color;
 }
 function changeColor(){
    let letters="0123456789ABCDEF";
    let color="#";

    for(let i=0;i<6;i++){
       let index=Math.random()*16;

       color += letters[Math.floor(index)];
    }
    col.style.background=color;
    col1.style.background=color;
    col2.style.background=color;
    col3.style.background=color;
    col4.style.background=color;
}
function changeColor(){
    let letters="0123456789ABCDEF";
    let color="#";

    for(let i=0;i<6;i++){
       let index=Math.random()*16;

       color += letters[Math.floor(index)];
    }
    col.style.background=color;
}

 but1.addEventListener("click",changeShape);

 let arr =["square", "round", "diamond", "triangle", "arrow", "frame",
  "star","cross", "left-point", "right-point", "parallel", "chiSquare","triangle-down"];

 function changeShape(){
   function random(){
    let index=Math.floor(Math.random()*arr.length);
    return arr[index];
   }
   let idName=random();
   shape.id=idName;
 }