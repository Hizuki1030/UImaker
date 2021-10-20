function addRect(){
    let rect = new fabric.Rect({
        left: canvasWidth/2 - (DisplayWidth + frameRight + frameLeft)/2,
        top: canvasHeight/2 - (DisplayHeight/2 + frameTop) ,
    width: 40,        //幅
    height: 120,      //高さ
    strokeWidth:0,
    fill:"blue",
    });
    canvas.add(rect)
    
}

function addCircle(){
    let Circle= new fabric.Circle({ 
        radius: 30,
         fill: '#f55', 
         left: canvasWidth/2 - (DisplayWidth + frameRight + frameLeft)/2,
         top: canvasHeight/2 - (DisplayHeight/2 + frameTop) ,
         strokeWidth:0});
    canvas.add(Circle)
}

function addLine(){
    let coords =[100,0,100,100]
    let line = new fabric.Line(coords, {
        fill: 'red',
        stroke: 'red',
        strokeWidth: 0,

      });
    canvas.add(line);
}