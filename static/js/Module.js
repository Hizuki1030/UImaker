var frameTop = 60;
var frameBottom = 80;
var frameRight = 40;
var frameLeft = 40;

var DisplayHeight = 240;
var DisplayWidth = 320;

var ButtonWidth = 70;
var ButtonHeight =40;

var ButtonLeft = 50;

var ButtontoDisplay = 20;


var ModuleDisplay = new fabric.Rect({
    width: DisplayWidth,
    height: DisplayHeight,
    fill:"#ffffff",
    left: frameLeft,
    top: frameTop,
    type:"background",
  })

const ModuleFalme = new fabric.Rect({
    width: DisplayWidth+frameLeft+frameRight,
    height: DisplayHeight + frameBottom +frameTop,
    fill : "black",
    left: 0,
    top: 0,
    rx: 15,
    ry: 15
  })

const ModuleButton1 = new fabric.Rect({
    width: ButtonWidth,
    height: ButtonHeight,
    fill : "gray",
    left: ButtonLeft+((DisplayWidth+frameLeft+frameRight-ButtonLeft*2-ButtonWidth)/2)*0,
    top: ButtontoDisplay+DisplayHeight+frameTop,
    rx: 3,
    ry: 3
  })

const ModuleButton2 = new fabric.Rect({
    width: ButtonWidth,
    height: ButtonHeight,
    fill : "gray",
    left: ButtonLeft+((DisplayWidth+frameLeft+frameRight-ButtonLeft*2-ButtonWidth)/2)*1,
    top: ButtontoDisplay+DisplayHeight+frameTop,
    rx: 3,
    ry: 3
  })

const ModuleButton3 = new fabric.Rect({
    width: ButtonWidth,
    height: ButtonHeight,
    fill : "gray",
    left: ButtonLeft+((DisplayWidth+frameLeft+frameRight-ButtonLeft*2-ButtonWidth)/2)*2,
    top: ButtontoDisplay+DisplayHeight+frameTop,
    rx: 3,
    ry: 3
  })


var M5stack = new fabric.Group([ModuleFalme , ModuleDisplay, ModuleButton1, ModuleButton2,ModuleButton3],{
  left: canvasWidth/2 - (DisplayWidth + frameRight + frameLeft)/2,
  top: canvasHeight/2 - (DisplayHeight/2 + frameTop) ,
  type:"frame",
})
M5stack.selectable = false;

var DisplayInitCoords = [ canvasWidth/2 - (DisplayWidth + frameRight + frameLeft)/2 + frameLeft ,canvasHeight/2 - (DisplayHeight/2)];