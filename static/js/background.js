
var snapZone = 4;
var ObjectEdgePointX =new Array()
var ObjectEdgePointY =new Array()

var ModuleEdgePointX =new Array()
var ModuleEdgePointY =new Array()

var EdgePointX =new Array();
var EdgePointY =new Array();



function setWindowParameter(options){
    if(!(options.target === null)){
        let type = options.target.type;
        if(type === "components_rect"){
            setRectSettingWindow();
            document.getElementById('parameter_setting_x_input').value = parseInt(options.target.left) ;
            document.getElementById('parameter_setting_y_input').value = parseInt(options.target.top);
            document.getElementById('parameter_setting_color_input').value = options.target.fill;
            document.getElementById('parameter_setting_width_input').value = parseInt(options.target.width * options.target.scaleX);
            document.getElementById('parameter_setting_height_input').value = parseInt(options.target.height * options.target.scaleY);
            document.getElementById('parameter_setting_Zindex_input').value = options.target.zIndex;
            console.log(options.target.fill);
        }else if(type === "components_circle"){
            setCircleSettingWindow();
            document.getElementById('parameter_setting_x_input').value = parseInt(options.target.left) ;
            document.getElementById('parameter_setting_y_input').value = parseInt(options.target.top);
            document.getElementById('parameter_setting_color_input').value = options.target.fill;
            document.getElementById('parameter_setting_width_input').value = parseInt(options.target.width * options.target.scaleX);
            document.getElementById('parameter_setting_height_input').value = parseInt(options.target.height * options.target.scaleY);
            document.getElementById('parameter_setting_Zindex_input').value = options.target.zIndex;
        }else if(type === "components_text"){
            setTextSettingWindow();
            document.getElementById('parameter_setting_x_input').value = parseInt(options.target.left) ;
            document.getElementById('parameter_setting_y_input').value = parseInt(options.target.top);
            document.getElementById('parameter_setting_text_input').value = options.target.text;
            document.getElementById('parameter_setting_fontsize_input').value = options.target.fontSize/fontunitsize;
            document.getElementById('parameter_setting_color_input').value = options.target.fill;
            document.getElementById('parameter_setting_Zindex_input').value = options.target.zIndex;
        }        
    }    
}
    
