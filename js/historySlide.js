const auntieHistory = document.querySelector('#auntie-history')
const hsBtnPrev = document.querySelector('.hs-btn-prev')
const hsBtnNext = document.querySelector('.hs-btn-next')
const historySlide = document.querySelector('.history-slide')
const slideConWrap = document.querySelector('.slide-contents-wrap')


let historySlide_Idx = 0

function historySlideToPrev(x){
  x = slideConWrap.children[0].clientWidth
  if(historySlide_Idx === 0){
    historySlide.classList.remove('on')
  }else if(historySlide_Idx !== 0 && historySlide_Idx > 0){
    historySlide_Idx--
    slideConWrap.style.left = -(x + 30) * historySlide_Idx + 'px'
  }
}
function historySlideToNext(){
  x = slideConWrap.children[0].clientWidth
  const contentsNum = slideConWrap.children.length

  if(!historySlide.classList.contains('on')){
    historySlide.classList.add('on')
  }else if(historySlide.classList.contains('on') && historySlide_Idx < contentsNum - 2){
    historySlide_Idx++    
    slideConWrap.style.left = -(x + 30) * historySlide_Idx + 'px'
  }
}

hsBtnPrev.addEventListener('click', historySlideToPrev)
hsBtnNext.addEventListener('click', historySlideToNext)

//태블릿 사이즈 이하 슬라이드
const historyYear = document.querySelectorAll('.history-year')
const historyPageList = document.querySelectorAll('.history-page-list')
const historyPage = document.querySelectorAll('.history-page')


// for(let i = 0; i < historyPage.length; i++){
//   if(historyPage[i].classList.contains('on')){
//     historyPage[i].innerText = historyYear[i].innerText
//   }else if(!historyPage[i].classList.contains('on')){
//     historyPage[i].innerText = ''
//   }
// }


function historySlide_Tab_init(){
  const y = window.scrollY
  let width =  window.innerWidth

  if(width < 1025 && y > auntieHistory.offsetTop){
    console.log(auntieHistory.offsetTop)
    slideConWrap.style.left = -500 + 'px'

  }
}

window.addEventListener('resize', historySlide_Tab_init) 
historySlide_Tab_init()
