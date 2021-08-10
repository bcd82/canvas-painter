'use strict'

let gElCanvas;
let gCtx;
let gIsPaint;
let gCurShape = 'circle';
let gCurColor = 'black';
let gCurSize = 25;


const canvasInit = () => {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    resizeCanvas()
    renderCanvas()
    addListeners()
}

const resizeCanvas = () => {
    const elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.offsetWidth
    gElCanvas.height = elContainer.offsetHeight
}

const renderCanvas = () => {
    // gCtx.fillStyle = "rgba(242, 245, 216, 0.336)"
    // gCtx.fillRect(0, 0, gElCanvas.width, gElCanvas.height)
    gCtx.restore()
}


const setIsPaint = (isPaint) => {
    gIsPaint = isPaint;
}
const setShape = (shape) => {
    gCurShape = shape;
}
const setColor = (color) => {
    gCurColor = color;
}
const setSize = (size) => {
    gCurSize = size;
}


const draw = ({
    x,
    y
}) => {
    switch (gCurShape) {
        case 'circle':
            drawArc(x, y)
            console.log('draw arc')
            break;

        case 'rect':
            drawRect(x, y)
            console.log('draw rect')
            break;
       
        case 'rect':
            drawTriangle(x, y)
            console.log('draw rect')
            break;

        default:
            break;
    }
    gCtx.save()

}

function clearCanvas() {
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
    // You may clear part of the canvas
    // gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height/4)
}