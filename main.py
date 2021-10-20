from flask import Flask, render_template,url_for #追加
import os
app = Flask(__name__)

@app.route('/')
def startMenu():
    name = "Hoge"
    return render_template('index.html', title='flask test', name=name) #変更

@app.route('/hello')
def index():
    name = "Hoge"
    return "hello world"


## おまじない
if __name__ == "__main__":
    app.debug = True
    app.run()