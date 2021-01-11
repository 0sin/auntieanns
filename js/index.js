// LANDING SLIDE
// SECTION 01: MAIN SLIDE------------------------------------ 

// MAIN SLIDE OBJECT
const mainSlide = {
  mainImgSlide: document.querySelectorAll('.main_slide_img_item'),
  mainCenterMenuChange: document.querySelectorAll('.main_center_menu_item'),
  mainTextSlide: document.querySelectorAll('.main_slide_text_item'),
  mainTextBtn: document.querySelectorAll('.slide_discover_btn'),
  mainSlidePagination: document.querySelector('.main_slide_pagination'),
  mainSlideProgressbar: document.querySelectorAll('.progressbar'),

  slideIdx: 0 //0일때 페이지네이션 01
};


// MAIN SLIDE AUTOPLAY
let mainSlideLoop = setInterval(mainSlide.slideNext, 10000);

function mainSlideLoopRestart() {
  clearInterval(mainSlideLoop);
  mainSlideLoop = setInterval(mainSlide.slideNext, 10000);
}


// MENU IMG CHANGE
mainSlide.menuImgChange = function(idx) {
  let menuImg = this.mainCenterMenuChange;
  for (let i=0; i<menuImg.length; i++) {
    menuImg[i].style.opacity = "0";
  }
  menuImg[idx].style.opacity = "1";
}


// MENU TEXT CHANGE
mainSlide.textChange = function(idx) {
  let textWrap = this.mainTextSlide;
  let btn = this.mainTextBtn;
  

  for (let i=0; i<textWrap.length; i++) {
    btn[i].style.opacity = "0";
    textWrap[i].classList.remove('active');
  }
  
  btn[idx].style.opacity = "1";
  textWrap[idx].classList.add('active');
  for (let x=0; x<textWrap[idx].querySelectorAll('span').length; x++) {
    textWrap[idx].querySelectorAll('span')[x].style = `transition-delay: ${0.2 * x}s`;
  }
}

// PAGINATION
mainSlide.pagination = function(idx) {
  this.mainSlidePagination.innerHTML = `0${idx+1}`;
}

// PROGRESSBAR
mainSlide.progressbar = function(idx) {
  let progressbar = this.mainSlideProgressbar;
  
  for (let i=0; i<progressbar.length; i++) {
    progressbar[i].classList.remove('active');
  }
  progressbar[idx].classList.add('active');
}


// SLIDE SHOW
mainSlide.slideShow = function(index) {
  this.slideIdx += index;
  
  // Next, Prev Pagination 처리
  if (this.slideIdx > 2) {
    this.slideIdx = 0;
  } else if (this.slideIdx < 0) {
    this.slideIdx = 2;
  }
  
  mainSlide.menuImgChange(this.slideIdx);
  mainSlide.textChange(this.slideIdx);
  mainSlide.pagination(this.slideIdx);
  mainSlide.progressbar(this.slideIdx);
  mainSlideLoopRestart();
}

// SLIDE NEXT
mainSlide.slideNext = function() {
  mainSlide.slideShow(1);
  mainSlide.imgSlideNext();
}
// SLIDE PREV
mainSlide.slidePrev = function() {
  mainSlide.slideShow(-1);
  mainSlide.imgSlidePrev();
}


// IMG SLIDE NEXT : 이미지 bottomToTop
mainSlide.imgSlideNext = function() {
  let idx = this.slideIdx;
  let len = this.mainImgSlide.length;
  let slideImg = this.mainImgSlide;
  
  // 페이지네이션 01에서 02로 넘어갈 때 예외처리
  if (idx === 1) {
    for (let i=0; i<len; i++) {
      slideImg[i].style.zIndex = `${i+1}`;
      slideImg[i].className = 'main_slide_img_item';
    }
    slideImg[idx-1].style.zIndex = "9"; //직전 페이지 예외처리
    slideImg[idx].style.zIndex = "10";
    slideImg[idx].classList.add('next');
  } else {
    for (let i=0; i<len; i++) {
      slideImg[i].style.zIndex = `${i+1}`;
      slideImg[i].className = 'main_slide_img_item';
    }
    slideImg[idx].style.zIndex = "10";
    slideImg[idx].classList.add('next');
  }
}


// IMG SLIDE PREV : 이미지 topToBottom
mainSlide.imgSlidePrev = function() {
  let idx = this.slideIdx;
  let len = this.mainImgSlide.length;
  let slideImg = this.mainImgSlide;

  // 페이지네이션 01에서 03로 넘어갈 때 예외처리
  if (idx === 2) {
    for (let i=0; i<len; i++) {
      slideImg[i].style.zIndex = `${i+1}`;
      slideImg[i].className = 'main_slide_img_item';
    }
    slideImg[0].style.zIndex = "9"; //첫페이지 예외처리
    slideImg[idx].style.zIndex = "10";
    slideImg[idx].classList.add('prev');
  } else {
    for (let i=0; i<len; i++) {
      slideImg[i].style.zIndex = `${i+1}`;
      slideImg[i].className = 'main_slide_img_item';
    }
    slideImg[idx+1].style.zIndex = "9";
    slideImg[idx].style.zIndex = "10";
    slideImg[idx].classList.add('prev');
  }
}


// NEXT BTN CLICK
mainSlide.mainNextBtn = document.querySelector('.main_slide_btn.next');
mainSlide.mainNextBtn.addEventListener('click', mainSlide.slideNext);

// PREV BTN CLICK
mainSlide.mainPrevBtn = document.querySelector('.main_slide_btn.prev');
mainSlide.mainPrevBtn.addEventListener('click', mainSlide.slidePrev);


// 메인 함수 실행 -> 로딩시 1회 실행(즉시 실행 함수)
(function main(x) {
  mainSlide.slideShow(x);
  mainSlide.imgSlideNext();
})(0);








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




// HEADER COLOR CHANGE
const headerColorChange = function() {
  const section02 = document.querySelector('#section02').offsetTop;
  const section03 = document.querySelector('#section03').offsetTop;
  const section04 = document.querySelector('#section04').offsetTop;

  const header = document.getElementsByTagName('header');
  const headerGnbWrap = document.querySelector('.gnb-wrap');

  const widthSize = window.innerWidth;
  console.log(widthSize);
  const currentY = window.pageYOffset;
  console.log(currentY);

  if (widthSize > 1200) {
    if (currentY >= section02 && currentY < section03) { 
      headerGnbWrap.classList.add('color-black');
    } else if (currentY >= section03 && currentY < section04) { 
      headerGnbWrap.classList.remove('color-black');
    } else if (currentY >= section04) { 
      headerGnbWrap.classList.add('color-black');
    } else {
      headerGnbWrap.classList.remove('color-black');
    }
  } else if (widthSize <= 1200 && widthSize > 768) {
    if (currentY >= section02) { 
      header[0].classList.remove('none-bg');
    } else {
      header[0].classList.add('none-bg');
    }
  }
}

document.addEventListener('scroll', headerColorChange);

