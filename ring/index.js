function circleMove({ el, r, radian = 0, width }) {
  const halfBallWidth = width / 2;
  // 注意： x0 等于大球的中心 而不是页面的中心，所以是 大球宽度 / 2 = 大球半径 = r
  // x = utils.getX(r, radian, (大球宽度 / 2 = 大球半径 = r)) - 小球半径,
  // y = utils.getY(r, radian, (大球宽度 / 2 = 大球半径 = r)) - 小球半径,
  let x = utils.getX(r, radian, r) - halfBallWidth;
  let y = utils.getY(r, radian, r) - halfBallWidth;
  let timer = setInterval(() => {
    radian = radian + 1;
    x = utils.getX(r, radian, r) - halfBallWidth;
    y = utils.getY(r, radian, r) - halfBallWidth;
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
  }, 16);
}

function create() {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  const arr = [
    {
      // 半径是圆环（circle）宽高的一半，这里只关心整圆
      r: 200,
      // 圆环的width
      circleWidth: 400,
      // 圆环的height
      circleHeight: 400,
      // 圆环位置 居中
      circleLeft: Math.abs(centerX - 400 / 2),
      circleTop: Math.abs(centerY - 400 / 2),
      // 小球的宽高
      ballWidth: 40,
      ballHeight: 40,
      // 初始的弧度
      radian: 100,
    },
    {
      r: 50,
      circleWidth: 100,
      circleHeight: 100,
      circleLeft: Math.abs(centerX - 100 / 2),
      circleTop: Math.abs(centerY - 100 / 2),
      ballWidth: 20,
      ballHeight: 20,
      radian: 180,
    },
    {
      r: 100,
      circleWidth: 200,
      circleHeight: 200,
      circleLeft: Math.abs(centerX - 200 / 2),
      circleTop: Math.abs(centerY - 200 / 2),
      ballWidth: 50,
      ballHeight: 50,
      radian: 66,
    },
    {
      r: 150,
      circleWidth: 300,
      circleHeight: 300,
      circleLeft: Math.abs(centerX - 300 / 2),
      circleTop: Math.abs(centerY - 300 / 2),
      ballWidth: 40,
      ballHeight: 40,
      radian: 180,
    }
  ];

  arr.forEach(({
    r,
    circleWidth,
    circleHeight,
    circleLeft,
    circleTop,
    ballWidth,
    ballHeight,
    radian,
  }) => {
    const circleDiv = utils.createDiv({
      width: circleWidth,
      height: circleHeight,
      left: circleLeft,
      top: circleTop,
      className: 'circle',
    });
    const ballDiv = utils.createDiv({
      width: ballWidth,
      height: ballHeight,
      className: 'ball',
      backgroundColor: utils.randomHexColor(),
    });
    circleDiv.appendChild(ballDiv);
    app.appendChild(circleDiv);
    circleMove({
      el: ballDiv,
      r,
      radian,
      width: ballWidth,
    });
  });
}

function bindEvent() {
  addEventListener('mousedown', handleMousedown);
  addEventListener('mousemove', handleMousemove);
  addEventListener('mouseup', handleMouseup);
  
  let isHit;
  let startX;
  let startY;
  let rotateX = 0;
  let rotateY = 0;
  function handleMousedown(e) {
    isHit = true;
    startX = e.x;
    startY = e.y;
    rotateX = Number(utils.getRotate(app).rotateX);
    rotateY = Number(utils.getRotate(app).rotateY);
  }
  
  function handleMousemove(e) {
    if (!isHit) return;
    const x = e.x - startX + rotateY;
    const y = e.y - startY + rotateX;
    app.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
  }
  
  function handleMouseup() {
    isHit = false;
  }
}

create();
bindEvent();
