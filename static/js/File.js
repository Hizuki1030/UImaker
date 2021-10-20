
function exportJson(){
    var json_data = JSON.stringify(canvas.toDatalessJSON()); 
    console.log(json_data);
}

function getObjPosition(e) {
    //選択されたオブジェクトの取得
    let activeObjects = canvas.getObjects();
    console.log(activeObjects)
    for(let i =1; i<activeObjects.length; i++){
        let object = activeObjects[i];
        ObjectEdgePointY.push(object.top)
        ObjectEdgePointY.push(object.top + object.height/2)

        ObjectEdgePointX.push(object.right)
        ObjectEdgePointX.push(object.right + object.width/2)
    }
}