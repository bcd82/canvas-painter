'use strict'
const createCircle = {

}

const getShape = () => { 
    let shape;
    if (gCurShape === 'circle') {
        shape = createCircle()
    } else if ( gCurShape === 'rect') { 
        shape = createRect()
    }
    return shape;
}