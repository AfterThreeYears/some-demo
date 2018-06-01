const utils = {
  getRotate: function getRotate(el) {
    const transformStr = el.style.transform;
    const result = transformStr.match(/\d+/g);
    if (!result) return {rotateX: 0, rotateY: 0};
    return {
      rotateX: result[0],
      rotateY: result[1],
    };
  },
  //随机生成十六进制颜色
  randomHexColor: function randomHexColor() {
    return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).substr(-6);
  },
  getX: function getX(r, radian, x0) {
    // 根据公式
    // r 半径
    // radian 弧度
    // x0 初始x位置
    // x1 结果x位置
    // x1 = x0 + r * Math.sin(radian * Math.PI / 180);
    return x0 + r * Math.sin(radian * Math.PI / 180);
  },
  getY: function getY(r, radian, y0) {
    // 根据公式
    // r 半径
    // radian 弧度
    // y0 初始y位置
    // y1 结果y位置
    // y1 = y0 + r * Math.cos(radian * Math.PI / 180);
    return y0 + r * Math.cos(radian * Math.PI / 180);
  },
  createDiv: function createDiv({
    width,
    height,
    left,
    top,
    className,
    backgroundColor,
  }) {
    const div = document.createElement('div');
    div.style.width = `${width}px`;
    div.style.height = `${height}px`;
    if (typeof left !== 'undefined') div.style.left = `${left}px`;
    if (typeof top !== 'undefined') div.style.top = `${top}px`;
    div.style.backgroundColor = backgroundColor;
    div.classList.add(className);
    return div;
  },
}