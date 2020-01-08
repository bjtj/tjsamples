from flask import Flask, session, render_template, redirect

app = Flask(__name__)
app.secret_key = 'mysecret'

@app.route('/')
def index():
    login = session.get('login')
    return render_template('index.html', login = login)


@app.route('/login')
def login():
    session['login'] = True
    return redirect('/')

@app.route('/logout')
def logout():
    session.pop('login')
    return redirect('/')


def main():
    app.run(port=8080)

if __name__ == '__main__':
    main()
