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
    def all():
        return Contact._data

    @staticmethod
    def find(contact_id):
        return next((contact for contact in Contact._data if contact.id == int(contact_id)), None)

    @staticmethod
    def genid():
        Contact._id_seed += 1
        return Contact._id_seed

    def update(self, first, last, phone, email):
        self.first = first
        self.last = last
        self.phone = phone
        self.email = email

    def save(self):
        self.errors = {}

        if not self.first:
            self.errors['first'] = 'First Name is required'
        if not self.last:
            self.errors['last'] = 'Last Name is required'
        if not self.email:
            self.errors['email'] = 'Email is required'
        if not self.phone:
            self.errors['phone'] = 'Phone is required'

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
