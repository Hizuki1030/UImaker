

function exportCode(){
    let components = getAllComponents();
    console.log(components)
    let code = generateCode(components);
    donloadFile("code",code);
}

function PrintAllComponents(){
    let components = getAllComponents();
    console.log(components)
}

let HistoryArray = new Array();
let HistoryCounter=0;
let isLatest = true;


function recordHistory(){
    console.log(HistoryArray.length,HistoryCounter)
    if(HistoryArray.length != HistoryCounter){
      HistoryArray.splice(HistoryCounter,HistoryArray.length)  
    }
    
    let components = getAllComponents();
    let json_text = JSON.stringify(components);
    HistoryArray.push(json_text)
    console.log(HistoryCounter)
    HistoryCounter++;

}

function backToHistory(){
    if(HistoryCounter-1 >= 0){
        HistoryCounter--;
    }else{
        HistoryCounter = 0;
    }
    console.log(HistoryCounter)
    let json = HistoryArray[HistoryCounter];
    removeAllObject();
    addComponentsFromJson(json);
}

function forwardToHistory(){


    if(HistoryCounter+1 < HistoryArray.length){
        HistoryCounter++;
    }else{
        HistoryCounter = HistoryArray.length-1;
    }
    console.log(HistoryCounter)

    let json = HistoryArray[HistoryCounter];
    removeAllObject();
    addComponentsFromJson(json);
}

function removeAllObject(){
    let objects = canvas.getObjects();  
    objects.forEach((object, index) => {
        let type = object.type;
        if(type != "frame"){
            canvas.remove(object)
        }
      });
}

function exportComportnents(){
    let components = getAllComponents();
    console.log(components);
    let json_text = JSON.stringify(components);
    donloadFile("ComponentsFile",json_text);
}

function getObjPosition(e) {
    //選択されたオブジェクトの取得
    let activeObjects = canvas.getObjects();
    console.log(activeObjects)
    for(let i =1; i<activeObjects.length; i++){
        let object = activeObjects[i];
        ObjectEdgePointY.push(object.top);
        ObjectEdgePointY.push(object.top + object.height/2);

        ObjectEdgePointX.push(object.right);
        ObjectEdgePointX.push(object.right + object.width/2);
    }
}

function getBackgroundColor(frame){
    let array = frame._objects;
    let color;
    array.forEach((value, index) => {
        let type = value.type;
        if(type == "background"){
            color = value.fill;
        }
      });
    return color
}

function getBackgroundCoord(frame){
    let array = frame.objects
    let left,top;
    let frameLeft = frame.left;
    let frameTop = frame.top;
    array.forEach((value, index) => {
        let type = value.type;
        if(type == "background"){
            console.log(value.left,value.top)
            left = value.left;
            top = value.top;
            console.log([left,top])
        }
      });
    return [left,top]
}
