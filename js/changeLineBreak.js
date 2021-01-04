function append_PC_Txt(){
  const lemonadeDescr = document.querySelector('.lemonade-descr')
  const identityDescr = document.querySelector('.identity-descr-txt')
  const hitoryTxt = document.querySelector('.history-txt')

  lemonadeDescr.innerHTML = '<b>신선한 레몬을 짜서 만든</b> 무탄산 레몬에이드로<br/><b>목넘김이 부드럽고 상큼</b>합니다.'
  identityDescr.innerHTML = '중앙 심볼은 블루와 골드 컬러로 표현하여 밝고 친근한 느낌을 주었으며 윗부분의 halo(링)은 완벽함을 상징합니다.<br/>Auntie Anne’s Pretzel Perfect는 앤여사가 만든 완벽한 프레즐을 고객에게 제공한다는 의미입니다.'
  hitoryTxt.innerHTML = '고객을 위해 항상 맛을 연구하는<br/>앤티앤스프레즐의 역사를 소개합니다.'
}
function append_Tab_Txt(){
  const hitoryTxt = document.querySelector('.history-txt')
  hitoryTxt.innerHTML = '고객을 위해 항상 맛을 연구하는 앤티앤스프레즐의 역사를 소개합니다.'
}
function append_M_Txt(){
  const lemonadeDescr = document.querySelector('.lemonade-descr')
  const identityDescr = document.querySelector('.identity-descr-txt')
  
  lemonadeDescr.innerHTML = '<b>신선한 레몬을 짜서 만든</b><br/>무탄산 레몬에이드로<br/><b>목넘김이 부드럽고 상큼</b>합니다.'
  identityDescr.innerHTML = '중앙 심볼은 블루와 골드 컬러로 표현하여 밝고 친근한 느낌을<br/>주었으며 윗부분의 halo(링)은 완벽함을 상징합니다.<br/>Auntie Anne’s Pretzel Perfect는 앤여사가 만든<br/>완벽한 프레즐을 고객에게 제공한다는 의미입니다.'
}
  function changeTxtStyle_M(){
    const width = window.innerWidth
    if(width < 768){
      append_M_Txt()
    }else if(width < 1025){
      append_Tab_Txt()
    }else if(width > 1024){
      append_PC_Txt()
    }
  }
  
changeTxtStyle_M()
window.addEventListener('resize', changeTxtStyle_M)