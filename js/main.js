'use strict'

const gTouchEvs = ['touchstart', 'touchmove', 'touchend']

const onInit = () => {
    canvasInit()
}

const onChangeShape = (value) => {
    setShape(value)
}

const onChangeClr = (value) => {
    setColor(value)
}
const onChangeStrokeClr = (value) => {
    setStrokeColor(value)
}

const onChangeSize = (value) => {
    setSize(value)
}
const onChangeStrokeSize = (value) => {
    setStrokeSize(value)
}

const onToggleStroke = () => {
    toggleStroke()
}
const onToggleFill = () => {
    toggleFill()
}

const onClearCanvas = () => {
    clearCanvas()
}

const addListeners = () => {
    addMouseListeners()

}
const addMouseListeners = () => {
    gElCanvas.addEventListener('mousemove', onMove)
    gElCanvas.addEventListener('mousedown', onDown)
    gElCanvas.addEventListener('mouseup', onUp)
}

const addTouchListeners = () => {
    gElCanvas.addEventListener('touchmove', onMove)
    gElCanvas.addEventListener('touchstart', onDown)
    gElCanvas.addEventListener('touchend', onUp)
}

function getEvPos(ev) {
    var pos = {
        x: ev.offsetX,
        y: ev.offsetY
    }
    if (gTouchEvs.includes(ev.type)) {
        ev.preventDefault()
        ev = ev.changedTouches[0]
        pos = {
            x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
            y: ev.pageY - ev.target.offsetTop - ev.target.clientTop
        }
    }
    return pos
}

const onDown = ev => {
    console.log(ev)
    const pos = getEvPos(ev);
    setStartPos(pos);
    setIsPaint(true)
    draw(pos)
}
const onMove = ev => {
    if (!gIsPaint) return;
    const pos = getEvPos(ev);
    draw(pos)
}

const onUp = () => {
    setIsPaint(false)
    gCtx.save()

}

const onImgInput = ev => {
    loadImageFromInput(ev, renderImg)
}