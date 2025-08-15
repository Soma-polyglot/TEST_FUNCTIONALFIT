$(function () {

  var touch = ('ontouchstart' in document) ? 'touchstart' : 'click';

  //モバイル判定
  var breakPoint = 980;
  var isMobile = function () {
    return !Modernizr.mq('only screen and (min-width: ' + breakPoint + 'px)');
  };

  //ページ内リンクのスクロール処理
  (function () {
    $(document).on(touch, 'a[href^="#"]', function (e) {
      var $self = $(this);
      var $target = $($self.attr('href'));
      var dist = 0;

      e.preventDefault();

      if ($target.length > 0) {
        dist = $target.offset().top;
      }

      if (isMobile()) {
        dist -= 90;
      } else {
        dist -= 20;
      }

      dist = dist < 0 ? 0 : dist;

      $('html, body').animate({
        scrollTop: dist
      }, function () {
        $('body').removeClass('drawer');
      });
    });
  }());

  //ドロワーメニューの開閉
  (function () {
    var $body = $('body');
    var $btn = $('header[role="banner"] .btn-drawer');

    $btn.on(touch, function (e) {
      $body.toggleClass('drawer');
      e.preventDefault();
    });
  }());

  //PCレイアウト＆横スクロール時のサイドバー固定処理
  (function () {
    var setPosition = function () {
      var $header = $('header[role="banner"]');
      var $nav = $('nav');
      var scrollLeft = $(window).scrollLeft();
      var dest = scrollLeft * -1;

      if (scrollLeft === 0 || isMobile()) {
        $header.css('left', '');
        $nav.css('left', '');
        return;
      }

      $header.css('left', dest);
      $nav.css('left', dest);
    };

    setPosition();

    $(window).scroll(function () {
      setPosition();
    });

    $(window).resize(function () {
      setPosition();
    });
  }());

  //bxSliderの適用
//  (function () {
//    var $container = $('#slide-container');
//    var $ul = $container.find('ul');
//    var $li = $ul.find('li');
//    var mobile = isMobile();
//    var slider = null;
//    var optPc = {};
//    var optSp = {};
//    var onSliderLoad = function () {
//      $container.removeClass('loading');
//    };
//
//    var setSlider = function () {
//      var opt = mobile ? optSp : optPc;
//
//      //PC SP共通プロパティの設定
//      opt.onSliderLoad = onSliderLoad;
//      opt.auto = true;
//      opt.autoHover = true;
//
//      //スライダが１枚しかない場合
//      if ($li.length === 1) {
//        opt.controls = false;
//        opt.auto = false;
//        opt.pager = false;
//        opt.touchEnabled = false;
//      }
//
//      if (slider !== null) {
//        slider.destroySlider();
//      }
//
//      $li.each(function () {
//        var $self = $(this);
//        var src = mobile ? $self.data('sp') : $self.data('pc');
//
//        $self.css('background-image', 'url(images/slides/' + src + ')');
//      });
//
//      slider = $ul.bxSlider(opt);
//    };
//
//    setSlider();
//
//    $(window).resize(function () {
//      var current = isMobile();
//
//      if (mobile !== current) {
//        mobile = current;
//        setSlider();
//      }
//    });
//  }());

  //Google Map レンダリング
//  (function () {
//    if ($('body.home').length === 0) {
//        return;
//    }
//
//    var elemId = 'map-container';
//    var centerPosition = new google.maps.LatLng(35.5275956,140.1790522);
//    var option = {
//          zoom: 17,
//          center: centerPosition,
//          myTypeId: google.maps.MapTypeId.ROADMAP,
//          scrollwheel: false
//        };
//    var map = new google.maps.Map(document.getElementById(elemId), option);
//    var marker = new google.maps.Marker({
//          position: centerPosition,
//          map: map
//        });
//  }());

});
