const baseInput=document.querySelector("#base")
const heightInput=document.querySelector("#height")
const areaInput=document.querySelector("#area")
const calcbutton=document.querySelector("#calcbutton")
calcbutton.addEventListener('click',()=>{
startCal()
});
function startCal(){
    const base=Number(baseInput.value)
    const heihgt=Number(heightInput.value)
    const area=calcarea(base,heihgt)
    console.log("terület",area)
areaInput.value=area
}
function calcarea(base,heihgt){
    return base*heihgt/2;
}