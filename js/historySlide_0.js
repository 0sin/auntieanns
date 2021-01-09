const auntieHistory = document.querySelector('#auntie-history')
const hsBtnPrev = document.querySelector('.hs-btn-prev')
const hsBtnNext = document.querySelector('.hs-btn-next')
const historySlide = document.querySelector('.history-slide')
const slideConWrap = document.querySelector('.slide-contents-wrap')
const historyPage = document.querySelectorAll('.history-page')

let slideIdx = 0


function historySlideToPrev(){
  x = slideConWrap.children[0].clientWidth
  if(slideIdx === 0){
    historySlide.classList.remove('on')
  }else if(slideIdx !== 0 && slideIdx > 0){
    slideIdx--
    slideConWrap.style = `transform: translateX(-${ (x + 30) * slideIdx}px);` 
  }
}


function historySlideToNext(){
  x = slideConWrap.children[0].clientWidth
  const contentsNum = slideConWrap.children.length

  if(!historySlide.classList.contains('on')){
    historySlide.classList.add('on')
  }else if(historySlide.classList.contains('on') && slideIdx < contentsNum - 2){
    slideIdx++    
    slideConWrap.style = `transform: translateX(-${ (x + 30) * slideIdx}px);`
  }
}

hsBtnPrev.addEventListener('click', historySlideToPrev)
hsBtnNext.addEventListener('click', historySlideToNext)






//태블릿 사이즈 이하 슬라이드

//변수들
let slideLength = historyPage.length
let autoPlayInit

function appendSlide(){
  const slideClone_1st = slideConWrap.firstElementChild.cloneNode(true)
  const slideClone_2nd = slideConWrap.children[1].cloneNode(true)
  const slideClone_3rd = slideConWrap.children[2].cloneNode(true)

  slideConWrap.append(slideClone_1st, slideClone_2nd, slideClone_3rd)
}


// YEAR INDEX STYLE CHANGE
function change_HistoryPageClass(){
  for(let i = 0; i < slideLength; i++){
    historyPage[i].classList.remove('on');
  }
  historyPage[slideIdx].classList.add('on');
}


// TABLET SIZE SLIDE SHOW
function tabletSizeSlideShow(i) {
  const conWidth = slideConWrap.children[0].clientWidth

  slideIdx += i
  console.log(slideIdx, slideLength);

  if(slideIdx > slideLength ) {    
    slideIdx = 0;
    slideConWrap.style = `transform: translateX(0); transition: 0s;` 
  } else {
    slideConWrap.style = `transform: translateX(-${ (conWidth + 30) * slideIdx}px); transition: all .7s;`
  }
  change_HistoryPageClass();
}


// AUTO PALY

// = setInterval(tabletSizeSlideShow, 3000, 1); 
//1=index 인자, 1페이지씩 이동


// YEAR INDEX CLICK
historyPage.forEach( (el, i) => {
  el.addEventListener('click', () => { 
    console.log(i)
    
    tabletSizeSlideShow(i);
  
    // 클릭시 AUTO PLAY 멈춤, 재시작
    clearInterval(autoPlayInit)
    setTimeout(() => {
      autoPlayInit = setInterval(tabletSizeSlideShow, 3000, 1)

      console.log('재시작')

    }, 500)
  })
});


// 미디어쿼리처럼 사용가능
let autoPlayState = false; //오토플레이 상태: false = 꺼짐

function matchWidth() {
  if(window.matchMedia('(max-width: 1024px)').matches && autoPlayState === false){
    console.log("1024px 이하 match")
    appendSlide()
    
    historyPage[0].classList.add('on')
    autoPlayInit = setInterval(tabletSizeSlideShow, 3000, 1)
    autoPlayState = true
    console.log("오토플레이 상태:" + autoPlayState); 
  }else{
    slideIdx = 0
    historyPage[0].classList.remove('on')
    autoPlayState = false
  }
}

matchWidth() //DOMContentLoaded 역할


window.addEventListener('resize', () => {
  if(window.innerWidth > 1024){
    slideIdx = 0

    clearInterval(autoPlayInit)
    autoPlayState = false
    console.log("오토플레이 상태:" + autoPlayState) //오토플레이 상태: false = 꺼짐
  }

  if (window.innerWidth <= 1024 && autoPlayState === false) {
    console.log("한번씩만 작동")
    slideIdx = 0

    historySlide.classList.remove('on') 
    matchWidth()
  }
})