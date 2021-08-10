'use strict'

let gElCanvas;
let gCtx;
let gStartPos;
var gIsPaint;
let gCurShape = 'circle';
let gCurColor = 'black';


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
    gCtx.save()
    gCtx.fillStyle = "rgba(242, 245, 216, 0.336)"
    gCtx.fillRect(0, 0, gElCanvas.width, gElCanvas.height)
    gCtx.restore()
}

// getter / setters 
const setShape = (shape) => {
    if (!shape) return gCurShape;
    gCurShape = shape;
}
const setColor = (color) => {
    if (!color) return gCurColor;
    gCurColor = color;
}

const setIsPaint= (isPaint) => {
    gIsPaint = isPaint;
}