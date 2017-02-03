 function tableDraw(ctx,screenWidth, borderColor, lineColor1, lineColor2,divideX,divideY,arry1,arry2) {
     ctx.setStrokeStyle(borderColor)
     ctx.strokeRect(0, 20, screenWidth, 120)
     ctx.setFontSize(8)
     let xInit=screenWidth/divideX;
     let yDivide=120/divideY;
     let textX=divideX>2?(screenWidth-25):(screenWidth+10);
     for (let i = 0; i < divideY; i++) {
         ctx.moveTo(0,20+ yDivide * i)
         ctx.lineTo(screenWidth, 20+ yDivide * i)
         ctx.fillText(yDivide * i + '%', textX, 20+yDivide * i + 8)

     }
     for (let j = 1; j < divideX; j++) {
         ctx.moveTo(xInit * j, 20)
         ctx.lineTo(xInit * j, 140)
     }
     ctx.stroke()
         // 绘制走势线条
     ctx.beginPath()
     ctx.setStrokeStyle(lineColor1)
     ctx.moveTo(0, 120)
     for (let i = 0; i < arry1.length; i++) {
     ctx.lineTo(arry1[i].x, arry1[i].y)
     }
     
     ctx.stroke()
     ctx.beginPath()
     ctx.setStrokeStyle(lineColor2)
     ctx.moveTo(0, 100)
     for (let i = 0; i < arry2.length; i++) {
     ctx.lineTo(arry2[i].x, arry2[i].y)
     }
     ctx.stroke()
         // 绘制例样
     ctx.beginPath()
     ctx.setFillStyle(lineColor1)
     ctx.fillRect(20, 5, 10, 10)
     ctx.beginPath()
     ctx.beginPath()
     ctx.setFillStyle(lineColor2)
     ctx.fillRect(80, 5, 10, 10)
     ctx.beginPath()
     ctx.setFillStyle(borderColor)
     ctx.fillText('沪深300', 35, 14)
     ctx.fillText('沪深300', 95, 14)
         // 时间
     ctx.beginPath()
     ctx.setFillStyle(borderColor)
     ctx.fillText('2015-01-01', 5, 150)
     ctx.fillText('2017-01-01', screenWidth-65, 150)

     ctx.draw()
 }


 function trigonDraw(ctx) {
     ctx.setStrokeStyle('#cccccc')
     ctx.setFontSize(8)
     ctx.setFillStyle('#666666')
     let height = 0;
     for (var i = 1; i < 6; i++) {
         let height = 10 * i;
         let lineToX = height * Math.sin(Math.PI / 3)
         ctx.moveTo(100, 70 - height)
         ctx.lineTo(100 - lineToX, 70 + height * 0.5)
         ctx.lineTo(100 + lineToX, 70 + height * 0.5)
         ctx.lineTo(100, 70 - height)
         ctx.fillText(height, 85, 75 - height)
     }
     ctx.moveTo(100, 70)
     ctx.lineTo(100, 20)
     ctx.moveTo(100, 70)
     ctx.lineTo(100 - 50 * Math.sin(Math.PI / 3), 95)
     ctx.moveTo(100, 70)
     ctx.lineTo(100 + 50 * Math.sin(Math.PI / 3), 95)
     ctx.stroke()
     ctx.beginPath()
     ctx.setFillStyle('#666666')
     ctx.fillText('财来啊一号', 5, 10)
     ctx.fillText('财来啊二号', 5, 30)
     ctx.fillText('月收益率', 90, 15)
     ctx.fillText('胜率', 40, 110)
     ctx.fillText('最大回测率', 140, 110)
     ctx.beginPath()
     ctx.setStrokeStyle('red')
     ctx.moveTo(5, 15)
     ctx.lineTo(15, 15)
     ctx.stroke()
     ctx.beginPath()
     ctx.setStrokeStyle('green')
     ctx.moveTo(5, 35)
     ctx.lineTo(15, 35)
     ctx.stroke()
     ctx.draw()
 }


 module.exports.tableDraw = tableDraw
exports.trigonDraw=trigonDraw