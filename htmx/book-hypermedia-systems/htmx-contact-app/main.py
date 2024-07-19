from flask import Flask, redirect, request, render_template, flash, send_file
from contact import Contact
from archiver import Archiver

SESSION_KEY = 'contacts.app.session.s3cr3t'

app = Flask(__name__)
app.secret_key = SESSION_KEY

@app.route('/')
def index():
    return redirect('/contacts')

@app.route('/contacts')
def contacts():
    search = request.args.get('q')
    page = int(request.args.get('page', 1))
    if search is not None:
        contacts_set = Contact.search(search)
        if request.headers.get('HX-Trigger') == 'search':
            return render_template('rows.html', contacts=contacts_set, page=page)
    else:
        contacts_set = Contact.all(page)

    return render_template('index.html', contacts=contacts_set, page=page, archiver=Archiver.get())

@app.route('/contacts/count')
def contacts_count():
    return '(' + str(Contact.count()) + ' total Contacts)'

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

@app.route('/contacts/<contact_id>', methods=['DELETE'])
def contacts_delete(contact_id=0):
    contact = Contact.find(contact_id)
    contact.delete()
    if request.headers.get('HX-Trigger') == 'delete-btn':
        flash('Deleted Contact!')
        return redirect('/contacts', 303)
    else:
        return ''

@app.route('/contacts', methods=['DELETE'])
def contacts_delete_all():
    # contact_ids = list(map(int, request.form.getlist('selected_contact_ids')))
    #                                     ^^^^
    # https://v2-0v2-0.htmx.org/posts/2024-01-26-htmx-2-0-0-alpha1-is-released/
    # https://www.reddit.com/r/htmx/comments/1anhc3w/comment/kpuu6le/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button
    contact_ids = list(map(int, request.args.getlist('selected_contact_ids')))
    print(contact_ids)
    for contact_id in contact_ids:
        contact = Contact.find(contact_id)
        contact.delete()
    flash('Deleted  Contacts!')
    contacts_set = Contact.all(1)
    return render_template('index.html', contacts=contacts_set, page=1, archiver=Archiver.get())

@app.route('/contacts/<contact_id>/email', methods=['GET'])
def contacts_email_get(contact_id=0):
    c = Contact.find(contact_id)
    c.email = request.args.get('email')
    c.validate()
    return c.errors.get('email') or ''

@app.route('/contacts/archive', methods=['GET'])
def archive_status():
    archiver = Archiver.get()
    return render_template('archive_ui.html', archiver=archiver)

@app.route('/contacts/archive', methods=['POST'])
def start_archive():
    archiver = Archiver.get()
    archiver.run()
    return render_template('archive_ui.html', archiver=archiver)

@app.route('/contacts/archive', methods=['DELETE'])
def reset_archive():
    archiver = Archiver.get()
    archiver.reset()
    return render_template('archive_ui.html', archiver=archiver)

@app.route('/contacts/archive/file', methods=['GET'])
def archive_content():
    manager = Archiver.get()
    return send_file(manager.archive_file(), 'archive.json', as_attachment=True)

def load_list():
    with open('list.txt', 'r') as f:
        lines = f.read().splitlines()
        for line in lines:
            parts = line.split(',')
            Contact(None, parts[0], parts[1], parts[2], parts[3]).save()

if __name__ == '__main__':
    Contact(None, 'John', 'Smith', '123-456-7890', 'john@example.com').save()
    Contact(None, 'Dana', 'Crandith', '123-456-7890', 'dcran@example.com').save()
    Contact(None, 'Edith', 'Neutvaar', '123-456-7890', 'en@example.com').save()
    load_list()

    app.run(debug=True)