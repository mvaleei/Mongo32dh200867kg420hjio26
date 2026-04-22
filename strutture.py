#list
"""
frutta =["Mela","Arancia","Susina",500,"True",[50,60,122,506]]

print(type(frutta))

#frutta.sort()  #i dati devono essre compatibili

print(frutta)

frutta.append("Cocomero")

print(frutta)

fruttaNuova =["Mandarino","Mango","Ananas"]

frutta.extend(fruttaNuova)
print(frutta)
print(frutta[5][1])

persona ="Paolo,Rossi,45,Milano,Via Montenapoleone,50"

datiDivisi =persona.split(",")
print(datiDivisi)

datiNuovi =datiDivisi

datiNuovi[0]="Pieralberto"
print(datiDivisi)
print(datiNuovi)



#tuple
sport =("Pallone","Calcio","Scarpini")
#print(type(sport))

#sport.append("prova")
#sport[0]="Tennis"

#print(len(sport))

tuplaOrdinata =sorted(sport)
print(tuplaOrdinata)
print(type(tuplaOrdinata))


#set
citta = {"Roma","Firenze","Palermo","Milano","Roma"}

citta.add("Firenze")

print(citta)

setOrdinato =sorted(citta)
print(setOrdinato)


#dictionary (json)
persona ={"nome":"Carlo","anni":49,"citta":"Bergamo"}

persona["anni"]=67

print(persona)

persona["Ruolo"]="Dirigente"
print(persona)

for nomeChiave in persona:
    print(nomeChiave,persona[nomeChiave])

print(persona.keys())
"""


sport =("Pallone","Calcio","Scarpini")

nuovoSport = list(sport)
nuovoSport2 =set(sport)


