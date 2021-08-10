'use strict'

const drawRect = (x, y) => {
    gCtx.beginPath()
    gCtx.rect(x - (gCurSize / 2), y - (gCurSize / 2), gCurSize, gCurSize)
    if (gIsFillOn) {
        gCtx.fillStyle = gCurColor;
        gCtx.fillRect(x - (gCurSize / 2), y - (gCurSize / 2), gCurSize, gCurSize)
    }
    stroke()

}
const drawFreeRect = (x, y) => {
    console.log(gStartPos, x, y)
    gCtx.beginPath()
    gCtx.rect(gStartPos.x, gStartPos.y, x - gStartPos.x, y - gStartPos.y)
    if (gIsFillOn) {
        gCtx.fillStyle = gCurColor;
        gCtx.fillRect(gStartPos.x, gStartPos.y, x - gStartPos.x, y - gStartPos.y)
    }
    stroke()

}

const drawArc = (x, y) => {
    gCtx.beginPath()
    gCtx.lineWidth = 0
    gCtx.arc(x, y, gCurSize, 0, 2 * Math.PI);
    if (gIsFillOn) {
        gCtx.fillStyle = gCurColor;
        gCtx.fill()
    }

    stroke()
}

const drawTriangle = (x, y) => {
    gCtx.beginPath()
    gCtx.lineWidth = 2
    gCtx.moveTo(x, y - (gCurSize / 2))
    gCtx.lineTo(x + (gCurSize / 2), y + (gCurSize / 2))
    gCtx.lineTo(x - (gCurSize / 2), y + (gCurSize / 2))
    gCtx.closePath()
    if(gIsFillOn){
        gCtx.fillStyle = gCurColor
        gCtx.fill()
    }
    stroke()
}

const stroke = () => {
    if (gIsStrokeOn) {
        gCtx.lineWidth = gCurStrokeSize;
        gCtx.strokeStyle = gCurStrokeClr;
        gCtx.stroke()
    }
}