// Lista de exercícios - Condições
// Utilize if-else para resolver cada problema.
// Procure não utilizar funções prontas da linguagem, use if em todas as situações possíveis.
// Tente refinar as condições, fazendo o mais simples possível.
// Use ifs aninhados (if - else - if) sempre que possível.
// Experimente usar o if ternário, após ter resolvido o problema.

export function acrescimoNotaBB(notaSozinho, notaComAjuda) {
    /*
    Recebe a nota do little brother antes de receber ajuda, e a nota
    depois que o big brother ajudou, e retorna o acréscimo que o big
    brother receberá em sua nota pela ajuda.
    O acréscimo é de 1/4 da diferença das notas, se for positivo.

    Argumentos:
        nota_sozinho (float): a nota que o aluno tirou sem ajuda.
        nota_com_ajuda (float): a nota que o aluno tirou após ter sido ajudado.

    Retorna:
        float: o acréscimo na nota obtido pelo aluno que ajudou seu colega.
    */

    let acrescimo = parseFloat(((notaComAjuda - notaSozinho) * 0.25).toFixed(1))
    if (acrescimo > 0) {
        return acrescimo
    } else {
        return 0
    }
}

export function maior3(a, b, c) {
    /*     
    Recebe três valores numéricos, e retorna o maior dos três.

    Argumentos:
        a (float): primeiro valor
        b (float): segundo valor
        c (float): terceiro valor

    Retorna:
        float: o maior entre os três valores.
    */

    if (a > b && a > c) {
        return a
    } else if ( b > a && b > c) {
        return b
    } else {
        return c
    }

}

export function menor3(a, b, c) {
    /*
    Recebe três valores numéricos, e retorna o menor dos três.

    Argumentos:
        a (float): primeiro valor
        b (float): segundo valor
        c (float): terceiro valor

    Retorna:
        float: o menor entre os três valores.
    */

    if (a < b && a < c) {
        return a
    } else if ( b < a && b < c) {
        return b
    } else {
        return c
    }  

}

export function testaLados(a, b, c) {
    /*
    Receba os três lados de um triângulo. Informe se os valores
    podem ser um triângulo. Indique, caso os lados formem um triângulo,
    se o mesmo é: equilátero, isósceles ou escaleno.

    Argumentos:
        a (float): primeiro lado
        b (float): segundo lado
        c (float): terceiro lado

    Retorna:
        string: um texto indicando o resultado,
                conforme aparece nos testes no final desse arquivo.
    */

    if (a < (b + c) && b < (a + c) && c < (a + b)) {
        if (a == b && a == c) {
            return "Triângulo equilátero"
        } else if (a != b && b != c && a != c) {
            return "Triângulo escaleno"
        } else {
            return "Triângulo isósceles"
        }
    } else {
            return "Não forma um triângulo"
        }

}

export function anoBissexto(ano) {
    /*Determine se um ano é bissexto ou não.

    Argumento:
        ano (int): um ano, no formato de 4 dígitos.

    Retorna:
        bool: true ou false (verdadeiro ou falso), caso o ano seja ou não bissexto.
    */

    
    if ((ano % 4) == 0 && ((ano % 100) != 0 | (ano % 400) == 0)) {
        return true 
    } else {
        return false
    }

}

export function maiorDiaDoMes(mes, ano) {
    /*
    Retorna o último dia do mês para um determinado ano e mês.
        Os valores possíveis são: 28, 29, 30 ou 31.
        Devem ser considerados os anos bissextos.

        Utilize a função que verifica se um ano é bissexto
        dentro dessa função, evitando duplicar o código.

    Argumentos:
        mes (int): um mês no formato de dois dígitos
        ano (int): um ano, no fomato de 4 dígitos

    Retorna:
        int: um inteiro indicando o último dia válido para aquele mês e ano.
    */

    var dia_maximo = 0
    if (mes <= 12) {
        if (((mes <= 8) && (mes % 2) != 0) | ((mes > 8) && (mes % 2) == 0)) {
            dia_maximo = 31
        } else if (mes == 2 && ((ano % 4) == 0 && ((ano % 100) != 0 | (ano % 400) == 0))) {
            dia_maximo = 29
        } else if (mes == 2) {
            dia_maximo = 28
        } else {
            dia_maximo = 30
        }
        return dia_maximo
    } else {
        return false
    }    
    
}

export function dataValida(data) {
    /*
    Recebe uma string no formato dd/mm/aaaa e informa
        um valor lógico indicando se a data é válida ou não.
        Verifica se ano é bissexto e outros detalhes.
        Confira os testes no final do arquivo para mais detalhes.

        Utilize a função de maior dia do mês dentro dessa função,
        evitando duplicar código.

    Argumentos:
        data (string): data no formato "dd/mm/aaaa".

    Retorna:
        bool: true ou false, indicando se a datá é válida ou não.
    */

    var dia = parseFloat(data.substr(0,2))
    var mes = parseFloat(data.substr(3,2))
    var ano = parseFloat(data.substr(6,4))

    if (ano <= 0 | mes <= 0) {
        return false
    } else if ((dia > 0) && dia <= maiorDiaDoMes(mes,ano)) {
        return true
    } else {
        return false
    }
}

export function delta(a, b, c) {
    /*
    Calcula delta, que é utilizado na fórmula de báskara.
        delta = b ** 2 - (4 * a * c)

    Argumentos:
        a (float): coeficiente da função
        b (float): coeficiente da função
        c (float): coeficiente da função

    Retorna:
        (float): o valor do delta
    */
    
    var delta = (b ** 2) - (4 * a * c)
    return delta
}

export function baskara(a, b, c) {
    /*
    Calcule as raízes de uma equação do segundo grau, na forma
    ax2 + bx + c. A função recebe a, b e c e faz as consistências,
    informando ao usuário nas seguintes situações:
    - Se o usuário informar o valor de A igual a zero é uma equaçao do 1o grau.
    - Se o delta calculado for negativo, a equação não possui raizes reais.
    Devolva uma tupla vazia.
    - Se o delta calculado for igual a zero a equação possui apenas uma
    raiz real. Devolva uma tupla com um único valor.
    - Se o delta for positivo, a equação possui duas raiz reais.
    Devolva uma tupla com dois valores.

    Argumentos:
        a (float): valor a da equação
        b (float): valor b da equação
        c (float): valor c da equação

    Retorna:
        tupla de floats: uma tupla, contando os valores das raízes, sendo
        uma raiz, duas raízes ou uma tupla vazia caso não existam raízes.
    */
   if (a == 0) {
       return [c / -b]
   } else if (delta(a,b,c) < 0) {
       return ("")
   } else if (delta(a,b,c) == 0) {
       return [(-b)/ 2*a]
   } else if (delta(a,b,c) > 0) {
       return [(((-b) + (delta(a,b,c) ** 0.5))/ 2*a), (((-b) - (delta(a,b,c) ** 0.5))/ 2*a)]
   }
}
