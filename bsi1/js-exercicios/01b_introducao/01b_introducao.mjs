// Lista de exercícios 1b - variáveis, tipos de dados e operadores

export function encontraCaracter(texto, caracterProcurado) {
  /*
    Receba um texto e retorne a localização da primeira vez que
    aparece o caracter especificado.

    Argumentos:
        texto (string): um texto qualquer.
        caracterProcurado (string): um caracter.

    Retorna:
        int: a posição do caracter procurado no texto.
    */

  return texto.indexOf(caracterProcurado);
}

export function contem(lista, itemProcurado) {
  /*
    Verifica se uma lista contém um item procurado e devolve um valor booleano.

    Argumentos:
        lista (array): uma lista de elementos de qualquer tipo.
        itemProcurado (qualquer tipo): um item a ser procurado na lista.

    Retorna:
        bool: um valor booleano (true/false), de acordo com o enunciado.
     */

  var a = 0;
  for (const i of lista) {
    if (i === itemProcurado) {
      a = 1;
    }
  }
  if (a === 1) {
    return true;
  } else {
    return false;
  }
}

export function conta(lista, itemProcurado) {
  /*
    Informa quantas ocorrências de um item existem numa lista.

    Argumentos:
        lista (array): uma lista de elementos de qualquer tipo.
        itemProcurado (qualquer tipo): um item a ser procurado na lista.

    Retorna:
        int: a quantidade de ocorrências do item procurado na lista.
     */

  var a = 0;
  for (const i of lista) {
    if (i === itemProcurado) {
      a++;
    }
  }
  return a;
}

export function éAzarado(numero) {
  /*
    O último dígito não pode ser igual ao primeiro, porque isso dá azar.

    Argumento:
        numero (string): Um numero, no formato string.

    Retorna:
        bool: true ou false, baseado no enunciado.
    */
  if (numero.substr(0, 1) === numero.substr(-1, 1)) {
    return true;
  } else {
    return false;
  }
}

export function ondernamentoContrario(lista) {
  /*
    Inverta a ordem dos elementos da lista.

    Argumento:
        lista (array): uma lista de elementos, independente de tipo.

    Retorna:
        array: uma lista com os elementos em ordem inversa.

    */

  return lista.reverse();
}

export function apagaCaracter(texto, n) {
  /*
    Seja uma string texto e um inteiro n,
    retorna uma nova string sem a posição n.

    Argumento:
        texto (string): Um texto qualquer.

    Retorna:
        string: o texto convertido, conforme o enunciado.
    */
  let letra = texto.substr(n, 1);
  texto = texto.replace(letra, "");
  return texto;
}

export function maximo(lista) {
  /*
    Retorna o maior elemento da lista.

    Argumento:
        lista (array): uma lista de elementos float

    Retorna:
        int: o maior elemento da lista.
    */

  return Math.max.apply(null, lista);
}

export function minimo(lista) {
  /*
    Retorna o menor elemento da lista.

    Argumento:
        lista (array): uma lista de elementos float

    Retorna:
        int: o menor elemento da lista.
    */
  return Math.min.apply(null, lista);
}

export function maiorMenor(lista) {
  /*
    Calcule o maior e o menor número da lista recebida.

    Argumento:
        lista (array): uma lista de elementos float

    Retorna:
        uma lista com dois números inteiros, o maior e o menor da lista.
    */
  return [Math.max.apply(null, lista), Math.min.apply(null, lista)];
}

export function mesExtenso(mes) {
  /*
    Receba um número correspondente ao mês e devolva a abreviatura do
    nome do mês, com 3 letras.
    Ex.: 1-jan, 2-fev, ..., 12-dez.
    Use uma lista com os nomes dos meses.

    Argumentos:
        mes (int): um número inteiro, entre 1 e 12, correspondendo ao mês do ano.

    Retorna:
        string: a abreviatura do nome do mês, com 3 dígitos.
    */
  let mes_extenso = [
    "jan",
    "fev",
    "mar",
    "abr",
    "mai",
    "jun",
    "jul",
    "ago",
    "set",
    "out",
    "nov",
    "dez",
  ];

  if (mes === 1) {
    return mes_extenso[0];
  } else if (mes === 2) {
    return mes_extenso[1];
  } else if (mes === 3) {
    return mes_extenso[2];
  } else if (mes === 4) {
    return mes_extenso[3];
  } else if (mes === 5) {
    return mes_extenso[4];
  } else if (mes === 6) {
    return mes_extenso[5];
  } else if (mes === 7) {
    return mes_extenso[6];
  } else if (mes === 8) {
    return mes_extenso[7];
  } else if (mes === 9) {
    return mes_extenso[8];
  } else if (mes === 10) {
    return mes_extenso[9];
  } else if (mes === 11) {
    return mes_extenso[10];
  } else if (mes === 12) {
    return mes_extenso[11];
  } else {
    return "mês inválido";
  }
}

