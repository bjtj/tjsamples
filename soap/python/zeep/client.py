from zeep import Client

client = Client('http://localhost:1337/hello?wsdl')
result = client.service.sayHello('steve')

print('Result: {}'.format(result))
