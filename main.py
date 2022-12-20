from flask import Flask, request, escape, render_template
from database_manager import DatabaseManager

app = Flask(__name__)

is_login = False
link = "https://account-management-369310.ew.r.appspot.com"

# return redirect(url_for('login', name = user))
# @app.route("/login/<name>")
@app.route("/")
def index():
    is_login = False
    return render_template('index.html', message='Zaloguj się')

@app.route("/login", methods = ['POST', 'GET'])
def try_login():

    user = request.form['user']
    password = request.form['password']

    db_manager = DatabaseManager()
    if db_manager.login(user, password):
        return render_template('index.html', message='Zalogowano')
    else:
        return render_template('index.html', message='Błędne dane')

@app.route("/register", methods = ['POST', 'GET'])
def try_register():
    email = request.form['email']
    nick = request.form['nick']
    password = request.form['password']

    db_manager = DatabaseManager()
    db_manager.register(email=email, nick=nick, password=password)

    return render_template('index.html', message='Zarejestrowano')


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=8080, debug=True)