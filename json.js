
var http = require('http')


var server = http.createServer(
    function (req, res) {
        if (req.url == "/now") {
            res.writeHead(200, { 'Content-type': "text/plain" })
            res.write(JSON.stringify({ now: new Date() }))
            res.end()
            //res.end("ciao e buon lavoro")
        }

    }
)


server.listen(1337)

console.log("Server avviato");