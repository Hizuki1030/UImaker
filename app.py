from flask import Flask, render_template,url_for #追加
import os
app = Flask(__name__)

@app.route('/')
def startMenu():
    name = "Hoge"
    return render_template('index.html', title='UImaker', name=name) #変更

## おまじない
if __name__ == "__main__":
    app.debug = True
    app.run(host='0.0.0.0')