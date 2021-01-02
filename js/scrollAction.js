
function scrollActions(){
  const y = window.scrollY
  let isMobile =  window.innerWidth < 768
  console.log(y)
  moveDown_BG_Pretzel(y, isMobile)
  showTopBtn(y)
  fadeIn_Story(y)
  fadeUp_CiImg(y)
  fadeUp_ColorWrap(y)
  movePhiloCircle(y)
}

function moveDown_BG_Pretzel(y, isMobile){
  const visualMovingPretzel = document.querySelector('.visual-moving-pretzel')
  const StoryMovingPretzel = document.querySelector('.story-moving-pretzel')
  if(y < 191 && isMobile){
    visualMovingPretzel.style = ''
  }else if(y > 190 && isMobile){
    visualMovingPretzel.style = `top: ${y}px;` 
    StoryMovingPretzel.style = '' 
 } 
  if(y > 270 && isMobile){    
    StoryMovingPretzel.style = `top: ${y - 566}px;` 
    if(y > 990 && isMobile){
      StoryMovingPretzel.style = 'top: 425px; animation: fadeOut .5s ease-in forwards'  
    }
  } 
}

function showTopBtn(y){
  const topBtn = document.querySelector('.shortcut-top-btn')
  if(y < 508){
    topBtn.classList.remove('show') 
  }else if(y > 507){
    topBtn.classList.add('show')
  }
}

function fadeIn_Story(y){
  const bgPretzel = document.querySelector('.bg-pretzel')
  const fadeUpText01 = document.querySelector('.descr-wrap-02')
  const fadeUpText02 = document.querySelector('.warmer-descr')
  const trigger01 = fadeUpText01.offsetTop
  const trigger02 = fadeUpText02.offsetTop
  if(y > trigger01){
    bgPretzel.style = 'animation: fadeIn_Right 1.3s forwards'
    fadeUpText01.style = 'animation: fadeIn_Up 1s forwards'
  }
  if(y > trigger02){
    fadeUpText02.style = 'animation: fadeIn_Up 1s forwards'
  }
}
function fadeUp_CiImg(y){
  const ciImg01 = document.querySelector('.identity-ci-wrap').children[0]
  const ciImg02 = document.querySelector('.identity-ci-wrap').children[1]
  const identity = document.querySelector('#identity')
  
  const trigger = identity.offsetTop
  console.log(trigger)

  if(y > trigger){
    ciImg01.style = 'animation: fadeIn_Up 1s forwards'
    ciImg02.style = 'animation: fadeIn_Up 1s forwards; animation-delay: .3s;'
  }
}

function fadeUp_ColorWrap(y){
  const identity = document.querySelector('#identity')
  const identityDescr = document.querySelector('.identity-descr-wrap')
  const colorWrap = document.querySelector('.core-color-wrap')
  const trigger = identity.offsetTop + (identityDescr.clientHeight / 3)
  if(y > trigger){
    colorWrap.style = 'animation: fadeIn_Up 1s forwards'
  } 
}

function movePhiloCircle(y){
  const philosophy = document.querySelector('#auntie-philosophy')
  const philoCircle = document.querySelectorAll('.philosophy-circle')
  const trigger = philosophy.offsetTop - 320
  if(y > trigger){
    philoCircle.forEach(el => {
      el.classList.add('active')
    })
    setTimeout(() => {
      x = philoCircle[0].clientWidth
      philoCircle[0].style = `left: ${x}px;`
      philoCircle[2].style = `right: ${x}px;`
      philoCircle[0].parentNode.classList.add('out')
    }, 1500);    

  }

}

window.addEventListener('scroll', scrollActions)