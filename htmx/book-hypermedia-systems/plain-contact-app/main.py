from flask import Flask, redirect, request, render_template, flash, session
from contact import Contact

SESSION_KEY = 'contacts.app.session.s3cr3t'

app = Flask(__name__)
app.secret_key = SESSION_KEY

@app.route('/')
def index():
    return redirect('/contacts')

@app.route('/contacts')
def contacts():
    search = request.args.get('q')
    if search is not None:
        contacts_set = Contact.search(search)
    else:
        contacts_set = Contact.all()

    return render_template('index.html', contacts=contacts_set)

@app.route('/contacts/new', methods=['GET'])
def contacts_new_get():
    return render_template('new.html', contact=Contact())

@app.route('/contacts/new', methods=['POST'])
def contacts_new():
    c = Contact(None, request.form['first'], request.form['last'], request.form['phone'], request.form['email'])

    if c.save():
        flash('Created New Contact')
        return redirect('/contacts')
    else:
        return render_template('new.html', contact=c)

@app.route('/contacts/<contact_id>')
def contacts_view(contact_id=0):
    contact = Contact.find(contact_id)
    return render_template('show.html', contact=contact)

@app.route('/contacts/<contact_id>/edit', methods=['GET'])
def contacts_edit_get(contact_id=0):
    contact = Contact.find(contact_id)
    return render_template('edit.html', contact=contact)

@app.route('/contacts/<contact_id>/edit', methods=['POST'])
def contacts_edit(contact_id=0):
    c = Contact.find(contact_id)
    c.update(request.form['first'], request.form['last'], request.form['phone'], request.form['email'])
    if c.save():
        flash('Updated Contact')
        return redirect('/contacts/' + str(contact_id))
    else:
        return render_template('edit.html', contact=c)

@app.route('/contacts/<contact_id>/delete', methods=['POST'])
def contacts_delete(contact_id=0):
    contact = Contact.find(contact_id)
    contact.delete()
    flash('Deleted Contact!')
    return redirect('/contacts')

if __name__ == '__main__':
    Contact(None, 'John', 'Smith', '123-456-7890', 'john@example.com').save()
    Contact(None, 'Dana', 'Crandith', '123-456-7890', 'dcran@example.com').save()
    Contact(None, 'Edith', 'Neutvaar', '123-456-7890', 'en@example.com').save()

    app.run(debug=True)