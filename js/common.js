// 전역 변수 선언
const gnbItem = document.querySelectorAll('.gnb-item')
const hamburgerWrap = document.querySelector('.hamburger-wrap');
const gnbSubmenuItem = document.querySelectorAll('.gnb-submenu-item')
const wholeMenuBox = document.querySelectorAll('.whole-menu-box')
const wholeMenuItem = document.querySelectorAll('.whole-menu-item')
const wholeMenuContainer = document.querySelector('.whole-menu-container')


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


function toggleAccordion(el){
  const targetClass = el.currentTarget.classList;

  if (targetClass.contains('mobile_on')){
    targetClass.remove('mobile_on')
  } 
  else{ 
    wholeMenuBox.forEach(el => el.classList.remove('mobile_on')) 
    targetClass.add('mobile_on');
  } 
}


function activeMobileAcc(){
    const width = window.innerWidth

  if(width < 990){
    wholeMenuBox.forEach(function (el){
      el.addEventListener('click', toggleAccordion)
  });
  }
}

// 아코디언 메뉴 클릭시 전체메뉴 닫힘
function closeWholeMenu(){
  wholeMenuItem.forEach(el => el.addEventListener('click', () => {
    hamburgerWrap.classList.remove('on')
    wholeMenuContainer.classList.remove('on')
  }))
}

// 햄버거 메뉴 클릭으로 전체메뉴가 닫히면 열려있던 아코디언 메뉴도 닫힘
function closeAccordion(){
  if(!hamburgerWrap.classList.contains('on')){
    wholeMenuBox.forEach(el => el.classList.remove('mobile_on')) 
  }
}

// 햄버거 메뉴 관련 액션 총괄 함수
function toggleHamburger() {
  const target = hamburgerWrap
  chageHamburgerShape(target)
  openWholeMenu(target)
  closeAccordion()
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
  if (target.classList.contains('on')) {
    wholeMenuContainer.classList.add('on')
  } else {
    wholeMenuContainer.classList.remove('on')
  }
}
// 햄버거 메뉴 관련 함수 init
hamburgerWrap.addEventListener('click', toggleHamburger)

window.addEventListener('resize', activeMobileAcc) 
activeMobileAcc()
closeWholeMenu()

// FOOTER GO TO TOP BTN------------------------------------ 
// 변수 선언
const topBtn = document.querySelector('.top_btn');
let docElem = document.documentElement; 

let docElemHeight = Math.max(docElem.offsetHeight, docElem.offsetHeight)

let offset;
let scrollPos;

if (docElemHeight !== 0) {
  offset = 700;
}


// 윈도우 스크롤 이벤트
window.addEventListener('scroll', function() {
  scrollPos = docElem.scrollTop; //꼭 함수 안에 들어와있어야 인식할 수 있음
  topBtn.className = (scrollPos > offset) ? 'top_btn visible' : 'top_btn';
});


// 클릭시 위로 이동
topBtn.addEventListener('click', function(e){
  e.preventDefault();
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