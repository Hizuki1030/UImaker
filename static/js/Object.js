function addRect(){
    console.log(DisplayInitCoords)
    let rect = new fabric.Rect({
        left: 100,
        top: 150,
    width: 40,        //幅
    height: 120,      //高さ
    strokeWidth:0,
    fill:"#0000ff",
    type:"rect",
    zIndex:1
    });

    canvas.add(rect); 
}

function addCircle(){
    let Circle= new fabric.Circle({ 
        radius: 30,
         fill: '#ff0000', 
         left: 100,
         top: 150,
         strokeWidth:0,
         type:"circle",
         zIndex:1});

    canvas.add(Circle);
}


var baseXline
function addBaseXLine(coords){
    
    coords[0] = coords[0] -0.5 ;
    coords[2] = coords[2] -0.5;
    baseXline = new fabric.Line(coords, {
        fill: 'red',
        stroke: 'red',
        strokeWidth: 1,
        type:"parts_line",

      });
    baseXline.selectable = false;
    canvas.add(baseXline);
}

var baseYline
function addBaseYLine(coords){
    
    coords[0] = coords[0] -0.5 ;
    coords[2] = coords[2] -0.5;
    baseYline = new fabric.Line(coords, {
        fill: 'red',
        stroke: 'red',
        strokeWidth: 1,
        type:"parts_line",

      });
    baseYline.selectable = false;
    canvas.add(baseYline);
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
        type:"text",
        zIndex:1
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
    top: top,
    scaleX:scaleX,
    scaleY:scaleY,
    type:"rect",
    zIndex:layer
    });

    canvas.add(rect);

    return rect;
}

function addCircle_coord(left,top,radius,color,layer,scaleX,scaleY){
    let Circle= new fabric.Circle({ 
         radius:radius,
         fill: color, 
         left: left,
         top: top ,
         scaleX:scaleX,
         scaleY:scaleY,
         type:"circle",
         zIndex:layer
        });

    canvas.add(Circle);
    
    return Circle;
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
        type:"text",
    });
    Text.hasControls = false;
    canvas.add(Text);

    return Text;
}




function getRectObj(left,top,width,height,color,layer,scaleX,scaleY){
    console.log(DisplayInitCoords)
    let rect = new fabric.Rect({
    width:width,
    height:height,
    fill: color, 
    left: left,
    top: top,
    scaleX:scaleX,
    scaleY:scaleY,
    type:"rect",
    zIndex:layer
    });

    return rect;
}

function getCircleObj(left,top,radius,color,layer,scaleX,scaleY){
    let Circle= new fabric.Circle({ 
         radius:radius,
         fill: color, 
         left: left,
         top: top ,
         scaleX:scaleX,
         scaleY:scaleY,
         type:"circle",
         zIndex:layer
        });

    return Circle;
}


function getTextObj(left,top,width,height,color,layer,scaleX,scaleY,text,fontSize){
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
        type:"text",
    });
    Text.hasControls = false;

    return Text;
}