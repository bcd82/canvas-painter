'use strict'

const onInit = () => {
    canvasInit()
}

const onChangeShape = (value) => {
    setShape(value)
}
const onChangeClr = (value) => {
    setColor(value)
}


const addListeners = () => {
    addMouseListeners()
    // addTouchListeners()
    window.addEventListener('resize', () => {
        resizeCanvas()
        renderCanvas()
    })
}
const addMouseListeners = () => {
    gElCanvas.addEventListener('mousemove', onMove)
    gElCanvas.addEventListener('mousedown', onDown)
    gElCanvas.addEventListener('mouseup', onUp)
}

// const addTouchListeners = () => {
//     gElCanvas.addEventListener('touchmove', onMove)
//     gElCanvas.addEventListener('touchstart', onDown)
//     gElCanvas.addEventListener('touchend', onUp)
// }

function getEvPos(ev) {
    var pos = {
        x: ev.offsetX,
        y: ev.offsetY
    }
    // if (gTouchEvs.includes(ev.type)) {
    //     ev.preventDefault()
    //     ev = ev.changedTouches[0]
    //     pos = {
    //         x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
    //         y: ev.pageY - ev.target.offsetTop - ev.target.clientTop
    //     }
    // }
    return pos
}

const onDown = (ev) => {
    const pos = getEvPos(ev);
    console.log('down')
    gStartPos = pos;
    setIsPaint(true)
    document.body.style.cursor = 'paint'

}
const onMove = (ev) => {
    if(!gIsPaint) return;
    console.log('move')

}

function onUp() {
    setIsPaint(false)
    console.log('up')

}