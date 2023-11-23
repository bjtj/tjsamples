import tomlkit


def main():

    with open('sample.toml', 'r') as f:
        doc = tomlkit.load(f)
        print(type(doc['database']['connection_max'])) # <class 'tomlkit.items.Integer'>
        print(type(doc.unwrap()['database']['connection_max'])) # <class 'int'>
        assert(doc.unwrap()['database']['connection_max'] == 5000)
        print(doc)
    
    with open('sample.toml', 'r') as f:
        content = f.read()
        doc = tomlkit.parse(content)
        print(doc)

    with open('sample.out.toml', 'w') as f:
        tomlkit.dump(doc, f)

    with open('sample.out2.toml', 'w') as f:
        f.write(tomlkit.dumps(doc))

    with open('sample.out.toml', 'r') as f:
        content = f.read()
        assert(tomlkit.parse(content) == doc)

    obj = {
        'section1': {
            'key1': 'value1',
            'subsection1': {
                'subkey1': 'value1',
                'subkey2': 123,
            }
        },
        'section2': {
            'key2': 'value2'
        },
        'sections': [
            {
                'name': 'arr_section1',
            },
            {
                'name': 'arr_section2',
            },
            {
                'name': 'arr_section3',
            }
        ]
    }

    print(tomlkit.dumps(obj))


if __name__ == '__main__':
    main()
