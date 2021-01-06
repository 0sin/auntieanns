const auntieHistory = document.querySelector('#auntie-history')
const hsBtnPrev = document.querySelector('.hs-btn-prev')
const hsBtnNext = document.querySelector('.hs-btn-next')
const historySlide = document.querySelector('.history-slide')
const slideConWrap = document.querySelector('.slide-contents-wrap')
const historyPage = document.querySelectorAll('.history-page')


let historySlide_Idx = 0



function historySlideToPrev(){
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
let autoPlayInit
let slideIdx = 0

function appendSlide(){
  const slideClone_1st = slideConWrap.firstElementChild.cloneNode(true)
  const slideClone_2nd = slideConWrap.children[1].cloneNode(true)
  const slideClone_3rd = slideConWrap.children[2].cloneNode(true)

  slideConWrap.append(slideClone_1st, slideClone_2nd, slideClone_3rd)
}

function change_HistoryPageClass(slideIdx, slideLength){
  for(let i = 0; i < slideLength; i++){
    if(historyPage[i] === historyPage[slideIdx]){
      historyPage[slideIdx].classList.add('on')
    }else if(slideIdx === 0 || slideIdx === slideLength || slideIdx === slideLength + 1){
      historyPage[0].classList.add('on')
      historyPage[slideLength - 1 ].classList.remove('on')
    }else{
      historyPage[i].classList.remove('on') 
    }        
  }
  
}

function init_HistorySlide_Tab(x, slideLength){

  autoPlayInit =  setInterval(() => {
    slideIdx++    
    slideConWrap.style = `transform: translateX(-${ (x + 30) * slideIdx}px); transition: all .7s`

    console.log(slideIdx)
    change_HistoryPageClass(slideIdx, slideLength)

    if(slideIdx === slideLength + 1){    
      slideIdx = 0
      slideConWrap.style = `transform: translateX(0); transition: auto;` 
    }
}, 1000);
} 

function clickPagination_toPageHistory(x, slideLength) {
  historyPage.forEach( (el, i) => {
    el.addEventListener('click', () => { 
      
      slideIdx = i
      console.log(slideIdx, i)
      slideConWrap.style = `transform: translateX(-${ (x + 30) * slideIdx}px); transition: all .7s` 
      change_HistoryPageClass(slideIdx, slideLength)


      clearInterval(autoPlayInit)
      setTimeout(() => {
        init_HistorySlide_Tab(x, slideLength)
      }, 500)
    })
  })
}


document.addEventListener("DOMContentLoaded", () => {
  if(window.innerWidth < 1025){
    const x = slideConWrap.children[0].clientWidth 
    const slideLength = historyPage.length
    historyPage[0].classList.add('on')

    appendSlide()
    init_HistorySlide_Tab(x, slideLength) 
    clickPagination_toPageHistory(x, slideLength)
    console.log(historyPage.length)
  }
});