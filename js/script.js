
const circleTL = document.getElementById('circleTL')
const circleTR = document.getElementById('circleTR')
const circleBL = document.getElementById('circleBL')
const circleBR = document.getElementById('circleBR')

const squareT = document.getElementById('squareT')
const squareB = document.getElementById('squareB')
const squareL = document.getElementById('squareL')
const squareR = document.getElementById('squareR')

const bigCircle1 = document.getElementById('bigCircle1')
const bigCircle2 = document.getElementById('bigCircle2')

window.addEventListener('mousemove', (e) => {
  
   
  // It's better to use window than body
  const windowHeight = window.innerHeight
  const windowWidth = window.innerWidth
  
  // Transform DOM width into percentage (1 - 100)
  const heightPercent = Math.floor((e.pageY / windowHeight) * 101)
  const widthPercent = Math.floor((e.pageX / windowWidth) * 101)
  
  // const halfHeight = heightPercent / 2
  // const halfWidth = widthPercent / 2  

  // console.log('Height % ' + heightPercent);
  // console.log('Width % ' + widthPercent);
  // console.log('Half H % ' + halfHeight);
  // console.log('Half W % ' + halfWidth);

  // convert the coordinates to 1-40 from 1-100
  const convertedY = Math.floor((heightPercent / 5) * 2)
  const convertedX = Math.floor((widthPercent / 5) * 2)

  console.log('CnvrtdX: ' + convertedX);
  console.log('CnvrtdY: ' + convertedY);

  // Invert numbers
  let invertedX = convertedX - 39
  let invertedY = convertedY - 39
    
  // console.log(invertedY);

  
  // Default circle rotation values
  const defaultRotateX = 350 
  const defaultRotateY = 333 
  
  // convert coordinates to 1-33 from 1-100
  const rotateValueX = Math.floor((widthPercent / 5) * 1.1)
  const rotateValueY = Math.floor((heightPercent / 5) * 1.7)
  
  const rotateValueXneg = Math.floor((widthPercent / 5) * 1.1) - 22


 

  //Circles behavior
  circleBL.style.transform =
   `translateX(${-convertedX * 2}px) translateY(${-invertedY * 2}px) 
   rotateX(${defaultRotateX + invertedY}deg) rotateY(${defaultRotateY + -rotateValueX}deg)`;
  circleBR.style.transform =
   `translateX(${-invertedX * 2}px) translateY(${-invertedY * 2}px) 
   rotateX(-${defaultRotateX + invertedY}deg) rotateY(${defaultRotateY + rotateValueXneg}deg)`;
  circleTL.style.transform =
   `translateX(${-convertedX * 2}px) translateY(${-convertedY * 2}px) 
   rotateX(${defaultRotateX + convertedY}deg) rotateY(${defaultRotateY + -rotateValueX}deg)`;
  circleTR.style.transform =
   `translateX(${-invertedX * 2}px) translateY(${-convertedY * 2}px) 
   rotateX(-${defaultRotateX + convertedY}deg) rotateY(${defaultRotateY + rotateValueXneg}deg)`;
  
   //Default squares rotate values
   const rotateLRSquareValueX = 360
   const rotateLRSquareValueY = 344
   
   //bottom
   const rotateTBSquareValueX = 185
   const rotateTBSquareValueY = 360
   
   // Rests the half of the results of the Math.floor and creates a 0 in the half of X
   const HalfDOMY = Math.floor((heightPercent / 5) * 2.2) - 22
   const HalfDOMX = Math.floor((widthPercent / 5) * 2.2) - 22
   
    
    console.log('rotate half Y : ' + HalfDOMY);
    console.log('rotate half X : ' + HalfDOMX);

   //Squares behavior
   squareL.style.transform =
   `translateX(${0 - HalfDOMX}px) translateY(${-HalfDOMY}px) 
   rotateX(${rotateLRSquareValueX}deg) rotateY(${-rotateLRSquareValueY}deg)`;
   squareR.style.transform =
   `translateX(${-HalfDOMX}px) translateY(${-HalfDOMY}px) 
   rotateX(${rotateLRSquareValueX}deg) rotateY(${rotateLRSquareValueY}deg)`;
   squareT.style.transform =
   `translateX(${-HalfDOMX}px) translateY(${-HalfDOMY}px) 
   rotateX(${rotateTBSquareValueX}deg) rotateY(${rotateTBSquareValueY}deg)`;
   squareB.style.transform =
   `translateX(${-HalfDOMX}px) translateY(${-HalfDOMY}px) 
   rotateX(${-rotateTBSquareValueX}deg) rotateY(${rotateTBSquareValueY}deg)`;
  
  // SCROLL LEFT UP
  //Not so effective alternative: e.clientY < 380 && e.clientX < 780)
   if(heightPercent < 50 && widthPercent < 50){
     // Circle top left size shrink
     circleTL.style.width = '22rem'
     circleTL.style.height = '22rem'     
 
   // console.log('tl');
 
  } else{      
     // Circle top left size unshrink
      circleTL.style.width = '25rem'
      circleTL.style.height = '25rem'
      
    // Top left circle behavior
     // circleTL.style.opacity = '0.6'
  } 

 // SCROLL RIGHT UP
 if(heightPercent < 50 && widthPercent > 50){
   // Circle top right size shrink
   circleTR.style.width = '22rem'
   circleTR.style.height = '22rem'
  
   // console.log('tr');
 } else {
   // Circle top right size unshrink
   circleTR.style.width = '25rem'
   circleTR.style.height = '25rem'

 } 

 // SCROLL LEFT DOWN
 if(heightPercent > 50 && widthPercent < 50){
   // Circle bottom left size shrink
   circleBL.style.width = '22rem'
   circleBL.style.height = '22rem'

   // console.log('bl');
 } else{
   // Circle bottom left size unshrink
   circleBL.style.width = '25rem'
   circleBL.style.height = '25rem'
 }

 // SCROLL RIGHT DOWN
 if(heightPercent > 50 && widthPercent > 50){
   // Circle bottom right size shrink
   circleBR.style.width = '22rem'
   circleBR.style.height = '22rem'

   // console.log('br');
 } else{
   // Circle bottom right size unshrink
   circleBR.style.width = '25rem'
   circleBR.style.height = '25rem'
 }
 
 bigCircle1.style.transform = `rotateY(${HalfDOMX}deg) rotateX(${HalfDOMY}deg)`;
 bigCircle2.style.transform = `rotateY(${HalfDOMX}deg) rotateX(${HalfDOMY}deg)`;
 

})



// TO DO

//
// Decide interactivity of the squares, needs to feel "aerodynamic"
// Apply interactivity of the squares to be relative to the mouse movement

// Link circles opacity to be relative to the DOM in quarters
// detect the quarters of the DOM with calcuations rather than numbers -Done ||
// detect specific parts of the DOM with calculations and link them with the spheres movement -Done ||

