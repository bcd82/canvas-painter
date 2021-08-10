'use strict'

const drawRect = (x, y) => {
    gCtx.beginPath()
    gCtx.fillStyle = gCurColor;
    gCtx.fillRect(x - (gCurSize /2), y - (gCurSize /2), gCurSize, gCurSize)

}

const drawArc = (x, y) => {
    gCtx.beginPath()
    gCtx.lineWidth = 0
    gCtx.arc(x, y, gCurSize, 0, 2 * Math.PI);
    gCtx.fillStyle = gCurColor;
    gCtx.fill()
}

const drawTriangle = (x,y) => { 
        gCtx.beginPath()
        gCtx.lineWidth = 2
        gCtx.moveTo(x, y)
        gCtx.lineTo(130, 330)
        gCtx.lineTo(50, 370)
        gCtx.closePath() 
        // gCtx.lineTo(x, y)
        gCtx.fillStyle = 'purple'
        gCtx.fill()
}