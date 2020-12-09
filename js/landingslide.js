// LANDING SLIDE
// SECTION 01------------------------------

// 변수 선언
const buttonPrev = document.querySelector('.slide_prev');
const buttonNext = document.querySelector('.slide_next');

let leftImgSlide = document.querySelectorAll('.left_img_item');
let centerMenuSlide = document.querySelectorAll('.center_menu_item');
let rightTextSlide = document.querySelectorAll('.right_text_item');
let slidePagination = document.querySelector('.slide_pagination');

let slideNumber = 0; //0일때 첫페이지


// 첫화면 로딩
function fistSlideShow () {
  leftImgSlide[0].style.cssText = "z-index: 5; background-image: url(img/landing_slide_img_1.jpg);";
  centerMenuSlide[0].style.opacity = "1";
  rightTextSlide[0].style.opacity = "1";
  rightTextSlide[0].classList.add('active');
}
fistSlideShow();


// NEXT SLIDE
buttonNext.addEventListener('click', nextSlideShow);

function nextSlideShow() {
  if(slideNumber != leftImgSlide.length-1) { // 마지막 페이지가 아닐때
    // 현재페이지 그대로 유지
    leftImgSlide[slideNumber].style.zIndex = "1";
    leftImgSlide[leftImgSlide.length-1].style.zIndex = "0"; //이미지 1번에서 2번으로 넘어갈때 마지막 슬라이드가 1번보다 z-index 값이 낮아야함
    leftImgSlide[slideNumber].style.animation = "";

    // 메뉴이미지 사라짐
    centerMenuSlide[slideNumber].style.opacity = "0";

    // 텍스트 사라짐
    rightTextSlide[slideNumber].style.opacity = "0";
    rightTextSlide[slideNumber].classList.remove('active');
    
    
    // 올라가는 다음페이지
    leftImgSlide[slideNumber+1].style.cssText = "z-index: 5; background-image: url(img/landing_slide_img_" + (slideNumber+2) + ".jpg); animation: bottomToTop 0.5s ease-in forwards;";

    // 메뉴이미지 생김
    centerMenuSlide[slideNumber+1].style.opacity = "1";

    // 텍스트 위에서 아래로 내려옴
    rightTextSlide[slideNumber+1].style.opacity = "1";
    rightTextSlide[slideNumber+1].classList.add('active');
    for (let x=0; x<rightTextSlide[slideNumber+1].querySelectorAll('span').length; x++) {
      rightTextSlide[slideNumber+1].querySelectorAll('span')[x].style = "transition-delay: " + (0.2 * x) + "s;";
    }

    // 페이지 번호 바뀜
    slidePagination.innerHTML = "0" + (slideNumber+2);
    
    
    slideNumber++;
    
    slideLoopRestart();
  }
  
  else { //마지막 슬라이드일 때
    // 현재페이지 그대로 유지
    leftImgSlide[slideNumber].style.zIndex = "1";
    leftImgSlide[slideNumber].style.animation = "";
    centerMenuSlide[slideNumber].style.opacity = "0";
    rightTextSlide[slideNumber].style.opacity = "0";
    rightTextSlide[slideNumber].classList.remove('active');


    // 올라가는 페이지
    leftImgSlide[0].style.cssText = "z-index: 5; background-image: url(img/landing_slide_img_1.jpg); animation: bottomToTop 0.5s ease-in forwards;";
    centerMenuSlide[0].style.opacity = "1";
    rightTextSlide[0].style.opacity = "1";
    rightTextSlide[0].classList.add('active');
    for (let x=0; x<rightTextSlide[0].querySelectorAll('span').length; x++) {
      rightTextSlide[0].querySelectorAll('span')[x].style = "transition-delay: " + (0.2 * x) + "s;";
    }
    slidePagination.innerHTML = "01";

    
    slideNumber = 0;

    slideLoopRestart();
  }
}


// PREV SLIDE
buttonPrev.addEventListener('click', prevSlideShow);

