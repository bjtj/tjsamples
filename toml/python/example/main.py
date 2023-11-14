import toml


def main():
    parsed_toml = toml.load('sample.toml')
    print(parsed_toml)
    print(parsed_toml['title'])
    print(parsed_toml['owner']['name'])
    print(parsed_toml['database']['ports'])
    print(type(parsed_toml['database']['ports'])) # <class 'list'>
    print(len(parsed_toml['database']['ports']))  # 3

    parsed_toml['owner']['name'] += ' <== Good guy'

    print(parsed_toml['owner']['name'])
    with open('sample.out.toml', 'w') as f:
        toml.dump(parsed_toml, f)
    

if __name__ == '__main__':
    main()
