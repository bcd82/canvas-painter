'use strict'
let gElCanvas;
let gCtx;
let gStartPos;
let gCurShape = 'circle'; 


const canvasInit = () => {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    resizeCanvas()
    renderCanvas()
    console.log('am i working')

}

const resizeCanvas = () => {
    const elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.offsetWidth
    gElCanvas.height = elContainer.offsetHeight
}

const renderCanvas = () => {

}
const setShape =(shape) => {
    gCurShape = shape;
}