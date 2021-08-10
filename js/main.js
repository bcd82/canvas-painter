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
    addTouchListeners()
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
}

const onImgInput = ev => {
    loadImageFromInput(ev, renderImg)
}

const onShowToolbar = (elBtn) => {
    let elBody = document.querySelector('body')
    elBody.classList.toggle('menu-mobile-open')
    if (elBody.classList.contains('menu-mobile-open')) elBtn.innerText = 'close'
    else elBtn.innerText = 'menu'
}

const onUploadImg = () => {
    const imgDataUrl = gElCanvas.toDataURL("image/jpeg");

    // A function to be called if request succeeds
    function onSuccess(uploadedImgUrl) {
        const encodedUploadedImgUrl = encodeURIComponent(uploadedImgUrl)
        document.querySelector('.user-msg').innerHTML = `<p>Your photo is available <a href="${uploadedImgUrl}">here</a></p>`

        document.querySelector('.share-container').innerHTML = `
        <a class="btn" href="https://www.facebook.com/sharer/sharer.php?u=${encodedUploadedImgUrl}&t=${encodedUploadedImgUrl}" title="Share on Facebook" target="_blank" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}'); return false;">
           Share   
        </a>`
    }
    doUploadImg(imgDataUrl, onSuccess);
}