const hsBtnPrev = document.querySelector('.hs-btn-prev')
const hsBtnNext = document.querySelector('.hs-btn-next')
const historySlide = document.querySelector('.history-slide')
const dragableSlide = document.querySelector('.slide-contents-wrap')

const contentsNum = dragableSlide.children.length



let historyIdx = 0

function historySlide_Init(){
  if(window.innerWidth < 1501){
    historySlide.classList.add('on') 
  }
}
historySlide_Init()

function historySlideToPrev(x){
  x = dragableSlide.children[0].clientWidth
  if(historyIdx === 0){
    historySlide.classList.remove('on')
  }else if(historyIdx !== 0 && historyIdx > 0){
    historyIdx--
    dragableSlide.style.left = -(x + 30) * historyIdx + 'px'
  }
}
function historySlideToNext(){
  x = dragableSlide.children[0].clientWidth

  if(!historySlide.classList.contains('on')){
    historySlide.classList.add('on')
  }else if(historySlide.classList.contains('on') && historyIdx < contentsNum - 2){
    historyIdx++    
    dragableSlide.style.left = -(x + 30) * historyIdx + 'px'
  }
}



hsBtnPrev.addEventListener('click', historySlideToPrev)
hsBtnNext.addEventListener('click', historySlideToNext)


let isMouseDown = false 
let startPoint
let endPoint
let dragDistance

dragableSlide.addEventListener('mousedown', (e) => {
  isMouseDown = true 
  e.preventDefault()
  startPoint = e.pageX
  console.log('down'+ e.pageX, dragableSlide.clientWidth)

})
dragableSlide.addEventListener('mouseup', (e) => {
  isMouseDown = false
  endPoint = e.pageX
  console.log('up'+e.pageX,) 
})
dragableSlide.addEventListener('mouseleave', (e) => {
  isMouseDown = false
  endPoint = e.pageX
  console.log('leave'+e.pageX,) 
})

dragableSlide.addEventListener('mousemove', (e)=>{
  if(!isMouseDown) return
  dragDistance = startPoint - endPoint
  dragDistance += dragDistance
  console.log(dragDistance)
  e.preventDefault()
  if(dragDistance > 0){ 
    dragableSlide.style.left = -dragDistance + 'px' 
  }

  // for(let i = 0; i < contentsNum - 2; i++){
  //  if(dragDistance > 0 && dragDistance <= i * x && historyIdx < contentsNum - 2){
  //     historyIdx = i
  //     dragableSlide.style.left = -(x + 30) * historyIdx + 'px' 
  //   }
  //   if(dragDistance < 0 && -dragDistance <= i * x && historyIdx > 0){
  //     historyIdx--
  //     dragableSlide.style.left = -(x + 30) * historyIdx + 'px'
  //   }
  // }
})