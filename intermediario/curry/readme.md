# Curry

Não, eu não estou falando sobre aquele tempero nem sobre o prato indiano.
Em programação, curry (ou _currying_) é uma técnica de aplicação parcial de funções. É uma técnica útil para evitar que em chamadas constantes de função passemos as mesmas varíaveis todas as vezes.

Uma das dúvidas que podem vir a surgir a partir daqui é: "a gente apenas chama ou invoca as funções, não é? De onde surgiu isso de 'aplicar' funções?".

## Aplicação de função

Por baixo dos panos, funções são apenas objetos que possuem métodos. Desses métodos, aqui veremos dois com um pouco de profundidade: `apply` e `call`, que são utilizados para chamar uma função de forma indireta como se fosse um método de um objeto. O primeiro argumento a ser passado em ambos é o objeto que servirá de contexto durante a execução da função (_this_). O segundo argumento de `apply` é um array com os argumentos que serão passados para a função sendo aplicada; já `call` recebe os argumentos sem a necessidade de estarem em um array. No código a seguir, os comportamentos para as três chamadas da função produzem o mesmo resultado:

```
function soma(arg1, arg2) {
    return arg1 + arg2;
}

soma(1, 2);                 // 3
soma.apply(null, [1, 2]);   // 3
soma.call(null, 1, 2);      // 3
```

Quando se utiliza o contexto (_this_) numa função, `apply` e `call` podem se mostrar mais úteis.

```
function somaX(num) {
    return this.x + num;
}

somaX(2);                   // NaN, pois this é o objeto global e this.x é
                            // undefined por padrão
somaX.apply({x: 1}, [2]);   // 3
somaX.call({x: 4}, 2);      // 6
```

## Aplicação parcial de funções

Este termo refere-se ao ato de vincular argumentos a uma função para que em suas próximas aplicações um ou mais argumentos sejam omitidos. Ou seja, tais argumentos ainda serão passados para a função parcial, mas não de forma direta ao aplicá-la. Para isso, cria-se uma _closure_ cujo escopo léxico contenha os argumentos que serão vinculados à função parcial. Aqui está um exemplo de como isso pode ser feito usando a função `soma` declarada mais acima:

```
function criaFuncaoParcial(fn, ...argsExternos) {
    return function(...argsInternos) {
        return fn.apply(this, [...argsExternos, ...argsInternos]);
    }
}

const somaCinco = criaFuncaoParcial(soma, 5);

somaCinco(95);                  // 100
criaFuncaoParcial(soma, 9)(21); // 30

const logCurry = criaFuncaoParcial(
    console.log,
    'Curry:'
);

logCurry('irrá');  // 'Curry: irrá'
```

Nesse exemplo, foi criada a função de uso geral para criar funções parciais `criaFuncaoParcial`. Ela retorna uma _closure_ que, por sua vez, aplica a função `fn` e passa como argumento a combinação dos parâmetros externos e internos que recebeu. É disso que se trata a técnica _curry_.

Embora essa função possa facilmente existir numa pasta _utils_ em algum projeto e seja algo legal de construir "na mão", já existe uma função nativa que cumpre esse propósito: `Function.prototype.bind`.

## Function.prototype.bind

A função `bind` pode ser utilizada para dois propósitos:

1. O objetivo principal é vincular uma função a um objeto, para que o contexto (_this_) tenha sempre o valor previamente definido quando a função for executada. Ou seja, ao invocar `bind`, uma nova função é criada, e o primeiro argumento passado nessa invocação se tornará o objeto ao qual a nova função será vinculada. Na prática, toda invocação dessa nova função será como se ela tivesse sido chamada como um método do objeto passado no bind.

```
function incrementaJ(k) { return ++this.j };

const obj = { j: 5 };
const boundIncrementaJ = incrementaJ.bind(obj);

boundIncrementaJ();     // 6

({
    j: 50,
    boundIncrementaJ
})
.boundIncrementaJ();    // 7: boundIncrementaJ está vinculada ao
                        // objeto passado na invocação de bind
```

2. `bind` também pode ser utilizado para criar funções parciais. Todos os argumentos depois do primeiro são armazenados e posteriormente passados também para a função vinculada no momento em que é chamada.

```
function novaSoma(...numeros) {
    return numeros.reduce((acc, curr) => acc + curr, this?.valorInicial || 0); 
}

const somaCinquentaNove = novaSoma.bind(null, 20, 39);
somaCinquentaNove(1);           // 60
somaCinquentaNove(41);          // 100

const somaOitentaECinco = novaSoma.bind({valorInicial: 5}, 15, 65);
somaOitentaECinco(115, 100);    // 300
```


## Curiosidades gerais
- Curry também pode ser chamado de _schönfinkelização_, em homenagem a Moses Schönfinkel, que foi um dos principais matemáticos que desenvolveu a lógica combinatória. A teoria dele consistia em eliminar o uso excessivo de variáveis em cálculos matemáticos;

- Chamar ou invocar uma função (`funcao()`) pode ser lido como "açúcar sintático" (atalho) para aplicar uma função (`funcao.apply()`), pois em linguagens de programação puramente funcionais as funções são descritas como sendo aplicadas, não invocadas/chamadas;

- É possível que você encontre código antigo a respeito de aplicações de função utilizando a palavra reservada _arguments_ ao invés do _rest operator_ como você viu aqui, mas essa prática não é recomendada, pois:
    - _arguments_ possui falta de eficiência e otimizações em relação ao _rest operator_, que foi incluído na linguagem em 2015;
    - Enquanto _arguments_ é apenas array-like, _rest parameter_ é um array, o que facilita os usos de métodos de array como filter, map, etc.

- Ao usar o `bind` em uma função `minhaFuncao`, o nome dela passa a ser `boundMinhaFuncao`, por exemplo.


## A prática leva à perfeição

1. Dada uma função `exercicioUm` que recebe um caractere como parâmetro, ela deverá retornar uma função que recebe uma string como parâmetro por sua vez. O retorno dessa segunda função deve ser a mesma string, porém todos os espaços presentes devem ser substituídos pelo caractere previamente recebido. [Link (linha 8)](./sandbox.js)

2. Dada uma função `exercicioDois` cujos parâmetros são uma função `fn` e parâmetros rest `rest`, retorne uma função `fn2` que faça com que `rest` seja aplicado à função `fn` depois dos parâmetros recebidos por `fn2`. [Link (linha 23)](./sandbox.js)

Teste suas respostas inseridas em `sandbox.js` executando o comando `npm test` em `intermediario/curry`
Valide suas respostas com as respostas presentes em `respostas-exercicios.js`
