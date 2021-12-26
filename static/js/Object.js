function addRect(){
    console.log(DisplayInitCoords)
    let rect = new fabric.Rect({
        left: 100,
        top: 150,
    width: 40,        //幅
    height: 120,      //高さ
    strokeWidth:0,
    fill:"#0000ff",
    type:"components_rect",
    zIndex:0
    });

    console.log(rect.zIndex);
    canvas.add(rect); 
}

function addCircle(){
    let Circle= new fabric.Circle({ 
        radius: 30,
         fill: '#ff0000', 
         left: 100,
         top: 150,
         strokeWidth:0,
         type:"components_circle",
         zIndex:0});

    canvas.add(Circle);
}

function addLine(){
    let coords =[100,0,100,100]
    let line = new fabric.Line(coords, {
        fill: 'red',
        stroke: 'red',
        strokeWidth: 0,
        type:"parts_line",

      });
    canvas.add(line);
}

var fontunitsize = 14;
function addText(){
    let text = new fabric.Text('Hello', {
        left: 100,
        top: 150,
        strokeWidth: 0,
        fontSize: 14,
        scaleX:1.11,//VT323fontが8pxなのでscaleで調整(画像でみて適当な値)
        scaleY:0.875,// VT323fontが8pxなのでscaleで調整(7/8)
        fill:'#000000',
        fontFamily: 'VT323',
        type:"components_text",
    });
    text.hasControls = false;
    text.text = "hello";
    canvas.add(text);
}

function addRect_coord(left,top,width,height,color,layer,scaleX,scaleY){
    console.log(DisplayInitCoords)
    let rect = new fabric.Rect({
    width:width,
    height:height,
    fill: color, 
    left: left,
    top: top ,
    scaleX:scaleX,
    scaleY:scaleY,
    type:"components_rect",
    zIndex:layer
    });

    canvas.add(rect)  ;
}

function addCircle_coord(left,top,radius,color,layer,scaleX,scaleY){
    let Circle= new fabric.Circle({ 
         radius:radius,
         fill: color, 
         left: left,
         top: top ,
         scaleX:scaleX,
         scaleY:scaleY,
         type:"components_circle",
         zIndex:layer
        });

    canvas.add(Circle);
}


function addText_coord(left,top,width,height,color,layer,scaleX,scaleY,text,fontSize){
    console.log("fontsize")
    console.log(fontSize);
    let Text = new fabric.Text(text, {
        fill: color, 
        left: left,
        top: top ,
        scaleX:scaleX,
        scaleY:scaleY,
        fontSize: fontSize,
        fontFamily: 'VT323',
        type:"components_text",
    });
    Text.hasControls = false;
    canvas.add(Text);
}