all:
	mkdir -p generated
	thrift -r -out generated --gen java service.thrift
	thrift -r -out generated --gen py service.thrift
