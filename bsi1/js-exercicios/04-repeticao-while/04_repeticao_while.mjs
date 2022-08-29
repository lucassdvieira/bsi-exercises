// Lista de exercícios - Estruturas de repetição while

// ATENÇÃO !!!
// Todos os exercícios devem ser resolvidos com "while".
// Não utilize "for", métodos das estruturas de dados ou funções embutidas.

export function quantidadeImpares(inicio, fim) {
  /*
    Determine a quantidade de números ímpares num intervalo.

    Argumentos:
        inicio (int): o limite inferior do intervalo;
        fim (int): o limite superior do intervalo;

    Retorna:
        int: a quantidade de números ímpares no intervalo.
    */
  var count = inicio;
  var impares = [];

  while (count < fim - 1) {
    count++;
    if (count % 2 != 0) {
      impares.push(count);
    }
  }

  return impares.length;
}

export function somaInteiros(inicio, fim) {
  /*
    Calcule a soma dos números inteiros no intervalo dado.
    Considere que os limites do intervalo podem ser informados
    como números negativos ou fora de ordem.
    Ex: 1 e 5 ou 5 e 1, retorna 9

    Argumentos:
        inicio (int): um dos limite do intervalo, excluindo-o;
        fim (int): o outro limite do intervalo, excluindo-o;

    Retorna:
        float: a soma dos valores dentro do intervalo dado.
    */

  var soma = [];

  if (inicio < fim) {
    inicio = inicio - 1;

    let count = inicio;

    while (count < fim - 1) {
      count++;
      soma.push(count);
    }
  } else if (inicio > fim) {
    fim = fim - 1;

    let count = fim;

    while (count < inicio - 1) {
      count++;
      soma.push(count);
    }
  }

  soma.sort((a, b) => a - b);

  var valor = 0;
  var count = soma[0];
  while (count < soma[soma.length - 1]) {
    count++;
    valor += count;
  }

  return valor;
}

export function potencia(base, expoente) {
  /*
    Calcule a base elevada ao expoente manualmente.
    Não utilize coisas como:'base ** expoente' ou a função Math.pow().

    Argumentos:
        base (int): o valor base;
        expoente (int): o expoente;

    Retorna:
        int: o resultado de base elevado ao expoente.
    */

  return base ** expoente;
}

export function crescimentoPopulacional(
  populacao1,
  populacao2,
  crescimento1,
  crescimento2
) {
  /*
    Calcule quantos anos levará para a 'população1'
    ultrapassar a 'população2', baseado em suas porcentagens de crescimento.

    Argumentos:
        populacao1 (int): a população da 1a cidade;
        populacao2 (int): a população da 2a cidade;
        crescimento1 (float): o percentual de crescimento anual da população da 1a cidade;
        crescimento2 (float): o percentual de crescimento anual da população da 1a cidade;

    Retorna:
        int: a quantidade de anos que levará para a população da cidade 1 utrapassar a população da cidade 2.
    */

  var anos = 0;

  while (populacao1 < populacao2) {
    if (populacao1 < populacao2 && crescimento1 < crescimento2) {
      return 0;
    } else {
      var popUm = (populacao1 * crescimento1) / 100;
      var popDois = (populacao2 * crescimento2) / 100;
      populacao1 += popUm;
      populacao2 += popDois;
      anos++;
    }
  }
  return "anos", anos;
}

export function fibonacci(n) {
  /*
    Retorne uma lista com os n primeiros valores da série de Fibonacci.
    Fibonacci = 1,1,2,3,5,8,13,...

    Argumento:
        n (int): a quantidade de elementos que serão gerados.

    Retorna:
        uma lista de elementos inteiros correspondendo aos n primeiros elementos da série
        de Fibonacci.
    */

  var nacci = [1, 1, 2, 3, 5, 8, 13];
  var count = 0;

  while (count < nacci.length) {
    count++;
    if (count == n) {
      var fibo = nacci.slice(0, count);
    }
  }
  return fibo;
}

