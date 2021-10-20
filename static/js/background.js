
var snapZone = 4;
var ObjectEdgePointX =new Array()
var ObjectEdgePointY =new Array()

var ModuleEdgePointX =new Array()
var ModuleEdgePointY =new Array()

var EdgePointX =new Array();
var EdgePointY =new Array();

function check(){
    console.log(board)
    console.log(board.left)
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
    console.log("mosue:down")
        
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


    
    })
    

    canvas.on('object:moving', function(options) {
        EdgePointX = ObjectEdgePointX.concat(ModuleEdgePointX);
    EdgePointY = ObjectEdgePointY.concat(ModuleEdgePointY);
    console.log(options.target)
    let objectMiddle = options.target.left + options.target.width * options.target.scaleX /2;
    for(let i =0; i<EdgePointX.length; i++){
        if (objectMiddle > EdgePointX[i] - snapZone && objectMiddle < EdgePointX[i] + snapZone) {
        options.target.set({
            left: EdgePointX[i] - options.target.width * options.target.scaleX/2,
        }).setCoords();
    }
    }

    let objectCenterY = options.target.top + options.target.height* options.target.scaleY / 2;
    for(let i =0; i<EdgePointY.length; i++){
        if (objectCenterY > EdgePointY[i] - snapZone && objectCenterY < EdgePointY[i] + snapZone) {
        options.target.set({
            top: EdgePointY[i] - options.target.height * options.target.scaleY/2,
        }).setCoords();
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
}
