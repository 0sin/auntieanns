function scrollActions(){
  const y = window.scrollY
  let isMobile =  window.innerWidth < 768

  const story = document.querySelector('#auntie-story')
  const identity = document.querySelector('#identity')
  const philosophy = document.querySelector('#auntie-philosophy') 
  const history = document.querySelector('#auntie-history') 

  // console.log(y)
  moveDown_BG_Pretzel(y, isMobile)
  showTopBtn(y)
  fadeIn_Story(y, story)
  fadeUp_CiImg(y, isMobile, identity)
  fadeUp_ColorWrap(y, identity)
  fadeIn_philoTitle(y, philosophy)
  movePhiloCircle(y, isMobile, philosophy)
  active_M_historySlide(y, history)
}

function moveDown_BG_Pretzel(y, isMobile){
  const visualMovingPretzel = document.querySelector('.visual-moving-pretzel')
  const StoryMovingPretzel = document.querySelector('.story-moving-pretzel')
  if(y < 191 && !isMobile){
    visualMovingPretzel.style = ''
  }else if(y > 190 && !isMobile){
    visualMovingPretzel.style = `top: ${y}px;` 
    StoryMovingPretzel.style = '' 
  } 
  if(y > 270 && !isMobile){    
    StoryMovingPretzel.style = `top: ${y - 566}px;` 
    if(y > 990 && !isMobile){
      StoryMovingPretzel.style = 'top: 425px; animation: fadeOut .5s ease-in forwards;'  
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

function fadeIn_Story(y, story){ 
  const bgPretzel = document.querySelector('.bg-pretzel')
  const fadeUpText01 = document.querySelector('.descr-wrap-02')
  const fadeUpText02 = document.querySelector('.warmer-descr')

  const trigger01 = story.offsetTop + bgPretzel.clientHeight
  const trigger02 = fadeUpText02.offsetTop
  
  if(y > trigger01){
    bgPretzel.style = 'animation: fadeIn_toRight 1.3s forwards;'
    fadeUpText01.style = 'animation: fadeIn_Up 1s forwards;'
  }
  if(y > trigger02){
    fadeUpText02.style = 'animation: fadeIn_Up 1s forwards;'
  }
}

function fadeUp_CiImg(y, isMobile, identity){ 
  const ciImg01 = document.querySelector('.identity-ci-wrap').children[0]
  const ciImg02 = document.querySelector('.identity-ci-wrap').children[1]
  
  const trigger = identity.offsetTop

  if(y > trigger && !isMobile){
    ciImg01.style = 'animation: fadeIn_Up 1s forwards;'
    ciImg02.style = 'animation: fadeIn_Up 1s forwards; animation-delay: .3s;'
  }
  if(y > trigger && isMobile){
    ciImg01.style = 'animation: fadeIn_toRight 1.5s forwards;'
    ciImg02.style = 'animation: fadeIn_toLeft 1.5s forwards;'
  } 
}

function fadeUp_ColorWrap(y, identity){ 
  const identityDescr = document.querySelector('.identity-descr-wrap')
  const colorWrap = document.querySelector('.core-color-wrap')

  const trigger = identity.offsetTop + (identityDescr.clientHeight / 3)

  if(y > trigger){
    colorWrap.style = 'animation: fadeIn_Up 1s forwards;'
  } 
}

function fadeIn_philoTitle(y, philosophy){ 
  const philoTitle = document.querySelector('.philosophy-title')

  const trigger = philosophy.offsetTop - 320

  if(y > trigger){
    philoTitle.style = 'animation: fadeIn 1s forwards;'
  }
}

function movePhiloCircle(y, isMobile, philosophy){ 
  const philoCircleWrap = document.querySelector('.philo-circle-wrap')
  const philoCircle = document.querySelectorAll('.philosophy-circle')
  
  const trigger = philosophy.offsetTop - 320

  if(y > trigger && !isMobile){
    philoCircle.forEach(el => {
      el.classList.add('active')
    })
    setTimeout(() => {
      x = philoCircle[0].clientWidth
      philoCircle[0].style = `left: ${x}px;`
      philoCircle[2].style = `right: ${x}px;`
      philoCircleWrap.classList.add('out')
    }, 1500); 
  }

  if(y > trigger && isMobile){
    philoCircle.forEach(el => {
      el.classList.add('active')
    })
    setTimeout(() => {
      x = philoCircle[0].clientWidth
      philoCircle[0].style = `top: ${x}px;`
      philoCircle[2].style = `bottom: ${x}px;`
      philoCircleWrap.classList.add('out')
    }, 1500); 
  }
}

function active_M_historySlide(y, history){
  const trigger = history.offsetTop - 120
  if(y > trigger){
    console.log(y, trigger)
  }

}

window.addEventListener('scroll', scrollActions)