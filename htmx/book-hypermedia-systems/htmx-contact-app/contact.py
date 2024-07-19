import copy

class Contact:

    _id_seed = 0
    _data = []

    def __init__(self, id=None, first='', last='', phone='', email=''):
        self.id = id
        self.first = first
        self.last = last
        self.phone = phone
        self.email = email
        self.errors = {}

    @staticmethod
    def search(search):
        return [contact for contact in Contact._data if search in contact.first or search in contact.last]

    @staticmethod
    def all(page):
        return Contact._data[page * 10 - 10:page * 10]

    @staticmethod
    def count():
        return len(Contact._data)

    @staticmethod
    def find(contact_id):
        return copy.copy(next((contact for contact in Contact._data if contact.id == int(contact_id)), None))

    @staticmethod
    def find_by_email(email):
        return copy.copy(next((contact for contact in Contact._data if contact.email == email), None))

    @staticmethod
    def find_by_email_without_me(email, me):
        return copy.copy(next((contact for contact in Contact._data if contact.email == email and contact.id != me.id), None))

    @staticmethod
    def genid():
        Contact._id_seed += 1
        return Contact._id_seed

    def update(self, first, last, phone, email):
        self.first = first
        self.last = last
        self.phone = phone
        self.email = email

    def validate(self):
        self.errors = {}

        if not self.first:
            self.errors['first'] = 'First Name is required'
        if not self.last:
            self.errors['last'] = 'Last Name is required'
        if not self.email:
            self.errors['email'] = 'Email is required'
        if self.email and Contact.find_by_email_without_me(self.email, self) is not None:
            self.errors['email'] = 'Email already exists'
        if not self.phone:
            self.errors['phone'] = 'Phone is required'

    def save(self):

        self.validate()

        if self.errors:
            return False

        if self.id is None:
            self.id = Contact.genid()

        found = Contact.find(self.id)
        if found is not None:
            Contact._data = [contact if contact.id != self.id else self for contact in Contact._data]
        else:
            Contact._data.append(self)
        return True

    def delete(self):
        Contact._data = [contact for contact in Contact._data if contact.id != self.id]