function fineTuningInit(){

    
    ModuleEdgePointX.push(board.left + frameLeft + DisplayWidth/2,
                        board.left + frameLeft,
                        board.left + frameLeft + DisplayWidth
                        );
    ModuleEdgePointY.push(board.top +  frameTop + DisplayHeight/2,
                        board.top +  frameTop
                        );



    canvas.on("before:selection:cleared",function(options){
        let activeObjects = canvas.getObjects();
        console.log(activeObjects)
        for(let i =1; i<activeObjects.length; i++){
            let object = activeObjects[i];
            console.log(object)
            ObjectEdgePointY.push(object.top)
            ObjectEdgePointY.push(object.top + object.height)

            ObjectEdgePointX.push(object.left)
            ObjectEdgePointX.push(object.left+ object.width)

            
        }

        EdgePointX = ObjectEdgePointX.concat(ModuleEdgePointX);
        EdgePointY = ObjectEdgePointY.concat(ModuleEdgePointY);



        }
    )
    

    canvas.on('object:moving', function(options) {
        EdgePointX = ObjectEdgePointX.concat(ModuleEdgePointX);
        EdgePointY = ObjectEdgePointY.concat(ModuleEdgePointY);

        //?????????X???
        let objectMiddle = options.target.left + options.target.width * options.target.scaleX /2;
        for(let i =0; i<EdgePointX.length; i++){
            if (objectMiddle > EdgePointX[i] - snapZone && objectMiddle < EdgePointX[i] + snapZone) {
                options.target.set({
                    left: EdgePointX[i] - options.target.width * options.target.scaleX/2,

                }).setCoords();
                

        //baseline???????????????~~~~~~~~~~~~
        let marginZone = 1;
        canvas.remove(baseXline);

        if (objectMiddle > EdgePointX[i] - marginZone && objectMiddle < EdgePointX[i] + marginZone){//????????????????????????????????????????????????????????????????????????
            let coord = [EdgePointX[i],board.top +  frameTop,EdgePointX[i],board.top +  frameTop + DisplayHeight];
            addBaseXLine(coord);
        }
        //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                
                               
            }
        }

        //?????????Y???
        let objectCenterY = options.target.top + options.target.height* options.target.scaleY / 2;
        for(let i =0; i<EdgePointY.length; i++){
            if (objectCenterY > EdgePointY[i] - snapZone && objectCenterY < EdgePointY[i] + snapZone) {
                options.target.set({
                    top: EdgePointY[i] - options.target.height * options.target.scaleY/2,
                }).setCoords();

                //baseline???????????????~~~~~~~~~~~~
                let marginZone = 1;
                canvas.remove(baseYline);

                if (objectCenterY > EdgePointY[i] - marginZone && objectCenterY < EdgePointY[i] + marginZone){//????????????????????????????????????????????????????????????????????????
                    let coord = [board.left + frameLeft ,EdgePointY[i],board.left + frameLeft + DisplayWidth,EdgePointY[i]];
                    console.log(coord)
                    addBaseYLine(coord);
                }                
                //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            }
        }    

        let objectTop = options.target.top;
        for(let i =0; i<EdgePointY.length; i++){
            if (objectTop > EdgePointY[i] - snapZone && objectTop < EdgePointY[i] + snapZone) {
                options.target.set({
                    top: EdgePointY[i]  ,
                }).setCoords();
            }
        }


        let objectLeft = options.target.left;
        
        for(let i =0; i<EdgePointX.length; i++){
            if (objectLeft > EdgePointX[i] - snapZone && objectLeft < EdgePointX[i] + snapZone) {
            options.target.set({
                left: EdgePointX[i],
            }).setCoords();
        }
        }
        let objectRight = options.target.left + options.target.width *  options.target.scaleX;
        
        for(let i =0; i<EdgePointX.length; i++){
            if (objectRight > EdgePointX[i] - snapZone && objectRight < EdgePointX[i] + snapZone) {
            options.target.set({
                left: EdgePointX[i] - options.target.width *  options.target.scaleX,
            }).setCoords();
            }
        }
    
    }
    );


    canvas.on('mouse:up', function(options) {
        console.log("mosue up");
        canvas.remove(baseXline);
        canvas.remove(baseYline);

    });
}




function getAllComponents(){
    let objects = canvas.getObjects();
    console.log(objects)

    console.log(objects)
    let frameTop,frameLeft;
        let Display_info ={};
        let components = new Array;    

    objects.forEach((object, index) => {
        let type = object.type;
        let color = object.fill;
        let left = object.left-DisplayInitCoords[0];
        let top = object.top-DisplayInitCoords[1];
        let width = object.width;
        let scaleX = object.scaleX;
        let height = object.height;
        let scaleY = object.scaleY;
        let radius = object.radius;
        console.log(object)
        let layer = object.zIndex;
        console.log(layer)
        if(type == "frame"){
            let backgroundColor = getBackgroundColor(object)
            components.push({type:"background",color:backgroundColor});
        }else if(type=="components_rect"){
            components.push({layer:layer,type:"rect",color:color,left:left,top:top,width:width,height:height,scaleX:scaleX,scaleY:scaleY});
        }else if(type=="components_circle"){
            console.log('left:%s\n top:%s',left,top);
            components.push({layer:layer,type:"circle",color:color,left:left,width:width*scaleX,height:height*scaleY,top:top,radius:radius,scaleX:scaleX,scaleY:scaleY});
        }else if(type=="components_text"){
            let text = object.text;
            let fontSize = object.fontSize/fontunitsize;
            components.push({layer:layer,type:"text",fontSize:fontSize,color:color,left:left,width:width*scaleX,height:height*scaleY,top:top,scaleX:scaleX,scaleY:scaleY,text:text});
        }

      });
        console.log(components)
    return components
}

function generateCode(components){
    let code ="";
    components.forEach((component,index) => {
        console.log(component)
        let type = component["type"];
        let color = hex2rgb(component["color"]);
        let top = component["top"];
        let left = component["left"];
        let height = component["height"];
        let width = component["width"];
        let scaleX = component["scaleX"];
        let scaleY = component["scaleY"]

        
        console.log(color)

        if(type == "background"){
            code += `M5.Lcd.fillScreen(M5.lcd.color565(${color}));\n`;
        }else if(type == "rect"){
            code += `M5.Lcd.fillRect(${left},${top},${width*scaleX},${height*scaleY},M5.lcd.color565(${color}));\n`;
        }else if(type == "circle"){
            code += `M5.Lcd.fillEllipse(${left+width/2},${top+height/2},${width/2},${height/2},M5.lcd.color565(${color}));\n`;
        }else if(type == "text"){
            let text = component["text"];
            let fontSize = component["fontSize"];
            code += `M5.Lcd.setTextSize(${fontSize});\n`;
            code += `M5.Lcd.setCursor(${left},${top+height/4});\n`;
            code += `M5.Lcd.setTextColor(M5.lcd.color565(${color}));\n`;
            code += `M5.Lcd.print("${text}");\n`;
        }
        
    });
    return code;
}

function donloadFile(filename,text){
    let blob = new Blob([text],{type:"text/plan"});
    let link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename+'.txt';
    link.click();
}

function colorChange_hex6_to_hex4(hex){

    hex = hex.replace("#","")
    console.log(hex)
    let red = parseInt(hex[1]+hex[2]);
    let green = parseInt(hex[3]+hex[4]);
    let blue = parseInt(hex[5]+hex[6]);
    console.log(red,green,blue)
    let hex4= parseInt(((red>>3)<<11) | ((green>>2)<<5) | (blue>>3),16)
    return hex4
}

function hex2rgb(hex){
    let red   = parseInt(hex.substring(1,3), 16);
    let green = parseInt(hex.substring(3,5), 16);
    let blue  = parseInt(hex.substring(5,7), 16);
    return [red,green ,blue]
}

function getComponentsInfoasJson(file){
    readFile(file);
    let text = readFile();
    let components = text//JSON.parse(text);
    console.log(components)
    return components[1];
}

function readFile(file){
    var reader = new FileReader(),
    result = 'empty';

    reader.onload = function(e)
    {
        result = e.target.result;
    };

    reader.readAsText(file);
}

function addComponents(file){
    var reader = new FileReader();
    var result = 'empty';

    reader.onload = function(e)
    {
        result = e.target.result;
        let components = JSON.parse(result);
        console.log(components[0])
        components.forEach((component, i) => {
            // ???????????????????????????
            console.log(component);
            if(component.type == "rect"){
                let left = component.left + DisplayInitCoords[0];
                let top  = component.top + DisplayInitCoords[1];
                let width = component.width;
                let height = component.height;
                let color = component.color;
                let layer = component.layer; 
                let scaleX = component.scaleX;
                let scaleY = component.scaleY;
                addRect_coord(left,top,width,height,color,layer,scaleX,scaleY);
            }
            if(component.type == "circle"){
                console.log("add")
                let left = component.left + DisplayInitCoords[0];
                let top  = component.top + DisplayInitCoords[1];
                let width = component.width;
                let height = component.height;
                let color = component.color;
                let layer = component.layer;
                let radius = component.radius;
                let scaleX = component.scaleX;
                let scaleY = component.scaleY;
                addCircle_coord(left,top,radius,color,layer,scaleX,scaleY);
            }
            if(component.type == "text"){
                let left = component.left + DisplayInitCoords[0];
                let top  = component.top + DisplayInitCoords[1];
                let width = component.width;
                let height = component.height;
                let color = component.color;
                console.log(color);
                let layer = component.layer; 
                let scaleX = component.scaleX;
                let scaleY = component.scaleY;
                let text = component.text;
                let fontsize = component.fontSize*fontunitsize;
                addText_coord(left,top,width,height,color,layer,scaleX,scaleY,text,fontsize);
            }
        });
    };
    reader.readAsText(file);
}