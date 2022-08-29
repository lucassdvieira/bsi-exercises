#Marco André Mendes <marcoandre@gmail.com>
# Lista de exercícios de fixação 5c

# Nessa nums você pode resolver os problemas utilizando o que você preferir:
# if, else, elif, for, while, métodos da nums e string, métodos embutidos no Python.

# O objetivo é fixar todo o conteúdo já visto e desenvolver a lógica e o 
# raciocínio com problemas novos.


def perto_de_10(n):
    """
    Seja um n não negativo, retorna True se o número está a distância de
    pelo menos dois de um múltiplo de dez.
    Dica: use a função resto da divisão.
    perto_de_10(12) -> True
    perto_de_10(17) -> False
    perto_de_10(19) -> True
    """
    return True if n % 10 in [0,1,2,8,9] else False

def soma_maluca(a, b, c):
    """
    Some os números inteiros a, b, e c
    Se algum número aparecer repetido ele não conta na soma
    soma_maluca(1, 2, 3) -> 6
    soma_maluca(3, 2, 3) -> 2
    soma_maluca(3, 3, 3) -> 0
    """
    numsFormatted = []
    for i in [a,b,c]:
      numsVariable = [a,b,c]
      numsVariable.remove(i)
      if i not in numsVariable:
        numsFormatted.append(i)
    return sum(numsFormatted)
    

def soma_sortuda(a, b, c):
    """
    Soma três inteiros a, b, c
    Se aparecer um 13 ele não conta e todos os da sua direita também não
    soma_sortuda(1, 2, 3) -> 6
    soma_sortuda(1, 2, 13) -> 3
    soma_sortuda(1, 13, 3) -> 1
    """
    nums, newList = [a,b,c], []
    for i in nums:
      if i == 13:
        break
      newList.append(i)
    return sum(newList)
  
def duplica_caracter(s):
    """
    Retorna os caracteres da string original duplicados
    duplica_caracter('The') -> 'TThhee'
    duplica_caracter('AAbb') -> 'AAAAbbbb'
    duplica_caracter('Hi-There') -> 'HHii--TThheerree'
    """
    newStr = ''
    for i in s:
      newStr += i*2
    return newStr

def conta_palavra(s, palavra):
    """
    Verifique quantas ocorrências de uma palavra há numa s
    s = 'ana e mariana gostam de banana'
    palavra = 'ana'
    conta_palavra ('ana e mariana gostam de banana', 'ana') == 4
    """
    c, c2 = 0, 0
    s += '1'
    while c < len(s):
      if s[c:c+len(palavra)] == palavra:
        c2 += 1
      c+=1
    return c2

def conta_oi(s):
    """
    conta o número de vezes que aparece a string 'oi'
    conta_oi('abc oi ho') -> 1
    conta_oi('ABCoi oi') -> 2
    conta_oi('oioi') -> 2
    """
    return s.count('oi')

def gato_e_rato(s):
    """
    verifica se o aparece o mesmo número de vezes 'gato' e 'rato'
    gato_e_rato('gatorato') -> True
    gato_e_rato('gatogato') -> False
    gato_e_rato('1gato1gadorato') -> True
    """
    return s.count('gato') == s.count('rato')

def conta_bola(s):
    """
    conta quantas vezes aparece 'bola'
    a letra 'l' pode ser trocada por outra qualquer
    assim 'bota' ou 'boca' também são contadas como 'bola'
    conta_bola('aaabolabbb') -> 1
    conta_bola('bolaxxbola') -> 2
    conta_bola('bocaxxbota') -> 2
    """
    c, count = 0, 0
    s += '1'
    while c < len(s):
      if s[c:c+2] == 'bo' and s[c+3] == 'a':
        count += 1
      c+=1
    return count


def fim_do_outro(a, b):
    """
    As duas strings devem ser convertidas para minúsculo via lower()
    depois disso verifique se no final da string b ocorre a string a
    ou se no final da string a ocorre a string b
    fim_do_outro('Oiabc', 'abc') -> True
    fim_do_outro('AbC', 'OiaBc') -> True
    fim_do_outro('abc', 'abXabc') -> True
    """
    a,b = a.lower(), b.lower()
    inversedA, inversedB = a[::-1], b[::-1]
    lastA, lastB = inversedA[:len(b)], inversedB[:len(a)]
    normalA, normalB = lastA[::-1], lastB[::-1] 
    return True if normalA == b or normalB == a else False
  
def conta_pares(nums):
    """
    Retorna a quantidade de números pares da nums
    conta_pares([2, 1, 2, 3, 4]) -> 3
    conta_pares([2, 2, 0]) -> 3
    conta_pares([1, 3, 5]) -> 0
    """
    c = 0
    for i in nums:
      if i % 2 == 0:
        c += 1    
    return c

