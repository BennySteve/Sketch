let body=document.querySelector("body")
let div=document.querySelector(".container")
let box=30
let col=document.querySelector(".color")
let size=Number((700/box).toFixed(4)-0.1)

for(let i=1;i<=box*box;i++){
let boxes=document.createElement("div")


boxes.classList.add("box")
boxes.setAttribute("style",`border:grey solid 1px; margin:0px;
background:#fcfdff;
box-sizing: border-box;
border-radius:18%;
box-shadow:1px 1px 1px grey;
width:${size}px;height:${size}px;`)
//boxes.textContent=i
div.appendChild(boxes)
}


let color="#123456"
let white="#fcfdff"
let daba=document.querySelectorAll(".box")
let eraser=document.querySelector(".lw")
let pen=document.querySelector(".blue")
//adding event


daba.forEach(element => {
element.addEventListener('mouseover',function(e){ 
element.style.background=color
})    
});

eraser.addEventListener("click", function(){
daba.forEach(element => {
element.addEventListener('mouseover',function(e){ 
element.style.background=white
})    
})
}
)
pen.addEventListener("click",function(){
daba.forEach(element => {
element.addEventListener('mouseover',function(e){ 
element.style.background=color
})    
})
}
)
//creating clear function
let clear=document.querySelector(".white")

clear.addEventListener("click",function(e){
daba.forEach(element => {
element.style.background=white
   
})
})

