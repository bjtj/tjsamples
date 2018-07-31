import upnpclient

print('[ssdp] search...')
devices = upnpclient.discover()

print(' == Devices ==')
print(devices)
