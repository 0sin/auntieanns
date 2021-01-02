// LANDING SLIDE
// SECTION 01: MAIN SLIDE------------------------------------ 

// 변수 선언
const mainPrewBtn = document.querySelector('.main_slide_btn.prev');
const mainNextBtn = document.querySelector('.main_slide_btn.next');

const mainImgSlide = document.querySelectorAll('.main_slide_img_item');
const mainCenterMenuChange = document.querySelectorAll('.main_center_menu_item');
const mainTextSlide = document.querySelectorAll('.main_slide_text_item_wrap');

const mainSlidePagination = document.querySelector('.main_slide_pagination');
const mainSlideProgressbar = document.querySelectorAll('.progressbar');

let slideNumber = 0; //0일때 첫페이지


// 첫화면 로딩
function fistSlideShow () {
  mainImgSlide[0].style.zIndex = "5";
  mainCenterMenuChange[0].style.opacity = "1";
  mainSlideProgressbar[0].classList.add('active');
  mainTextSlide[0].classList.add('active');
}
fistSlideShow();


// NEXT SLIDE
mainNextBtn.addEventListener('click', nextSlideShow);

function nextSlideShow() {
  if(slideNumber != mainImgSlide.length-1) { // 마지막 페이지가 아닐때
    // 현재페이지 그대로 유지
    mainImgSlide[slideNumber].style.zIndex = "1";
    mainImgSlide[mainImgSlide.length-1].style.zIndex = "0"; //이미지 1번에서 2번으로 넘어갈때 마지막 슬라이드가 1번보다 z-index 값이 낮아야함
    mainImgSlide[slideNumber].style.animation = "";
    
    // 메뉴이미지 사라짐
    mainCenterMenuChange[slideNumber].style.opacity = "0";
    
    // 텍스트 사라짐
    mainTextSlide[slideNumber].classList.remove('active');
    // 프로그레스바 초기화
    mainSlideProgressbar[slideNumber].classList.remove('active');
    
    
    // 올라가는 다음페이지
    mainImgSlide[slideNumber+1].style.zIndex = "5";
    mainImgSlide[slideNumber+1].style.animation = "bottomToTop 0.5s ease-in forwards";

    // 메뉴이미지 생김
    mainCenterMenuChange[slideNumber+1].style.opacity = "1";

    // 텍스트 위에서 아래로 내려옴
    mainTextSlide[slideNumber+1].classList.add('active');
    for (let x=0; x<mainTextSlide[slideNumber+1].querySelectorAll('span').length; x++) {
      mainTextSlide[slideNumber+1].querySelectorAll('span')[x].style = "transition-delay: " + (0.2 * x) + "s;";
    }

    // 페이지 번호 바뀜, 프로그레스바
    mainSlidePagination.innerHTML = "0" + (slideNumber+2);
    mainSlideProgressbar[slideNumber+1].classList.add('active');
    
    
    slideNumber++;
    
    slideLoopRestart();
  }
  
  else { //마지막 슬라이드일 때
    // 현재페이지 그대로 유지
    mainImgSlide[slideNumber].style.zIndex = "1";
    mainImgSlide[slideNumber].style.animation = "";
    mainCenterMenuChange[slideNumber].style.opacity = "0";
    mainTextSlide[slideNumber].classList.remove('active');
    mainSlideProgressbar[slideNumber].classList.remove('active');


    // 올라가는 페이지
    mainImgSlide[0].style.zIndex = "5";
    mainImgSlide[0].style.animation = "bottomToTop 0.5s ease-in forwards";
    mainCenterMenuChange[0].style.opacity = "1";
    mainTextSlide[0].classList.add('active');
    for (let x=0; x<mainTextSlide[0].querySelectorAll('span').length; x++) {
      mainTextSlide[0].querySelectorAll('span')[x].style = "transition-delay: " + (0.2 * x) + "s;";
    }
    mainSlidePagination.innerHTML = "01";
    mainSlideProgressbar[0].classList.add('active');

    
    slideNumber = 0;

    slideLoopRestart();
  }
}


// PREV SLIDE
mainPrewBtn.addEventListener('click', prevSlideShow);

function prevSlideShow() {
  if(slideNumber != 0) { // 첫 페이지가 아닐때
    // 현재페이지 그대로 유지
    mainImgSlide[slideNumber].style.zIndex = "0";
    //mainImgSlide[.style.zIndex = "1"; //이미지 2번에서 1번으로 넘어갈때 마지막 슬라이드가 2번보다 z-index 값이 낮아야함
    mainImgSlide[slideNumber].style.animation = "";

    // 메뉴이미지 사라짐
    mainCenterMenuChange[slideNumber].style.opacity = "0";

    // 텍스트 사라짐
    mainTextSlide[slideNumber].classList.remove('active');
    // 프로그레스바
    mainSlideProgressbar[slideNumber].classList.remove('active');
    
      
    // 내려가는 다음페이지
    mainImgSlide[slideNumber-1].style.zIndex = "5";
    mainImgSlide[slideNumber-1].style.animation = "bottomToTop 0.5s ease-in forwards";

    // 메뉴이미지 생김
    mainCenterMenuChange[slideNumber-1].style.opacity = "1";

    // 텍스트 위에서 아래로 내려옴
    mainTextSlide[slideNumber-1].classList.add('active');
    for (let x=0; x<mainTextSlide[slideNumber-1].querySelectorAll('span').length; x++) {
      mainTextSlide[slideNumber-1].querySelectorAll('span')[x].style = "transition-delay: " + (0.2 * x) + "s;";
    }

    // 페이지 번호 바뀜, 프로그레스바
    mainSlidePagination.innerHTML = "0" + (slideNumber);
    mainSlideProgressbar[slideNumber].classList.add('active');
    
    
    slideNumber--;

    slideLoopRestart();
    
  }
  
  else { //처음 슬라이드일 때
    // 현재페이지 그대로 유지
    mainImgSlide[0].style.zIndex = "1";
    mainImgSlide[0].style.animation = "";
    mainCenterMenuChange[0].style.opacity = "0";
    mainTextSlide[0].classList.remove('active');
    mainSlideProgressbar[0].classList.remove('active');


    // 올라가는 페이지
    mainImgSlide[slideNumber+1].style.zIndex = "5";
    mainImgSlide[mainImgSlide.length-1].style.animation = "bottomToTop 0.5s ease-in forwards;";
    mainCenterMenuChange[mainImgSlide.length-1].style.opacity = "1";
    mainTextSlide[mainImgSlide.length-1].classList.add('active');
    for (let x=0; x<mainTextSlide[mainImgSlide.length-1].querySelectorAll('span').length; x++) {
      mainTextSlide[mainImgSlide.length-1].querySelectorAll('span')[x].style = "transition-delay: " + (0.2 * x) + "s;";
    }
    mainSlidePagination.innerHTML = "0" + (mainImgSlide.length);
    mainSlideProgressbar[mainImgSlide.length-1].classList.add('active');

    
    slideNumber = mainImgSlide.length-1;

    slideLoopRestart();
  }
}


