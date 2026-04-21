var http = require('http')

const url = require("url");


var server = http.createServer(
    function (req, res) {


        //gestisco i dati ricevuti in foramto querystring
        let datiRicevuti = url.parse(req.url, true).query;

        console.log(datiRicevuti);

        let messaggio = `Ciao sono: "nome":${datiRicevuti.nome} - ed ho 'anni':${datiRicevuti.anni}`   //backtik alt+96


        res.writeHead(200, { 'Content-type': "text/plain" })
        res.end("ciao e buon lavoro: " + messaggio)
    }
)


server.listen(1337)

console.log("Server avviato");