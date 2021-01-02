// 전역 변수 선언. 태그 또는 클래스명과 동일하게 지정함
const gnbItem = document.querySelectorAll('.gnb-item')
const hamburgerWrap = document.querySelector('.hamburger-wrap');
const gnbSubmenuItem = document.querySelectorAll('.gnb-submenu-item')
const wholeMenuBox = document.querySelectorAll('.whole-menu-box')
const wholeMenuTitle = document.querySelectorAll('.whole-menu-title')
const wholeMenuItem = document.querySelectorAll('.whole-menu-item')


/* gnb 메뉴명 마우스 오버시 색상변경 & 밑줄생성 & 서브메뉴
서브메뉴 나타나는 함수는 첫번째 메뉴인 앤티앤스에 서브메뉴가 없어서 별도의 for문으로 작성 */
gnbItem.forEach(el => el.addEventListener('mouseover', () => {
  el.style.color = 'var(--core-gold)'
  el.children[1].style.width = '100%' 
}))

gnbItem.forEach(el => el.addEventListener('mouseleave', () => {
  el.style.color = '' 
  el.children[1].style.width = '0' 
}))

for(let i = 1; i < gnbItem.length; i++){
  gnbItem[i].addEventListener('mouseover', function(){
    this.children[2].classList.add('on')
  })
  gnbItem[i].addEventListener('mouseleave', function(){
    this.children[2].classList.remove('on')
  })
}

// gnb 서브메뉴 마우스 오버시 색상변경
gnbSubmenuItem.forEach(el => el.addEventListener('mouseover', () => {
  el.style = 'background-color: var(--core-gold); color: var(--text-white);'
}))
gnbSubmenuItem.forEach(el => el.addEventListener('mouseleave', () => {
  el.style = ''
}))


// 햄버거 클릭시 나타나는 전체메뉴 스타일 관련
if(window.innerWidth > 989){
  changeWholeMenuStyle()
}else if(window.innerWidth < 990){
  wholeMenuBox.forEach(el => el.addEventListener('click', toggleAccordion)) 
  // wholeMenuBox.forEach(el => el.addEventListener('click', () => {
  //   if(el.classList.contains('mobile_on')){
  //     el.classList.remove('mobile_on')
  //   }else{
  //     el.classList.remove('mobile_on')
  //   }
  // }))

}

function changeWholeMenuStyle(){
  wholeMenuBox.forEach(el => el.addEventListener('mouseover', () => {
    el.classList.add('on')
  }))
  wholeMenuBox.forEach(el => el.addEventListener('mouseleave', () => {
    el.classList.remove('on')
  }))  
  wholeMenuItem.forEach(el => el.addEventListener('mouseover', () => {el.classList.add('on')}))
  wholeMenuItem.forEach(el => el.addEventListener('mouseleave', () => {el.classList.remove('on')}))
}

// function toggleAccordion(){
//   for(let i=0; i<wholeMenuBox.length; i++){
//     wholeMenuBox[i].addEventListener('click', function(){
//       for(let j = 0; j<wholeMenuBox.length; j++){
//         wholeMenuBox[j].classList.remove('mobile_on')
//       }
//       this.classList.add('mobile_on')
//     })
//   }
// }

wholeMenuBox.forEach(function(el){
  el.addEventListener('click', toggleAccordion)
})

function toggleAccordion(el){
  const targetBox = el.currentTarget
  const targetNextSibling = targetBox.nextElementSibling
  const targetPrevSibling = targetBox.previousElementSibling
    if(targetBox.classList.contains('mobile_on')){
      targetNextSibling.classList.remove('mobile_on')
      targetPrevSibling.classList.remove('mobile_on')
    }else if(targetBox.classList.contains('mobile_on')){
      targetBox.classList.remove('mobile_on')
    }else{
      targetBox.classList.add('mobile_on')
    }

}

// 햄버거 메뉴 관련 액션 총괄 함수
function toggleHamburger() {
  const target = hamburgerWrap
  chageHamburgerShape(target)
  openWholeMenu(target)
}

// 햄버거 메뉴 클릭시 모양 변경
function chageHamburgerShape(target) {
  if (target.classList.contains('on')) {
    target.classList.remove('on')
  } else {
    target.classList.add('on')
  }
}
// 햄버거 메뉴 클릭시 전체 메뉴 오픈
function openWholeMenu(target) {
  const wholeMenuContainer = document.querySelector('.whole-menu-container')
  if (target.classList.contains('on')) {
    wholeMenuContainer.classList.add('on')
  } else {
    wholeMenuContainer.classList.remove('on')
  }
}
// 햄버거 메뉴 관련 함수 init
hamburgerWrap.addEventListener('click', toggleHamburger)










// FOOTER GO TO TOP BTN------------------------------------ 
// 변수 선언
const topBtn = document.querySelector('.top_btn');
let docElem = document.documentElement; 

// 브라우저마다 높이를 구하는 방식이 다름. 둘중에 값이 높은것 취하기.
let docElemHeight = Math.max(docElem.offsetHeight, docElem.offsetHeight)

let offset;
let scrollPos;

if (docElemHeight !== 0) {
  offset = docElemHeight / 4;
}


// 윈도우 스크롤 이벤트
window.addEventListener('scroll', function() {
  scrollPos = docElem.scrollTop; //꼭 함수 안에 들어와있어야 인식할 수 있음
  topBtn.className = (scrollPos > offset) ? 'top_btn visible' : 'top_btn';
});


// 클릭시 위로 이동
topBtn.addEventListener('click', function(e){
  e.preventDefault(); // a태그 이벤트 초기화
  // docElem.scrollTop = 0; //한번에 이동
  scrollToTop(); 
});

// 클릭시 점차 이동
function scrollToTop() {
  let scrollInterval = setInterval(function() {
    if (scrollPos != 0) {
      window.scrollBy(0, -120);
    } else {
      clearInterval(scrollInterval);
    }
  },15)
}
