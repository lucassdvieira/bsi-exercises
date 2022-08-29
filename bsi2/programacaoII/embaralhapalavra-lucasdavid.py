import random

themeSelection = [
    ["Joinville", 'Blumenau', 'Curitiba', 'Jarágua'], 
    ['Vermelho', 'Verde', 'Azul', 'Branco'], 
    ['Flamengo', 'Corinthians', 'Criciúma', 'Fortaleza'], 
    ['Brasil', 'Argentina', 'Portugal', 'Japão'], 
    ['Porta', 'Mesa', 'Lápis', 'Relógio']
]

def shuffleWord(word):
    wordRandomized = list(word)
    random.shuffle(wordRandomized)
    return f"\nPalavra: {''.join(wordRandomized)}"


def main(word, callback):
    print(callback(word))
    encouragingSentence = [
        "Que pena :X",
        "Tente de novo, vocẽ consegue :D",
        "Triste, porém você sempre tem outra chance :D",
        "Eu acredito em você, tente novamente :P",
    ]
    printResult = f"\n{random.choice(encouragingSentence)}\nA palavra era: '{word}'\n"
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


words = ["receba", "aprender", "partilhar", "identificar", "mascarar"]
print(" ---------------------\n |PALAVRA EMBARALHADA| \n ---------------------")
print("\nTente acertar a palavra embaralhada!")
wordList = random.choice(themeSelection)
print(random.choice(wordList))
main(random.choice(wordList), shuffleWord)
