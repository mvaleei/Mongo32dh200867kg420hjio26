
var http = require('http')


var server = http.createServer(
    function (req, res) {
        res.writeHead(200, { 'Content-type': "text/plain" })
        res.end("ciao e buon lavoro")
    }
)


server.listen(1337)

console.log("Server avviato");


/*
var server = "ciao"
console.log(typeof (server))

server = 200
console.log(typeof (server))


server = true;

console.log(typeof (server))
server = [1500, "ciao", true]
console.log(typeof (server))

server = { "nome": "Carlo", "anni": 25 }
console.log(typeof (server))

server = [
    { "dati": "test", "prova": 1500 },
    { "cognome": "rossi" }
]

console.log(typeof (server))

console.log(server.length)

//server =true;
//console.log(server.length)

server = (anni) => { console.log(anni) }

console.log(typeof (server))

function somma() {
    console.log("funzione")
}

function totale(funzionericevuta) {

}

totale(somma())

*/

