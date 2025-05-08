
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
    
    if(scroll >= 800){
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
gsap.set(items,{autoAlpha:0})
gsap.set(items[0],{autoAlpha:1})

ScrollTrigger.create({
  trigger:'.aboutus-top__contents',
  start:'top top',
  end: 'bottom top',
  scrub: true,
  pin:true,
  onUpdate:(self)=>{
    let newIndex = Math.floor(self.progress * items.length);

    if(index != newIndex && newIndex != items.length){
      let currentItem = items[newIndex];
      let contents = items[newIndex].querySelectorAll('.aboutus-top__text > * ');
      let img = currentItem.querySelector('.aboutus-top__img img');

      // 全て非表示
      gsap.to(items,{autoAlpha:0});
      // 新しいアイテムを表示
      gsap.to(currentItem,{autoAlpha:1});

      // テキストはふわっとだす
      gsap.fromTo(contents,
        {autoAlpha:0,y:20},
        {autoAlpha:1,y:0,stagger:.1, duration: 1, ease: "power2.out"}
      );

       // 画像はスクロールに連動してふわっと上に上がりながら透明に
       gsap.fromTo(img,
        {y: 100, opacity: 0 },
        {y: 0, opacity: 1, duration: 2, ease:"power1.inOut"}
       );
      index = newIndex;
    }
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const splide = new Splide(".factory-slide01", {
    autoplay: true, 
    type: "loop",
    interval: 3000,
    speed: 5000,
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
    interval: 3000,
    speed: 5000,
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
    interval: 3000,
    speed: 5000,
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
    interval: 3000,
    speed: 5000,
    perPage: 3,
    focus: 0,
    arrow : false,
  });

  splide.mount();
});
document.addEventListener('DOMContentLoaded', function () {
  const options = {
    type: "loop", // ループさせる
    arrows: false, // 矢印ボタンを非表示
    pagination: false, // ページネーションを非表示
    drag: "free", // フリードラッグモード
    gap: 20, // スライド間の余白
    perPage: 3, // 表示するスライドの枚数
    breakpoints: {
      500: {
        perPage: 1, // 画面幅500px未満で表示枚数1枚
        gap: 0, // 画面幅500px未満でスライド間の余白0
      },
    },
    autoScroll: {
      speed: 0.5, // スクロール速度
      pauseOnHover: false, // カーソルが乗ってもスクロールを停止させない
    },
  };
  const splide = new Splide(".loop-slider", options);
  splide.mount(window.splide.Extensions);
});

// タブ切り替え
document.addEventListener('DOMContentLoaded', function() {
  const tabItems = document.querySelectorAll('.tab-menu__item');
  const tabContents = document.querySelectorAll('.tab-contents__item');

  tabItems.forEach((tab, index) => {
    tab.addEventListener('click', function() {
      // 全てのタブからactiveクラスを削除
      tabItems.forEach(item => item.classList.remove('js-tab-active'));
      // 押されたタブだけにactiveクラスを追加
      this.classList.add('js-tab-active');

      // 全てのコンテンツを非表示に
      tabContents.forEach(content => content.style.display = 'none');
      // 対応するコンテンツだけ表示
      tabContents[index].style.display = 'block';
    });
  });

  // 初期表示（最初のタブだけ表示）
  tabContents.forEach((content, index) => {
    content.style.display = index === 0 ? 'block' : 'none';
  });
});




