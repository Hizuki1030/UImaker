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