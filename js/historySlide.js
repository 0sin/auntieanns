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
let slideLength = slideConWrap.children.length
let currIdx = 0
let autoPlayInit
let autoPlayState = false; //오토플레이 상태: false = 꺼짐
let isAppend = false

const slideClone_1st = slideConWrap.firstElementChild.cloneNode(true)
const slideClone_2nd = slideConWrap.children[1].cloneNode(true)
const slideClone_3rd = slideConWrap.children[2].cloneNode(true)

function appendSlide(){
  slideConWrap.append(slideClone_1st, slideClone_2nd, slideClone_3rd)
  isAppend = true 
}

function removeSlide(){
  slideClone_1st.parentNode.removeChild(slideClone_1st);
  slideClone_2nd.parentNode.removeChild(slideClone_2nd);
  slideClone_3rd.parentNode.removeChild(slideClone_3rd);
  
  isAppend = false;
}


// YEAR INDEX STYLE CHANGE
function change_HistoryPageClass(){ 
  if(currIdx >= slideLength){

    historyPage[0].classList.add('on')
    historyPage[slideLength - 1].classList.remove('on')
  }else{
    for(let i = 0; i < slideLength; i++){
      historyPage[i].classList.remove('on');
    }
    historyPage[currIdx].classList.add('on');
  }
}


// TABLET SIZE SLIDE SHOW

function tabletSizeSlideShow() {
  currIdx ++
  slideConWrap.style = `transform: translateX(-${ 350 * currIdx }px); transition: all .7s;`

    if(currIdx > slideLength){
      currIdx = 0;
      slideConWrap.style = `transform: translateX(0); transition: 0s;` 
    }
  change_HistoryPageClass(); 
}


// YEAR INDEX CLICK
historyPage.forEach( (el, i) => { 

  el.addEventListener('click', () => { 
    currIdx = i
    clearInterval(autoPlayInit)
    change_HistoryPageClass();

    slideConWrap.style = `transform: translateX(-${ 350 * currIdx }px); transition: all .7s;`
    
    setTimeout(() => {
      autoPlayInit = setInterval(tabletSizeSlideShow, 2000)
    }, 600)
  })
});

function matchWidth() {
  if(window.matchMedia('(max-width: 1024px)').matches && autoPlayState === false){
    slideConWrap.style = `transform: translateX(0);`
    historyPage[0].classList.add('on')
    autoPlayInit = setInterval(tabletSizeSlideShow, 2000)
    autoPlayState = true
    appendSlide(); 

  }else{
    currIdx = 0
    historyPage[0].classList.remove('on')
    autoPlayState = false
  }
}

matchWidth()


window.addEventListener('resize', () => {
  if(window.innerWidth > 1024 && isAppend === true){
    currIdx = 0
    slideConWrap.style = `transform: translateX(0);`
    clearInterval(autoPlayInit)
    autoPlayState = false
    historyPage.forEach(el => el.classList.remove('on')
    )
    removeSlide()
  }

  if (window.innerWidth <= 1024 && autoPlayState === false) {
    currIdx = 0

    historySlide.classList.remove('on') 
    matchWidth()
  }
})

