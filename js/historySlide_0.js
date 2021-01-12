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



function appendSlide(){
  const slideClone_1st = slideConWrap.firstElementChild.cloneNode(true)
  const slideClone_2nd = slideConWrap.children[1].cloneNode(true)
  const slideClone_3rd = slideConWrap.children[2].cloneNode(true)

  const slideClone_Last = slideConWrap.lastElementChild.cloneNode(true)

  slideConWrap.append(slideClone_1st, slideClone_2nd, slideClone_3rd)
  slideConWrap.insertBefore(slideClone_Last, slideConWrap.firstElementChild)
}

function removeSlide(){
  const slideCon = document.querySelectorAll('.slide-contents')
  // slideConArr = Array(slideConWrap.children)
  // slideConArr.pop()
  // console.log(slideConArr)
  if(slideConWrap.children.length > 13){
    // slideCon[0].remove()
    // slideCon[14].remove()
    // slideCon[15].remove()
    // slideCon[16].remove()
    // isAppend = false
  }
}

function appendSlide_Init(){
  if(window.innerWidth <= 1024 && isAppend === false){
    isAppend = true
    appendSlide()
  }else{
    removeSlide()
    isAppend = false
  }
}

/* resize이벤트에 연동되면 사이즈가 변동될때마다 반복되어 실행되는 것을 막기 위해
isAppend 불린 조건 추가
*/


// YEAR INDEX STYLE CHANGE
function change_HistoryPageClass(){ 
  if(currIdx >= slideLength){
    /*
    예외조건. appendslide로 맨앞이 2019인 상태
    slideLength는 13. currIdx는 14까지 움직이므로 currIdx가 13이상일 때
    페이지네이션 도트 1988에 on
    slideLength - 1 = 페이지네이션 도트 2019는 on 제거
    */
    historyPage[0].classList.add('on')
    historyPage[slideLength - 1].classList.remove('on')
  }else{
    // 예외조건을 제외하고는 순차적으로 on/off
    for(let i = 0; i < slideLength; i++){
      historyPage[i].classList.remove('on');
    }
    historyPage[currIdx].classList.add('on');
  }
}


// TABLET SIZE SLIDE SHOW
function tabletSizeSlideShow() {
  currIdx ++
  console.log('currIdx='+ currIdx, slideLength)
  slideConWrap.style = `transform: translateX(-${ 350 * (currIdx + 1)}px); transition: all .7s;`

    if(currIdx > slideLength){
      currIdx = 0;
      slideConWrap.style = `transform: translateX(-350px); transition: 0s;` 
    }
  change_HistoryPageClass(); 
}


// YEAR INDEX CLICK
historyPage.forEach( (el, i) => { 

  el.addEventListener('click', () => { 
    // 클릭시 AUTO PLAY 멈춤, 재시작
    currIdx = i
    clearInterval(autoPlayInit)
    change_HistoryPageClass();

    slideConWrap.style = `transform: translateX(-${ 350 * (currIdx + 1)}px); transition: all .7s;`
    
    console.log(i, 'click, currIdx='+ currIdx + '재시작')
    setTimeout(() => {
      autoPlayInit = setInterval(tabletSizeSlideShow, 2000)
    }, 600)
  })
});

function matchWidth() {
  if(window.matchMedia('(max-width: 1024px)').matches && autoPlayState === false){
    console.log("1024px 이하 match")
    slideConWrap.style = `transform: translateX(-350px);`
    historyPage[0].classList.add('on')
    autoPlayInit = setInterval(tabletSizeSlideShow, 2000)
    autoPlayState = true
    console.log("오토플레이 상태:" + autoPlayState); 
  }else{
    currIdx = 0
    historyPage[0].classList.remove('on')
    autoPlayState = false
  }
  appendSlide_Init() 
}

matchWidth() //DOMContentLoaded 역할


window.addEventListener('resize', () => {
  if(window.innerWidth > 1024){
    currIdx = 0
    slideConWrap.style = `transform: translateX(0px);`
    clearInterval(autoPlayInit)
    autoPlayState = false
    historyPage.forEach(el => el.classList.remove('on')
    )
    console.log("오토플레이 상태:" + autoPlayState) //오토플레이 상태: false = 꺼짐
  }

  if (window.innerWidth <= 1024 && autoPlayState === false) {
    console.log("한번씩만 작동")
    currIdx = 0

    historySlide.classList.remove('on') 
    matchWidth()
  }
})

