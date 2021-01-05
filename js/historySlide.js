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
const historyPage = document.querySelectorAll('.history-page')
const pageLine = document.querySelectorAll('.page-line')

let autoPlayInit
let count = 0
console.log(count)

function progressPageLine(){
  const progressLine = pageLine[count].querySelector('span')

  historyPage[count].classList.add('on')
  progressLine.style = 'width: 100%; transition: width 5s;'

  setTimeout(() => {
    historyPage[count].classList.remove('on')
    progressLine.style = ''
  }, 3890);
}

function init_HistorySlide_Tab(){
  autoPlayInit =  setInterval(() => {
    const slideLength = pageLine.length
    const x = slideConWrap.children[0].clientWidth 
    count++
    
    slideConWrap.style = `left: -${ (x + 30) * count}px; transition: left .7s` 
    
    if(count === slideLength){
      slideConWrap.style = `transition: auto;`
      count = 0
    }
}, 3900);
}

function checkTabletSize_Init(){
  if(window.innerWidth < 1025){
    init_HistorySlide_Tab()
    window.removeEventListener('resize', checkTabletSize_Init)
  }else{
    clearInterval(autoPlayInit)
  }
}

function appendSlide(){
  const slideClone_1st = slideConWrap.children[0].cloneNode(true)
  const slideClone_2nd = slideConWrap.children[1].cloneNode(true)
  const slideClone_3rd = slideConWrap.children[2].cloneNode(true)
  const slideClone_4th = slideConWrap.children[3].cloneNode(true)

  slideConWrap.append(slideClone_1st, slideClone_2nd, slideClone_3rd, slideClone_4th)
}

appendSlide()

function clickPagination_toPageHistory() {
  historyPage.forEach( (el, i) => {
    el.addEventListener('click', () => {
      const x = slideConWrap.children[0].clientWidth;
      slideConWrap.style.left = -(x + 30) * i + 'px'
      count = i
    })
  })
}
clickPagination_toPageHistory()
checkTabletSize_Init() 
window.addEventListener('resize', checkTabletSize_Init) 