function prevSlideShow() {
  if(slideNumber != 0) { // 첫 페이지가 아닐때
    // 현재페이지 그대로 유지
    leftImgSlide[slideNumber].style.zIndex = "0";
    //leftImgSlide[.style.zIndex = "1"; //이미지 2번에서 1번으로 넘어갈때 마지막 슬라이드가 2번보다 z-index 값이 낮아야함
    leftImgSlide[slideNumber].style.animation = "";

    // 메뉴이미지 사라짐
    centerMenuSlide[slideNumber].style.opacity = "0";

    // 텍스트 사라짐
    rightTextSlide[slideNumber].style.opacity = "0";
    rightTextSlide[slideNumber].classList.remove('active');
    
      
    // 내려가는 다음페이지
    leftImgSlide[slideNumber-1].style.cssText = "z-index: 5; background-image: url(img/landing_slide_img_" + (slideNumber) + ".jpg); animation: bottomToTop 0.5s ease-in forwards;";

    // 메뉴이미지 생김
    centerMenuSlide[slideNumber-1].style.opacity = "1";

    // 텍스트 위에서 아래로 내려옴
    rightTextSlide[slideNumber-1].style.opacity = "1";
    rightTextSlide[slideNumber-1].classList.add('active');
    for (let x=0; x<rightTextSlide[slideNumber-1].querySelectorAll('span').length; x++) {
      rightTextSlide[slideNumber-1].querySelectorAll('span')[x].style = "transition-delay: " + (0.2 * x) + "s;";
    }

    // 페이지 번호 바뀜
    slidePagination.innerHTML = "0" + (slideNumber);
    
    
    slideNumber--;

    slideLoopRestart();
    
  }
  
  else { //처음 슬라이드일 때
    // 현재페이지 그대로 유지
    leftImgSlide[0].style.zIndex = "1";
    leftImgSlide[0].style.animation = "";
    centerMenuSlide[0].style.opacity = "0";
    rightTextSlide[0].style.opacity = "0";
    rightTextSlide[0].classList.remove('active');


    // 올라가는 페이지
    leftImgSlide[leftImgSlide.length-1].style.cssText = "z-index: 5; background-image: url(img/landing_slide_img_" + (leftImgSlide.length) + ".jpg); animation: bottomToTop 0.5s ease-in forwards;";
    centerMenuSlide[leftImgSlide.length-1].style.opacity = "1";
    rightTextSlide[leftImgSlide.length-1].style.opacity = "1";
    rightTextSlide[leftImgSlide.length-1].classList.add('active');
    for (let x=0; x<rightTextSlide[leftImgSlide.length-1].querySelectorAll('span').length; x++) {
      rightTextSlide[leftImgSlide.length-1].querySelectorAll('span')[x].style = "transition-delay: " + (0.2 * x) + "s;";
    }
    slidePagination.innerHTML = "0" + (leftImgSlide.length);

    
    slideNumber = leftImgSlide.length-1;

    slideLoopRestart();
  }
}



// AUTOPLAY
let loopState = 1;
let slideLoop = setInterval(nextSlideShow, 3000);
// 10초로 나중에 수정할것임

function slideLoopRestart() {
  if (loopState == 1) {
    clearInterval(slideLoop);
    slideLoop = setInterval(nextSlideShow, 3000);
  }
}






// LANDING SLIDE
// SECTION 02------------------------------

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


// MOUSEOVER EVENT 미완
// SECTION 02------------------------------

// const menuItemImgBox = document.querySelectorAll('.section02_menu_item');
// const menuItemImg = document.querySelectorAll('.section02_menu_item img');

// for (let i=0; i<menuItemImgBox.length; i++) {
// menuItemImgBox[i].addEventListener('mouseover', changeImg);
// }


// function changeImg() {
//   for (i=0; i<menuItemImgBox.length; i++) {
//     menuItemImg[i].src = "./img/product0"+ (i+1) + ".png";
//   }
//   // menuItemImgBox[]후...
// }