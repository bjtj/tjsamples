from containers import Readers, Clients, Configs

try:
    import ConfigParser as configparser
except Exception:
    import configparser


def main():
    parser = configparser.ConfigParser()
    if not parser.read('config.ini'):
        raise Exception('Failed to read config.ini')
    Configs.config.override({
        'domain_name': parser.get('email', 'domain_name'),
        'email_address': parser.get('email', 'email_address'),
        'password': parser.get('email', 'password'),
        'mailbox': parser.get('email', 'mailbox')
    })

    email_reader = Readers.email_reader()
    print(email_reader.read('(SUBJECT TestSubject)'))

if __name__ == '__main__':
    main()
    
