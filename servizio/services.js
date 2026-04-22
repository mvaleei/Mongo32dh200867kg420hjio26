var express = require("express");

var app = express();

const cors = require("cors")

app.use(cors())

app.use(express.json())

//collegamento a mongodb
const { MongoClient } = require("mongodb");

let urlConnessione = "mongodb://localhost:27017/";

let mongoClient = new MongoClient(urlConnessione);



// routing

app.get(

    "/",

    async function (req, res) {

        await mongoClient.connect();

        var database = mongoClient.db("Corso");

        var collection = database.collection("dati");

        var array = collection.find({ "userId": 5 });

        res.send(await array.toArray());

    }

);



app.post(
    "/",
    async function (req, res) {

        console.log(req.body)   //richiede il json nel body
        //console.log(req.params)     //richiede la regola di routing:"/:userId"
        await mongoClient.connect();

        var database = mongoClient.db("Corso");

        var collection = database.collection("dati");

        collection.insertOne(req.body);

        //var array = collection.find({ "userId": 5 });

        res.send("inserito");

    }
)


app.delete(
    "/:userId",
    async function (req, res) {

        //console.log(req.body)   //richiede il json nel body
        console.log(req.params.userId)     //richiede la regola di routing:"/:userId"
        await mongoClient.connect();

        var database = mongoClient.db("Corso");

        var collection = database.collection("dati");

        collection.deleteMany({ "userId": parseInt(req.params.userId) });

        res.send("cancellato");

    }
)

var server = app.listen(
    4444,
    function () {
        console.log("Server avviato")
    }
)