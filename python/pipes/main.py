import pipes
t = pipes.Template()
t.append('tr a-z A-Z', '--')
f = t.open('pipefile', 'w')
f.write('hello world')
f.close()
print(open('pipefile').read())
