
setup:
	go get github.com/gorilla/mux
	npm install
	cp node_modules/babel-core/browser.min.js static/thirdparty/
	cp node_modules/react/dist/react.min.js static/thirdparty/
	cp node_modules/semantic-ui-css/semantic.min.* static/thirdparty/

run:
	go run src/main.go
