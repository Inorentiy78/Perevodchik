# Perevodchik
переводчик на всех языках (сайт в реальном времени)
# Инструкция:
## Для чайников 
****************
1. Открываем именнованный файл и так же пишем это имя и файл в VScode
2. Вот как должно выглядеть
static(это папка(new Forder)) внутри него добавляем еще 2 папки
css(внутри этой папки добавляем файл(new fail) main.css
js(внутри этой папки добавляем файл(new fail) scripts.js
3. После static-a, добавляем новую папку с именем templates(все папки обязательно так и называть)
Внутри папки templates добавляем файл с именем inbex.html
4. После как все папки будут успешно установлены, в терминале устанавливаем папку venv. Вписываем в терминал py -m venv venv
После нее отдельно в иконке со всеми файлами и папки отдельно создаем файл с именем server.py 
5. у нас сайт , поэтому добавляем библиотеку Flask командой .\venv\Scripts\pip.exe install flask
6. после нужно также установить requests через ту же команду .\venv\Scripts\pip.exe install requests
7. после в уже наиминованные папки добавляем соответсвующий код и вызываем сайт через команду .\venv\Scripts\python.exe server.py
8. после чего в терминале должно выйти следующее  * Serving Flask app 'server'
 * Debug mode: on
WARNING: This is a development server. Do not use it in a production deployment. Use a production WSGI server instead.
 * Running on http://127.0.0.1:5000
Press CTRL+C to quit
 * Restarting with stat
 * Debugger is active!
 * Debugger PIN: 982-638-473   
нужно будет зажать Ctrl и навести курсор мышки на эту ссылку http://127.0.0.1:5000
после чего у вас выйдет сайт с переводчиком , где можно перевести с одно языка на другой, желаю удачи!
## для прокаченных прoграммистов
1. Делаем все папки и файлы с именем как у нас
2. Устанавливаем flask и request
3. Копируем наш код и вставляем с именнованые папки
4. После выводите это через ссылку в терминале в наш сайт с переводчиком
