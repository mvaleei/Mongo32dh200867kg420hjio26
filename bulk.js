const operazione = [
    { insertOne: { document: { "razza": "Lupo", "anni": 5 } } },
    { insertOne: { document: { "razza": "Barboncino", "anni": 1, "Nome": "Lola" } } },
    { updateOne: { filter: { "razza": "Lupo" }, update: { $set: { "anni": 1, "Nome": "Rocky"} }, upsert: true } },
    { deleteOne: { filter: { "razza": "Barboncino" } } },
    { replaceOne: { filter: { "razza": "Lupo" }, replacement: { "Adottante": "MArio Rossi", "Citta": "Ancona", "Nome": "Fido" }, upsert: true } },
]

db.nomecollezione.bulkWrite(operazione, { writeConcern: { w: "majority", wtimeout: 50 }, ordered: false })