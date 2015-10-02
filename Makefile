
setup:
	go get github.com/gorilla/mux
	npm install -g gulp
	npm install
	cd static/thirdparty/semantic/
	gulp build

run:
	go run src/main.go