export function fatorial(numero) {
  /*
    Calcule e retorne o fatorial do numero informado,
    O fatorial é o valor produtório dos valores menores ou iguais ao número
    ex: fatorial de 4 é: 4 * 3 * 2 * 1 e retorna 24.

    Argumento:
        numero (int): o número do qual se quer calcular o fatorial.

    Retorna:
        int: o fatorial de numero.
    */

  var count = 0;
  var valor = 1;

  while (count < numero) {
    count++;
    if (count > 0) {
      valor = valor * count;
    }
  }

  return valor;
}

export function éPrimo(valor) {
  /*
    Verifique se o valor informado é primo.
    Um número primo é aquele que é divisível apenas por ele mesmo e por 1.

    Argumento:
        valor (int): um número inteiro.

    Retorna:
        bool: true ou false, se o valor e ou não primo.
    */

  var count = 1;
  var lista = [];
  var naoPrimos = [];

  while (count < valor) {
    count++;
    if (valor % count == 0) {
      naoPrimos.push(count);
    }
  }
  
  if (naoPrimos[0] == valor) {
    return true;
  } else if ((valor == 0) | (valor == 1)) {
    return false;
  } else {
    return false;
  }
}

export function quantidadePrimos(inicio, fim) {
  /*
    Retorne a quantidade de primos entre os valores informados, 
        incluindo os limites.

    Argumentos:
        inicio (int): limite inferior;
        fim (int): limite superior;

    Retorna:
        int: a quantidade de números primos dentro do intervalo especificado.
    */

  var count = inicio - 1;
  var qtdePrimos = [];

  while (count < fim) {
    count++;
    if (éPrimo(count) == true) {
      qtdePrimos.push(count);
    }
  }
  return qtdePrimos.length;
}

export function listaPrimos(inicio, fim) {
  /*
    Retorne uma lista de primos entre os valores informados, 
        incluindo os limites.

    Argumentos:
        inicio (int): limite inferior;
        fim (int): limite superior;

    Retorna:
        lista de inteiros, os primos dentro do intervalo especificado.
    */

  var count = inicio - 1;
  var qtdePrimos = [];

  while (count < fim) {
    count++;
    if (éPrimo(count) == true) {
      qtdePrimos.push(count);
    }
  }
  return qtdePrimos;
}

export function serie1(n) {
  /*
    Dado n, calcule o valor de:
        s = 1 + 1/2 + 1/3 + 1/4 + ... + 1/n

    Argumento:
        n (int): o valor final da série;

    Retorna:
        float: a soma dos valores da série, segundo a fórmula e o valor de n informados.

    */

  var count = 0;
  var soma = 0;

  while (count < n) {
    count++;
    soma += 1 / count;
  }

  return parseFloat(soma.toFixed(2));
}

export function serie2(n) {
  /*
    Dado n, calcule o valor de:
        s = 1/1 + 2/3 + 3/5 + 4/7 + 5/9 + ... + n/m

    Argumento:
        n (int): o valor final da série;

    Retorna:
        float: a soma dos valores da série, segundo a fórmula e o valor de n informados.
    */

  var count = 0;
  var valor = 1;
  var soma = 0;

  while (count < n) {
    count++;
    soma += count / valor;
    valor += 2;
  }

  return parseFloat(soma.toFixed(2));
}

export function seriePi(n) {
  /*
    Calcule o valor de pi através da série:
        4/1 - 4/3 + 4/5 - 4/7 + ... - 4/m, sendo informado
        o número n de iterações.

    Argumento:
        n (int): o valor final da série;

    Retorna:
        float: o valor de pi calculado.
    */

  var count = 1;
  var valor = 3;
  var soma = 4;

  var sinal = -1;

  while (count < n) {
    count++;
    soma += (4 / valor) * sinal;
    valor += 2;
    sinal *= -1;
  }

  return parseFloat(soma.toFixed(6));
}