// TEXT 순차적으로 내려오는 함수
// let textTransDelay = function() {

// }




// MAIN SLIDE AUTOPLAY
let slideLoop = setInterval(nextSlideShow, 10000);

function slideLoopRestart() {
  clearInterval(slideLoop);
  slideLoop = setInterval(nextSlideShow, 10000);
}







// SECTION 01: MOBILE MAIN SLIDE------------------------------------ 
// ITEM LEFT POSITION
let moMainSlideLeftPosition = function() {
  const mobileSlide = document.querySelectorAll('.m_slide_item');
  
  for (let i=0; i<mobileSlide.length; i++) {
    mobileSlide[i].style.left = 100 * i + "%";
  }
}
moMainSlideLeftPosition();


// INDEX BUTTON STYLE CHANGE
let moIndexActive = function(idx) {
  const moIndexBtn = document.querySelectorAll('.m_num_index_item');

  for (let i=0; i<moIndexBtn.length; i++) {
    moIndexBtn[i].classList.remove('active');
  }
  moIndexBtn[idx].classList.add('active');
}

// SLIDE TEXT SHOW
let moSlideTextShow = function(idx) {
  const moSlideText = document.querySelectorAll('.m_slide_text_wrap');
  const moSlideSpan = moSlideText[idx].querySelectorAll('span')

  for (let i=0; i<moSlideText.length; i++) {
    moSlideText[i].classList.remove('active');
  }

  moSlideText[idx].classList.add('active');
  for (let j=0; j<moSlideSpan.length; j++) {
    moSlideSpan[j].style.transitionDelay = `${0.2 * j}s`;
  } 
}


// SLIDE SHOW
let currentIndex;
let goToSlide = function(idx) {
  const mobileSlideWrap = document.querySelector('.m_slide_wrap');

  mobileSlideWrap.style.left = -100 * idx + "%";
  mobileSlideWrap.classList.add('active');
  
  currentIndex = idx;
  moIndexActive(currentIndex);
  moSlideTextShow(currentIndex); 
}

// 첫화면 호출
goToSlide(0);



// NEXT SLIDE
let moSlideNext = function() {
  if (currentIndex > 1) {
    goToSlide(0);
    currentIndex = 0;
    moSlideLoopRestart()
  } else {
    goToSlide(currentIndex + 1);
    moSlideLoopRestart()
  }
}

// PREV SLIDE
let moSlidePrev = function() {
  if (currentIndex > 0) {
    goToSlide(currentIndex - 1);
    moSlideLoopRestart()
  } else {
    currentIndex = 3;
    goToSlide(currentIndex - 1);
    moSlideLoopRestart()
  }
}


// PREV, NEXT BUTTON CLICK
const moNextBtn = document.querySelector('.m_next_btn')
const moPrevBtn = document.querySelector('.m_prev_btn')

moPrevBtn.addEventListener('click', moSlidePrev);
moNextBtn.addEventListener('click', moSlideNext);



// INDEX BUTTON CLICK
const moIndexBtn = document.querySelectorAll('.m_num_index_item');

moIndexBtn.forEach(el => el.addEventListener('click', () => {
  goToSlide(el.innerText - 1);
  moSlideLoopRestart()
}));



// AUTOPLAY
let moSlideLoop = setInterval(moSlideNext, 5000);
// AUTOPLAY 초기화
function moSlideLoopRestart() {
    clearInterval(moSlideLoop);
    moSlideLoop = setInterval(moSlideNext, 5000);
}




// SECTION 02: MENU SLIDE------------------------------------ 
// NEXT SLIDE
const menuSlideNextBtn = document.querySelector('.section02_slide_next_btn')
let menuSlidePage = 0;

menuSlideNextBtn.addEventListener('click', nextMenuSlideShow);

function nextMenuSlideShow() {
  const menuSlideFisrt = document.querySelector('.menu_slide_1')
  const menuSlideSecond = document.querySelector('.menu_slide_2')
  
  if (menuSlidePage == 0) {
    menuSlideFisrt.style.left = "-100%";
    menuSlideSecond.style.left = "0";
    menuSlideNextBtn.querySelector('img').style = "transform: rotateY(180deg)";

    menuSlidePage = 1;
  } else {
    menuSlideFisrt.style.left = "0";
    menuSlideSecond.style.left = "100%";
    menuSlideNextBtn.querySelector('img').style = "transform: rotateY(0deg)";

    menuSlidePage = 0;
  }
}