def soma_13(nums):
    """
    Retorna a soma dos números de uma nums
    13 dá azar, você deverá ignorar o 13 e todos os números à sua direita
    soma_13([1, 2, 2, 1]) -> 6
    soma_13([1, 1]) -> 2
    soma_13([1, 2, 2, 1, 13]) -> 6
    soma_13([13, 1, 2, 3, 4]) -> 0
    """
    newList = []
    for i in nums:
      if i == 13:
        break
      newList.append(i)
    return sum(newList)

def tem_22(nums):
    """
    Verifica se na nums de números inteiros aparecem dois 2 consecutivos
    tem_22([1, 2, 2]) -> True
    tem_22([1, 2, 1, 2]) -> False
    tem_22([2, 1, 2]) -> False
    """
    c = 1
    while c < len(nums):
      if nums[c] == nums[c-1]:
        return True
      c += 1
    return False

# Área de testes: só mexa aqui se souber o que está fazendo!
acertos = 0
total = 0


def test(obtido, esperado):
    global acertos, total
    total += 1
    if obtido != esperado:
        prefixo = "\033[31m%s" % ("Falhou")
    else:
        prefixo = "\033[32m%s" % ("Passou")
        acertos += 1
    print(
        "%s Esperado: %s \tObtido: %s\033[1;m" % (prefixo, repr(esperado), repr(obtido))
    )


