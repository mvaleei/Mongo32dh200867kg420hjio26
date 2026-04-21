
var http = require('http')


var server = http.createServer(
    function (req, res) {
        if (req.url == "/") {
            res.writeHead(200, { 'Content-type': "text/html" })
            res.write("<html><div>Benvenuti     &nbspnel nostro sito</div></html>")
            res.end()
            //res.end("ciao e buon lavoro")
        }
        else if (req.url == "/contatti") {
            res.writeHead(200, { 'Content-type': "text/html" })
            res.write("<html><div>Pagina dei contatti</div></html>")
            res.end()
            //res.end("ciao e buon lavoro")
        }
        else if (req.url == "/dovesiamo") {
            res.writeHead(200, { 'Content-type': "text/html" })
            res.write("<html><div>Google map della nostra posizione</div></html>")
            res.end()
            //res.end("ciao e buon lavoro")
        }
        else {
            res.end("Pagina inesistente")
        }


    }
)


server.listen(1337)

console.log("Server avviato");