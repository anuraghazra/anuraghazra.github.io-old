let data = [
  {
    titile : '10PrintLine',
    demo : 'https://anuraghazra.github.io/CanvasFun/10PrintLine',
    src : 'https://github.com/anuraghazra/CanvasFun/tree/master/10PrintLine',
    img : './assets/img/10printline_400x400-min.png',
  },
  {
    titile : 'ChaosGame',
    demo : 'https://anuraghazra.github.io/CanvasFun/ChaosGame',
    src : 'https://github.com/anuraghazra/CanvasFun/tree/master/ChaosGame',
    img : './assets/img/chaosgame_400x400-min.png',
  },
  {
    titile : 'CirclePattern',
    demo : 'https://anuraghazra.github.io/CanvasFun/circlePattern',
    src : 'https://github.com/anuraghazra/CanvasFun/tree/master/circlePattern',
    img : './assets/img/circlepattern-min.png',
  },
  {
    titile : 'Fireworks',
    demo : 'https://anuraghazra.github.io/CanvasFun/fireworks',
    src : 'https://github.com/anuraghazra/CanvasFun/tree/master/fireworks',
    img : './assets/img/fireworks_400x400-min.png',
  },
  {
    titile : 'FractalTree',
    demo : 'https://anuraghazra.github.io/CanvasFun/fractalTree',
    src : 'https://github.com/anuraghazra/CanvasFun/tree/master/fractalTree',
    img : './assets/img/frataltree_400x400-min.png',
  },
  {
    titile : 'Isometric3D',
    demo : 'https://anuraghazra.github.io/CanvasFun/isometric3D',
    src : 'https://github.com/anuraghazra/CanvasFun/tree/master/isometric3D',
    img : './assets/img/isometric3d_400x400-min.png',
  },
  {
    titile : 'particleShift',
    demo : 'https://anuraghazra.github.io/CanvasFun/particleShift',
    src : 'https://github.com/anuraghazra/CanvasFun/tree/master/particleShift',
    img : './assets/img/particleshift_400x400-min.png',
  },
  {
    titile : 'particleSystem',
    demo : 'https://anuraghazra.github.io/CanvasFun/particleSystem',
    src : 'https://github.com/anuraghazra/CanvasFun/tree/master/particleSystem',
    img : './assets/img/particlesystem_400x400-min.png',
  },
  {
    titile : 'phyllotaxis',
    demo : 'https://anuraghazra.github.io/CanvasFun/phyllotaxis',
    src : 'https://github.com/anuraghazra/CanvasFun/tree/master/phyllotaxis',
    img : './assets/img/phyllotaxis_400x400-min.gif',
  },
  {
    titile : 'smartRockets',
    demo : 'https://anuraghazra.github.io/CanvasFun/smartRockets',
    src : 'https://github.com/anuraghazra/CanvasFun/tree/master/smartRockets',
    img : './assets/img/smartrockets400x400-min.png',
  },
  {
    titile : 'snowFlake',
    demo : 'https://anuraghazra.github.io/CanvasFun/snowFlake',
    src : 'https://github.com/anuraghazra/CanvasFun/tree/master/snowFlake',
    img : './assets/img/snowflake_400x400-min.png',
  },
  {
    titile : 'TextParticles',
    demo : 'https://anuraghazra.github.io/CanvasFun/TextParticles',
    src : 'https://github.com/anuraghazra/CanvasFun/tree/master/TextParticles',
    img : './assets/img/imageParticle_400x400-min.png',
  },
];
let fwc_cards = document.getElementById('fwc_cards');
let temp = data.map((i, index) => {
  return `
  <li class="cards__item">
  <div class="card__body">
    <div class="card__image">
      <img data-src="${i.img}" alt="">
    </div>
    <div class="card__content">
      <div class="card__title">${i.titile}</div>
      <div class="card__links">
        <a class="btn btn-block card__btn" href="${i.demo}" target="_blank">
          <i class="fa fa-2x fa-window-maximize"></i><span>Live Demo</span>
        </a>
        <a class="btn btn-block card__btn" href="${i.src}"
          target="_blank">
          <i class="fab fa-2x fa-github"></i><span>Source Code</span>
        </a>
      </div>
    </div>
  </div>
</li>
`
});
fwc_cards.innerHTML = temp.join('');