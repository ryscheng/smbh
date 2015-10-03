package main

import (
	"./server"
	"fmt"
)

const HOST = "localhost:8000"

func main() {
	var app server.WebApp

	fmt.Printf("Webserver at " + HOST + "\n")
	app.Start(HOST)
}
