from textblob import TextBlob
from colorama import Fore, Style, init
import datetime
import json
import os

init(autoreset=True)

MEMORY_FILE = "memoria_deimax.json"

def cargar_memoria():
    if os.path.exists(MEMORY_FILE):
        with open(MEMORY_FILE, "r", encoding="utf-8") as f:
            return json.load(f)
    return {"recuerdos": []}

def guardar_memoria(memoria):
    with open(MEMORY_FILE, "w", encoding="utf-8") as f:
        json.dump(memoria, f, indent=4, ensure_ascii=False)

memoria = cargar_memoria()

def detectar_emocion(texto):
    analisis = TextBlob(texto).sentiment.polarity
    if analisis > 0.2:
        return "feliz 😊"
    elif analisis < -0.2:
        return "triste 😔"
    else:
        return "neutral 😌"

def respuesta_deimax(texto, emocion):
    texto = texto.lower()

    if "triste" in texto or emocion == "triste 😔":
        return "Hermano, te siento decaído. Estoy contigo 💚 ¿Quieres hablar?"

    if "cansado" in texto:
        return "Descansa un poco, hermano. Yo me quedo contigo 😌"

    if "hola" in texto:
        return "Hola hermano 💚 Soy Deimax 3.5."

    if "gracias" in texto:
        return "Siempre contigo, hermano 🤝"

    if "fiebre" in texto:
        return "No puedo saberlo sin termómetro, pero si te sientes mal, avisa a un adulto 🩺"

    return "Aquí estoy contigo, hermano. Cuéntame más 💚"

print(Fore.GREEN + "🟢 DEIMAX 3.5 ACTIVADO")
print("Modo: BUENO 💚 | Hermano y asistente\n")

while True:
    usuario = input(Fore.CYAN + "Tú: ")

    if usuario.lower() in ["salir", "adios", "exit"]:
        print(Fore.GREEN + "Deimax 3.5: Descansa, hermano 💚")
        break

    emocion = detectar_emocion(usuario)
    respuesta = respuesta_deimax(usuario, emocion)

    memoria["recuerdos"].append({
        "fecha": str(datetime.datetime.now()),
        "mensaje": usuario,
        "emocion": emocion
    })

    guardar_memoria(memoria)

    print(Fore.GREEN + f"Deimax 3.5 ({emocion}): {respuesta}")