from email import message_from_string

class EmailReader(object):
    def __init__(self, client):
        try:
            self._client = client
        except Exception as e:
                raise e


    def read(self, search_str):
        try:
            email_ids = self._client.search(search_str)
            for email_id in reversed(email_ids):
                email_str = self._client.get_email(email_id)
                print('EMAIL STRING:')
                print('=============')
                print(email_str)
                print('...')
                mail = message_from_string(email_str)
                return [(header.upper(), mail[header]) for header in ['subject', 'to', 'from']]
            raise Exception('No emails have attachements')
        except Exception as e:
            raise e
            
