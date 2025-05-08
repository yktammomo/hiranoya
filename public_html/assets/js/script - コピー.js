
$(function () {
  
// loading
    function end_loader() {
      $('.loader').fadeOut(800);
    }
    $(window).on('load', function () {
      setTimeout(function () {
        end_loader();
      }, 3000)
    })
  });
  
  
  
  // ヘッダーの追従　100スクロールすると上からでてくる
  window.addEventListener('scroll',function(){
    const header =document.querySelector('.header');
    const headerHeight = header.offsetHeight;
    const scroll = window.pageYOffset;
    
    if(scroll >= 100){
        header.classList.add('header--sticky');
        // コンテンツにヘッダーの高さ分の余白を設定
        document.body.style.marginTop = headerHeight + 'px';
    }else{
        header.classList.remove('header--sticky');
        // コンテンツの余白をリセット
        document.body.style.marginTop='0';
    }
  });
  
  // ハンバーガーメニューをクリックするとactiveクラスが付く
  
  $(".header-toggle").click(function () {
      $(this).toggleClass('active');
  });
  
  // ハンバーガーメニューをクリックしたらメニューアイテムが出現
  $(".header-toggle").click(function () {
      $(".header-nav-sp").toggleClass('is-active');
  });
  
  // メニューアイテム内のリンクを押したら、リンク先に飛びメニューアイテムが消える
  $('.menu-item__link').click(function(){
      $('.header-nav-sp').removeClass('is-active');
  });
  
  $('.modal__cross').click(function(){
    $('.header-nav-sp').removeClass('is-active');
  });
  
  // メニューアイテム内のリンクを押したら　header__toggleが×から三本戦に
  $('.menu-item__link').click(function(){
      $('.header-toggle').removeClass('active');
  });
  
  $('.modal__cross').click(function(){
      $('.header-toggle').removeClass('active');
  });
  
  
  
  
  // $(document).ready(function(){
  //   $('#js-submit').prop('disabled',true);
    
  //   $('input').on('input',function(){
  //     if(checkInput()){
  //       $('#js-submit').prop('disabled',false);
  //     }else{
  //       $('#js-submit').prop('disabled',true);
  //     }
      
  //   });
  // });
  
  // function checkInput(){
  //   var allFilled = true;
  //   $('input[type="text"], input[type="email"],input[type="textarea"]').each(function(){
  //     if ($(this).val() === '') {
  //       allFilled = false;
  //     }
  //   });
  //   return allFilled;
  // }
  
  
  $(document).ready(function() {
    $('.entryform__input, .entryform__textarea, #privacyCheck').on('input change', function() {
      var form = $('#form');
      var isFormValid = form[0].checkValidity();
  
      if (isFormValid) {
        $('#js-submit').prop('disabled', false);
      } else {
        $('#js-submit').prop('disabled', true);
      }
    });
  });
  
  // MicroModal.init({
  //   disableScroll: true,
  // });




const items = document.querySelectorAll('.aboutus-top__item');
let index = 0;
gsap.set('.aboutus-top__item',{autoAlpha:0})
gsap.set(items[0],{autoAlpha:1})

ScrollTrigger.create({
  trigger:'.aboutus-top__contents',
  start:'top top',
  pin:true,
  onUpdate:(self)=>{
    let newIndex = Math.floor(self.progress * items.length)
    if(index != newIndex && newIndex != items.length){
      let contents = items[newIndex].querySelectorAll('.aboutus-top__text > * ')
      gsap.to('.aboutus-top__item',{autoAlpha:0});
      gsap.to(items[newIndex],{autoAlpha:1});
      gsap.fromTo(contents,{autoAlpha:0,y:20},{autoAlpha:1,y:0,stagger:.1})
      index = newIndex;
    }
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const splide = new Splide(".factory-slide01", {
    autoplay: true, 
    type: "loop",
    interval: 2000,
    speed: 1000,
    perPage: 3,
    focus: 0,
    arrow : false,
  });

  splide.mount();
});
document.addEventListener('DOMContentLoaded', function () {
  const splide = new Splide(".factory-slide02", {
    autoplay: true, 
    type: "loop",
    interval: 2000,
    speed: 1000,
    perPage: 3,
    focus: 0,
    arrow : false,
  });

  splide.mount();
});
document.addEventListener('DOMContentLoaded', function () {
  const splide = new Splide(".factory-slide03", {
    autoplay: true, 
    type: "loop",
    interval: 2000,
    speed: 1000,
    perPage: 3,
    focus: 0,
    arrow : false,
  });

  splide.mount();
});
document.addEventListener('DOMContentLoaded', function () {
  const splide = new Splide(".factory-slide04", {
    autoplay: true, 
    type: "loop",
    interval: 2000,
    speed: 1000,
    perPage: 3,
    focus: 0,
    arrow : false,
  });

  splide.mount();
});

