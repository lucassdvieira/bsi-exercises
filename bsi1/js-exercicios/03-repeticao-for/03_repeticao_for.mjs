// Lista de exercícios - Estruturas de repetição For

// ATENÇÃO !!!
// Todos os exercícios devem ser resolvidos com "for". Não utilize while ou funções prontas.
// Utilize "for (const item of array)" para acessar os itens do array.
// Utilize "for (const [i, item] of array.entries()) para acessar os índices e elementos do array.
// Utilize "for (const item in objeto)" acessar os índices do array.
// Uitlize "for (let i = 0; i < n; i++)" nas demais situações.

export function soma(lista) {
  /*
    Retorna a soma dos elementos de uma lista.

    Argumentos:
        lista (lista de floats): Uma lista de valores float.

    Retorna:
        float: a soma dos elementos da lista.
    */
  var valor = 0;
  console.log(lista);
  for (let i of lista) {
    valor += i;
    console.log(valor);
  }
  return valor;
}

export function media(lista) {
  /*
    Retorna a média das elementos da lista.

    Argumento:
        lista (array): uma lista de elementos (float).

    Retorna:
        float: a média das elementos.
     */

  return soma(lista) / lista.length;
}

export function mediaSaltosLista(saltos) {
  /*
    Receba uma lista com os saltos de um atleta e calcule a média \n
        dos seus saltos, sabendo que o melhor e o pior saltos são desconsiderados.

    Argumento:
        saltos (array): uma lista com os saltos (float) de um atleta.

    Retorna:
        float: a média dos saltos, de acordo com o enunciado.
    */

  var maior = 0;
  var menor = 0;

  // PEGA O MAIOR E MENOR NUMERO DA LISTA

  for (let x of saltos) {
    if (x == Math.max.apply(null, saltos)) {
      maior = x;
    } else if (x == Math.min.apply(null, saltos)) {
      menor = x;
    }
  }

  // FAZ O MEIO DE CAMPO

  saltos.splice(saltos.indexOf(maior), 1);
  saltos.splice(saltos.indexOf(menor), 1);

  // chute de primeira, caixa

  return parseFloat(media(saltos).toFixed(1));
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

export function quantidadeImpares(inicio, fim) {
  /*
    Determine a quantidade de números ímpares num intervalo, excluindo os valores limite do intervalo.

    Argumentos:
        inicio (int): o limite inferior do intervalo, excluindo-o;
        fim (int): o limite superior do intervalo, excluindo-o;

    Retorna:
        int: a quantidade de números dentro do intervalo dado.
    */

  var lista = [];

  for (var i = 0; i < fim; i++) {
    if (i > inicio) {
      if (i % 2 != 0) {
        lista.push(i);
      }
    }
  }
  return lista.length;
}

export function somaInteiros(inicio, fim) {
  /*
    Calcule a soma dos números inteiros no intervalo dado.
    Considere que os limites do intervalo podem ser informados
    como números negativos ou fora de ordem e você terá que tratar isso.
    Ex: 1 e 5 ou 5 e 1, retorna 9

    Argumentos:
        inicio (int): um dos limite do intervalo, incluindo-o;
        fim (int): o outro limite do intervalo, incluindo-o;

    Retorna:
        float: a soma dos valores dentro do intervalo dado.
    */
  var lista = [];
  if (inicio < fim) {
    for (let i = inicio; i <= fim; i++) {
      lista.push(i);
    }
  } else if (inicio > fim) {
    for (let i = fim; i <= inicio; i++) {
      lista.push(i);
    }
  }
  return soma(lista);
}

export function serie(n) {
  /*
    Dado n, calcule o valor de
    s = 1 + 1/2 + 1/3 + 1/4 + ... + 1/n

    Argumento:
        n (int): o valor final da série;

    Retorna:
        float: a soma dos valores da série, segundo a fórmula e o valor de n informados.
    */

  var s = 0;
  for (let i = 0; i <= n; i++) {
    if (i != 0) {
      s += 1 / i;
    }
  }
  return parseFloat(s.toFixed(2));
}

export function inverteOrdemElementos(lista) {
  /*
    Inverta a ordem dos elementos da lista.

    Argumento:
        lista (array): uma lista de elementos, independente de tipo.

    Retorna:
        array: uma lista com os elementos em ordem inversa.
    */

  var listaInvertida = [];

  for (let i of lista.reverse()) {
    listaInvertida.push(i);
  }
  return listaInvertida;
}

export function intercalaListas(lista1, lista2) {
  /*
    Usando 'lista1' e 'lista2', ambas do mesmo comprimento,
    crie uma nova lista composta pelo intercalamento entre as duas.
    Intercalar significa que a nova lista terá o 1o elemento da 1a lista,
    seguido do 1o elemento da 2a lista, seguido do 2o elemento da 1o lista,
    seguido do 2o elemento da 2a lista e assim por diante.

    Argumentos:
        lista1 (array): uma lista de elementos, independente de tipo;
        lista2 (array): uma lista de elementos, independente de tipo;

    Retorna:
        array: uma lista com os elementos intercalados das duas listas recebidas.
    */

  var listaFinal = [];
  var total = 0;

  if (lista1.length >= lista2.length) {
    total = lista1.length;
  } else if (lista2.length >= lista1.length) {
    total = lista2.length;
  }

  for (let i = 0; i <= total; i++) {
    let valorLista1 = lista1[i];
    let valorLista2 = lista2[i];

    if (valorLista1) {
      listaFinal.push(valorLista1);
    }
    if (valorLista2) {
      listaFinal.push(valorLista2);
    }
  }

  return listaFinal;
}
export function separaParesImpares(lista) {
  /*
    Separe em listas os pares e ímpares, dos inteiros da lista recebida.

    Argumento:
        lista (lista de inteiros): uma lista de elementos int;

    Retorna:
        uma tupla com duas listas de inteiros sendo a primeira uma lista com os pares
        e a segunda uma ista com os ímpares.
    */

  lista.sort((a, b) => a - b);

  var listaImpares = [];
  var listaPares = [];

  for (let i of lista) {
    if (i % 2 != 0) {
      listaImpares.push(i);
    } else {
      listaPares.push(i);
    }
  }

  var listaFinal = listaPares + listaImpares;

  return listaFinal;
}

export function maiorMenor(lista) {
  /*
    Calcule o maior e o menor número da lista recebida.

    Argumento:
        lista (array): uma lista de elementos float;

    Retorna:
        uma tupla com dois números inteiros, o maior e o menor da lista.
    */

  lista.sort((a, b) => b - a);

  var maiorMenor = [lista[0], lista[lista.length - 1]];

  return maiorMenor;
}

export function darTroco(valorAPagar, valorEmDinheiro) {
  /*
    Calcule o troco a devolver ao cliente com notas de 1,2,5,10,20,50.
        A resposta deve conter a quantidade de cada nota, sem considerar centavos.

    Argumentos:
        valorAPagar (float): o valor da conta
        valorEmDinheiro (float): o valor que foi dado para pagar a conta.

    Retorna:
        uma lista de uma tuplas, onde cada dupla contém dois valores:
        o valor da nota e a quantidade daquela nota.
        Se a quantidade de notas for igual a zero, não deve aparecer na lista.
    */

  var troco = valorEmDinheiro - valorAPagar;
  var cinquentaReais = [];
  var vinteReais = [];
  var dezReais = [];
  var cincoReais = [];
  var doisReais = [];
  var umReal = [];

  var cedulaTroco = [];

  for (let i = 0; i <= troco; i++) {
    if (Math.floor(troco / 50) >= i) {
      cinquentaReais.push(50, Math.floor(troco / 50));
      troco = troco - 50 * Math.floor(troco / 50);
      if (troco == 0) {
        break;
      }

      if (Math.floor(troco / 20) >= i) {
        vinteReais.push(20, Math.floor(troco / 20));
        troco = troco - 20 * Math.floor(troco / 20);

        if (Math.floor(troco / 10) >= i) {
          dezReais.push(10, Math.floor(troco / 10));
          troco = troco - 10 * Math.floor(troco / 10);

          if (Math.floor(troco / 5) >= i) {
            cincoReais.push(5, Math.floor(troco / 5));
            troco = troco - 5 * Math.floor(troco / 5);

            if (Math.floor(troco / 2) >= i) {
              doisReais.push(2, Math.floor(troco / 2));
              troco = troco - 2 * Math.floor(troco / 2);
              if (Math.floor(troco / 1) >= i) {
                umReal.push(1, Math.floor(troco / 1));
                troco = troco - Math.floor(troco / 1);
              }
            }
          }
        }
      }
    }
  }

  cedulaTroco = [
    cinquentaReais,
    vinteReais,
    dezReais,
    cincoReais,
    doisReais,
    umReal,
  ];

  for (let i of cedulaTroco) {
    let indice = cedulaTroco.indexOf(i);
    let qtde = i[1];

    if (qtde == 0) {
      cedulaTroco.splice(indice, 1);
    }
  }

  return cedulaTroco;
}
export function mesesAcimaMediaAnual(temperaturas) {
  /*
    Receba uma lista com as temperaturas médias de cada mês
    e devolva uma lista com os números correspondentes aos meses
    que possuem temperatura superior á média anual.

    Argumentos:
        temperaturas (lista de floats): as temperaturas médias de cada mês no ano, em ordem.

    Retorna:
        lista de inteiros: uma lista com o número correspondente ao mês em que a
        temperatura média foi maior que a temperatura média anual.
    */

  var media = soma(temperaturas) / temperaturas.length;
  var meses = [];

  for (let i = 0; i < temperaturas.length; i++) {
    let valor = temperaturas[i];
    if (valor > media) {
      meses.push(i);
    }
  }
  return meses;
}

export function maiores13(idades, alturas) {
  /*
    Receba as idades e alturas de diversas pessoas, em duas
        listas separadas e de igual comprimento.
        Calcule a media das alturas e retorne as alturas daqueles que
        possuem 'idades' maior que 13 e altura inferior a media da turma.

    Argumentos:
        idades (lista de inteiros): Uma lista de idades;
        alturas (lista de floats): uma lista de alturas;

    Retorna:
        uma lista de alturas dos alunos, conforme o criério definido.
    */

  var idade_altura = [];
  var total = 0;

  if (idades.length >= alturas.length) {
    total = idades.length;
  } else if (alturas.length >= idades.length) {
    total = alturas.length;
  }

  for (let i = 0; i <= total; i++) {
    let valorIdade = idades[i];
    let valorAlturas = alturas[i];

    if (valorIdade) {
      idade_altura.push(valorIdade);
    }
    if (valorAlturas) {
      idade_altura.push(valorAlturas);
    }
  }

  var media = soma(alturas) / alturas.length;

  var idade_altura_Separados = [];
  var listaFinal = [];

  for (let i = 0; i < idade_altura.length; i += 2)
    idade_altura_Separados.push(idade_altura.slice(i, i + 2));

  for (let i = 0; i < idade_altura_Separados.length; i++) {
    let valor = idade_altura_Separados[i];
    if (valor[0] > 13) {
      if (valor[1] < media) {
        listaFinal.push(valor[1]);
      }
    }
  }

  return listaFinal;
}

export function testaPrimo(numero) {
  /*
    Verifique se o valor informado é primo.
    Um número primo é aquele que é divisível apenas por ele mesmo e por 1.

    Argumento:
        numero (int): um número inteiro.

    Retorna:
        bool: true ou false, se o valor e ou não primo.
    */

  for (let i = 2; i < numero; i++) {
    if (numero % i == 0) {
      return false;
    }
  }

  if ((numero == 0) | (numero == 1)) {
    return false;
  } else {
    return true;
  }
}

export function listaDePrimos(inicio, fim) {
  /*
    Retorne uma lista de primos entre os valores informados, incluindo
    os limites.

    Argumentos:
        inicio (int): limite inferior;
        fim (int): limite superior;

    Retorna:
        lista de inteiros, os primos dentro do intervalo especificado.
    */

  var naoPrimos = [];
  var primos = [];

  for (let n = inicio; n <= fim; n++) {
    for (let i = 2; i < n; i++) {
      if (n % i == 0) {
        naoPrimos.push(n);
        break;
      }
    }
  }

  for (let i = inicio; i <= fim; i++) {
    if ((i == 0) | (i == 1)) {
      continue;
    } else {
      primos.push(i);
    }
  }

  // var primosReal = []

  // for (let x of primos) {
  //     primosReal.push(x)
  //     for (let i of naoPrimos) {
  //         if (i == x) {
  //             primosReal.push(x)
  //         }
  //     }
  // }

  // console.log(primosReal)

  primos = primos.filter(function (el) {
    return !naoPrimos.includes(el);
  });

  return primos;
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

  for (let i = 0; i < nacci.length; i++) {
    if (i == n) {
      // return nacci.slice(0,i)
      var fibo = nacci.slice(0, i);
    }
  }
  return fibo;
}

export function altera_salarios(salarios) {
  /*
    Calcule o aumento de salário de acordo com a seguinte tabela:
    - até 1 SM(inclusive): aumento de 20%
    - de 1 até 2 SM(inclusive): aumento de 15%
    - de 2 até 5 SM(inclusive): aumento de 10%
    - acima de 5 SM: aumento de 5%
    Salário mínimo para referência: R$ 724,00

    Argumento:
        salarios (lista de floats): os salários originais.

    Retorna:
        uma lista de elementos float, correspondendo aos salários corrigidos.
    */

  var aumentaSalarios = [];

  for (let salario of salarios) {
    var salMin = 724;
    if (salario <= salMin) {
      aumentaSalarios.push(salario + salario * 0.2);
    } else if (salario <= salMin * 2) {
      aumentaSalarios.push(salario + salario * 0.15);
    } else if (salario <= salMin * 5) {
      aumentaSalarios.push(salario + salario * 0.1);
    } else if (salario > salMin * 5) {
      aumentaSalarios.push(salario + salario * 0.05);
    }
  }

  return aumentaSalarios;
}
