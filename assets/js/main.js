$(document).ready(function () {
  
  // !
  // ! Navigation 
  // !

  $('.navigation').addClass('animated fadeInDown');

  // Mobile Nav
  $('.burger').click(function () {
    $('.nav-items').toggleClass('show-nav');
    $(this).toggleClass('animate-burger');
  });
  $('.nav-items li').click(function () {
    $('.nav-items').removeClass('show-nav');
    $('.burger').removeClass('animate-burger');
  });


  // Scrolly-fy links.
  var nav_items = $('.nav-items li a');
  $('.find-more').scrolly();


  // $('.parallax').scrolly({bgParallax: true});
  //<div class="parallax" data-velocity="-.3"></div>
  //<div class="parallax" data-velocity="-.1"></div>
  //<div class="parallax" data-velocity="-.5" data-fit="525"></div>

  nav_items.scrolly({ timingFunction: 'linear', speed: 800 }).on('click', function (e) {
    e.preventDefault();
    let t = $(this),
      href = t.attr('href');

    if (href[0] != '#') { return; }

    // Clear active and lock scrollzer until scrolling has stopped
    nav_items.removeClass('active');

    // Set this link to active
    t.addClass('active');
  });

  // Initialize scrollzer.
  let ids = [];
  nav_items.each(function () {
    let href = $(this).attr('href');
    if (href[0] != '#') { return; }
    ids.push(href.substring(1));
  });
  $.scrollzer(ids, { pad: 200, lastHack: true });


  // !
  // ! Animations 
  // !

  /**
   * @class Animate
   * @param {*} elm 
   * @param {*} className 
   * @param {*} offset 
   */
  function Animate(elm, className, offset) {
    this.element = document.querySelectorAll(elm);

    this.className = className;
    this.offset = offset;
    for (let i = 0; i < this.element.length; i++) {
      const e = this.element[i];
      e.classList.add('hidden');
    }
    return this;
  }
  Animate.prototype.addAnimate = function (elm) {
    var top = elm.getBoundingClientRect().top + this.offset;
    if (top - window.innerHeight <= 0) {
      elm.classList.add('animated');
      elm.classList.add(this.className);
      elm.classList.remove('hidden');
    }
  }
  Animate.prototype.run = function (isGroup, delay) {
    let that = this;
    function checkPos() {
      for (let i = 0; i < that.element.length; i++) {
        const e = that.element[i];
        if (isGroup) {
          e.classList.add('delay-' + i + 's');
        }
        if (delay !== undefined) {
          window.setTimeout(function () {
            that.addAnimate(e);
          }, delay)
        } else {
          that.addAnimate(e);
        }
      }
    }
    checkPos();
    window.addEventListener('scroll', checkPos);
  }

  new Animate('.intro-text', 'fadeInDown', 0).run();
  new Animate('.avatar.avatar-intro', 'zoomIn', 0).run();
  new Animate('.cards-container .card', 'zoomIn', 0).run(true);
  new Animate('.pgh-about-me', 'fadeInRight', 0).run();
  new Animate('.avatar.avatar-port', 'zoomIn', 0).run();

  new Animate('.funwithcanvas .fwc', 'zoomIn', 0).run(false, 500);
  new Animate('.cv-container', 'zoomIn', 0).run();



  let dynamicworks = document.getElementById('dynamic-load-works');
  let doneDynamic = false;
  $.getJSON('/assets/dynamic/works.json', function (data) {
    for (let i = 0; i < data.length; i++) {
      let pushl5 = '';
      let pulll7 = '';
      if (i % 2) { 
        pushl5 = 'push-l5'
        pulll7 = 'pull-l7';
      }
      dynamicworks.innerHTML += 
      `
      <figure class="row showcase">
        <section class="col l7 s12 ${pushl5}">
          <div class="browser-window">
            <div class="fake-nav">
              <i></i><i></i><i></i>
            </div>
            <img class="thumbnail" data-src="${data[i].links.image}" alt="${data[i].title}">
          </div>
        </section>

        <section class="col l5 s12 ${pulll7}">
          <div class="work-brief">
            <h2 class="sub-title">${data[i].title}</h2>
            <p class="pgh-work-info">${data[i].brief}</p>
            <div class="work-links-panel">
              <div class="panel-icons row">
                <a href="https://github.com/anuraghazra"><i class="col s4 fab fa-2x fa-github"></i></a>
                <a download href="${data[i].links.image}"><i class="col s4 fa fa-2x fa-download"></i></a>
                <a href="https://github.com/anuraghazra"><i class="col s4 fa fa-2x fa-share"></i></a>
              </div>
            </div>
          </div>
        </section>
      </figure>
      `
    }

    doneDynamic = true;
    new Animate('.showcase:nth-child(even)', 'fadeInRight', 0).run();
    new Animate('.showcase:nth-child(odd)', 'fadeInLeft', 0).run();
  });

  // !
  // ! Lazy Loading 
  // !
  // TODO : FIX LazzyLoading
  // LazzyLoading
  lazyLoadImg();
  function lazyLoadImg() {
    let imgs = document.querySelectorAll('img');
    let img = new Image();
    for (let i = 0; i < imgs.length; i++) {
      let mainsrc = imgs[i].getAttribute('data-src');
      if (mainsrc && img.src !== mainsrc) {
        imgs[i].classList.add('hidden');
      }

      // when image is in view
      if (inView(imgs[i])) {
        if (mainsrc && img.src !== mainsrc) {
          imgs[i].parentElement.classList.add('loading');
        }
        // window.setTimeout(function () {
        if (mainsrc) {
          img.src = mainsrc;
          img.onload = function () {
            imgs[i].setAttribute('src', img.src);
            imgs[i].removeAttribute('data-src');
            imgs[i].classList.remove('hidden');
            imgs[i].parentElement.classList.remove('loading');
          }
        }
        // }, 800);
      }
    }
  }


  lazyLoadIframe();
  function lazyLoadIframe() {
    let ifr = document.querySelectorAll('iframe');
    for (let i = 0; i < ifr.length; i++) {
      let frm = ifr[i];
      let mainsrc = frm.getAttribute('data-src');
      if (mainsrc) {
        frm.classList.add('hidden');
      }

      // when image is in view
      if (inView(frm)) {
        if (mainsrc) {
          frm.src = mainsrc;
          frm.setAttribute('src', mainsrc);
          frm.removeAttribute('data-src');
          frm.classList.remove('hidden');
          frm.onload = function () {
          }
        }
      }
    }
  }
  function inView(elm) {
    var rect = elm.getBoundingClientRect();

    return rect.bottom > 0 &&
      // rect.right > 0 &&
      // rect.left < (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */ &&
      rect.top < (window.innerHeight || document.documentElement.clientHeight) /* or $(window).height() */;
  }
  window.addEventListener('scroll', function () {
    lazyLoadImg();
    lazyLoadIframe();
  });
  window.addEventListener('resize', function () {
    lazyLoadImg();
    lazyLoadIframe();
  });


  // !
  // ! LightBox
  // !
  let overlay = document.querySelector('.overlay-preview');
  let overlayimg = document.querySelector('#overlay-preview-img');
  let close = document.querySelector('.close');
  let dynamic = document.getElementById('dynamic-load-works');

  let isDown = false;
  let offset = { x: 0, y: 0 };

  function startDrag(e) {
    isDown = true;
    offset.x = ((e.offsetX || e.touches[0].clientX) - getComputedStyle(overlayimg).left.replace(/(%|px)/, ''));
    offset.y = ((e.offsetY || e.touches[0].clientY) - getComputedStyle(overlayimg).top.replace(/(%|px)/, ''));
  }
  function moveDrag(e) {
    e.preventDefault();
    if (isDown) {
      overlayimg.style.left = ((e.offsetX || e.touches[0].clientX) - offset.x) / 1 + 'px';
      overlayimg.style.top = ((e.offsetY || e.touches[0].clientY) - offset.y) / 1 + 'px';
    }
  }
  overlay.addEventListener('mousedown', startDrag);
  overlay.addEventListener('mouseup', function (e) { isDown = false });
  overlay.addEventListener('mousemove', moveDrag);

  overlay.addEventListener('touchstart', startDrag);
  overlay.addEventListener('touchend', function (e) { isDown = false });
  overlay.addEventListener('touchmove', moveDrag);


  dynamic.addEventListener('click', function(e) {
    if (e.target.className.match('thumbnail')) { 
      overlay.classList.add('show');
      overlayimg.src = e.target.src;
    }
  })

  close.onclick = function () {
    overlay.classList.remove('show');
  }
  


  // zoom
  pinch();
  function pinch() {
    let zoomScale = 50;
    let pinchScale = null;
    let lastPinchScale = null;

    overlay.addEventListener('mousewheel', function (e) {
      e.preventDefault();
      if (e.wheelDeltaY > 0) {
        zoomScale += 5;
      } else if (e.wheelDeltaY < 0) {
        zoomScale -= 5;
      }
      overlayimg.style.width = zoomScale + '%'
    });

    overlay.addEventListener('touchmove', function (e) {
      if (e.touches.length !== 2) return;
      let p1x = e.touches[0].pageX;
      let p1y = e.touches[0].pageY;
      let p2x = e.touches[1].pageX;
      let p2y = e.touches[1].pageY;
  
      let x = (p2x - p1x);
      let y = (p2y - p1y);

      pinchScale = Math.sqrt(x * x + y * y);
      let diff = pinchScale - lastPinchScale;

      if (diff > 0) {
        zoomScale += 5;
      } else {
        zoomScale -= 5;
      }
  
      overlayimg.style.width = zoomScale + '%';
  
      lastPinchScale = pinchScale;
    });
  }
  


  // !
  // !Font Loading 
  // !
  
  
  // document.fonts.ready.then(function() {
  //   alert('ok')
  // })  
  function isFontLoaded(fonts, callback) {
    let loadedfonts = 0;
    for (let i = 0; i < fonts.length; i++) {
      let node = document.createElement('span');
      node.innerHTML = 'giItT1WQy@!-/#';
      node.style.fontFamily = 'san-serif';
      node.fontSize = '150px';
      node.style.position = 'absolute';
      node.style.left = '50%'
      node.style.top = '50%'
      node.fontVariant = 'normal';
      node.fontStyle = 'normal';
      node.fontWeight = 'normal';
      // node.style.letterSpacing = '0';
      node.style.visibility = 'hidden';
      document.body.appendChild(node);
      var off_width = node.offsetWidth;

      node.style.fontFamily = fonts[i];

      let timer;
      function checkFont() {
        if (node && node.offsetWidth !== off_width) {
          ++loadedfonts;
          if (loadedfonts == fonts.length) {
            callback(true);
            timer = window.clearInterval(timer);
          }
          node.parentNode.removeChild(node);
          node = null;
          return true;
        }
      }
      timer = window.setInterval(checkFont, 150);
    }
  }


  isFontLoaded(['Lobster'], function (e) {
    doneDynamic && document.querySelector('.pre-loading').classList.add('pre-loading__hide');
  });


  window.addEventListener('mousewheel', function (e) {
    let nav = document.querySelector('.navigation');
    if (e.deltaY >= 0) {
      nav.classList.add('shrink-nav');
    } else {
      nav.classList.remove('shrink-nav');
    }
  })

})