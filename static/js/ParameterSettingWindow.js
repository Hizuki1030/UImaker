
//長方形用設定windowの表示処理
function setRectSettingWindow(){
    let html = '<div class ="parameter_setting">'
    +'<font size=3px>Type:</font><font class="ActiveObject" size=3px>Rect</font><br>'
    +'<font size=3px>&nbsp;&nbsp;&nbsp;x&nbsp;&nbsp;&nbsp;:&nbsp</font>'
    +'<input id="parameter_setting_x_input" onchange = "parameterXChange()" type="number"></input><br>'
    +'<font size=3px>&nbsp;&nbsp;&nbsp;y&nbsp;&nbsp;&nbsp;:&nbsp</font>'
    +'<input id="parameter_setting_y_input" type="number" onchange = "parameterYChange()"></input><br>'
    +'<font size=3px>width:&nbsp</font>'
    +'<input id="parameter_setting_width_input" type="number" onchange = "parameterWidthChange()"></input><br>'
    +'<font size=3px>hight:&nbsp</font>'
    +'<input id="parameter_setting_height_input" type="number" onchange = "parameterHeightChange()"></input><br>'
    +'<font size=3px>color:&nbsp</font>'
    +'<input id="parameter_setting_color_input" type="color" onchange = "parameterColorChange()"></input><br>'
    +'<font size=3px>Layer:&nbsp</font>'
    +'<input id="parameter_setting_Zindex_input" type="number" onchange = "parameterZindexChange()"></input><br>'
    +'</div>'
    document.getElementById("parameter_setting_wrapper").innerHTML = html
}

//円形用設定windowの表示処理
function setCircleSettingWindow(){
    let html = '<div class ="parameter_setting">'
    +'<font size=3px>Type:</font><font class="ActiveObject" size=3px>Circle</font><br>'
    +'<font size=3px>&nbsp;&nbsp;&nbsp;x&nbsp;&nbsp;&nbsp;:&nbsp</font>'
    +'<input id="parameter_setting_x_input" onchange = "parameterXChange()" type="number"></input><br>'
    +'<font size=3px>&nbsp;&nbsp;&nbsp;y&nbsp;&nbsp;&nbsp;:&nbsp</font>'
    +'<input id="parameter_setting_y_input" type="number" onchange = "parameterYChange()"></input><br>'
    +'<font size=3px>width:&nbsp</font>'
    +'<input id="parameter_setting_width_input" type="number" onchange = "parameterWidthChange()"></input><br>'
    +'<font size=3px>hight:&nbsp</font>'
    +'<input id="parameter_setting_height_input" type="number" onchange = "parameterHeightChange()"></input><br>'
    +'<font size=3px>color:&nbsp</font>'
    +'<input id="parameter_setting_color_input" type="color" onchange = "parameterColorChange()"></input><br>'
    +'<font size=3px>Layer:&nbsp</font>'
    +'<input id="parameter_setting_Zindex_input" type="number" onchange = "parameterZindexChange()"></input><br>'
    +'</div>'
    document.getElementById("parameter_setting_wrapper").innerHTML = html
}

//テキスト用設定windowの表示処理
function setTextSettingWindow(){
    let html = '<div class ="parameter_setting">'
    +'<font size=3px>Type:</font><font class="ActiveObject" size=3px>Text</font><br>'
    +'<font size=3px>&nbsp;&nbsp;&nbsp;x&nbsp;&nbsp;&nbsp;:&nbsp</font>'
    +'<input id="parameter_setting_x_input" onchange = "parameterXChange()" type="number"></input><br>'
    +'<font size=3px>&nbsp;&nbsp;&nbsp;y&nbsp;&nbsp;&nbsp;:&nbsp</font>'
    +'<input id="parameter_setting_y_input" type="number" onchange = "parameterYChange()"></input><br>'
    +'<font size=3px>&nbsp;&nbsp;&nbsp;fontsize&nbsp;&nbsp;&nbsp;:&nbsp</font>'
    +'<input id="parameter_setting_fontsize_input" type="number" onchange = "parameterFontsizeChange()"></input><br>'
    +'<font size=3px>&nbsp;&nbsp;&nbsp;text&nbsp;&nbsp;&nbsp;:&nbsp</font>'
    +'<input id="parameter_setting_text_input" type="text" onchange = "parameterTextChange()"></input><br>'
    +'<font size=3px>color:&nbsp</font>'
    +'<input id="parameter_setting_color_input" type="color" onchange = "parameterColorChange()"></input><br>'
    +'<font size=3px>Layer:&nbsp</font>'
    +'<input id="parameter_setting_Zindex_input" type="number" onchange = "parameterZindexChange()"></input><br>'
    +'</div>'
    document.getElementById("parameter_setting_wrapper").innerHTML = html
}

//オブジェクトのZ位置の変更処理
function parameterZindexChange(){
    console.log("called")
    let activeObjects = canvas.getActiveObjects();
    let zIndex = document.getElementById('parameter_setting_Zindex_input').value;
    for(let i=0; i < activeObjects.length ;i++){
        let activeObject = activeObjects[i];
        activeObject.set("zIndex",parseInt(zIndex))
        activeObject.moveTo(parseInt(zIndex))
        console.log(zIndex)   
    }

    canvas.renderAll();
}

//オブジェクトの色の変更処理
function parameterColorChange(){
    console.log("called")
    let activeObjects = canvas.getActiveObjects();
    let color = document.getElementById('parameter_setting_color_input').value;
    for(let i=0; i < activeObjects.length ;i++){
        let activeObject = activeObjects[i];
        activeObject.set("fill",color)
        console.log(color)   
    }

    canvas.requestRenderAll();
}

//オブジェクトの描画X軸位置の変更処理
function parameterXChange(){
    let activeObjects = canvas.getActiveObject();
    console.log(activeObjects)
    let X = parseFloat(document.getElementById('parameter_setting_x_input').value);
    console.log(X)
    activeObjects.set("left",X)
    canvas.requestRenderAll();
    recordHistory()
}

//オブジェクトの描画Y軸位置の変更
function parameterYChange(){
    let activeObjects = canvas.getActiveObject();
    console.log(activeObjects)
    let Y = parseFloat(document.getElementById('parameter_setting_y_input').value);
    console.log(Y)
    activeObjects.set("top",Y)
    canvas.requestRenderAll();
    recordHistory();
}

//背景色の変更処理
function changeBackgroundColor(){
    console.log("chanegbackgroundcolor is changed")
    ModuleDisplay.set("fill",document.getElementById('background_color_input').value);
    canvas.requestRenderAll();
    recordHistory();
}


//文字サイズの変更処理
function parameterFontsizeChange(){
    console.log("called")
    let activeObjects = canvas.getActiveObject();
    let fontsize = document.getElementById('parameter_setting_fontsize_input').value*fontunitsize;
    activeObjects.set("fontSize",parseFloat(fontsize))
    canvas.renderAll();
    recordHistory();
}

//文字列の変更処理
function parameterTextChange(){
    console.log("called")
    let activeObjects = canvas.getActiveObject();
    let text = document.getElementById('parameter_setting_text_input').value;
    activeObjects.set("text",text)
    canvas.renderAll(); 
    recordHistory();   
}