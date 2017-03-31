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

var drawHistogramBar = function (ctx, playerName, resultTime, timesCollection, index) {

  var histogramHeight = 150;
  var step = histogramHeight / (calcMaxTime(timesCollection) - 0);
  var indent = 50;
  var positionX = 210 + indent * index;
  var timePositionY = 220 - resultTime * step;
  var barPositionY = histogramHeight - resultTime * step + 100;
  var namePositionY = histogramHeight + 120;
  var barWidth = 40;
  var barHeight = resultTime * step;

  if (playerName === 'Вы') {
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  } else {
    ctx.fillStyle = 'rgba(0, 0, 255,' + randomOpacity(0.1, 1) + ')';
  }
  ctx.fillText(Math.round(resultTime), positionX, timePositionY);
  ctx.fillRect(positionX, barPositionY, barWidth, barHeight);
  ctx.fillText(playerName, positionX, namePositionY);
};

window.renderStatistics = function (ctx, names, times) {

  drawCloud(ctx);
  drawText(ctx);

  for (var i = 0; i < times.length; i++) {
    drawHistogramBar(ctx, names[i], times[i], times, i);
  }
};