def main():
    print("perto_de_10")
    test(perto_de_10(12), True)
    test(perto_de_10(17), False)
    test(perto_de_10(19), True)
    test(perto_de_10(31), True)
    test(perto_de_10(6), False)
    test(perto_de_10(10), True)
    test(perto_de_10(11), True)
    test(perto_de_10(21), True)
    test(perto_de_10(22), True)
    test(perto_de_10(23), False)
    test(perto_de_10(54), False)
    test(perto_de_10(155), False)
    test(perto_de_10(158), True)
    test(perto_de_10(3), False)
    test(perto_de_10(1), True)

    print("soma_maluca")
    test(soma_maluca(1, 2, 3), 6)
    test(soma_maluca(3, 2, 3), 2)
    test(soma_maluca(3, 3, 3), 0)
    test(soma_maluca(9, 2, 2), 9)
    test(soma_maluca(2, 2, 9), 9)
    test(soma_maluca(2, 9, 2), 9)
    test(soma_maluca(2, 9, 3), 14)
    test(soma_maluca(4, 2, 3), 9)
    test(soma_maluca(1, 3, 1), 3)

    print("soma_sortuda")
    test(soma_sortuda(1, 2, 3), 6)
    test(soma_sortuda(1, 2, 13), 3)
    test(soma_sortuda(1, 13, 3), 1)
    test(soma_sortuda(1, 13, 13), 1)
    test(soma_sortuda(6, 5, 2), 13)
    test(soma_sortuda(13, 2, 3), 0)
    test(soma_sortuda(13, 2, 13), 0)
    test(soma_sortuda(13, 13, 2), 0)
    test(soma_sortuda(9, 4, 13), 13)
    test(soma_sortuda(8, 13, 2), 8)
    test(soma_sortuda(7, 2, 1), 10)
    test(soma_sortuda(3, 3, 13), 6)

    print("duplica_caracter")
    test(duplica_caracter("The"), "TThhee")
    test(duplica_caracter("AAbb"), "AAAAbbbb")
    test(duplica_caracter("Hi-There"), "HHii--TThheerree")
    test(duplica_caracter("Word!"), "WWoorrdd!!")
    test(duplica_caracter("!!"), "!!!!")
    test(duplica_caracter(""), "")
    test(duplica_caracter("a"), "aa")
    test(duplica_caracter("."), "..")
    test(duplica_caracter("aa"), "aaaa")

    print("conta palavra")
    test(conta_palavra("ana e mariana gostam de banana", "ana"), 4)
    test(conta_palavra("uma arara ou duas araras", "ara"), 4)

    print("conta_oi")
    test(conta_oi("abc oi ola"), 1)
    test(conta_oi("ABCoi oi"), 2)
    test(conta_oi("oioi"), 2)
    test(conta_oi("oiOIoi"), 2)
    test(conta_oi(""), 0)
    test(conta_oi("o"), 0)
    test(conta_oi("oi"), 1)
    test(conta_oi("Oi opa uhll OI ou aoI"), 0)
    test(conta_oi("oiho opa OIOIoi"), 2)

    print("gato_e_rato")
    test(gato_e_rato("gatorato"), True)
    test(gato_e_rato("gatogato"), False)
    test(gato_e_rato("1gato1gadorato"), True)
    test(gato_e_rato("gatoxxratoxxxrato"), False)
    test(gato_e_rato("gatoxratoxratoxgato"), True)
    test(gato_e_rato("gatoxratoxratoxga"), False)
    test(gato_e_rato("ratoratogato"), False)
    test(gato_e_rato("ratooggato"), True)
    test(gato_e_rato("rato"), False)
    test(gato_e_rato("gato"), False)
    test(gato_e_rato("ga"), True)
    test(gato_e_rato("g"), True)
    test(gato_e_rato(""), True)

    print("conta_bola")
    test(conta_bola("aaabolabbb"), 1)
    test(conta_bola("bolaxxbola"), 2)
    test(conta_bola("bozaxxbopa"), 2)
    test(conta_bola("bozfxxbopa"), 1)
    test(conta_bola("xxbozayybop"), 1)
    test(conta_bola("bozbop"), 0)
    test(conta_bola("abcxyz"), 0)
    test(conta_bola("bola"), 1)
    test(conta_bola("ola"), 0)
    test(conta_bola("c"), 0)
    test(conta_bola(""), 0)
    test(conta_bola("AAbolaBBbolaCCcboraDD"), 3)
    test(conta_bola("AAbolaBBbolaCCcborfDD"), 2)
    test(conta_bola("boAbolaBbolacboraDD"), 3)

    print("fim_do_outro")
    test(fim_do_outro("Oiabc", "abc"), True)
    test(fim_do_outro("AbC", "OiaBc"), True)
    test(fim_do_outro("abc", "abXabc"), True)
    test(fim_do_outro("Oiabc", "abcd"), False)
    test(fim_do_outro("Oiabc", "bc"), True)
    test(fim_do_outro("Oiabcx", "bc"), False)
    test(fim_do_outro("abc", "abc"), True)
    test(fim_do_outro("xyz", "12xyz"), True)
    test(fim_do_outro("yz", "12xz"), False)
    test(fim_do_outro("Z", "12xz"), True)
    test(fim_do_outro("12", "12"), True)
    test(fim_do_outro("abcXYZ", "abcDEF"), False)
    test(fim_do_outro("ab", "ab12"), False)
    test(fim_do_outro("ab", "12ab"), True)

    print("conta_pares")
    test(conta_pares([2, 1, 2, 3, 4]), 3)
    test(conta_pares([2, 2, 0]), 3)
    test(conta_pares([1, 3, 5]), 0)
    test(conta_pares([]), 0)
    test(conta_pares([11, 9, 0, 1]), 1)
    test(conta_pares([2, 11, 9, 0]), 2)
    test(conta_pares([2]), 1)
    test(conta_pares([2, 5, 12]), 2)

    print("soma_13")
    test(soma_13([1, 2, 2, 1]), 6)
    test(soma_13([1, 1]), 2)
    test(soma_13([1, 2, 2, 1, 13]), 6)
    test(soma_13([1, 2, 13, 2, 1, 13]), 3)
    test(soma_13([13, 1, 2, 13, 2, 1, 13]), 0)
    test(soma_13([]), 0)
    test(soma_13([13]), 0)
    test(soma_13([13, 13]), 0)
    test(soma_13([13, 0, 13]), 0)
    test(soma_13([13, 1, 13]), 0)
    test(soma_13([5, 7, 2]), 14)
    test(soma_13([5, 13, 2]), 5)
    test(soma_13([0]), 0)
    test(soma_13([13, 0]), 0)

    print("tem_22")
    test(tem_22([1, 2, 2]), True)
    test(tem_22([1, 2, 1, 2]), False)
    test(tem_22([2, 1, 2]), False)
    test(tem_22([2, 2, 1, 2]), True)
    test(tem_22([1, 3, 2]), False)
    test(tem_22([1, 3, 2, 2]), True)
    test(tem_22([2, 3, 2, 2]), True)
    test(tem_22([4, 2, 4, 2, 2, 5]), True)
    test(tem_22([1, 2]), False)
    test(tem_22([2, 2]), True)
    test(tem_22([2]), False)
    test(tem_22([]), False)
    test(tem_22([3, 3, 2, 2]), True)
    test(tem_22([5, 2, 5, 2]), False)

if __name__ == "__main__":
    main()
    print(
        "\n%d Testes, %d Ok, %d Falhas: Nota %.1f"
        % (total, acertos, total - acertos, float(acertos * 10) / total)
    )
    if total == acertos:
        print("Parabéns, seu programa rodou sem falhas!")