export function dataComMesPorExtenso(data) {
  /*Faça um programa que solicite a data de nascimento (dd/mm/aaaa)
    e imprima com o nome do mês por extenso
    */

  let mes_extenso = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];

  var dia = data.substr(0, 2);
  var mes = parseFloat(data.substr(3, 2));
  var ano = data.substr(6, 4);

  if (mes === 1) {
    return dia + " de " + mes_extenso[0] + " de " + ano;
  } else if (mes === 2) {
    return dia + " de " + mes_extenso[1] + " de " + ano;
  } else if (mes === 3) {
    return dia + " de " + mes_extenso[2] + " de " + ano;
  } else if (mes === 4) {
    return dia + " de " + mes_extenso[3] + " de " + ano;
  } else if (mes === 5) {
    return dia + " de " + mes_extenso[4] + " de " + ano;
  } else if (mes === 6) {
    return dia + " de " + mes_extenso[5] + " de " + ano;
  } else if (mes === 7) {
    return dia + " de " + mes_extenso[6] + " de " + ano;
  } else if (mes === 8) {
    return dia + " de " + mes_extenso[7] + " de " + ano;
  } else if (mes === 9) {
    return dia + " de " + mes_extenso[8] + " de " + ano;
  } else if (mes === 10) {
    return dia + " de " + mes_extenso[9] + " de " + ano;
  } else if (mes === 11) {
    return dia + " de " + mes_extenso[10] + " de " + ano;
  } else if (mes === 12) {
    return dia + " de " + mes_extenso[11] + " de " + ano;
  } else {
    return "mês inválido";
  }
}

export function palindromo(texto) {
  /*
    Faça uma função que verifique se uma texto é palíndromo,
        isto é, se é igual quando lido de trás pra frente.

    Argumento:
        texto (string): Um texto qualquer.

    Retorna:
        bool: true ou false, dependendo dd texto ser palíndromo ou não.
    */

  texto = texto.toLowerCase();
  texto = texto.replaceAll(" ", "");
  texto = texto.replaceAll("!", "");

  if (texto === texto.split().reverse().join()) {
    return true;
  } else {
    return false;
  }
}

export function trocaCaixa(texto) {
  /*
    Vogais ficam em caixa alta (maiúsculas). \n
        Consoantes ficam em caixa baixa (minúsculas).

    Argumento:
        texto (string): Um texto qualquer.

    Retorna:
        string: o texto convertido, conforme o enunciado.
    */

  texto = texto.toLowerCase();
  texto = texto.replaceAll("a", "A");
  texto = texto.replaceAll("e", "E");
  texto = texto.replaceAll("i", "I");
  texto = texto.replaceAll("o", "O");
  texto = texto.replaceAll("u", "U");

  return texto;
}

export function leet(texto) {
  /*
    Converte texto em leet. Veja os testes para exemplos.
    Dicionário para usar na conversão:
        troca = {'a':'4','e':'3','g':'9','i':'1','s':'5','t':'7','o':'0'}

    Argumento:
        texto (string): Um texto qualquer.

    Retorna:
        string: o texto convertido, conforme o enunciado.
    */

  texto = texto.replaceAll("a", "4");
  texto = texto.replaceAll("e", "3");
  texto = texto.replaceAll("g", "9");
  texto = texto.replaceAll("i", "1");
  texto = texto.replaceAll("s", "5");
  texto = texto.replaceAll("t", "7");
  texto = texto.replaceAll("o", "0");
  texto = texto.replaceAll("A", "4");
  texto = texto.replaceAll("E", "3");
  texto = texto.replaceAll("G", "9");
  texto = texto.replaceAll("I", "1");
  texto = texto.replaceAll("S", "5");
  texto = texto.replaceAll("T", "7");
  texto = texto.replaceAll("O", "0");

  return texto;
}
