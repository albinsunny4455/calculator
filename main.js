// display content in calcScreen
const displayContent = (content)=>{
    calcScreen.value += content
}
// clear content of calcScreen
const claerAllcontent = ()=>{
    calcScreen.value = ""
}
//result display in calcScreen
const showResult = ()=>{
    try{
        console.log("TRY BLOCK");
        calcScreen.value = eval(calcScreen.value)
    }catch(err){
        console.log("CATCH BLOCK");
        console.log(err);
        calcScreen.value = ""
        calcScreen.placeholder = "Invalid Expression!!"
    }finally{
        console.log("task completed");
    }
}
//removeLast
const removeLast = ()=>{
    calcScreen.value = calcScreen.value.slice(0,-1)
}
