package server

import (
	_ "fmt"
	"github.com/gorilla/mux"
	"log"
	"net/http"
)

type WebApp struct {
	router *mux.Router
}

func (this *WebApp) Start(host string) {
	this.router = mux.NewRouter()
	this.router.PathPrefix("/").Handler(http.FileServer(http.Dir("./static/")))
	http.Handle("/", this.router)
	err := http.ListenAndServe(host, nil)
	if err != nil {
		log.Fatal(err)
	}
}

/**
func (this WebApp) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "Hello!")
}
**/
