function calculateTriangle (){
   const triangleBaseInput = document.getElementById('triangle-base')
   const triangleBaseText = triangleBaseInput.value ;
   const base = parseFloat(triangleBaseText)
   console.log(  base)

//    get triangle height value 
const triangleHightInput =document.getElementById('triangle-hight')
const triangleHightText = triangleHightInput.value;
const Hight = parseFloat(triangleHightText)
console.log( Hight)

// calculate Trianangle 
const  area = 0.5 * base * Hight;
console.log('area of the triangle is', area)

const triangleAreainput = document.getElementById('triangle-area')
triangleAreainput.innerText =  area
}


