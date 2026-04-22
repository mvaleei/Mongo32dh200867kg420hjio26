
var http = require("http")
var urlDaLeggere = require("url")

var fs = require("fs")

var server = http.createServer(onRequest).listen(4444)

function onRequest(req, res) {

    var path = urlDaLeggere.parse(req.url).pathname;

    //console.log(path);

    switch (path) {
        case "/":
            fs.readFile(
                __dirname + "/" + "home.html",
                function (errore, contenuto) {
                    if (errore) {
                        res.write({ "Content-type": "text/plain" })
                        res.end()
                    }
                    res.writeHead(200)
                    res.end(contenuto)
                }

            )
            break;
        case "/Dovesiamo.html":
            fs.readFile(
                __dirname + "/" + "Dovesiamo.html",
                function (errore, contenuto) {
                    if (errore) {
                        res.write({ "Content-type": "text/plain" })
                        res.end()
                    }
                    res.writeHead(200)
                    res.end(contenuto)
                }

            )
            break;
        case "/Mission.html":
            fs.readFile(
                __dirname + "/" + "Mission.html",
                function (errore, contenuto) {
                    if (errore) {
                        res.write({ "Content-type": "text/plain" })
                        res.end()
                    }
                    res.writeHead(200)
                    res.end(contenuto)
                }

            )
            break;
        default:
            res.writeHead(404);
            res.end("Attenzione pagina non trovata")
            break;
    }


}




console.log("server avviato")