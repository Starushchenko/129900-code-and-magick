'use strict';
window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0,0,0,0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'white';
  ctx.fillRect(100, 10, 420, 270);

  ctx.font = '16px PT Mono';
  ctx.fillStyle = 'black';
  ctx.fillText('Ура, вы победили!', 230, 30);
  ctx.fillText('Список результатов:', 222, 50);

  var maxTime = -1;
  var maxIndex = -1;
  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > maxTime) {
      maxTime = time;
      maxIndex = i;
    }
  }

  var histogramHeight = 150;
  var step = histogramHeight / (maxTime - 0);
  var barWidth = 40;
  var indent = 50;
  var initialX = 210;
  var initialY = 100;
  var nameInitialY = 20;
  for (var i = 0; i < times.length; i++) {
    if (names[i] == "Вы") {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255,' + Math.random() + ')';
    }
    ctx.fillText(Math.round(times[i]), initialX + indent * i, histogramHeight - times[i] * step + 75);
    ctx.fillRect(initialX + indent * i, histogramHeight - times[i] * step + initialY, barWidth, times[i] * step);
    ctx.fillText(names[i], initialX + indent * i, histogramHeight + initialY + nameInitialY);
  }
}
