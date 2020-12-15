// LANDING SLIDE
// SECTION 01: MAIN SLIDE 

// 변수 선언
const mainPrewBtn = document.querySelector('.main_slide_btn.prev');
const mainNextBtn = document.querySelector('.main_slide_btn.next');

const mainImgSlide = document.querySelectorAll('.main_slide_img_item');
const mainCenterMenuChange = document.querySelectorAll('.main_center_menu_item');
const mainTextSlide = document.querySelectorAll('.main_slide_text_item');
const discoverMoreBtn = document.querySelectorAll('.slide_discover_btn');
const mainSlidePagination = document.querySelector('.main_slide_pagination');
const mainSlideProgressbar = document.querySelectorAll('.progressbar');

let slideNumber = 0; //0일때 첫페이지


// 첫화면 로딩
function fistSlideShow () {
  mainImgSlide[0].style.zIndex = "5";
  mainCenterMenuChange[0].style.opacity = "1";
  mainTextSlide[0].style.opacity = "1";
  discoverMoreBtn[0].style.opacity = "1";
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
    discoverMoreBtn[slideNumber].style.opacity = "0";
    mainTextSlide[slideNumber].style.opacity = "0";
    mainTextSlide[slideNumber].classList.remove('active');
    // 프로그레스바 초기화
    mainSlideProgressbar[slideNumber].classList.remove('active');
    
    
    // 올라가는 다음페이지
    mainImgSlide[slideNumber+1].style.zIndex = "5";
    mainImgSlide[slideNumber+1].style.animation = "bottomToTop 0.5s ease-in forwards";

    // 메뉴이미지 생김
    mainCenterMenuChange[slideNumber+1].style.opacity = "1";

    // 텍스트 위에서 아래로 내려옴
    discoverMoreBtn[slideNumber+1].style.opacity = "1";
    mainTextSlide[slideNumber+1].style.opacity = "1";
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
    discoverMoreBtn[slideNumber].style.opacity = "0";
    mainTextSlide[slideNumber].style.opacity = "0";
    mainTextSlide[slideNumber].classList.remove('active');
    mainSlideProgressbar[slideNumber].classList.remove('active');


    // 올라가는 페이지
    mainImgSlide[0].style.zIndex = "5";
    mainImgSlide[0].style.animation = "bottomToTop 0.5s ease-in forwards";
    mainCenterMenuChange[0].style.opacity = "1";
    discoverMoreBtn[0].style.opacity = "1";
    mainTextSlide[0].style.opacity = "1";
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
    discoverMoreBtn[slideNumber].style.opacity = "0";
    mainTextSlide[slideNumber].style.opacity = "0";
    mainTextSlide[slideNumber].classList.remove('active');
    // 프로그레스바
    mainSlideProgressbar[slideNumber].classList.remove('active');
    
      
    // 내려가는 다음페이지
    mainImgSlide[slideNumber-1].style.zIndex = "5";
    mainImgSlide[slideNumber-1].style.animation = "bottomToTop 0.5s ease-in forwards";

    // 메뉴이미지 생김
    mainCenterMenuChange[slideNumber-1].style.opacity = "1";

    // 텍스트 위에서 아래로 내려옴
    discoverMoreBtn[slideNumber-1].style.opacity = "1";
    mainTextSlide[slideNumber-1].style.opacity = "1";
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
    discoverMoreBtn[0].style.opacity = "0";
    mainTextSlide[0].style.opacity = "0";
    mainTextSlide[0].classList.remove('active');
    mainSlideProgressbar[0].classList.remove('active');


    // 올라가는 페이지
    mainImgSlide[slideNumber+1].style.zIndex = "5";
    mainImgSlide[mainImgSlide.length-1].style.animation = "bottomToTop 0.5s ease-in forwards;";
    mainCenterMenuChange[mainImgSlide.length-1].style.opacity = "1";
    discoverMoreBtn[mainImgSlide.length-1].style.opacity = "1";
    mainTextSlide[mainImgSlide.length-1].style.opacity = "1";
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



// MAIN SLIDE AUTOPLAY
let loopState = 1;
let slideLoop = setInterval(nextSlideShow, 10000);
// 10초로 나중에 수정할것임

function slideLoopRestart() {
  if (loopState == 1) {
    clearInterval(slideLoop);
    slideLoop = setInterval(nextSlideShow, 10000);
  }
}






// LANDING SLIDE
// SECTION 02: MENU SLIDE

const menuSlideNextBtn = document.querySelector('.section02_slide_next_btn')
const menuSlideFisrt = document.querySelector('.menu_slide_1')
const menuSlideSecond = document.querySelector('.menu_slide_2')

let menuSlidePage = 0;

// NEXT SLIDE
menuSlideNextBtn.addEventListener('click', nextMenuSlideShow);

function nextMenuSlideShow() {
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