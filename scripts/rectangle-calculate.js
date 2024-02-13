function rectangleCalculateArea (){
//  
const rectanglewidthInput = document.getElementById('rectangle-wedth')
 const rectanglewidthText = rectanglewidthInput.value;
 const width = parseFloat(rectanglewidthText);
 console.log(width)

//  length rectangle 
const rectangleLenthInput = document.getElementById('rectangle-length')
const rectangleLenthText = rectangleLenthInput.value;
const length = parseFloat(rectangleLenthText)
console.log(length)

// rectangle claculate 
const area = width * length;
console.log('area of the rectangle', area)

const rectangleArea = document.getElementById('rectangle-area')
rectangleArea.innerText=area;

    
}