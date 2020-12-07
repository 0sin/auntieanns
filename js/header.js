// 전역 변수 선언. 태그 또는 클래스명과 동일하게 지정함
const header = document.querySelector('header')
const gnbItem = document.querySelectorAll('.gnb-item')
const hamburgerWrap = document.querySelector('.hamburger-wrap');
const gnbSubmenuItem = document.querySelectorAll('.gnb-submenu-item')

/* gnb 메뉴명 마우스 오버시 색상변경 & 밑줄생성 & 서브메뉴 나타남
첫번째 메뉴인 앤티앤스에 자식노드가 없어서 for문으로 작성 */
gnbItem.forEach(el => el.addEventListener('mouseover', function(){
  el.style.color = 'var(--core-gold)'
  el.children[1].style.width = '100%' 
}))
gnbItem.forEach(el => el.addEventListener('mouseleave', function(){
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
gnbSubmenuItem.forEach(el => el.addEventListener('mouseover', function(){
  el.style = 'background-color: var(--core-gold); color: var(--text-white);'
}))
gnbSubmenuItem.forEach(el => el.addEventListener('mouseleave', function(){
  el.style = ''
}))


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
