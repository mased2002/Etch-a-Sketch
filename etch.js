const container = document.querySelector(".board");
// range finder
let result = 0;
let color_use = "";
const color_arr = ["rouge","vert","blue","violet","indingo","orange","purple","yellow","colored"]
//functions
function get() {
    const get1 = document.querySelector('#slider').value;
    console.log(get1)
    document.getElementById("cur").textContent = `${get1} x ${get1}`;
    result = get1;
    console.log(result)
}




function createGrid() {
    container.style.gridTemplateColumns = `repeat(${result}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${result}, 1fr)`;
    container.innerHTML = ''
    let divs = result * result;
    for (let i = 0; i < divs; i++){
        const div = document.createElement('div')
        div.addEventListener("mouseover", function(){
            if(color_use == 'blanche'){
                div.classList.remove(...color_arr)
            }
            else if(color_use !== 'rainbow'){
            div.classList.add(color_use);
            }else if(color_use === 'rainbow'){
                div.classList.add(chooseColor());
            }
        })
        container.appendChild(div)
    }
}



 //function change color
function chngcl(couler){
    if(couler){
        color_use = couler;
    }
    
}

function removeAll(){
    const rmdivs = document.querySelectorAll("div")
    rmdivs.forEach((rm) => {
        // rm.style.backgroundColor = "white"
        rm.classList.remove(...color_arr.filter((color) => color !== ''))
        
    })
    color_use = 'none'
}

const clear = document.querySelector('.clear')
clear.addEventListener("click", removeAll)


const restart = document.querySelector("#restart")
restart.addEventListener("click", () => location.reload())

function chooseColor(){
    let ran = Math.floor(Math.random() * color_arr.length)
    let answer = color_arr[ran]
    return answer;
    // const hue = Math.floor(Math.random() * 360);
    // const saturation = Math.floor(Math.random() * 101);
    // const lightness = Math.floor(Math.random() * 101);
    // let ans = `color-${hue}-${saturation}-${lightness}`;
    // return ans;
}