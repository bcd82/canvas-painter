'use strict'

let gElCanvas;
let gCtx;
let gIsPaint;
let gIsStrokeOn = false;
let gIsFillOn = true;
let gStartPos;
let gCurShape = 'circle';
let gCurColor = 'black';
let gCurStrokeClr = 'black'
let gCurStrokeSize = 2
let gCurSize = 25;


const canvasInit = () => {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    resizeCanvas()
    addListeners()
}

const resizeCanvas = () => {
    const elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.offsetWidth
    gElCanvas.height = elContainer.offsetHeight
}


const setIsPaint = isPaint => {
    gIsPaint = isPaint;
}
const setShape = shape => {
    gCurShape = shape;
}
const setColor = color => {
    gCurColor = color;
}
const setStrokeColor = color => {
    gCurStrokeClr = color;
}
const setStrokeSize = size => {
    gCurStrokeSize = size;
}
const setSize = size => {
    gCurSize = size;
}
const toggleStroke = () => {
    gIsStrokeOn = !gIsStrokeOn;
}
const toggleFill= () => {
    gIsFillOn = !gIsFillOn;
}


const draw = ({
    x,
    y
}) => {
    switch (gCurShape) {
        case 'circle':
            drawArc(x, y)
            break;

        case 'rect':
            drawRect(x, y)
            break;

        case 'triangle':
            drawTriangle(x, y)
            break;
        case 'free-rect':
            drawFreeRect(x, y)
            break;

        default:
            break;
    }

}

function clearCanvas() {
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
    // You may clear part of the canvas
    // gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height/4)
}

const downloadCanvas = elLink => {
    const data = gElCanvas.toDataURL()
    elLink.href = data
}


function loadImageFromInput(ev, onImageReady) {
    var reader = new FileReader()

    reader.onload =  (event) => {
        var img = new Image()
        img.onload = onImageReady.bind(null, img)
        img.src = event.target.result
    }
    reader.readAsDataURL(ev.target.files[0])
}

const renderImg = img => {
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
}
const setStartPos = (pos) => { 
    gStartPos = pos
}