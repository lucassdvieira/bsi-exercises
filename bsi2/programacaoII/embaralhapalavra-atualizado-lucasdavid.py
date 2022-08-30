import random

themeSelection = {
    1: {
        1: ["São Paulo", "Rio de Janeiro", "Curitiba"],
        2: ["Cricíuma", "Joinville", "Jarágua"],
        3: ["Caraguatatuba", "Paranapanema", "Itapororoca"],
    },
    2: {
        1: ["Rosa", "Verde", "Azul"],
        2: ["Vermelho", "Açafrão", "Caramelo"],
        3: ["Aspargo", "Borgonha", "Carmesim"],
    },
    3: {
        1: ["Ajax", "Bahia", "Avaí"],
        2: ["Flamengo", "Corinthians", "Fortaleza"],
        3: ["Chapecoense", "Novorizontino", "Athletico Paranaense"],
    },
    4: {
        1: ["Brasil", "Egito", "Chile"],
        2: ["Espanha", "Irlanda", "Portugal"],
        3: ["Afeganistão", "Azerbaijão", "Cazaquistão"],
    },
    5: {
        1: ["Porta", "Mesa", "Lápis"],
        2: ["Espada", "Armário", "Abajur"],
        3: ["Gramofone", "Liquidificador", "Castiçal"],
    },
}

encouragingSentence = [
    "Que pena :X",
    "Tente de novo, vocẽ consegue :D",
    "Triste, porém você sempre tem outra chance :D",
    "Eu acredito em você, tente novamente :P",
]


def wordFiltered():
    themeText = "Escolha um tema: \n\n 1 - Cidades\n 2 - Cores\n 3 - Times de Futebol\n 4 - Países\n 5 - Objetos\n\nDigite o número do tema escolhido: "
    diffText = "Escolha um nível de dificuldade: \n\n 1 - Iniciante\n 2 - Intermediário\n 3 - Avançado\n\nDigite o número da dificuldade escolhida: "

    inputTheme, inputDiff = 0, 0
    while inputTheme not in [1, 2, 3, 4, 5]:
        inputTheme = int(input(themeText))
    while inputDiff not in [1, 2, 3]:
        inputDiff = int(input(diffText))
    themeDiff = themeSelection[inputTheme][inputDiff]
    word = random.choice(themeDiff).lower()
    return word


def shuffleWord(word):
    wordRandomized = list(word)
    random.shuffle(wordRandomized)
    return f"\nPalavra: {''.join(wordRandomized)}"


def main(word, callback):
    print(callback(word))
    printResult = f"\n{random.choice(encouragingSentence)}\nA palavra era: {word}\n"
    c = 0
    while c < 5:
        print(f"\nVocê têm {str(5-c)} chances\n") if (5 - c) > 1 else print(
            "\nÚltima chance!\n"
        )
        textInput = input("Digite a palavra: ").lower()
        if textInput == word:
            printResult = f"\nParabéns! Você acertou.\nSeu número de tentativas foi: {str(c+1)}/5\n"
            break
        c += 1
    print(printResult)


print(" ---------------------\n |PALAVRA EMBARALHADA| \n ---------------------")
print("\nTente acertar a palavra embaralhada!")
main(wordFiltered(), shuffleWord)
