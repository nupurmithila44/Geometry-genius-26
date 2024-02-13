// function parallelogramCalInput (){
//     const parallelogramBaseInput = document.getElementById('parallelogram-base')
//     const parallelogramBaseText = parallelogramBaseInput.value ;
//     const base = parseFloat(parallelogramBaseText)
//     console.log(base)

//     const parallelogramHightInput = document.getElementById('parallelogram-hight')
//     const parallelogramHightText = parallelogramHightInput.value ;
//     const hight = parseFloat(parallelogramHightText)
//     console.log(hight)

//     const totalResult = base * hight;
//     console.log('totalResult of paralelogram',totalResult)

//     const paralelogramAreaInput = document.getElementById('parallelogram-area')
//     paralelogramAreaInput.innerText = totalResult
// }

function parallelogramCalInput (){
const base = getInputvalueById('parallelogram-base')
console.log(base);
const hight = getInputvalueById('parallelogram-hight')
console.log(hight)
const calculate = base * hight
console.log(calculate)
setinnerTextbyId('parallelogram-area',area)
}



function getInputvalueById (inputFildId){
    const inputFild = document.getElementById(inputFildId)
    const inputFildText = inputFild.value ;
    const inputvalue = parseFloat(inputFildText)
    return inputvalue
}

function setinnerTextbyId (elementID, area){
    const element = document.getElementById(elementID)
    element.innerText = area
}