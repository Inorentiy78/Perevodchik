from flask import Flask, render_template, request, jsonify
import requests

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/translate', methods=['POST'])
def translate():
    source_text = request.form['source_text']
    source_lang = request.form['source_lang']
    target_lang = request.form['target_lang']

    if source_text == "":
        return jsonify({'translation': ''})

    url = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl={}&tl={}&dt=t&q={}'.format(source_lang, target_lang, source_text)
    response = requests.get(url)
    data = response.json()
    translation = data[0][0][0]

    return jsonify({'translation': translation})

if __name__ == '__main__':
    app.run(debug=True)
