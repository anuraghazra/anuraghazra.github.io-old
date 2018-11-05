/**
 * @name BooYa.js
 * @author <hazru.anurag@gmail.com>
 * @version 1.0.0
 */
function BooYa() {
  this.doms = document.querySelectorAll('[data-booya]');

  this.config = {
    animation: 'zoomIn',
    type: 'onLoad',
    childs : true,
    delay: 0,
  }

  for (let i = 0; i < this.doms.length; i++) {
    this.config.animation = this.doms[i].getAttribute('data-booya');
    this.config.type = (this.doms[i].getAttribute('data-type') || 'onLoad');
    this.config.childs = this.doms[i].getAttribute('data-childs');
    
    switch(this.config.type) {
      case 'onView' : 
        this.whenInView(this.doms[i], this.config.childs);
        break;
      case 'onLoad' :
        this.startAnimation(this.doms[i], this.config.childs);
        break;
    }
    
  }
}

BooYa.prototype.addAnimate = function (elm, data) {
  if (elm.className.match('animated')) return;
  let ani = data || elm.getAttribute('data-booya');
  elm.classList.add('animated');
  elm.classList.add(ani);
}

BooYa.prototype.isInView = function(elm) {
  var top = elm.getBoundingClientRect().top;
  if (top - window.innerHeight <= 0) {
    return true;
  }
  return false;
}

BooYa.prototype.startAnimation = function(elm, childs, ani) {
  let booya = elm.getAttribute('data-booya');
  if ( !booya ) booya = ani;
  if ( !booya ) return;

  if (childs === 'true') {
    for (let i = 0; i < elm.children.length; i++) {
      elm.children[i].classList.add('delay-' + i + 's');
      this.addAnimate(elm.children[i], booya);
    }
  } else {
    this.addAnimate(elm, booya);
    console.log(elm)
  }
}

BooYa.prototype.whenInView = function (elm, childs) {
  let that = this;

  function checkPos() {
    if (that.isInView(elm)) {
      that.startAnimation(elm, childs);
    }
  }
  checkPos();
  window.addEventListener('scroll', checkPos);
}

BooYa.prototype.add = function(elm, ani, isGroup) {
  let elms = document.querySelectorAll(elm);
  let that = this;
  function checkPos() {
    for (let i = 0; i < elms.length; i++) {
      if (that.isInView(elms[i])) {
        that.startAnimation(elms[i], isGroup && (isGroup).toString(), ani);
      }
    }
  }
  checkPos();
  window.addEventListener('scroll', checkPos);
}