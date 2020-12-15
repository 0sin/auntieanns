function scrollActions(){
  const y = window.scrollY
  moveDown_BG_Pretzel(y)
  showTopBtn(y)
}

function moveDown_BG_Pretzel(y){
  const visualMovingPretzel = document.querySelector('.visual-moving-pretzel')
  const StoryMovingPretzel = document.querySelector('.story-moving-pretzel')
  if(y < 191){
    visualMovingPretzel.style = ''
  }else if(y > 190){
    visualMovingPretzel.style = `top: ${y}px;` 
    StoryMovingPretzel.style = '' 
 } 
  if(y > 270){
    console.log(y)
    StoryMovingPretzel.style = `top: ${y - 566}px;` 
    if(y > 990){
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


window.addEventListener('scroll', scrollActions)