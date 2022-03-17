function deleteObj(){
    //選択されているオブジェクトを削除する。
    let activeObjects = canvas.getActiveObjects();

    if (activeObjects != null) {
        if (confirm('選択された箇所を全て削除しますか？')) {
            activeObjects.forEach(obj => {

                //対象オブジェクトを削除
                canvas.remove(obj);
            });
        }
    } else {
        alert("オブジェクトが選択されていません。");
    }
}

function Group(){
    if (! canvas.getActiveObject()) { return; }
    if (canvas.getActiveObject().type !== 'activeSelection') { return; }
    
    let group = canvas.getActiveObject().toGroup();
	group.type = "components_group";	
    canvas.requestRenderAll();

}

function Copy() {
	// clone what are you copying since you
	// may want copy and paste on different moment.
	// and you do not want the changes happened
	// later to reflect on the copy.
	canvas.getActiveObject().clone(function(cloned) {
		_clipboard = cloned;
	});
    
}

function Paste() {
	// clone again, so you can do multiple copies.
	_clipboard.clone(function(clonedObj) {
		canvas.discardActiveObject();
		clonedObj.set({
			left: clonedObj.left + 10,
			top: clonedObj.top + 10,
			evented: true,
		});
		if (clonedObj.type === 'activeSelection') {
			// active selection needs a reference to the canvas.
			clonedObj.canvas = canvas;
			clonedObj.forEachObject(function(obj) {
				canvas.add(obj);
			});
			// this should solve the unselectability
			clonedObj.setCoords();
		} else {
			canvas.add(clonedObj);
		}
		_clipboard.top += 10;
		_clipboard.left += 10;
		canvas.setActiveObject(clonedObj);
		canvas.requestRenderAll();
	});
}