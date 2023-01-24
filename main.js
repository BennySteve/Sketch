let body=document.querySelector("body")
let div=document.querySelector(".container")
let col=document.querySelector(".color")
let size=document.querySelector('.select')
let clear=document.querySelector(".white")
let daba
let eraser=document.querySelector(".white")
let pen=document.querySelector(".blue")
let blue="#2274A5"
let white="#fcfdff"
let boxSize=30
let theColor=blue
set(16)
size.addEventListener('click',sizing)

function sizing(){
    boxSize=prompt('Enter number of boxes(under 100):')   
    if(boxSize>=2&&boxSize<=100){
        set(boxSize)
        drawing(0)
    }else{
        alert("Enter number between 2-100")
    }
}
function reset(){
    while(div.firstChild){
        div.removeChild
        (div.firstChild)
    }
}

function set(b){
    reset()
    let box=b
    for(let i=1;i<=box*box;i++){
        let size=Number((500/box).toFixed(2))
        let boxes=document.createElement("div")
        boxes.classList.add("box")
        boxes.setAttribute("style",
        `width:${size}px;
        height:${size}px;`)
        div.appendChild(boxes)
        daba=document.querySelectorAll(".box")
    }
    let border='20px'
    let leftTop=document.querySelector(`.box:nth-child(${1})`)
    let leftBottom=document.querySelector(`.box:nth-child(${box*box-box+1})`)
    let rightTop=document.querySelector(`.box:nth-child(${box})`)
    let rightBottom=document.querySelector(`.box:nth-child(${box*box})`)
    leftTop.style.borderTopLeftRadius=border
    leftBottom.style.borderBottomLeftRadius=border
    rightTop.style.borderTopRightRadius=border
    rightBottom.style.borderBottomRightRadius=border
}
//Drawing
function drawing(c) {
    daba.forEach(element => {
        element.addEventListener('mouseover',function(e){ 
            if(c!=1){
                theColor=blue
            }else{
                theColor=`hsl(${Math.random()*360}, 100%, 50%)`
            }
            element.style.backgroundColor=`${theColor}`  
        })    
    })
}

drawing()


//creating btn functions


let btns=document.querySelectorAll('button')

btns.forEach(btn => {
    if(btn.name=='Blue'){
        btn.addEventListener('click',function(){ 
            drawing(0)
        })
    }else if(btn.name=='Random'){
        btn.addEventListener('click',function(){ 
            drawing(1)
        })
    }else if(btn.name=='Clear'){
        btn.addEventListener("click",function(e){
            daba.forEach(element => {
                element.style.background=white
            })
        })      
    }
})
