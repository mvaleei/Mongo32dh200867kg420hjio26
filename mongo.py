
import pymongo

connessione = pymongo.MongoClient("mongodb://localhost:27017")
database = connessione["Corso"]

collection =database["dati"]



leggi = collection.find()

print(type(leggi))

for documento in leggi:
    #print(type(documento))
    print(documento["_id"])


nuovo ={"Nome":"Jack","Citta":"Napoli","Posizione":"Impiegato"}

collection.insert_one(nuovo)
