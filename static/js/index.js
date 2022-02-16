
var canvas;
var canvasSize = 1;
var board;

var canvasHeight = window.innerHeight* canvasSize;
var canvasWidth = window.innerWidth * 0.7;



window.onload = function(){ 
  //プロジェクトファイルの投稿処理
  (async () => {

    const { value: file } = await Swal.fire({
      title: 'プロジェクトファイルを選択してください。',
      input: 'file',
      showCancelButton: true,
      cancelButtonText : '新規プロジェクト'
    })
    addComponents(file);
    })();

    board = M5stack
    canvas_init();
    fineTuningInit()
    board.moveTo(0);
    canvas.add(board);
    canvas.renderAll();
}
window.addEventListener( 'resize', resizeCanvas, false);



function canvas_init(){
    canvas = new fabric.Canvas('test_canvas');
    canvas.setHeight(canvasHeight);
    canvas.setWidth(canvasWidth);
    canvas.renderAll();
    canvas.on('mouse:down' , setWindowParameter)


    document.addEventListener("mousewheel", function(e) {
        if (e.target.className == "upper-canvas ") {
          var zoom = (event.deltaY > 0 ? -0.1 : 0.1) + canvas.getZoom();
          zoom = Math.max(0.1, zoom); 
          zoom = Math.min(10, zoom); 
          var zoomPoint = new fabric.Point(event.pageX, event.pageY);
          canvas.zoomToPoint(zoomPoint, zoom);
        }
      });
}

fabric.Object.prototype.getZIndex = function() {
  return this.canvas.getObjects().indexOf(this);
}

fabric.Canvas.prototype.addToPosition = function(object,position) {
  this.add(object);
  while(object.getZIndex() > position) {
      this.sendBackwards(object);
  }
}

function resizeCanvas() {
    console.log("resized")
    canvas.setHeight(canvasHeight);
    canvas.setWidth(canvasWidth);
    canvas.renderAll();
  }

window.addEventListener("keydown", handleKeydown);

function handleKeydown(event){
  // キーコード(どのキーが押されたか)を取得
  var keyCode = event.keyCode;
  let isCtrl = event.ctrlKey;
  // 条件文で制御する\
    console.log(keyCode,"is pressed");
    if (keyCode == 67 && isCtrl){ //c
      Copy();
    }
    if (keyCode == 86  && isCtrl) { //v
      Paste();
    }
}