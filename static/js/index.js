//window.onloadを使い、htmlが読み込みされてからスクリプトを動作させる。
var canvas
var canvasSize = 0.95;
var board

var canvasHeight = window.innerHeight* canvasSize;
var canvasWidth = window.innerWidth * 0.7;
//canvas init setting or resize setting~~~~~~~~~~~~~~

window.onload = function(){ 
    board = M5stack
    canvas_init();
    fineTuningInit()
    canvas.add(board);
    canvas.renderAll();

    // used for grids

}
window.addEventListener( 'resize', resizeCanvas, false);


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function canvas_init(){
    canvas = new fabric.Canvas('test_canvas');
    canvas.setHeight(canvasHeight);
    canvas.setWidth(canvasWidth);
    canvas.renderAll();


    document.addEventListener("mousewheel", function(e) {
        if (e.target.className == "upper-canvas ") {
          var zoom = (event.deltaY > 0 ? -0.1 : 0.1) + canvas.getZoom();
          zoom = Math.max(0.1, zoom); //最小为原来的1/10
          zoom = Math.min(10, zoom); //最大是原来的3倍
          var zoomPoint = new fabric.Point(event.pageX, event.pageY);
          canvas.zoomToPoint(zoomPoint, zoom);
        }
      });
}

function resizeCanvas() {
    console.log("resized")
    canvas.setHeight(window.innerWidth*canvasSize);
    canvas.setWidth(window.innerWidth);
    canvas.renderAll();
  }


