

from flask import Flask,render_template,request,jsonify

app = Flask(__name__)


"""
@app.route("/")
def nomeFunzione():
    return "<marcello parametromio = 'Sono un parametro custom'>Ciao da flask</marcello>"
"""




@app.route("/")
def home():
    return render_template("Home.html")


@app.route("/inserisci")
def InserisciDati():
    return render_template("Inserisci.html")


@app.route("/ricezioneinfo", methods=["post"])
def ricevi():
    print("ho ricevuto i dati, vedrò di occuparmene")
    print(request.form["nomeDigitato"])
    print(request.form["anniDigitati"])
    nome=request.form["nomeDigitato"]
    anni =request.form["anniDigitati"]
    return render_template("Ricezione.html",nomeDaInserire = nome,anniDaInserire =anni)
    #return "Ciao"


@app.route("/api/utenti", methods=["get"])
def leggiutenti():
    dati=[{"nome":"Fabiola","lavoro":"Dirigente"},{"nome":"Marina","lavoro":"Impiegata"}]
    return jsonify(dati)


@app.route("/api/utenti", methods=["post"])
def inserisciUtenti():
    #ricevo il dato dalla chiamata
    print(request.get_json())
    return jsonify({"test":"prova"})


@app.route("/api/utenti", methods=["delete"])
def cancellaUtenti():
    #ricevo il dato dalla chiamata
    #print(request.get_json())
    oggettoRicevuto=request.get_json()
    idDaCancellare=oggettoRicevuto["id"]
    print(idDaCancellare)
    return jsonify({"test":"prova"}) 


@app.route("/api/utenti", methods=["put"])
def ModificaUtent():
    #ricevo il dato dalla chiamata
    #print(request.get_json())
    oggettoRicevuto=request.get_json()
    #idDaCancellare=oggettoRicevuto["nome"]
    print(oggettoRicevuto)
    return jsonify(oggettoRicevuto) 

if __name__ =="__main__":
    app.run()
