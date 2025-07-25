# Tagged template literal

Desse termo, o trecho "_template literal_" já é bem conhecido: se trata de uma _string_ declarada com crase dupla, que permite interpolação de valores, como no exemplo abaixo:
```
const somaString = `2 + 2 = ${2+2}`;     // "2 + 2 = 4"
```
Tudo que está entre as crases é computado e o resultado retornado é uma _string_. Nenhum mistério até então.

_Tagged template literals_ são bem parecidos com isso, pois têm quase a mesma sintaxe, mas podem retornar valores que não são _strings_. São caracterizados pela seguinte anatomia: _` função`` `_ (função seguida de crases duplas). Aqui está um exemplo de uso nativo dessa funcionalidade (que, no caso, retorna uma _string_):

```
const rawString = String.raw`texto \n sem \n quebra \n de \n linha`;

rawString;      // "texto \\n sem \\n quebra \\n de \\n linha"
                // Os caracteres escapados realmente ficam presentes na string final
                // e não quebram a linha como estamos acostumados


const comemoracao = "Irráaa";
const rawStringDois = String.raw`${comemoracao} \o/`;

rawStringDois;  // "Irráaa \\o/"
```

` String.raw`` ` retorna a mesma _string_ que recebeu, porém com o texto "puro" (por isso o nome "raw"), ou seja, sem os caracteres especiais, como "\n" ou "\o" do exemplo acima. Para que isso seja possível, é escapada a própria contrabarra "\\\\" na _string_ resultante.

## O "tagged" da relação

"Tagged" pode ser traduzido como "etiquetado" ou "identificado", e quando falamos sobre um identificador em javascript, falamos sobre uma referência para acessar valores previamente salvos e/ou declarados, como o nome de uma variável, por exemplo. Assim, _tagged template literal_ pode ser entendido como um _template literal_ precedido por um identificador, que, por sua vez, deve se referenciar a uma função preexistente.

No exemplo dado, `raw` é o nome de uma função e tudo que está entre as crases subsequentes passa a ser o(s) argumento(s) passado(s) para essa função. Ou seja, o uso de _tagged template literal_, como em ` String.raw`` ` no exemplo acima, é uma chamada de função - a qual passa a receber a nomenclatura _tag function_.

Logo de cara, pode parecer contraintuitivo pensar que _tag functions_ se tratam de funções sem sintaxes especiais e mirabolantes, mas realmente não passam disso. Elas são funções simples e é possível criá-las de forma personalizada para que atendam ao que for necessário em um projeto.

## Anatomia

Uma _tag function_ 

// Explicar anatomia da tag function

// Exemplos

// Quando deve ser usada

## Curiosidades

- `String.raw` é o único _tagged template literal_ nativo do javascript, mas há propostas de incluir outros;
- Aqui vimos o uso do termo "identificador", mas também é comum usarmos o termo "token", que tem o mesmo significado na linguagem.

## A prática leva à perfeição

1. "Bom dia! Depois podemos marcar uma call com o cliente pra fechar o briefing do job e aprovar o budget?" - Se você entendeu alguma coisa desse trecho de conversa, te dou meus parabéns! Algumas dessas palavras fazem parte do vocabulário utilizado pelos "faria limers", os típicos paulistanos que trabalham em escritórios. Para facilitar a compreensão desse idioma paralelo, crie uma _tag function_ em que, ao utilizar seu respectivo _tagged template literal_, as palavras em inglês passadas com _dolar brace_ `${}` recebam uma breve explicação ou tradução entre parênteses logo após aparecerem no texto. Exemplo:
    ```
    exercicioUm`posso fazer uma ${'call'}?`;  // 'posso fazer uma call (chamada)?'
    ```
    Para completar este exercício, leia a documentação da função `getTraducoes` e do objeto `vocabulario`, presentes em [controller.js](./controller.js), e os utilize. [Link exercício (linha 17)](./sandbox.js)

2. criação de button com css

    2.1. lançar exceções de "prop não existe"
