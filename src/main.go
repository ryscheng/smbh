package main

import (
	"./web"
	"fmt"
)

const HOST = "localhost:8000"

func main() {
	var app web.WebApp

	fmt.Printf("Webserver at " + HOST + "\n")
	app.Start(HOST)
}
