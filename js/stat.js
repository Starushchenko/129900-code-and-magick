'use strict';

var drawCloud = function (ctx) {
  ctx.fillStyle = 'rgba(0,0,0,0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = 'white';
  ctx.fillRect(100, 10, 420, 270);
};

var drawText = function (ctx) {
  ctx.font = '16px PT Mono';
  ctx.fillStyle = 'black';
  ctx.fillText('Ура, вы победили!', 230, 30);
  ctx.fillText('Список результатов:', 222, 50);
};

var calcMaxTime = function (times) {
  return Math.max.apply(Math, times);
};

var randomOpacity = function (min, max) {
  return Math.random() * (max - min) + min;
};

var drawHistogramBar = function (ctx, names, times) {
  var histogramHeight = 150;
  var step = histogramHeight / (calcMaxTime(times) - 0);
  var barWidth = 40;
  var indent = 50;
  var initialX = 210;
  var initialY = 100;
  var nameInitialY = 20;
  var i;

  if (names[i] === 'Вы') {
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  } else {
    ctx.fillStyle = 'rgba(0, 0, 255,' + randomOpacity(0.1, 1) + ')';
  }
  ctx.fillText(Math.round(times[i]), initialX + indent * i, histogramHeight - times[i] * step + 75);
  ctx.fillRect(initialX + indent * i, histogramHeight - times[i] * step + initialY, barWidth, times[i] * step);
  ctx.fillText(names[i], initialX + indent * i, histogramHeight + initialY + nameInitialY);
};

window.renderStatistics = function (ctx, names, times) {

  drawCloud(ctx);
  drawText(ctx);

  for (var i = 0; i < times.length; i++) {
    drawHistogramBar(ctx, names, times);
  }
};
