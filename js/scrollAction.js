function scrollActions(){
  const y = window.scrollY
  moveDown_BG_Pretzel(y)
  showTopBtn(y)
}

function moveDown_BG_Pretzel(y){
  const visualMovingPretzel = document.querySelector('.visual_moving_pretzel')
  console.log(y)
  if(y < 191){
    visualMovingPretzel.style = ''
  }else if(y > 190){
    visualMovingPretzel.style = `top: ${y}px;` 
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


window.addEventListener('scroll', scrollActions)