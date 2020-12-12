function scrollActions(){
  const y = window.scrollY
  moveDown_BG_Pretzel(y)
  showTopBtn(y)
}

function moveDown_BG_Pretzel(y){
  const visualMovingPretzel = document.querySelector('.visual-moving-pretzle')
  const StoryMovingPretzel = document.querySelector('.story-moving-pretzle')
  if(y < 191){
    visualMovingPretzel.style = ''
  }else if(y > 190){
    visualMovingPretzel.style = `top: ${y}px;` 
    StoryMovingPretzel.style = '' 
 } 
  if(y > 270){
    console.log(y)
    StoryMovingPretzel.style = `top: ${y -566}px;` 
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