# Perevodchik
переводчик на всех языках (сайт в реальном времени)
# Инструкция:
****************
###### 1 этап. Создание папок и файлов 
1. Для начала создаем основную папку, где и будет находится наш код(рекомендуем назвать ее Perevodchik,для ващего же удобства.)
2. Создаем папки(new forder) такие как static,templates и там же отдельно создаем файл(new fail) server.py
3. Внутри папки static создаем папку css после чего в css создаем файл main.css
4. Теперь внутри папки static создаем еще одну папку js после чего в него добавляем файл scripts.js
5. Внутри папки templates создаем файл index.html
 ###### 2. этап. команды 
1. После того, как все папки будут успешно установлены, необходимо создать папку venv. Для создания папки вписываем в terminal данный код (py -m venv venv). После того как вы ввели код у вас в иконке с папками и файлами должна появится папка venv. Если же этого не произошло , убедитесь, что у вас установлен на ваш компьютер Python( это можно проверить с помощью команды py -V(если та конданда не распозналась попробуйте эту - python -V) должно в терминале выйти Python(ваша версия в осном это 3...))
2. У нас сайт, поэтому нужно установить библиотеку Flask командой .\venv\Scripts\pip.exe install flask
3. после необходимо также установить requests через ту же команду .\venv\Scripts\pip.exe install requests
4. после в уже найденные папки подставляем соответствующий код и вызываем сайт через команду .\venv\Scripts\python.exe server.py
5. после чего в терминале должно выйти следующее
 * Serving Flask app 'server'
 * Debug mode: on
WARNING: This is a development server. Do not use it in a production deployment. Use a production WSGI server instead.
 * Running on http://127.0.0.1:5000
Press CTRL+C to quit
 * Restarting with stat
 * Debugger is active!
 * Debugger PIN: 982-638-473   
нужно будет зажать Ctrl и навести курсор мышки на эту ссылку http://127.0.0.1:5000 после чего у вас выйдет сайт с переводчиком , где можно перевести с одно языка на другой, желаю удачи! :blush: :revolving_hearts:

